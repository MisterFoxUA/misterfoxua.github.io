import { useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { UnFilledFlagIcon } from "../../assets";
import { Pages } from "../../const";
import { GameItem } from "../../types";

interface IProps {

    _GameItem: GameItem
}

export const GameCardItem: React.FC<IProps> = ({ _GameItem }) => {

    useEffect(() => {

    }, [])

    const navigate = useNavigate();

    const goToPageWithState = (pageName: string) => {
        navigate(pageName, { state: { game: _GameItem } }); // Передаємо параметр через state
    };

    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.cardImage}`} onClick={()=>{goToPageWithState(Pages.Details)}}>
                    <img src={_GameItem._ImageURL} alt="" loading="lazy"/>
                </div>
                <div className={`${styles.ctn_cardTitle} d-flex-space-between`}>
                    <p className={`text-st text-color-white`}>{_GameItem._Name}</p>
                    <UnFilledFlagIcon />
                </div>
            </div>
        </>
    )
}