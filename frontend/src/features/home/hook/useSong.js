import { useContext } from "react";
import { SongContext } from "../song.context";
import { getSong } from "../service/song.api";

export const useSong = () => {
    const {
        playlist,
        setPlaylist,
        currentIndex,
        setCurrentIndex,
        song,
        loading,
        setLoading,
    } = useContext(SongContext);

    // Load playlist for a given mood (emotion)
    async function handleGetSong({ mood }) {
        setLoading(true);
        const data = await getSong({ mood });

        let nextPlaylist = [];

        // Support both array (songs) and single (song) responses
        if (Array.isArray(data.songs)) {
            nextPlaylist = data.songs;
        } else if (data.song) {
            nextPlaylist = [data.song];
        }

        setPlaylist(nextPlaylist);
        setCurrentIndex(0);
        setLoading(false);
    }

    // Manually select a song from the playlist
    const playSongAt = (index) => {
        if (!playlist || index < 0 || index >= playlist.length) return;
        setCurrentIndex(index);
    };

    // Advance to next song when current one ends
    const handleSongEnd = () => {
        if (playlist && currentIndex < playlist.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return true;
        }
        return false;
    };

    return {
        song,
        playlist,
        currentIndex,
        loading,
        handleGetSong,
        playSongAt,
        handleSongEnd,
    };
}