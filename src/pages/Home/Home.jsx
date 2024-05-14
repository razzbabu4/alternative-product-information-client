import CustomerReview from "./CustomerReview";
import Team from "./Team";
import Banner from "./Banner";
import RecentQueries from "./RecentQueries";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner/>
            <RecentQueries/>
            <CustomerReview/>
            <Team/>
        </div>
    );
};

export default Home;