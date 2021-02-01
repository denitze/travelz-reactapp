const Hero = () => {
    return ( 
        <section class="hero-sec">
            <h1>Explore and Travel</h1>
            <p>Holiday finder</p>
            <div className="line"></div>
                <form class="select-options">
                    <select id="travel" name="travel">
                        <option value="location">Location</option>
                    </select>
                    <select name="" id="">
                        <option value="activity">Activity</option>
                    </select>
                    <select name="" id="">
                        <option value="grade">Grade</option>
                    </select>
                    <select name="" id="">
                        <option value="Date">Date</option>
                    </select>
                </form>
                <button>Explore</button>

        </section>
     );
}
 
export default Hero;