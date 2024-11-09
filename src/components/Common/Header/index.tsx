import { useNavigate } from "react-router-dom";
import { CategoryIcon, HomeIcon, SavedGamesIcon } from "../../../assets";
import styles from "./styles.module.css"
import { Pages } from "../../../const";
import { useState } from "react";
import Toast from "../Toast";

export const Header: React.FC = () => {

    const navigate = useNavigate();

    const goToPage = (pageName: string) => {
        navigate(pageName); // Передаємо параметр через state
    };

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <>
            <div className="container-header">
                <div className={`${styles.header} d-flex`}>
                    <div className="text-click" onClick={() => { goToPage(Pages.Main) }}>
                        <p className="site-Title text-title text-color-st">Mister Fox Gaming</p>
                    </div>
                    <div className={`${styles.headerOptions} d-flex`}>
                        <div className={`${styles.wrp_headerOption} d-flex-center text-click text-click-underline`} onClick={() => { goToPage(Pages.Main) }}>
                            <div><HomeIcon /></div>
                            <p className="text-st text-color-st">New Games</p>
                        </div>
                        <div className={`${styles.wrp_headerOption} d-flex-center text-click text-click-underline`} onClick={() => { goToPage(Pages.Categories) }}>
                            <div><CategoryIcon /></div>
                            <p className="text-st text-color-st">Categories</p>
                        </div>
                        <div className={`${styles.wrp_headerOption} d-flex-center text-click text-click-underline`} onClick={()=>{handleShowToast()}}>
                            <div><SavedGamesIcon /></div>
                            <p className="text-st text-color-st ">Saved Games</p>
                            {showToast && <Toast message="Comming Soon)))" isTop={true} />}
                        </div>
                    </div>
                    <div className={`${styles.ctn_avatar} d-flex-center text-click`} onClick={()=>{handleShowToast()}}>
                        <div className={`${styles.avater}`}>
                        </div>
                        <p className="text-st text-color-st">Anonymous Player</p>
                        {showToast && <Toast message="Comming Soon)))" isTop={true} />}
                    </div>
                </div>
            </div>
        </>
    )
}