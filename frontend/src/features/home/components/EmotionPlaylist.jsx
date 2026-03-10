import React from 'react'

const EmotionPlaylist = ({ emotion, playlist, currentIndex, onSelectSong }) => {
    const title = emotion ? `${emotion} playlist` : 'Emotion playlist'

    if (!emotion) {
        return (
            <div className="playlist playlist--empty">
                <p>Detect an emotion to load a playlist.</p>
            </div>
        )
    }

    if (!playlist || playlist.length === 0) {
        return (
            <div className="playlist playlist--empty">
                <p>No songs found for this emotion yet.</p>
            </div>
        )
    }

    return (
        <div className="playlist">
            <div className="playlist__header">
                <h2 className="playlist__title">{title}</h2>
                <p className="playlist__subtitle">
                    Click any track to jump, or let it play through automatically.
                </p>
            </div>

            <ul className="playlist__list">
                {playlist.map((song, index) => (
                    <li key={song._id || song.url || `${song.title}-${index}`}>
                        <button
                            type="button"
                            className={
                                'playlist__item' +
                                (index === currentIndex ? ' playlist__item--active' : '')
                            }
                            onClick={() => onSelectSong(index)}
                        >
                            <span className="playlist__index">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </span>
                            <div className="playlist__meta">
                                <span className="playlist__song-title">{song.title}</span>
                                <span className="playlist__song-mood">{song.mood}</span>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmotionPlaylist

