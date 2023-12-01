export const Books = ({ book }) => {
  return (
    <div className="App">
      <div className="books">
        <div className="book">
          <h3>Book: {book.url.slice(-1)}</h3>
          <h2>{book.name}</h2>

          <div className="details">
            <p>👨: Author/Authors {book.authors}</p>
            <p>📖: Number of pages {book.numberOfPages}</p>
            <p>🏘️: Book Country {book.country}</p>
            <p>⏰: Release date {book.released.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
