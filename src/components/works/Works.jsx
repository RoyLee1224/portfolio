import { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Netflix Movie App',
      desc: 'A full-stack application that leverages a Notion database for content management and integrates TMDB API for real-time movie information.',
      img: 'assets/imgs/netflix.webp',
      link: 'https://notion-movie.onrender.com/',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Luoshan Academy',
      desc: 'This webpage serves as an introduction to Luoshan Academy, showcasing its mission, programs, and impact while providing a platform for raising awareness to help underprivileged children in rural Hualien.',
      img: 'assets/imgs/luoshan.webp',
      link: '',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Travel Map App',
      desc: 'This website allows users to log in and visualize their travel history, highlighting visited countries and cities directly on an interactive map.',
      img: 'assets/imgs/travel.jpg',
      link: '',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {d.link ? (
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      <span>Projects</span>
                    </a>
                  ) : (
                    <span className="disabled">Projects</span>
                  )}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('right')}
      />
    </div>
  );
}
