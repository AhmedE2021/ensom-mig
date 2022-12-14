import SimpleSlider from "./QuotesSlider";
import "./QuotesSection.css"

export default function QuotesSection() {

    return (
       <section className="Quote-section">
          <h1 className="Quote-header">Sammen kan vi bryde tabuet</h1>
          <p className="Quote-explan">
             Du kan gå forrest i kampen for at bryde tabuet omkring ensomhed ved
             at dele dine egne erfaringer med ensomhed eller ved at sende en
             tanke til dem, der føler sig ensomme. Det kan du gøre her på siden
             eller ved at bruge hashtagget <span>#talomensomhed</span> på dit
             foretrukne sociale medie platform. Udvalgte citater vil blive delt
             her på siden, men alle bidrag er lige vigtige. Dit opslag eller din
             story kan være med til at inspirere andre i dit netværk til at
             turde tale åbent om det.
          </p>

          <SimpleSlider
             settings={{
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                responsive: [
                   {
                      breakpoint: 1024,
                      settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                         infinite: true,
                         dots: true,
                      },
                   },
                   {
                      breakpoint: 600,
                      settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2,
                         infinite: true,
                         dots: true,
                      },
                   },
                   {
                      breakpoint: 480,
                      settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: true,
                      },
                   },
                ],
             }}
          />
       </section>
    )
}
