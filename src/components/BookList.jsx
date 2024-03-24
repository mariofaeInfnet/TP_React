export default function BookList({
  books,
  inputValue,
  updateFilterTerm,
  updateSelectedGenre,
  selectedGenre,
  genres,
}) {
  function CardBook({ book }) {
    return (
      <div className="card">
        <h4>{book.title}</h4>
        <p>Autor: {book.author}</p>
        <p>Genero: {book.genre}</p>
        <p>Ano: {book.publication_year}</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      <div>
        <label id="filter">Pesquisar: </label>
        <input
          type="text"
          id="filter"
          value={inputValue}
          onChange={updateFilterTerm}
          placeholder="Digite um titulo ou autor"
          alt="Pesquisar titulo/autor"
        />
        <select value={selectedGenre} onChange={updateSelectedGenre}>
          <option value="">Selecione um gênero</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {books.map((book) => (
        <CardBook book={book} key={book.ISBN} />
      ))}
    </div>
  );
}
