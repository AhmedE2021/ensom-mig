import parse from "html-react-parser";

export default function InitiativeItem({ initiative }) {

    return (

        <article  className="initiative-card">
        <img className="initiative-img" src={initiative.acf.image} alt={initiative.title.rendered} />
        <div className="initiative-content"> 
        <p> {parse(initiative.content.rendered)}</p>
        </div>
        </article>       
  
    );
}





