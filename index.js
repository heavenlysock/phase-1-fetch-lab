function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });

}
  // console.log(books);
  // const allPages = document.getElementsByTagName('books.length')
  function renderBooks(bookPages) {
    const main2 = document.querySelector('main');
    bookPages.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.numberOfPages;
      main2.appendChild(h2);
    })






}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


