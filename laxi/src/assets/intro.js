import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './intro.css';

const songs = [
    {
        id: 1,
        title: "Bunker",
        artist: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "https://images.hdqwalls.com/wallpapers/heroic-miles-morales-4k-d0.jpg"
    },
    {
        id: 2,
        title: "Words Remain",
        artist: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "https://images.hdqwalls.com/wallpapers/scarlet-witch-wrath-3i.jpg"
    },
    {
        id: 3,
        title: "Falling Out",
        artist: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "https://images.hdqwalls.com/wallpapers/scarlet-witch-little-devil-7f.jpg"
    }
];

const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handleSwipe = (direction) => {
        if (direction === 'LEFT') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
        } else if (direction === 'RIGHT') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('LEFT'),
        onSwipedRight: () => handleSwipe('RIGHT'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <>
            <div className="imageSlide">
                <div className="ContainerBody" {...handlers}>
                    <div className="cards">
                        {songs.map((song, index) => (
                            <div
                                key={song.id}
                                className={`Card ${index === currentIndex ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                    zIndex: index === currentIndex ? 1 : 0,
                                    opacity: index === currentIndex ? 1 : 0.4,
                                    height: index === currentIndex ? "450px" : "350px",
                                    width: index === currentIndex ? "350px" : "350px",

                                }}
                            >
                                <img src={song.img} alt={song.title} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="player">
                    <div className="info-area">
                        {songs.map((song, index) => (
                            <div key={song.id} className={`song-info ${index === currentIndex ? 'active' : ''}`}>
                                <div className="title"><h1>{song.title}</h1></div>
                                <div className="sub-line">
                                    <div className="subtitle">{song.artist}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
