import { useEffect, useState } from "react";
import { DropdownIcon, SearchIcon, UnFilledFlagIcon } from "../../assets";
import { Footer } from "../../components/Common/Footer"
import { Header } from "../../components/Common/Header"
import styles from "./styles.module.css";
import { GameCardItem } from "../../components/GameCard";
import useGamesStore from "./store";
import { Categorie, Difficulty } from "../../types";
import { Pagination } from "../../components/Common/Paggination";

export const CategoryPage: React.FC = () => {

    const [isCategoriesUncollapsed, setisCategoriesUncollapsed] = useState(false);
    const {
        categories,
        selectedCategory,
        difficulty,
        filteredGames,
        currentPage,
        pages,
        setCategories,
        setCategorie,
        setSearch,
        setDifficulty,
        setGames,
        setFilteredGames,
        setPage
    } = useGamesStore();

    useEffect(() => {

        setGames();
        setCategories();
    }, [])

    useEffect(() => { }, [filteredGames])

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="d-flex">
                        <p className="text-title text-color-white">Explore</p>
                    </div>
                </div>
                <div className="container">
                    <div className={`${styles.search}`}>
                        <div className={`${styles.menuBar} d-flex`}>
                            <div className={`${styles.ctn_search} ctn_search d-flex`}>
                                <div className={`${styles.icn_search} d-flex`}>
                                    <SearchIcon />
                                </div>
                                <input onChange={(e) => { setPage(1); setSearch(e.target.value); setFilteredGames() }} className={`${styles.inp_search} text-med text-color-white`} type="text" placeholder="Search..." />
                            </div>
                            <div className="vertical-divider"></div>
                            <div className={`text-click ${difficulty == Difficulty.All ? 'selected' : ''}`} onClick={() => {
                                setPage(1);
                                setDifficulty(Difficulty.All);
                                setFilteredGames();
                            }}>
                                <p className={`text-med text-color-st`}>All</p>
                            </div>
                            <div className={`text-click ${difficulty == Difficulty.Easy ? 'selected' : ''}`} onClick={() => {
                                setPage(1);
                                setDifficulty(Difficulty.Easy);
                                setFilteredGames();
                            }}>
                                <p className={`text-med text-color-st `}>Easy</p>
                            </div>
                            <div className={`text-click ${difficulty == Difficulty.Medium ? 'selected' : ''}`} onClick={() => {
                                setPage(1);
                                setDifficulty(Difficulty.Medium);
                                setFilteredGames();
                            }}>
                                <p className={`text-med text-color-st`}>Medium</p>
                            </div>
                            <div className={`text-click ${difficulty == Difficulty.Hard ? 'selected' : ''}`} onClick={() => {
                                setPage(1);
                                setDifficulty(Difficulty.Hard);
                                setFilteredGames();
                            }}>
                                <p className={`text-med text-color-st`}>Hard</p>
                            </div>
                            <div className="vertical-divider"></div>
                            <div className={`dropdown ${isCategoriesUncollapsed ? 'uncolapsed' : ''}`}>
                                <div className={`${styles.ctn_gameCategories} dropdown-button d-flex text-click`} style={{}}
                                    onClick={() => {
                                        setisCategoriesUncollapsed(!isCategoriesUncollapsed)
                                    }}>
                                    <p className={`text-med text-color-st`}>Categories</p>
                                    <div className={`${isCategoriesUncollapsed ? 'flip-container' : ''}`}>
                                        <DropdownIcon />
                                    </div>
                                </div>
                                <div className={`dropdown-content ${isCategoriesUncollapsed ? 'uncolapsed' : ''}`}>
                                    {categories.map((categorie) => {

                                        return (
                                            <div className={`text-click ${selectedCategory._GUID == categorie._GUID ? 'selected' : ''}`} onClick={() => {
                                                setPage(1);
                                                setCategorie(selectedCategory._GUID == categorie._GUID ? {} as Categorie : categorie);
                                                setFilteredGames();
                                                setisCategoriesUncollapsed(false);
                                            }}>
                                                <p className={`text-med text-color-st`}>{categorie._Name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ctn_content} container d-flex-column`}>
                    <div className={`${styles.cardGallery}`}>
                        {filteredGames.map((item) => {
                            return (
                                <GameCardItem _GameItem={item} />
                            )
                        })}
                    </div>
                    {pages.length > 0?<Pagination totalPages={pages} currentPage={currentPage} onPageChange={(page: number)=>{

                        setPage(page);
                        setFilteredGames();
                    }}/>:<></>}
                </div>
            </div>
            <Footer />
        </>
    )
}