import { Helmet } from "react-helmet";
import { TwitterIcon, FacebookIcon, GoogleIcon } from "../../assets";
import { Footer } from "../../components/Common/Footer"
import { Header } from "../../components/Common/Header"
import styles from "./styles.module.css";

export const AboutUs: React.FC = () => {

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div>
                        <div className={`${styles.ctn_AboutUs} d-flex-column`}>
                            <p className="text-title text-color-white">About Us</p>
                            <p className={`${styles.aboutUsText} text-st text-color-white`}>At the moment, this is a solo project, or simply a POC - we plan to add more games, increase the functionality of the site, work hard on the page profile, and maybe... maybe somehow tweak our own crypto coin to perform certain functions on the site or to make it respond with some kind of reward. But this is still a distant future</p>
                        </div>
                        <div className={`${styles.creatorsGallery} d-flex`}>
                            <div className={`${styles.creatorCard} d-flex-column`}>
                                <div className={`${styles.creatorImg}`}></div>
                                <div className={`${styles.creatorTitle} d-flex-column`}>
                                    <p className={`text-medBigger text-color-white`}>Mister Fox</p>
                                    <p className={`text-st text-color-white`}>Software Engineer</p>
                                </div>
                                <div className={`${styles.creatorSocials} d-flex`}>
                                    <TwitterIcon />
                                    <FacebookIcon />
                                    <GoogleIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}