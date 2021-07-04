import './blog.css';
import img_main from '../../assets/img/ibmq.jpeg';
import img_2 from '../../assets/img/circuit-composer.png';
import img_4 from '../../assets/img/summerschool.png';
import Image from '../../components/UI/Image/Image';

const Blog1 = () => {
  return (
    <div className="blog">
      <p className="blog-title">How IBM is revolutining the quantum world</p>
      <div className="blog-content">
        <p>
          Quantum Computers use the “weirdness” of quantum mechanics to do
          computations which our normal laptops or even supercomputers can not
          do in a reasonable amount of time. Unlike the classical bits that
          normal computers use, Quantum computers use qubits or quantum bits.
          These qubits follow the trends of subatomic particles and follow the
          rules of quantum mechanics, which leads them to their peculiar
          behaviour.
        </p>
        <p>
          These devices have shown very promising applications in the past
          couple of years: from something a little obvious like solving linear
          equations in machine learning to like making vaccines.
        </p>
        <p>
          Keeping these applications in focus the industry is at a big boom with
          all the tech giants wanting to get their hands on commercializable
          quantum computers. And with Google achieving quantum supremacy last
          year and IBM making quantum computers available to all, this happens
          to be the best time to enter the field. A lot of new startups have
          also emerged which focus on the applications of these devices to
          various fields such as finance, machine learning, multiphysics
          softwares, quantum algorithms and much more.
        </p>
        <Image
          imgName={img_main}
          imgCaption="IBM Quantum Computer"
          imgSource="https://www.google.com/imgres?imgurl=https%3A%2F%2Fventurebeat.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fq2.jpg%3Fw%3D1200%26strip%3Dall&imgrefurl=https%3A%2F%2Fventurebeat.com%2F2021%2F04%2F09%2Fibm-releases-qiskit-modules-that-use-quantum-computers-to-improve-machine-learning%2F&tbnid=dTic8k98XNT7YM&vet=12ahUKEwi82sa2soHxAhUa0HMBHc0OB-MQMygCegUIARC_AQ..i&docid=FoTu-fkPlh2WbM&w=1200&h=900&q=quantum%20computer%20ibm&ved=2ahUKEwi82sa2soHxAhUa0HMBHc0OB-MQMygCegUIARC_AQ"
        />
        <h3 className="blog-heading">Recent Progress</h3>
        <p>
          As a lot of research is being done all over the globe in this area, we
          are bound to see a lot of breakthroughs and development. The main goal
          of researchers is to make better and bigger quantum computers which
          have more coherence time and more connectivity between the qubits.
          Some of the major recent breakthroughs :
        </p>
        <ul>
          <li>2011 DWave launches first quantum annealing system</li>
          <li>
            2015 IBM demonstrated the first error correction code for making the
            systems more reliable
          </li>
          <li>
            2016 Researchers at IBM created an error correction strategy which
            focuses on Implementing error correction without increasing the
            number of qubits
          </li>
          <li>
            2017 First demonstration of VQE by IBM for simulating the Lithium
            Hydride(LiH) molecule
          </li>
          <li>
            2018 Google becomes the first corporation with 72 qubit quantum
            computer
          </li>
          <li>2019 Google reached quantum supremacy</li>
          <li>
            2019 IBM commercialized quantum computers by launching IBM Q System
            One
          </li>
        </ul>
        <h3 className="blog-heading">IBM’s Initiative</h3>
        <p>
          IBM is one of the corporations which have taken a deep dive into the
          quantum world, gathering researchers from all disciplines to realize
          the dream of these devices. Last year they revealed their plan for a
          1000 qubit quantum computer, which will open doors for running bigger
          and better computations. They have also worked on educating the
          upcoming generation about this wonderful technology.
        </p>
        <h3 className="blog-heading">IBM Quantum Experience</h3>
        <p>
          IBM Quantum Experience is one of the biggest developments in the field
          which provides cloud based access to quantum computers for
          everyone.This lead to the transformation of the general idea about
          quantum computing, from something far fetched and distant to something
          an enthusiast can experiment with by themselves.
        </p>
        <p>
          The instructions provided are easy to follow, giving the amateurs also
          great hands-on experience and learning:
        </p>
        <ul>
          <li>
            Start by visualizing the circuit you want to implement, this will
            mainly depend upon the type of quantum algorithm you wish to
            execute.
          </li>
          <li>
            Once you have the circuit you can use the drag and drop option which
            is a lot more fun, although it is not that practical but you can
            start with it.
          </li>
          <li>Choose a device as your backend.</li>
          <li>
            Last and finally you can send your job to run on a real quantum
            computer that you have chosen
          </li>
        </ul>
        <p>
          For a more in depth idea about doing this, checkout this amazing video
          by Abe Asafw.
        </p>
        <Image
          imgName={img_2}
          imgCaption="IBM Quantum Computer"
          imgSource="https://www.google.com/imgres?imgurl=https%3A%2F%2Fventurebeat.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fq2.jpg%3Fw%3D1200%26strip%3Dall&imgrefurl=https%3A%2F%2Fventurebeat.com%2F2021%2F04%2F09%2Fibm-releases-qiskit-modules-that-use-quantum-computers-to-improve-machine-learning%2F&tbnid=dTic8k98XNT7YM&vet=12ahUKEwi82sa2soHxAhUa0HMBHc0OB-MQMygCegUIARC_AQ..i&docid=FoTu-fkPlh2WbM&w=1200&h=900&q=quantum%20computer%20ibm&ved=2ahUKEwi82sa2soHxAhUa0HMBHc0OB-MQMygCegUIARC_AQ"
        />
        <h3 className="blog-heading">
          QISKIT: the open source language to program quantum computers
        </h3>
        <p>
          QISKIT, is a python library to program quantum computers. It has the
          ability to do a lot of things from running simulators to controlling
          each qubit with QISKIT Pulse and creating hardware devices through
          QISKIT Metal .This was a huge step up over the QASM language which was
          earlier used.
        </p>
        <p>
          Qiskit Github is the actively maintained repositories where
          contributors, amateurs or professionals, can access the backend and
          make the library more efficient through open source contributions.
          People with adequate knowledge can help in taking a step towards real
          quantum computers and solve some real-world problems using them.
        </p>
        <h3 className="blog-heading">Quantum Education</h3>
        <p>
          One of the setbacks that quantum computing enthusiasts have faced is
          the lack of good resources. There were only a handful of great books
          and if you wanted to learn anything in depth you had to go through a
          plethora of research papers. The researchers at IBM realized this
          problem and started providing different online courses, an interactive
          textbook and challenges to test how many people have benefited from
          the resources provided by them. The summer school hosted in 2020 was a
          two week intensive training for anyone who was interested to learn
          more about the field, there were lectures by many amazing researchers
          who shared their knowledge in various sub-fields, ranging from quantum
          error correction to simulation of LiH molecule on real hardware
          devices using Variational EigenSolver.
        </p>
        <p>
          IBM released The QISKIT textbook in 2017, one of the landmark
          achievements in the history of Quantum Computing. It is one of a kind
          interactive textbook which has been written using Jupyter Notebook and
          can be used for experimenting with given examples that have been
          provided in the book.
        </p>
        <img className="blog-img" src={img_4} alt="" />
      </div>
    </div>
  );
};

export default Blog1;
