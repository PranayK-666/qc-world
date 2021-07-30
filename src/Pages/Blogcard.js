import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../Pages/blogcards.css';
import { Link } from 'react-router-dom';
import CardItem from '../components/cards/CardItem';
import labAnimal from '../assets/img/lab-animal.jpeg';
import transmon_qubit from '../assets/img/transmon_qubit.png';
import ibmq from '../assets/img/ibmq.jpeg';
import ionq from '../assets/img/ionq.jpeg';
import npHard from '../assets/img/np-hard.png';
import ckt_5 from '../assets/img/my_journey_part1_9.png';
import drive3 from '../assets/img/my_journey_part2_3.png';
import qp from '../assets/img/qp.jpeg';
import img1 from '../assets/img/1st_depth.png';
// import Like from './Like';

export default function Blogcard() {
  return (
    //   <div id="blog-cards" className="blogcards">
    //   <h1>Check out these EPIC Blogs!</h1>
    //   <div className="blogcards__container">
    //         <CardItem className="cardstyle2"
    //           src={labAnimal}
    //           text="How quantum computers will be able to save billions of lab animals"
    //           label="Quantum Simulation"
    //           path="/blogs/4"
    //         />
    //         <CardItem className="cardstyle2"
    //           src={npHard}
    //           text="Quantum Computers and NP-hard problems
    //           "
    //           label="Quantum Algorithms"
    //           path="/blogs/6"
    //         />
    //         <CardItem className="cardstyle2"
    //           src={transmon_qubit}
    //           text="Different types of hardware of quantum computer"
    //           label="Quantum Hardware"
    //           path="/blogs/3"
    //         />
    //         <CardItem className="cardstyle2"
    //           src={ibmq}
    //           text="How IBM is revolutining the quantum world
    //           "
    //           label="Quantum Computing"
    //           path="/blogs/1"
    //         />
    //         <CardItem className="cardstyle2"
    //           src={ionq}
    //           text="Top Quantum StartUps to look out For"
    //           label="Quantum Industry"
    //           path="/blogs/5"
    //         />
    //     </div>
    // </div>

    <div className="container fluid-md inline">
      <h1 className="header">Blogs</h1>
      <Link>
        <Card className="cardstyle2">
          <CardItem
            src={labAnimal}
            text="How quantum computers will be able to save billions of lab animals"
            label="Quantum Simulation"
            path="/blogs/4"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title as="h3">How quantum computers will be able to save billions of lab animals</Card.Title> */}
            <Card.Text className="cardinfo">
              Previous decades have witnessed new developments and advancements
              in medical technologies, healthcare facilities, cures, treatments
              for various ailments, and the production of newer
              pharmaceuticals.It is critical to ensure that treatments and
              medications do not have any hazardous or severe side effects on
              the Human Body....
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>

      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={transmon_qubit}
            text="Different types of hardware of quantum computer"
            label="Quantum Hardware"
            path="/blogs/3"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              At the moment you start using your laptop, multiple processes and
              computations are performed in order to make this possible. Bits,
              registers, and logic gates are the most common types of hardware
              used in a typical computer to do these tasks. Quantum computers,
              on the other hand, work with a distinct type of technology.Qubits,
              quantum registers and logic gates are the building blocks of these
              quantum computers.
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>

      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={npHard}
            text="Quantum Computers and NP-hard problems
              "
            label="Quantum Algorithms"
            path="/blogs/6"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              Imagine that your mom’s birthday is approaching and you want to
              buy her an expensive gift, to show how much you love her. But
              because you are a student, you are a little low on cash. So you
              decide to get a part time job as a delivery person. Going from
              house to house delivering parasols is a bit tiring, so you sit
              down one day and try to find the most efficient route through each
              delivery location in the city, but wait!!
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>

      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={ibmq}
            text="How IBM is revolutining the quantum world
              "
            label="Quantum Computing"
            path="/blogs/1"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              Quantum Computers use the “weirdness” of quantum mechanics to do
              computations which our normal laptops or even supercomputers can
              not do in a reasonable amount of time. Unlike the classical bits
              that normal computers use, Quantum computers use qubits or quantum
              bits. These qubits follow the trends of subatomic particles .
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>

      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={ionq}
            text="Top Quantum StartUps to look out For"
            label="Quantum Industry"
            path="/blogs/5"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              While most major firms, such as IBM and Google, are rushing to
              develop Transmon qubits, IonQ is concentrating on developing Ion
              trapped quantum computers. They claim that superconducting qubits
              have shown to be error prone, their devices on the other hand trap
              individual ionized ytterbium atoms as their qubits.
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>

      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={ckt_5}
            text="My journey through the IBM Quantum Challenge 2021 - Part 1"
            label="Quantum Challenge"
            path="/blogs/7"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              May 20th marked the beginning of one of the most awesome
              challenges in the field of Quantum Computing. The IBM Quantum
              Challenge commemorated the history of quantum computing, as this
              year marks the 40th anniversary of the Physics of Computation
              Conference, where the concept of computing systems based on
              quantum mechanics was conceived....
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>
      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={drive3}
            text="My journey through the IBM Quantum Challenge 2021 - Part 2"
            label="Quantum Challenge"
            path="/blogs/8"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              It took me 2 days to finish the first three questions and now I
              was up against the final two questions....
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>
      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={qp}
            text="Which Quantum Computing language to use for starting your own Quantum
            Journey"
            label="Quantum Programming"
            path="/blogs/9"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              Since its inception in the 1980s, quantum computing has grown at
              an exponential rate. Until recently, being a researcher at a
              world-class facility was the only way to get access to a real
              Quantum Computer....
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>
      <Link>
        <Card className="cardstyle2">
          <CardItem
            className="cardstyle2"
            src={img1}
            text="The Depth of a Quantum Circuit"
            label="Quantum Programming"
            path="/blogs/9"
          />
          {/* <Card.Header as="h4">Parmeet Blog1</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>Wasssup</Card.Title> */}
            <Card.Text className="cardinfo">
              The depth of a Quantum Circuit is the length of the longest path
              from the preparation to the measurement gate, moving forward in
              time along qubit wires. Each gate in this longest path is
              considered as one unit....
            </Card.Text>
            {/* <Like /> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
