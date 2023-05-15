// FOR CONFETTI:
// Install: npm install canvas-confetti

import confetti from 'canvas-confetti';
import React from 'react';
import './profileInfo.css';

function PersonInfo(props) {
  const imagePath = `/assets/person/${props.name}.jpeg`;
  const [showImage, setShowImage] = React.useState(false);

  return (
    <div className='personInfo'>
      <img
        className={`profileInfoImg ${showImage ? 'show' : ''}`}
        src={imagePath}
        alt={props.name}
        onLoad={() => setShowImage(true)}
      />
      <span className='personName'>{props.name}</span>{' '}
      <a href={props.link} className='personLink'>
        View LinkedIn
      </a>
    </div>
  );
}

export default function ProfileInfo() {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#008080', '#FF4136', '#2ECC40', '#FFDC00'],
        disableForReducedMotion: true,
        target: 'confetti-container',
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='profileInfo'>
      <h2 className='profileInfoName'>Team Borgs</h2>
      <div className='teamProjectInfo'>
        <p>This web application is our team project for CS3398 - Software Engineering.</p>
        <p>Together we created this over the course of 3 short sprints during one semester, utilizing Javascript, React, MongoDB, under the guidance of Dr. Ted Lehr.</p>
      </div>
      <div className='profileInfoBio'>
        <PersonInfo name='Karyn Remsing' link='https://www.linkedin.com/in/karyn-remsing-5b9ab6110/' />
        <PersonInfo name='Yousif Al Saadi' link='https://www.linkedin.com/in/yousif-al-saadi-233894200/' />
        <PersonInfo name='Brayden Roeder' link='' />
        <PersonInfo name='Jacob Sauceda' link='https://www.linkedin.com/in/jacob-sauceda-09a984230/' />
        <PersonInfo name='Carlo Marroquin' link='' />
      </div>
      <div id='confetti-container'></div>
    </div>
  );
}
