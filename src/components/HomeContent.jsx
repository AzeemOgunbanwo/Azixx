import Azixx from '../assets/azixx.webp'
import AzixxSmall from '../assets/azixx-small.webp'
import {HashLink as Link} from 'react-router-hash-link'

const HomeContent = () => {
    return (
        <div className="homecontent">
            <picture>
            <source srcSet={AzixxSmall} media="(max-width: 1000px)"/>
                <img src={Azixx} alt="Azixx Image" />
            </picture>
            <h1 id="small"><Link smooth to="#music"> Explore the World of Azixx</Link></h1>
        </div>
    )
}

export default HomeContent;