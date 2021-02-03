import {FaChevronRight } from 'react-icons/fa';
const Trending = () => {
    return ( 
        <section className="trending-sec">
            <div className="trendingFlex">
                <h2>Trending Stories</h2>
                <a href="/">View All <span><FaChevronRight /></span> </a>
            </div>
            <div className="trendingIMGs">
                <div className="trend-div">
                    <img src="assets/img/Yogi.png" alt="" />
                        <h4>The many benefits of
                            taking a healing holiday</h4>
                        <p>‘Helaing holidays’ are on the rise
                            tohelp maximise your health and happines...</p>
                        <a href="/">Read More</a>

                </div>
                <div className="trend-div">
                    <img src="assets/img/Kyoto.png" alt="" />
        
                        <h4>The best Kyoto restaurant
                            to try Japanese food</h4>
                        <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                        to visit...</p>
                        <a href="/">Read More</a>
     
                </div>

                <div className="trend-div">
                    <img src="assets/img/Itza.png" alt="" />
   
                        <h4>Skip Chichen Itza and head
                        to this remote Yucatan</h4>
                        <p>It’s remote and challenging to get,
                        but braving the jungle and exploring
                        these ruins without the...</p>
                        <a href="/">Read More</a>

                </div>

                <div className="trend-div">
                    <img src="assets/img/Surfing.png" alt="" />

                        <h4>Surf’s up at these beginner
                    spots around the world</h4>
                        <p>If learning to surf has in on your to-
                        do list for a while, the good news
                        is: it’s never too late...</p>
                        <a href="/">Read More</a>

                </div>
            </div>
        </section>
     );
}
 
export default Trending;