import { useParams } from 'react-router-dom';
import { Container, Image, Button } from 'react-bootstrap';
import useNewsData from '../hooks/useNewsData';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
    const location = useLocation();
    const { article } = location.state || {};
  
    if (!article) {
      return <div className="text-center mt-5">Article not found.</div>;
    }

  return (
    <Container className="mt-4 p-4 border border-primary rounded">
      <h1>{article.title}</h1>
      {article.image && <Image src={article.image} fluid className="my-3"/>}
      <p>{article.content || "Full content is not available. Visit the article's website for more details."}</p>
      <p><strong>Published At:</strong> {article.publishedAt}</p>
      <p><strong>Source Name:</strong> {article.source.name}</p>
      <p><strong>Source URL:</strong> <a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.url}</a></p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className='p-1 d-block mb-3'>Read more</a>
      <div className="mt-auto text-center">
        <Button as={Link} to="/" variant="primary">Go Back</Button>
      </div>
    </Container>
  );
};

export default ArticleDetail;
