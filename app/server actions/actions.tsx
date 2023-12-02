"use server"

import axios from 'axios'
import AnimeCard from '../AnimeCard'
import { AnimeTypes } from '../interfaces'

export const fetchAnimeList = async (page: number) => {
    try {
        const {data} = await axios.get(`https://shikimori.one/api/animes?page=${page}&limit=20&order=popularity`)
        
        return data.map((anime: AnimeTypes, index: number) => (
            <AnimeCard key={index} anime={anime} index={index} />
          ))
        
    } catch (err: any) {
        console.error('Error fetching anime list:', err.message || err);
        throw new Error('An error occurred while fetching the anime list.');
    }
}