import parse from "html-react-parser";

export default function InitiativeItem({ initiative }) {

    return (
       <div className="initiative-card">
         <div className="initiative-card-top">
          <a href={initiative.acf.website} target="_blank" rel="noreferrer">
             <img className="initiative-img"
                
                src={initiative.acf.image.url}
                alt={initiative.title.rendered}
             />
          </a>
          </div>
          <div className="initiative-content">
             <p className="initiative-text" id="test">
                
                {parse(initiative.content.rendered)}
             </p>
             <p className="initiative-description">
                {parse(initiative.acf.description)}
             </p>
          </div>
       </div>
    )
}





