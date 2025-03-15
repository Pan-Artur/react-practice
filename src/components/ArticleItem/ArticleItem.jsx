export const ArticleItem = ({articleInfo}) => {
    return <li key={articleInfo.key}>
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.text}</p>
        <h3>{articleInfo.author}</h3>
    </li>
};