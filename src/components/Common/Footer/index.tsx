import { useNavigate } from "react-router-dom";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../../../assets"
import styles from "./styles.module.css"
import { Pages } from "../../../const";
import Toast from "../Toast";
import { useState } from "react";

export const Footer: React.FC = () => {

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
            <div className={`container-header`}>
                <div className={`${styles.footer} d-flex-column`}>
                    <div className="d-flex-space-between">
                    <div className="text-click" onClick={()=>{goToPage(Pages.Main)}}><p className="site-Title text-title text-color-st">Mister Fox Gaming</p></div>
                        <div className={`${styles.socials} d-flex-center`}>
                            <div className="text-click" onClick={()=>{handleShowToast()}}><TwitterIcon /></div>
                            <div className="text-click" onClick={()=>{handleShowToast()}}><FacebookIcon /></div>
                            <div className="text-click" onClick={()=>{handleShowToast()}}><GoogleIcon /></div>
                        </div>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    <div className="d-flex-space-between">
                        <div className={`${styles.footerPages} d-flex`}>
                            <div className="text-click text-click-underline" onClick={() => {
                                goToPage(Pages.Main)
                            }}><p className="text-st text-color-st">New Games</p></div>
                            <div className="text-click text-click-underline" onClick={() => {
                                goToPage(Pages.Categories)
                            }}><p className="text-st text-color-st" >Categories</p></div>
                            <div className="text-click text-click-underline" onClick={()=>{handleShowToast()}}><p className="text-st text-color-st">Saved Games</p></div>
                            <div className="text-click text-click-underline"><p className="text-st text-color-st" onClick={() => {
                                goToPage(Pages.AboutUs)
                            }}>About Us</p></div>
                        </div>
                        <p className="text-st text-color-white">© 2024{new Date().getFullYear() != 2024 ? " - " + new Date().getFullYear() : ""}. All rights reserved.</p>
                    </div>
                </div>
            </div>
            {showToast && <Toast message="Comming Soon)))" isTop={false} />}
        </>
    )
}