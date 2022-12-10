import parse from "html-react-parser";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function InitiativeItem({ initiative }) {


   
    return (
       
       
        <article>
           <Accordion className='initiative-row'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>  <h3>{parse(initiative.title.rendered)}</h3> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {parse(initiative.content.rendered)}
         
          </Typography>
        </AccordionDetails>
      </Accordion>
        </article>
        

        
    );
}





