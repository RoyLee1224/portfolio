import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "推薦人一",
      title: "職稱一",
      img:
        "https://i.pinimg.com/1200x/06/b3/d6/06b3d6e0a295c5e80c09afca7a48a5f2.jpg",
      icon: "assets/twitter.png",
      desc:
        "推薦詞一",
    },
    {
      id: 2,
      name: "推薦人二",
      title: "職稱二",
      img:
        "data:image/jpeg;base64,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",
      icon: "assets/youtube.png",
      desc:
        "推薦詞二",
      featured: true,
    },
    {
      id: 3,
      name: "推薦人三",
      title: "職稱三",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCZQ5pD2UcLdjBfDhEve9jIktJSwkSyG6Vw&usqp=CAU",
      icon: "assets/linkedin.png",
      desc:
        "推薦詞三",
    },
  ];

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className='left' alt="" />
              <img 
              src={d.img} 
              className='user' 
              alt="" />
              <img src={d.icon} className='right' alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}