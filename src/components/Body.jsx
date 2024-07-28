import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Service from './Service'
const Body = () => {
    return (
        <div id="divBg" >
            <div className="container">
                <Navbar/>
            </div>
            <Home home="home" />
            <About about="about" />
            <Service service="service" />
            <Portfolio portfolio="portfolio" />
            <Contact contact="contact" />
        </div>
    )
}

export default Body