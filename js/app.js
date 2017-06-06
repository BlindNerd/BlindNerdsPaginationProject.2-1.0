
                  // creating variable


const students = $('.student-item');
const numberOfStudents = $('.student-item').length;
const studentsPerPage = 10;
let pageNumber = 0;
const searchHTML = '<div class = "student-search"><input id = "search" class = "student-search" type = "search" placeholder = "Search Students"><button id = "searchButton" class = "student-search">Search</button></div>';
const searchButton = $('#searchButton');
const ul = $('.student-list');
const noResults = '<h1>No Students Found</h1>'
let studentName = $('h3');
let studentEmail = $('.email');

  $('h2').after(searchHTML);  // adding the search HTML to the page



function showPage(pageNumber, students) {  // creating the showPage function and passing in pageNumber and student list
   $(students).hide();    // first hide all students on the page

    for (let i = 0; i < numberOfStudents; i++ ) {  // Then loop through all students in our student list
      if ( i < pageNumber * studentsPerPage && i > (pageNumber - 1) * studentsPerPage - 1  ) { // if student should be on this page number
          $(students[i]).show(333);   // show the student page over thrid a second.
      }
  }
}
        // creating pagination
function addLinks (students) {
  let numberOfPages = Math.ceil(students.length / 10);  // determine how many pages for this student list
  let pagination = '<div class = "pagination">'; // add div for links maiking it a class of pagination

  pagination += '<ul>'; // add to div

    for (let i = 1; i <= numberOfPages; i++) { // loop through all pages
      pagination += '<li><a href = "#">' + i + '</a></li>'; //creating page links and adding them to the div
    }

  pagination += '</ul></div>'; // add the rest of the HTML
  $(ul).after(pagination); // add it to the dom


  $('a').click( function (event){
      pageNumber = event.target.text;
    $('.pagination li a').removeClass('active'); // change classes when clicked
    $(this).addClass('active'); // add active to your clicked item
      showPage(pageNumber, students); // call the show page function to show the right students on the page
});
}

                      // Search jquery function
    $('#searchButton').on('click', function() {  // grab the value as the user enters info
            $('.pagination').hide(); // hide page links
            let matchedStudents = []; // make an empty array to hold the matched students
            let search = $('#search').val().toLowerCase(); // grab the value of the search box an make it lower case

        for ( i = 0; i < numberOfStudents; i++ ) {
            studentName = studentName[i].textContent; // loop through stduents Name
            studentEmail = studentEmail[i].textContent;

          if ( studentName == search || studentEmail == search ) { // results of search
            matchedStudents.push(students[i]);
        }
      }

            if ( matchedStudents.length === 0) {  // if no matches found
              $(students).hide();
              $('.student-list').after(noResults);  // show no results section

            }else if ( matchedStudents.length < 10 ) {  // if matched students length is more than 10
                showPage(1, matchedStudents); // call showPage function passing matched students

                }else {
                  showPage(1, matchedStudents); // call pagination functions on results
                  addLinks(matchedStudents);
                }

});
      addLinks(students);
      showPage(1, students); // call first page when the page loads
      $('.pagination li a:first').addClass('active'); // when the page loads add active to the 1st page
