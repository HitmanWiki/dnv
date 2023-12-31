import {
    Link
} from "react-router-dom";
import BitcoinLogo from "./BitcoinLogo";
import TwitterIcon from "../imgs/twitter.png";
import TelegramIcon from "../imgs/telegram.png";
import FacebookIcon from "../imgs/facebook.png";

const Footer = ({
    title
}) => {
    return ( <
        footer >
        <
        div className = "footer-container" >
        <
        div className = "site-info" >
        <
        aside >
        <
        h4 > Site Information < /h4> <
        div className = "site-info-links" >
        <
        a href = "" > About / Contact Us < /a> <
        a href = "" > Contributors < /a> <
        /div> <
        div className = "site-info-links" >
        <
        a href = "" > Get our free newsletter < /a> <
        a href = "" > Privacy Policy < /a> <
        /div> <
        div className = "site-info-links" >
        <
        a href = "" > Site Map < /a> <
        a href = "" > Want to Become a Guest Blogger ? < /a> <
        /div> <
        /aside> <
        /div> <
        div className = "about-us" >

        <
        div className = "footer-logo" >
        <
        figure >
        <
        BitcoinLogo / >
        <
        figcaption > {
            title
        } < /figcaption>  <
        /figure> <
        /div> <
        div className = "about-content" >
        <
        h4 > About US < /h4> <
        p > CryptoJunkies is powered by people with a passion
        for blockchain and cryptocurencies.Contact us
        if you interested to contribue. < /p> <
        /div>   <
        div className = "follow-us" >
        <
        h4 > Follow Us < /h4> <
        div className = "follow-us links" >
        <
        a href = "https://twitter.com/CryptoJ58590975" >
        <
        img src = {
            TwitterIcon
        }
        />      <
        /a>  <
        a href = "https://t.me/CryptoJunkie5" >
        <
        img src = {
            TelegramIcon
        } > < /img>          <
        /a>       <
        a href >
        <
        img src = {
            FacebookIcon
        } > < /img>          <
        /a>         <
        /div> <
        /div>

        <
        /div> <
        div className = "footer" >
        <
        div className = "copy" >
        <
        span > & #169; 2023 Defi Navigator </span>

                        <span>| Developed by DNV Token</span> 

                    </div>

                    <div className= "footer-links" >
        <
        nav className = {
            `footer-nav`
        } >
        <
        Link to = "/" > Crypto Index < /Link>  <
        Link to = "/news" > News < /Link>  <
        Link to = "/nft" > NFT < /Link>  { /* <Link to="/defi" data-dev="indev">DeFi</Link>  */ } <
        Link to = "/metrics"
        data - dev = "indev" > Metrics < /Link>  <
        Link to = "/invest"
        data - dev = "indev" > Invest < /Link>  { /* <Link to="/learn" data-dev="indev">Learn</Link>  */ } <
        /nav> <
        /div>

        <
        /div> <
        /div>

        <
        /footer>
    );
}

export default Footer;