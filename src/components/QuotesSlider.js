
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";

export default function SimpleSlider({ settings }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://quotes-api.talomensomhed.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section>
            <Slider {...settings}>
                {posts.map(post => (
                    <QuoteItem key={post.id} post={post} />
                ))}
            </Slider>
        </section>
    );
}