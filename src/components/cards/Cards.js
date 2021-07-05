import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import npHard from '../../assets/img/np-hard.png';
import labAnimal from '../../assets/img/lab-animal.jpeg';
import transmon_qubit from '../../assets/img/transmon_qubit.png';
import ibmq from '../../assets/img/ibmq.jpeg';
import ionq from '../../assets/img/ionq.jpeg';

function Cards() {
  return (
    <div id="blog-cards" className="cards">
      <h1>Check out these EPIC Blogs!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={labAnimal}
              text="How quantum computers will be able to save billions of lab animals"
              label="Quantum Simulation"
              path="/blogs/4"
            />
            <CardItem
              src={npHard}
              text="Quantum Computers and NP-hard problems
              "
              label="Quantum Algorithms"
              path="/blogs/6"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={transmon_qubit}
              text="Different types of hardware of quantum computer"
              label="Quantum Hardware"
              path="/blogs/3"
            />
            <CardItem
              src={ibmq}
              text="How IBM is revolutining the quantum world
              "
              label="Quantum Computing"
              path="/blogs/1"
            />
            <CardItem
              src={ionq}
              text="Top Quantum StartUps to look out For"
              label="Quantum Industry"
              path="/blogs/5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
