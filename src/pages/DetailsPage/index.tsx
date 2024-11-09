import { useEffect } from "react";
import { Footer } from "../../components/Common/Footer"
import { Header } from "../../components/Common/Header"
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { GameItem } from "../../types";
import { DisLikeIcon, FullScreenIcon, LikeIcon } from "../../assets";
import { Helmet } from "react-helmet";

export const DetailsPage: React.FC = () => {

    const location = useLocation();
    const { game } = location.state as { game: GameItem };

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className={`${styles.gameWindow}`}>
                        <iframe className={`${styles.gameFrame}`} src={game._URL}></iframe>
                        <div className={`${styles.gameShortDesc} d-flex-space-between`}>
                            <p className={`text-title text-color-white`}>{game._Name}</p>
                            <div className={`${styles.gameIconPanel} d-flex`}>
                                <div className={`${styles.wrp_icon} d-flex`}>
                                    <p className={`text-st text-color-white`}>192</p>
                                    <LikeIcon />
                                </div>
                                <div className={`${styles.wrp_icon} d-flex`}>
                                    <p className={`text-st text-color-white`}>53</p>
                                    <DisLikeIcon />
                                </div>
                                <div>
                                    <FullScreenIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}