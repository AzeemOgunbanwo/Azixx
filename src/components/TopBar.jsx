import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const TopBar = () => {
    return (
        <div className="topbar">
            <ul>
                <li><a href="https://www.youtube.com/channel/UCxWR-EwtTr4CLC9fICUrw5A?feature=gws_kp_artist&feature=gws_kp_artist"><FaYoutube /></a></li>
                <li><a href="https://www.tiktok.com/@itz_azixx"><FaTiktok /></a></li>
                <li><a href="https://www.instagram.com/itz_azixx"><FaInstagram /></a></li>
            </ul>
        </div>
    )
}

export default TopBar;