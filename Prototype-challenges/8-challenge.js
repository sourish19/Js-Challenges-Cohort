function Library(){
    this.book = []
}

Library.prototype.addBook = function(book){
    this.book.push(book)
}

Library.prototype.findBook = function(title){
    if(this.book.find(value => value == title)){
        return "Book found"
    }
    else{
        return "Book not found"
    }
}


const library = new Library()
const book = "Harry Potter"
const searchTitle = 1983

library.addBook(book)

console.log(library);
console.log(library.findBook(searchTitle));

