import NavbarOfWeb from './NavbarOfWeb'
import Footer from './Footer'
import './Footer.css'
import Role from './Role'
import Slideshow from './Slideshow'
import Working from './working'
export default function HomePage(){


    return(
        <div>
        <NavbarOfWeb />
        <Slideshow/>
        <Role/>
        <Working/>
            <div className="footer-pos"><Footer /></div>
        </div>
    )
}