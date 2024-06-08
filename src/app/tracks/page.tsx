"use client";
import Playlist from "@/components/Playlist/Playlist";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { trackType } from "@/components/types";
import { getTracks } from "@/api/tracks";
import { setInitialTracks } from "@/store/features/playlistSlice";

export default function MainTrackPage() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<trackType[]>([]);
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );

  useEffect(() => {
    getTracks().then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
    });
  }, [dispatch]);
  return <Playlist tracks={filteredTracks} playlist={tracks} />;
}
