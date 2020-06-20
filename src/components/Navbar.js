//using context in this component. Only require the books in this component not he fns.
import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

//Returning basic JSX from this component at the moment, just a heading and the number of books in the context
const Navbar = () =>{
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    );
}

export default Navbar;