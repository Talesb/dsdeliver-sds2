import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkeidnIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {

    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior

            <div className="foorter-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkeidnIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;