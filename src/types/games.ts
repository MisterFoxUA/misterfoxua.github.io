import { Difficulty } from "./basic"

export interface GameItem
{
    _Name: string,
    _GUID: string,
    _ImageURL: string,
    _URL: string,
    _CategoryGUID: string,
    _Difficulty: Difficulty
}

export interface Categorie{
    _Name: string,
    _GUID: string
}