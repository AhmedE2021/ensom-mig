import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";


export default function PostItem({ post }) {
    const navigate = useNavigate();
 
 
 



   
    return (
       
        // <article  className="card" onClick={() => navigate(post.slug)}>
        <article className="slideCard"  onClick={() => navigate(post.slug)}>
        {post.acf.image && <img src={post.acf.image.url} alt={post.title.rendered} /> }
    
        <h2 >{parse(post.title.rendered)}</h2>
 
        </article>
        

        
    );
}
