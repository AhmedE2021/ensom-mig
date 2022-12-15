import parse from "html-react-parser";



export default function QuoteItem({ post }) {

    return (
        <article className="Quote-content">
            <p className="Quote-text">{parse(post.content.rendered)}</p>
        </article>  
    );
}
