import React, { useEffect, useState } from 'react';
import Card from './Card';

const Page = () => {
    const [cards, setCards] = useState([]);
  
    useEffect( () => {
  fetch('https://my-json-server.typicode.com/savayer/demo/posts')
     .then(res => res.json())
     .then(data => setCards(data))
   }, []);
  
    const  analyticsTrackClick = (url) =>{
      // sending clicked link url to analytics
      console.log(url);
    }
  
    return (
      <div>
      {cards.map( (item) => 
          <Card title={item.title.en} linkTitle={item.link_title} href={item.link} text={item.text} linkClassName={item.id === 1 ? 'card__link--red' : ''} target={item.id === 1 ? '_blank' : ''}
            onClick={analyticsTrackClick(item.link)} />
        )
      }
      </div>
    );
};

export default Page;

