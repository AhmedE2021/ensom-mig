import SimpleSlider from "./QuotesSlider";
import "./QuotesSection.css"

export default function QuotesSection() {

    return (
        <section className="Quote-section">
       
            <h1 className="Quote-header">Here’s what others said:</h1>
        
          
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
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: true,
                        dots: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    }
                  ]
                }}
            />
       
        </section>
    );
}
