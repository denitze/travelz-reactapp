import Button from "./Button"

const About = () => {
    return ( 
        <section className="about-sec">
        <img src="assets/img/About.png" alt=""/>
        <article>
            <h2>A new way to explore the world</h2>
            <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
            trip, but now, they can also let Lonely Planet Experiences lead the way</p>
            <Button content="Download" />
        </article>

    </section>
     );
}
 
export default About;