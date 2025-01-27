class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type;
    }
    fix(){
        this.state = this.state * 1.5;
    }

    set state(state){
        if (state < 0) {
            this._state = 0;
        }
        if(state > 100) {
            this._state = 100;
        }
        else {
            this._state = state;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }

}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let index = this.books.findIndex(book => book[type] === value);
        if (index >= 0) {
            return this.books[index];
        } else {
            return null;
        }
    }

    giveBookByName(bookName){
        let index = this.books.findIndex(book => book.name === bookName);
        if (index >= 0) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}