import './HomePage.css'

export const HomePage = () => {
    return (
        <section className='homepage-wrapper'>
            <img className="homepage-slider-img" src="../../src/assets/slider-img.svg" alt="slider-image" />
            <section className='homepage-content'>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
                <p>(Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </section>
        </section>
    )
}
