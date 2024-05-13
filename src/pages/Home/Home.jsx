import Banner from "./Banner";
import RecentQueries from "./RecentQueries";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner/>
            <RecentQueries/>
        </div>
    );
};

export default Home;