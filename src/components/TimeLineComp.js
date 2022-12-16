// https://www.npmjs.com/package/vertical-timeline-forked
import Person2Icon from '@mui/icons-material/Person2';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css"


export default function Timeline8() {

  return (
     <div>
        {/* blue section */}
        <section id="TimelineComp">
           <h1 id="youCanHeader">Sådan kan du:</h1>
           <div className="timeline-blue-section">
              <h1 className="timeline-blue-section-header">
                 Hjælpe
                 <br />
                 dig selv
              </h1>
              <p className="timeline-blue-section-text">
                 Det kan være svært at finde modet og initiativet til at gøre
                 noget ved problemet, når man føler sig ensom. Her følger en
                 række råd til, hvad du selv kan gøre, hvis du oplever ensomhed.
              </p>
           </div>
           <VerticalTimeline lineColor={'#92BFDD'} text-transform={'none'}>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#3488C1' }}
                 date=""
                 position="right"
              >
                 <p className="timeline-Card">
                    Sig følelsen højt til dig selv. Du oplever måske, at det
                    bliver letter at acceptere, at du har det på den måde, og
                    det kan samtidig motivere dig til at turde sige det videre
                    til andre.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
              >
                 <p className="timeline-Card">
                    Husk dig selv på, at mange oplever det samme som dig, og at
                    det er normalt at føle ensomhed - uanset hvor i livet, du
                    befinder dig.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
                 position="right"
              >
                 <p className="timeline-Card">
                    Selvom det kan virke pinligt eller farligt, så forsøg at
                    fortælle hvordan du har det til en anden.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
              >
                 <p className="timeline-Card">
                    Opsøg fællesskaber inden for dine egne interesser. Hvad
                    enten du er til gaming eller ridning, så er der helt sikkert
                    nogle, der deler den samme interesse som dig.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
                 position="right"
              >
                 <p className="timeline-Card">
                    Du kan også søge hjælp og nye fællesskaber gennem
                    initiativerne længere nede på siden.
                 </p>
              </VerticalTimelineElement>
           </VerticalTimeline>
        </section>

        {/* white section */}

        <section>
           <div className="timeline-white-section">
              <h1 className="timeline-white-section-header">
                 Hjælpe
                 <br />
                 andre
              </h1>
              <p className="timeline-white-section-text">
                 Der er flere måder, hvorpå du kan hjælpe dine nærmeste, hvis de
                 oplever ensomhed. Hvis ensomhed ikke er noget, som dig eller
                 dine nærmeste har oplevet, kan du stadig gøre en forskel.
              </p>
           </div>
           <VerticalTimeline lineColor={'#92BFDD'} text-transform={'none'}>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#3488C1' }}
                 icon={<Person2Icon />}
                 date=""
              >
                 <p className="timeline-Card">
                    Tal om ensomhed med dem, du kender. Det er en naturlig del
                    af livet, og ingen bør skamme sig over at føle sig ensom.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
                 position="left"
              >
                 <p className="timeline-Card">
                    Gør dig umage med at kigge folk i øjnene når du hilser på
                    dem på arbejdspladsen, på studiet, til fritidsaktiviteter og
                    til arrangementer.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
              >
                 <p className="timeline-Card">
                    Vær’ åben overfor nye relationer og tag initiativ til nye
                    venskaber.
                 </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{
                    background: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                 }}
                 iconStyle={{ background: '#3488C1', color: '#BD91B1' }}
                 position="left"
              >
                 <p className="timeline-Card">
                    Bliv frivillig i et af de lokale initiativer mod ensomhed i
                    dit nærområde. Du kan være med til at gøre en forskel for
                    mennesker, der savner fællesskaber
                 </p>
              </VerticalTimelineElement>
           </VerticalTimeline>
        </section>
     </div>
  )
}
