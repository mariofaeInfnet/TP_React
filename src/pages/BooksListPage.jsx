import { useState, useEffect } from 'react';
import BookList from '../components/BookList';

export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  
  const [selectedGenre, setSelectedGenre] = useState('');

  const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    fetchBooks();
  }, []);
  
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json');
      if (!response.ok) {
        throw new Error('Failed');
      }
      const data = await response.json();

      const booksArray = Object.values(data);

      setBooks(booksArray);
      setGenres(booksArray.map(book => book.genre))
    } catch (error) {
    }
  };
  
  const [filterTerm, setFilterTerm] = useState('');
  
  const updateFilterTerm = (event) => {
    const { value } = event.target;
    setFilterTerm(value);
  }
  
  const getFilteredList = () => {
    let filteredList = [...books];
    if (selectedGenre !== '') {
      filteredList = filteredList.filter((book) => {
        return book.genre === selectedGenre;
      });
    }
    if (filterTerm)
      filteredList = filteredList.filter((book) => {
        return  book.title.toLowerCase().includes(filterTerm.toLowerCase()) || book.author.toLowerCase().includes(filterTerm.toLowerCase());
      })
    return filteredList;
  }

  console.log(selectedGenre)
  
  const updateSelectedGenre = (event) => {
    const { value } = event.target;
    setSelectedGenre(value);
  }
  
  return (
    <div>
      <h2>Listagem de Livros</h2>
      <BookList
        books={getFilteredList()}
        inputValue={filterTerm}
        updateFilterTerm={updateFilterTerm}
        updateSelectedGenre={updateSelectedGenre}
        seletedGenre={selectedGenre}
        genres={genres}
        />
    </div>
  )
}