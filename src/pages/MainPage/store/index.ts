import { create } from "zustand";
import { GameItem } from "../../../types";
import { fetchSimpleDataArray } from "../../../services/api";

interface GamesState {

    games: GameItem[],

    setGames: ()=> void
}

const useGamesStore = create<GamesState>((set, get) => ({

    games: [],

    setGames: async ()=>{

        const NewGames = await fetchSimpleDataArray('https://misterfoxgames-6a1cb-default-rtdb.firebaseio.com/Games.json') as GameItem[];

        set({games: NewGames.slice(0,20)})
    }
}));

export default useGamesStore;
