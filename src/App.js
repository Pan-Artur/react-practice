import './App.css';
import { Article } from './components/Article/Article';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import { articlesData } from './data/data';

const isOpen = true;

function App() {
  return (
    <div className="App">
      <h2>Перший рядок</h2>
      <Article/>
      {articlesData.length > 0 && <ArticlesList data={articlesData}/>}
      {/* {isOpen === true && <div>modal</div>} */}
      {isOpen ? <div>modal</div> : <p>modal closed</p>}
    </div>
  );
}

export default App;
