import {
    Link
} from 'react-router-dom';
import logo from '../imgs/logo.png';
import BitcoinLogo from './BitcoinLogo';
import React, {
    useState
} from 'react'

const Header = ({
    title
}) => {
    const [isOpen, setOpen] = useState("false");

    const toggleMobNav = () => {
        setOpen(!isOpen);

    };

    return ( <
        header >
        <
        div className = "logo" >
        <
        figure >
        <
        img src = {
            logo
        }
        alt = "Cypto Junkies logo" / >
        <
        BitcoinLogo / >
        <
        figcaption > {
            title
        } < /figcaption>  <
        /figure> <
        /div> <
        nav className = {
            `header-nav ${isOpen ? "" : "open"}`
        }
        onClick = {
            toggleMobNav
        } >
        <
        Link to = "/" > Crypto Index < /Link>  <
        Link to = "/news" > News < /Link>  <
        Link to = "/nft" > NFT < /Link>  { /* <Link to="/defi" data-dev="indev">DeFi</Link>  */ } <
        Link to = "/metrics"
        data - dev = "indev" > Metrics < /Link>  <
        Link to = "/invest"
        data - dev = "indev" > Invest < /Link>  <
        Link to = "/learn"
        data - dev = "indev" > Learn < /Link>  <
        /nav> <
        span className = {
            `toggle-nav ${isOpen ? "" : "open"}`
        }
        onClick = {
            toggleMobNav
        } >
        <
        span > Toggle navigation < /span> <
        /span> <
        /header>
    );
}

export default Header;