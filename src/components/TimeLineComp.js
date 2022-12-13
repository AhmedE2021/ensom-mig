// https://www.npmjs.com/package/vertical-timeline-forked

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Timeline8() {

  return (

    <VerticalTimeline lineColor={"#FFDBC2"} text-transform={"none"}>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
          Sig følelsen højt til dig selv. Du oplever måske, at det bliver letter
          at acceptere, at du har det på den måde, og det kan samtidig motivere
          dig til at turde sige det videre til andre.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
        Husk dig selv på, at mange oplever det samme som dig, og at det er normalt at
føle ensomhed - uanset hvor i livet, du befinder dig.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
        Selvom det kan virke pinligt eller farligt, så forsøg at fortælle hvordan du har
det til en anden.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
        Opsøg fællesskaber inden for dine egne interesser. Hvad enten du er til gaming
eller ridning, så er der helt sikkert nogle, der deler den samme interesse som
dig.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
        Du kan også søge hjælp og nye fællesskaber gennem initiativerne længere
nede på siden.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white",  color: "black", boxShadow: "none" }}
        iconStyle={{ background: "#FF6B00", color: "#BD91B1" }} 
      >
        <p>
          Sig følelsen højt til dig selv. Du oplever måske, at det bliver letter
          at acceptere, at du har det på den måde, og det kan samtidig motivere
          dig til at turde sige det videre til andre.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}
