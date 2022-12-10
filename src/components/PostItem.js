import parse from "html-react-parser";



export default function PostItem({ post }) {


   
    return (
       
       
        <article className="post-content">
            <h3>{parse(post.title.rendered)}</h3>
            {parse(post.content.rendered)}
        </article>
        

        
    );
}
