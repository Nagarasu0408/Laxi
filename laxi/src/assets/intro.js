import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './intro.css';

const songs = [
    {
        id: 1,
        title: "User Stories",
        artist: "Offers a clarity in requirements, prioritize user needs, enhance communication, foster stakeholder collaboration, and support iterative development. They ensure alignment with business goals, facilitate continuous feedback, and improve the user experience, ultimately leading to efficient and user-focused cloud solutions",
        img: "https://tsh.io/wp-content/uploads/2019/10/how-to-write-good-user-stories-the-software-house-way.jpg"
    },
    {
        id: 2,
        title: "Application Template",
        artist: "Application templates in cloud services provide pre-configured setups, streamline deployment, ensure best practices, enhance scalability, and improve security. They offer standardization, reduce setup time, and simplify complex configurations. Templates support rapid development, ease maintenance, and ensure consistency across environments, fostering efficient and reliable cloud-based applications.",
        img: "https://img.freepik.com/premium-vector/native-mobile-app-abstract-concept-vector-illustration_107173-24939.jpg"
    },
    {
        id: 3,
        title: "Provide Cloud Services",
        artist: "Cloud services offer scalability, on-demand resource access, cost-efficiency, and high availability. They provide data storage, processing power, and software applications. Features include automatic updates, disaster recovery, security, global accessibility, and collaboration tools. These services enable rapid deployment, flexibility, and innovation, supporting diverse business needs and technological advancements.",
        img: "https://img.freepik.com/premium-vector/backup-server-abstract-concept-vector-illustration_107173-29928.jpg"
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
                                    height: index === currentIndex ? "550px" : "350px",
                                    width: index === currentIndex ? "450px" : "450px",

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
