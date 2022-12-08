import parse from "html-react-parser";



export default function PostItem({ post }) {

 
 
 



   
    return (
       
       
        <article>
            <h3>{post.title && parse(post.title.rendered)}</h3>
            {post.content && parse(post.content.rendered)}
        </article>
        

        
    );
}
