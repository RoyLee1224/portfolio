import { useState } from 'react';
import './works.scss'

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Netflix Movie App",
      desc:
        "developing...",
      img:
        "https://photo2.tinhte.vn/data/attachment-files/2021/11/5728147_DSC_1217.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Social Media App",
      desc:
        "developing...",
      img:
        "https://www.matbold.com/images/5/6/0/f/7/560f7fbb07d63c1e5f9f3f1d8c129a0611c57d83-tatatu2022.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Booking App",
      desc:
        "developing...",
      img:
        "https://img.freepik.com/free-vector/hotel-booking-app-ui-design-screen_47987-2006.jpg?w=2000",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map(d =>(

          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
        </div>
          ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className='arrow right' alt=""onClick={()=>handleClick("right")} />
    </div>
  )
}