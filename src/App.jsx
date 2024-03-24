import './App.css';
import BooksListPage from './pages/BooksListPage';
import Menu from './components/Menu';

export default function App() {
  return (
    <div>
      <Menu />
      <header>
        <h1>Loja de Livros</h1>
      </header>
      <main>
        <BooksListPage />
      </main>
    </div>
  )
}