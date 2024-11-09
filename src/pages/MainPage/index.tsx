import { useEffect } from "react";
import { SearchIcon, UnFilledFlagIcon } from "../../assets";
import { Footer } from "../../components/Common/Footer"
import { Header } from "../../components/Common/Header"
import styles from "./styles.module.css";
import useGamesStore from "./store";
import { GameCardItem } from "../../components/GameCard";

export const MainPage: React.FC = () => {

    const { games, setGames } = useGamesStore();

    useEffect(() => {

        setGames();
    }, [])

    return (
        <>
            <Header />
            <div className="main">
                <div className={`${styles.PageTitle} container`}>
                    <div className="d-flex">
                        <p className="text-title text-color-white">Explore New Games</p>
                    </div>
                </div>
                <div className="container">
                    <div className={`${styles.cardGallery}`}>
                        {games.map((item) => {
                            return (
                                <GameCardItem _GameItem={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}