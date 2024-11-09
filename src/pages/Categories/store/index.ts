import { create } from "zustand";
import { Categorie, Difficulty, GameItem } from "../../../types";
import { fetchSimpleDataArray } from "../../../services/api";

interface GamesState {

    games: GameItem[],
    categories: Categorie[],
    difficulty: Difficulty,
    selectedCategory: Categorie,
    search: string,
    currentPage: number,
    pages: number[]

    filteredGames: GameItem[],

    setGames: () => void,
    setPage: (_number: number) => void,
    setCategories: () => void
    setCategorie: (_Category: Categorie)=> void
    setDifficulty: (_Difficulty: Difficulty)=> void
    setFilteredGames: () => void
    setSearch: (_searchString: string) => void
}

const useGamesStore = create<GamesState>((set, get) => ({

    games: [],
    categories: [],
    difficulty: Difficulty.All,
    selectedCategory: {} as Categorie,
    search: "",
    currentPage: 1,
    pages: [] as number[],

    filteredGames: [],

    setGames: async () => {

        const NewGames = await fetchSimpleDataArray('https://misterfoxgames-6a1cb-default-rtdb.firebaseio.com/Games.json') as GameItem[];

        const totalPages = Array.from(
            { length: Math.ceil(NewGames.length / 20) },
            (_, i) => i + 1
        );

        set({ games: NewGames, filteredGames: NewGames.slice(0,20), pages: totalPages});
    },

    setCategories: async () => {

        const NewCategories = await fetchSimpleDataArray('https://misterfoxgames-6a1cb-default-rtdb.firebaseio.com/Categories.json') as Categorie[];

        set({ categories: NewCategories })
    },

    setCategorie(_Category) {
        
        set({selectedCategory: _Category})
    },

    setDifficulty(_Difficulty) {
        
        set({difficulty: _Difficulty})
    },

    setPage(_number) {
        
        set({currentPage: _number})
    },

    setSearch(_searchString) {
        
        set({search: _searchString})
    },

    setFilteredGames: () => {

        const { selectedCategory, games, difficulty,search, currentPage } = get()

        const NewFilteredGames = [
            ...games.filter((item) => {
                return (
                    (difficulty != Difficulty.All ? item._Difficulty == difficulty : true) &&
                    (selectedCategory._GUID ? item._CategoryGUID == selectedCategory._GUID : true) &&
                    (search !== "" ? item._Name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) : true)
                );
            })
        ];

        const totalPages = Array.from(
            { length: Math.ceil(NewFilteredGames.length / 20) },
            (_, i) => i + 1
        );

        const itemsPerPage = 20;
        const paginatedGames = NewFilteredGames.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

        set({ filteredGames: paginatedGames,  pages: totalPages})
    }
}));

export default useGamesStore;
