import parse from "html-react-parser";



export default function QuoteItem({ post }) {

    return (
        <article className="Quote-content">
            <p>{parse(post.content.rendered)}</p>
        </article>  
    );
}
