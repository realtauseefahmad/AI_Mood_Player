import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const currentSong = playlist[ currentIndex ] || null

    return (
        <SongContext.Provider
            value={{
                playlist,
                setPlaylist,
                currentIndex,
                setCurrentIndex,
                song: currentSong,
                currentSong,
                loading,
                setLoading,
            }}
        >
            {children}
        </SongContext.Provider>
    )
}