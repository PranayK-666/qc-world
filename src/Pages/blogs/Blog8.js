import './blog.css';
import drive from '../../assets/img/my_journey_part2_1.png';
import drive2 from '../../assets/img/my_journey_part2_2.png';
import drive3 from '../../assets/img/my_journey_part2_3.png';
import math from '../../assets/img/my_journey_part2_4.png';
import math2 from '../../assets/img/my_journey_part2_5.png';
import math3 from '../../assets/img/my_journey_part2_6.png';
import math4 from '../../assets/img/my_journey_part2_7.png';
import sol from '../../assets/img/my_journey_part2_8.png';
import Image from '../../components/UI/Image/Image';

const Blog8 = () => {
  return (
    <div className="blog">
      <p className="blog-title">
        My journey through the IBM Quantum Challenge 2021 - Part 2
      </p>
      <div className="blog-content">
        <p>
          It took me 2 days to finish the first three questions and now I was up
          against the final two questions.
        </p>
        <h3 className="blog-heading">Challenge 4 : Transmon Qubits</h3>
        <p>
          My blog post about quantum hardware must have warmed you up for the different 
          types of ways of making physical qubits. Transmon Qubits are currently the most 
          extensively used of all the options available and a lot of corporations have invested heavily in them, including IBM.
          The major distinction between classical and quantum physics is that in quantum physics, practically everything
          is “quantized”. To put it another way, properties can only have discrete values. So energy is quantized in levels 
          too, of which the ground state and the first excited state of the Physical Quantum system are used in the creation of qubits.

        </p>
        <p>
          If you haven’t gotten a chance to go through my approach of how I dealt with the first 3 questions, 
          then please refer to my My journey through the IBM Quantum Challenge 2021 - Part 1 . The 4th challenge was 
          to find the optimum pulse to go from the first excited level to the second excited level. 
          In my opinion this is not used a lot in real-world applications but it sure was interesting. 
        </p>
        <h3 className="blog-heading">Transition frequency |0> to |1></h3>
        <p>
          The first step is to determine the frequency of transition between the
          ground and first excited states (|0> to |1>).
        </p>
        <p>
          This is accomplished by first establishing an array of frequencies
          between the expected values and then evaluating each choice
          individually. The data is then used for curve fitting, and the driving
          frequency is the most optimum frequency for the transition to occur.
        </p>
        <Image imgName={drive} imgCaption="Drive Frequency" imgSource="" />
        <p>For my case the drive frequency came out to be 5.237599 GHz.</p>
        <h3 className="blog-heading">Drive Amplitude |0> to |1></h3>
        <p>
          The next step is to determine the pulse's driving amplitude. This
          needs a technique similar to step one, only this time we incrementally
          increase the Drive Amplitude until we reach the optimal transition
          level for evolving |0> to |1>.
        </p>
        <Image imgName={drive2} imgCaption="Drive Amplitude" imgSource="" />
        <p>The answer came out to be 0.205 for my case.</p>
        <h3 className="blog-heading">Transition Frequency |1> to |2></h3>
        <p>
          Finally lets find the transition frequency for |1> to |2>, this is
          what we are here for. The same procedure is followed but this is only
          executed once we have gotten to |1> level.(this is why I went through
          the trouble above).
        </p>
        <p>
          Same procedure will be repeated just between 4.8 to 5.1 as the end
          points this time.
        </p>
        <Image imgName={drive3} imgCaption="Final solution" imgSource="" />
        <p>
          The final solution that we get is 4.898233 GHz. This challenge was
          unscored and honestly this was the one that I enjoyed the most.
        </p>
        <h3 className="blog-heading">
          Challenge 5: Variational Quantum EigenSolver
        </h3>
        <p>
          VQE is the algorithm which finally made Feynman's dream come true,
          simulating quantum mechanical systems using Quantum Machines. The
          algorithm is able to use noisy quantum computers to find the ground
          state of the molecules. The results hence obtained are similar to
          experimental results proving the effectiveness of the algorithm.
        </p>
        <p>
          The success of VQE comes from the fact that it uses the best parts of
          both Quantum as well as Traditional Computers to solve the problem at
          hand.The Quantum Processor stores and manipulates the system's wave
          function, while the Classical Computer optimises the Quantum circuit
          and analyses the data received to determine the ground state energy.
        </p>
        <p>
          Let’s take a deeper look into the Variational Quantum Eigensolver.
        </p>
        <h3 className="blog-heading">Insert: *Some cool maths B)*</h3>
        <p>
         In quantum mechanics we often use the Hamiltonian of the system and solve the eigen 
         equations and eigenvalues for that particular hamiltonian. These eigenvalues and eigenvectors give us the energy states
         and different wave functions of our system. Following is the molecular Hamiltonian :
        </p>
        <Image imgName={math} />
        <p>
          If you look closely each term refers to kinetic or potential energy of
          the electrons or the nucleus. The wave function is the eigenequation
          of the Hamiltonian and the different eigenvalues correspond to
          different energy levels of the system.
        </p>
        <Image imgName={math2} />
        <p>
          So what we want is the minimum possible eigenvalue aka the ground
          state energy level for this hamiltonian. This is done by representing
          the wave function (psi) using a quantum circuit which we call the
          ansatz. This circuit is a variational circuit in other words the
          circuit is formed of rotation gates and CNOTs, the angle of rotation
          can be varied in order to get the lowest possible value of the
          eigenvalue.
        </p>
        <Image imgName={math3} />
        <Image imgName={math4} />
        <p>
          The challenge was to obtain the ground state energy for LiH with a
          minimum number of CNOT gates. This was the only challenge which
          actually affected our rank on the leaderboard. And ofcourse your boy
          was at the top with a score of 3.
        </p>
        <h3 className="blog-heading">Solution</h3>
        <p>
          We start by mapping the Molecular Hamiltonian to qubits using one of
          the mappers provided, I choose the Parity Mapper. Then the next step
          was to decide on the Ansatz. Initially I started with the UCCSD but
          the cost was above 200, so after some experimenting and a bit of
          discussion on the slack channel with other participants. I decided to
          go with TwoLocal because that uses the minimum number of CNOTs. The
          main idea is to have a lesser number of CNOTs and more single qubit
          gates, this will actually make the task of optimizers a bit hard but
          the noise will decrease. The final ansatz circuit is given below.
        </p>
        <Image imgName={sol} />
        <p>
          Finally after choosing the optimizer as COBYLA (this I choose on the
          basis of a little experimentation), I got the score 3. Yayy !!!
        </p>
        <hr />
        <p>
          The challenge was surely tough and time consuming but the amount of knowledge that I gained over those few days was tremendous.
          Earning the badge was a feeling I cannot put into words. Hopefully this got you familiarized with 
          questions of IQC 2021 and I will meet you all there next year. 
        </p>
        <h3 className="blog-heading">Resources</h3>
        <ul>
          <li>
            <a
              href="https://medium.com/qiskit/ibm-quantum-challenge-2021-heres-what-to-expect-65a303753ffb"
              target="_blank"
              rel="noreferrer"
            >
              IBM Quantum Challenge 2021: Here’s What to Expect, Medium.com
            </a>
          </li>
          <li>
            Most of the resources and images come from the jupyter notebook of
            the tests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog8;
