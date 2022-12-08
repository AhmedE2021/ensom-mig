import parse from "html-react-parser";



export default function PostItem({ post }) {

 
 
 



   
    return (
       
        // <article  className="card" onClick={() => navigate(post.slug)}>
        <article className="slideCard">
        {post.acf.image && <img src={post.acf.image.url} alt={post.title.rendered} /> }
        {post.content && parse(post.content.rendered)}
        <h2 >{parse(post.title.rendered)}</h2>
 
        </article>
        

        
    );
}
