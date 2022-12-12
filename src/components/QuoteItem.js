import parse from "html-react-parser";



export default function QuoteItem({ post }) {


   
    return (
       
       
        <article className="Quote-content">
            <h3>{parse(post.title.rendered)}</h3>
            {parse(post.content.rendered)}
        </article>
        

        
    );
}
