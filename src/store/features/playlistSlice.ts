import { trackType } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  currentTrack: trackType | null;
  playlist: trackType[];
  shuffledPlaylist: trackType[];
  isShuffled: boolean;
  isPlaying: boolean;
  filterOptions: {
    authors: string[];
    searchValue: string;
  };
};

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isPlaying: false,
  isShuffled: false,
  filterOptions: {
    authors: [],
    searchValue: "",
  },
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack: (
      state,
      action: PayloadAction<{ track: trackType; tracksData: trackType[] }>
    ) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
      state.shuffledPlaylist = [...action.payload.tracksData].sort(
        () => 0.5 - Math.random()
      );
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },

    setPrevTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },

    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffled = action.payload;
    },

    setFilters: (
      state,
      action: PayloadAction<{ authors: string[]; searchValue: string }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        searchValue: action.payload.searchValue || state.filterOptions.searchValue,
      };
    },
  },
});



export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsShuffle,
  setIsPlaying,
  setFilters,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
