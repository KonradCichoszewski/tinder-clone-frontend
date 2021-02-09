import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://assets.t3n.sc/news/wp-content/uploads/2021/01/elon-musk-shutterstock.jpg?auto=format&h=&ixlib=php-2.3.0&w='
        },
        {
            name: 'Jeff Bezos',
            url: 'https://i0.wp.com/www.success.com/wp-content/uploads/2018/07/JeffBezos_SecretstoSuccess-1.jpg?fit=1100%2C733&ssl=1'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
