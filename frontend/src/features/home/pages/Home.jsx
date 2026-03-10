import React, { useState } from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hook/useSong'
import { useAuth } from '../../auth/hooks/useAuth'
import EmotionBadge from '../components/EmotionBadge'
import EmotionPlaylist from '../components/EmotionPlaylist'
import '../styles/dashboard.scss'

const Home = () => {
    const { playlist, currentIndex, handleGetSong, playSongAt, loading } = useSong()
    const { user, handleLogout } = useAuth()
    const [currentEmotion, setCurrentEmotion] = useState(null)

    const handleEmotionDetect = (expression) => {
        if (!expression) return
        setCurrentEmotion(expression)
        handleGetSong({ mood: expression })
    }

    return (
        <div className="dashboard dashboard--no-sidebar">
            <main className="dashboard__main">
                <header className="dashboard__header">
                    <div>
                        <h1 className="dashboard__title">AI Mood Player</h1>
                        <p className="dashboard__subtitle">
                            Let your face pick the vibe. Happy, sad or surprised
                            <br /> we’ve got a soundtrack.
                        </p>
                    </div>

                    <div className="dashboard__header-right">
                        <div className="dashboard__profile">
                            <div className="dashboard__avatar">
                                {user?.username?.[0]?.toUpperCase() || 'U'}
                            </div>
                            <div className="dashboard__profile-meta">
                                <span className="dashboard__profile-name">
                                    {user?.username || 'Guest'}
                                </span>
                                <button
                                    type="button"
                                    className="dashboard__profile-logout"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="dashboard__content">
                    <div className="dashboard__card dashboard__card--camera">
                        <div className="dashboard__card-header">
                            <h2>Live emotion scan</h2>
                            <p>Look into the camera and hit detect to start.</p>
                        </div>
                        <div className="dashboard__card-body">
                            <FaceExpression onClick={handleEmotionDetect} />
                        </div>
                    </div>

                    <div className="dashboard__card dashboard__card--playlist">
                        <div className="dashboard__card-body dashboard__card-body--playlist">
                            <EmotionPlaylist
                                emotion={currentEmotion}
                                playlist={playlist}
                                currentIndex={currentIndex}
                                onSelectSong={playSongAt}
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* Global bottom player */}
            <Player />
        </div>
    )
}

export default Home