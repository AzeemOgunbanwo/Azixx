import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const TopBar = () => {
    return (
        <div className="topbar">
            <ul>
                <li><a href="https://www.youtube.com/channel/UCxWR-EwtTr4CLC9fICUrw5A?feature=gws_kp_artist&feature=gws_kp_artist" target="_blank"
                            rel="noopener noreferrer"><FaYoutube /></a></li>
                <li><a href="https://www.tiktok.com/@itz_azixx" target="_blank"
                            rel="noopener noreferrer"><FaTiktok /></a></li>
                <li><a href="https://www.instagram.com/itz_azixx" target="_blank"
                            rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.facebook.com/itzazixx" target="_blank"
                            rel="noopener noreferrer"><FaFacebookF /></a></li>
                <li><a href="https://x.com/itz_azixx" target="_blank"
                            rel="noopener noreferrer"><BsTwitterX /></a></li>
            </ul>
        </div>
    )
}

export default TopBar;