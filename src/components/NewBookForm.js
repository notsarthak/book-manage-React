//In this component we need to use context because we need the function addBook to add new book to the context
//In this component we require the useState hook from the react library as well because we need to locally store in this component what the user types in the input fields 
import React, {useContext,useState} from 'react';
import {BookContext} from '../contexts/BookContext';

//two states in this componenet to store in realtime what user types in the input fields (initial value of both peices of states is empty string) (updating the states in real time with the onChange event handler attached to input fields)
//In the JSX returned by this component we have a form with 2 input fields, one for the author another for the title of the book along with a sumit button
//after submitting the form setting the states of both properties as empty strings to clear out the input fields
const NewBookForm = ()=>{
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type:'ADD_BOOK', book:{title,author}});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="book-title" onChange={(e)=>{setTitle(e.target.value)}} required/>
            <input type="text" value={author} placeholder="author" onChange={(e)=>{setAuthor(e.target.value)}} required/>
            <input type="submit" value="Add Book"/>
        </form>
    );
}

export default NewBookForm;