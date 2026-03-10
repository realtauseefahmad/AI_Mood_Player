import React from 'react'

const MOODS = [
    {
        id: 'Happy',
        label: 'Happy',
        description: 'Upbeat, energetic tracks for a good mood',
        emoji: '😊',
    },
    {
        id: 'Sad',
        label: 'Sad',
        description: 'Slow, mellow songs for calm moments',
        emoji: '🌧️',
    },
    {
        id: 'Surprised',
        label: 'Surprised',
        description: 'Unexpected drops and exciting tunes',
        emoji: '🤯',
    },
]

const SidebarSongList = ({ onSelectMood, activeMood }) => {
    return (
        <div className="sidebar-list">
            <h3 className="sidebar-list__title">Moods & mixes</h3>
            <p className="sidebar-list__subtitle">Pick a vibe or let AI choose for you.</p>

            <div className="sidebar-list__group">
                {MOODS.map((mood) => (
                    <button
                        key={mood.id}
                        type="button"
                        className={[
                            'sidebar-list__item',
                            activeMood === mood.id ? 'sidebar-list__item--active' : '',
                        ].join(' ')}
                        onClick={() => onSelectMood(mood.id)}
                    >
                        <div className="sidebar-list__item-left">
                            <span className="sidebar-list__emoji" aria-hidden="true">
                                {mood.emoji}
                            </span>
                            <div>
                                <div className="sidebar-list__item-title">{mood.label} mix</div>
                                <div className="sidebar-list__item-desc">{mood.description}</div>
                            </div>
                        </div>
                        <span className="sidebar-list__pill">Play</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SidebarSongList

