import { useState } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'DOOM (2020)', body: 'lorem ipsum...', author: 'Jean Paul', id: 1},
        {title: 'Elden Ring', body: 'lorem ipsum...', author: 'Brandon Timber', id: 2},
        {title: 'Escape from Tarkov', body: 'lorem ipsum...', author: 'Nelson Weathers', id: 3}
    ]);

    return ( 
        <div className="Home">
           <Bloglist blogs = {blogs} title = "All Blogs"/>
        </div>
     );
}
 
export default Home;
