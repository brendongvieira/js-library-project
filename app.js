// Get an input
// If yes, show available categories and which one would they like to choose.
//If no, show all books in ascending order by the number of pages.

const books = require("./database");
const readline = require("readline-sync");

const firstInput = readline.question("Would you like to search a book? Y/N");

if (firstInput.toLocaleUpperCase() === "Y") {
  console.log("These are the available categories:");
  console.log("Fantasy", "/ Romance", "/ Horror");

  const categoryInput = readline.question("Choose a category:");

  const getReturn = books.filter((book) => book.category === categoryInput);
  console.table(getReturn);
} else {
  const orderedBooks = books.sort((a, b) => a.pages - b.pages);
  console.log("These are all the available books:");

  console.table(orderedBooks);
}
