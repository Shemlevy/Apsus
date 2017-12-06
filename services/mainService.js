import storageService from './StorageService.js'



var input = 'the big bang'
function query(input) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${input}`)
        .then(res => res.json())
        .then(res => {
            return res.items;
        })
}

const KEY_STORE = 'booksIRead';

function saveBookFeedback(book) {
    var books = getBookFeedbacks();
    books.push(book)
    storageService.store(KEY_STORE, books)
}

function getBookFeedbacks() {
    var books = storageService.load(KEY_STORE) || []; 
    return books;
}

export default {
    query,
    saveBookFeedback,
    getBookFeedbacks
}