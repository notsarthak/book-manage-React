//Inside here we're gonna cycle through the data and output a single BookDetails component for each book
//Since we need to cycle thru the data we need to consume the context in this component
import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import BookDetails from './BookDetails';

//returning some JSX for each book. But first we are checking if there are any books in the context.If there are any books then only we're cycling thru them, else we're just outputting something else
const BookList = ()=>{
    const {books} = useContext(BookContext);
    return books.length?(
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return (<BookDetails book={book} key={book.id}/>)   //If there are books in context. Returning/outputting single bookdetails component for each book. Need to provide a key since we are cycling thru something and outputting it hence, react expects us to provide a key. We are providing to the bookdetails component the book we're currently cycling thru. 
                })}        
            </ul>
        </div>
    ):(
        <div className="empty">No books to read. Hello free time :)</div>   //if there are no books in the context
    );
}

export default BookList;