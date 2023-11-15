import './intro.scss';
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

// Import the Cloudinary classes.
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';

import { AdvancedImage } from '@cloudinary/react';

export default function Intro() {
  const myImage = new CloudinaryImage('g-portfolio/Man_pr19zj', {
    cloudName: 'dr80ur9sa',
  }).resize(fill().width(100).height(150));

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Man.webp" alt="" />
          <AdvancedImage cldImg={myImage} />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            <Typewriter
              options={{
                strings: [
                  '你好！',
                  'Hello!',
                  '안녕하세요!',
                  "console.log('Hello!')",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2>I'm Roy Lee</h2>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
