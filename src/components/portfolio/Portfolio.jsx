import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect, useState } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  projectPortfolio,
} from '../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'game',
      title: 'Game',
    },
    {
      id: 'project',
      title: 'Small Project',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'game':
        setData(gamePortfolio);
        break;
      case 'project':
        setData(projectPortfolio);
        break;
        dafault: setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
