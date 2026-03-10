import React from 'react'

const EMOTION_LABELS = {
    Happy: 'Happy',
    Sad: 'Sad',
    Surprised: 'Surprised',
}

const EmotionBadge = ({ emotion, loading }) => {
    const normalized = emotion && EMOTION_LABELS[emotion] ? emotion : null

    let stateLabel = 'Idle'
    if (loading) {
        stateLabel = 'Matching your vibe...'
    } else if (normalized) {
        stateLabel = `${normalized} mood`
    } else {
        stateLabel = 'Waiting for emotion'
    }

    return (
        <div
            className={[
                'emotion-badge',
                normalized ? `emotion-badge--${normalized.toLowerCase()}` : '',
                loading ? 'emotion-badge--loading' : '',
            ].join(' ')}
        >
            <div className="emotion-badge__pulse" />
            <div className="emotion-badge__content">
                <span className="emotion-badge__label">{normalized || 'No emotion'}</span>
                <span className="emotion-badge__state">{stateLabel}</span>
            </div>
        </div>
    )
}

export default EmotionBadge

