"use client"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavouriteTracks } from "@/store/features/playlistSlice";

export function  useInitializeLikedTracks(){
    const dispatch = useAppDispatch();
    const tokens = useAppSelector((state)=>state.auth.tokens);
    useEffect(()=>{
        if (tokens.access) {
            dispatch(getFavouriteTracks(tokens.access))
        }
    },[tokens,dispatch])
}

// export const useLikeTrack = (track) => {
//     const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
//     const isLiked = // Логика проверки наличия трека в списке лайкнутых
//     const handleLike = async (
//       e: React.MouseEvent<HTMLDivElement, MouseEvent>
//     ) => {
//      // Логика работы с лайками треков (ставить и удалять)
//     };
//     return { isLiked, handleLike };
//   };

//   const { isLiked, handleLike } = useLikeTrack(track);