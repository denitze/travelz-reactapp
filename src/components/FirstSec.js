import Button from "./Button"

const FirstSec = () => {
    return ( 
        <section className="first-sec">
            <img src="assets/img/firstSec.png" alt=""/>
            <article>
                <h2>A new way to explore the world</h2>
                <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                <Button content="Learn More" />
            </article>

        </section>
     );
}
 
export default FirstSec;