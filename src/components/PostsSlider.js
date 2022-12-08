
import Slider from "react-slick";




import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function SimpleSlider({ settings }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.pf.ahmedelsaedy.dk/wp-json/wp/v2/posts?_embed&v=999");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section>
            <Slider {...settings}>
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </Slider>
        </section>
    );
}