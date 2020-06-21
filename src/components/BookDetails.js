//we're using the context in this component because we want that whenever the book being returned by this component is clicked that book gets deleted. So we want the removeBook function provided by the context provider in this component
import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

//destructuring the props object recieved in this component from the BookList component to get the book currently being cycled thru
const BookDetails = ({book})=>{
    const {removeBook} = useContext(BookContext);
    //we're retuning the JSX in this component inside <li> tags because the JSX we return from here will be rendered inside <ul> tags in BokkList component. So in the <li> tags we have 2 div tags for title of the book and the author.
    //attached an onClick event Handler to the li tag so that when it is clicked (book is clicked) the removeBook fn gets called with that book's id and removes the book from the context. the removeBook fn is in another fn beacuse it takes in an arg and it would automatically get called without clicking if we put it as it is with the id of the book  
    return(
        <li onClick={()=>{removeBook(book.id)}}>
            <div className="title"> 
                {book.title}
            </div>
            <div className="author">
                {book.author}
            </div>
        </li>
    );
}

export default BookDetails;
