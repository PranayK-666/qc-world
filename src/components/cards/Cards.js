import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="blog-cards" className="cards">
      <h1>Check out these EPIC Blogs!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ibmq.jpeg"
              text="How IBM is revolutining the quantum world"
              label="IBMQ"
              path="/blogs/1"
            />
            <CardItem
              src="images/qkd-2.jpeg"
              text="Simple Proof of Security of the BB84 Quantum Key Distribution Protocol"
              label="QKD"
              path="/blogs/2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/q-dots.jpeg"
              text="Quantum computation with quantum dots"
              label="Quantum Dots"
              path="/services"
            />
            <CardItem
              src="images/qc.jpeg"
              text="Quantum Computing in the NISQ era and beyond
              "
              label="Quantum Computing"
              path="/products"
            />
            <CardItem
              src="images/qubits.png"
              text="Fast Scalable State Measurement with Superconducting Qubits"
              label="Qubits"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
