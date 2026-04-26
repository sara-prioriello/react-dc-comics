import AppFooter from '../../img/footer-bg.jpg'
import FooterLogo from '../../img/dc-logo-bg.png'
import FBLogo from '../../img/footer-facebook.png'
import TWLogo from '../../img/footer-twitter.png'
import YTLogo from '../../img/footer-youtube.png'
import PinLogo from '../../img/footer-pinterest.png'
import PerLogo from '../../img/footer-periscope.png'
export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className="row">
                    <div className='col-6'>
                        <ul className=''>
                            <h3 className='listTitle'>DC COMICS</h3>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                        <ul>
                            <h3 className='listTitle'>SHOP</h3>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className=''>
                            <h3 className='listTitle'>DC</h3>
                            <li>Terms of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choise</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-6">

                        <ul className='col'>
                            <h3 className='listTitle'>SITES</h3>
                            <li>DC</li>
                            <li>MSD Magazine</li>
                            <li>DC Kids</li>
                            <li>Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <img src={FooterLogo} alt="" />
                    </div>



                </div>
            </div>

            <div className="section2">

                <div className='col'>
                    <button>SIGN-UP NOW!</button>

                </div>
                <div className='col'>
                    <div>FOLLOW US</div>
                    <a href=""><img src={FBLogo} alt="" /></a>
                    <a href=""><img src={TWLogo} alt="" /></a>
                    <a href=""><img src={YTLogo} alt="" /></a>
                    <a href=""><img src={PinLogo} alt="" /></a>
                    <a href=""><img src={PerLogo} alt="" /></a>
                </div>

            </div>
        </footer>)
}