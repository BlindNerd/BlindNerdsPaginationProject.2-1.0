           // Pagination Project
// create Variable
const students = document.getElementsByClassName('student-item');
const numberOfStudents = students.length;
   // determine how many pages for this student list
const pageCount = Math.ceil(numberOfStudents / 10);
const studentList = document.getElementsByClassName('student-list')
const studentsPerPage = 10;
const searchButton = document.getElementById('searchButton');
const searchName = document.getElementById('searchName').value;
const searchEmail = document.getElementById('searchEmail').value;
const ul = document.createElement('ul');
    ul.className = 'pagination';
    document.body.appendChild(ul);
let pages = [];


// first hide all students on the page
// Then loop through all students in our student list argument
// if student should be on this page number
// show the student
function showPage (pageNumber, students) {
  for (let i = 0; i <= students.length; i++) {
    //students[i].style.display = 'none';
    if (i < pageNumber * studentsPerPage && i > (pageNumber - 1) * studentsPerPage - 1) {
      students[i].style.display = 'block';
    }
  }
}
showPage(2, students);


// create a page link section
// “for” every page
// add a page link to the page link section
// remove the old page link section from the site
// append our new page link section to the site
// define what happens when you click a link
// Use the showPage function to display the page for the link clicked
// mark that link as “active”

function appendPageLinks() {
  for ( let i = 1; i < pageCount + 1; i++ ) {
      let paginationHTML = '<li><a href = "#">' + i +'</a></li>';
        ul.innerHTML = paginationHTML;
          console.log(ul.innerHTML);
    }
};
appendPageLinks();

ul.addEventListener( 'click', (event) => {
   event.target.tagName = ('LI');

});



// Obtain the value of the search input
// remove the previous page link section
// Loop over the student list, and for each student…
// ...obtain the student’s name…
// ...and the student’s email…
// ...if the search value is found inside either email or name…
// ...add this student to list of “matched” student
// If there’s no “matched” students…
// ...display a “no student’s found” message
// If over ten students were found…
// ...call appendPageLinks with the matched students
// Call showPage to show first ten students of matched list
// function searchList() {
//
//          }

searchButton.addEventListener('click', () => {

});
