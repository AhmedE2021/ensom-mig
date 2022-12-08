import SimpleSlider from "./PostsSlider";


export default function PostsSection() {

    return (
        <section className="page" id="work">
       
            <h1>Here’s what others said:</h1>
        
          
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
