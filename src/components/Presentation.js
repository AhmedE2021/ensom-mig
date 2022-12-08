import React from 'react';
import CountUp, { useCountUp } from 'react-countup';


import "./Presentation.css"

export default function Presentation () {

    useCountUp({ ref: 'counter', end: 24, duration: 3 });
    const [loading, setLoading] = React.useState(false);
  
    const onStart = () => {
      setLoading(true);
    };
  
    const onEnd = () => {
      setLoading(false);
    };
  
    const containerProps = {
      'aria-busy': loading,
    };
  

    return(
     
          
        <section id='presentation' className='sec NavSection present'>

   
        <h1 className='infograf1'><span><CountUp end={25} duration="4"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps} />%</span>feel lonely often</h1>
        <h1 className='infograf2'><span><CountUp end={10} duration="4"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps} />%</span>rooted for Tom</h1>
        <h1 className='infograf3'><span><CountUp end={12}   duration="4"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps} />%</span>hurt themselves</h1>
    
     
        
        </section>
  
    )
}