function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.getIsRead = function () {
    return !isRead ? 'not read yet' : 'read book';
  }

  this.info = function() {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + this.getIsRead();
  }
}

const book1 = new Book('The Hotbbit', 'J.R.R. Tolkien', 295, false);

console.log(book1.info());