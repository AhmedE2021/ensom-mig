


import * as React from 'react';

import "./Initiatives.css"

import { useEffect, useState } from "react";
import InitiativeItem from './InitiativeItem';



export default function Initiatives() {

  
  const [initiatives, setInitiatives] = useState([]);
  useEffect(() => {
      async function getData() {
          const response = await fetch("https://quotes-api.talomensomhed.dk/wp-json/wp/v2/initiatives?_embed");
          const data = await response.json();
          setInitiatives(data);
      }
      getData();
  }, []);



    



  return (
    <div className="initiatives-section" id="initiatives" >
<h1 className="initiatives-header" >
    Help and support are always available</h1>
           <div >
     
           {initiatives.map(initiative => (
                    <InitiativeItem key={initiative.id} initiative={initiative} />
                ))}
      </div>
    </div>
  );
}  
