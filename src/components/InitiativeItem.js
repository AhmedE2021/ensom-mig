import parse from "html-react-parser";

export default function InitiativeItem({ initiative }) {

    return (
       <div className="initiative-card">
          <a href={initiative.acf.website} target="_blank" rel="noreferrer">
             <img
                className="initiative-img"
                src={initiative.acf.image}
                alt={initiative.title.rendered}
             />
          </a>
          <div className="initiative-content">
             <p className="initiative-text" id="test" style={{ fontSize: 32 }}>
                {' '}
                {parse(initiative.content.rendered)}
             </p>
             <p className="initiative-description">
                {parse(initiative.acf.Description)}
             </p>
          </div>
       </div>
    )
}





