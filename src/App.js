//Importing the BookContextProvider in this component to nest components inside it to which the access to the context is to be provided 
import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
