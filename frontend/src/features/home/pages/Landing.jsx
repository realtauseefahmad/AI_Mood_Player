import React from 'react'
import { Link } from 'react-router'

import '../../shared/styles/globle.scss'
import '../styles/dashboard.scss'

const Landing = () => {
    return (
        <main className="landing">
            <div className="landing__content">
                <div className="landing__badge">AI-powered mood music</div>
                <h1 className="landing__title">
                    Let your <span>expression</span> pick the next track.
                </h1>
                <p className="landing__subtitle">
                    MoodBeats uses real-time face expression detection to curate songs for how you feel:
                    happy, sad or surprised – no playlists required.
                </p>

                <div className="landing__actions">
                    <Link to="/login" className="landing__primary">
                        Get started
                    </Link>
                    <Link to="/register" className="landing__secondary">
                        Create account
                    </Link>
                </div>

                <p className="landing__note">
                    Works directly in your browser using your webcam. Nothing is stored from your camera feed.
                </p>
            </div>
        </main>
    )
}

export default Landing

