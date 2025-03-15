import { ArticleItem } from "../ArticleItem/ArticleItem";

export const ArticlesList = ({data}) => {
  return (
    <ul>
      {data.map((article) => {
        return <ArticleItem key={article.id} test="test" articleInfo={article}/>;
        // return <li key={article.key}>
        //     <h2>{article.title}</h2>
        //     <p>{article.text}</p>
        //     <h3>{article.author}</h3>
        // </li>
      })}
    </ul>
  );
};
