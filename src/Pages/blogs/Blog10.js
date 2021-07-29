import './blog.css';
import img1 from '../../assets/img/1st_depth.png';
import img2 from '../../assets/img/2nd_depth.png';
import img3 from '../../assets/img/3rd_depth.png';
import img4 from '../../assets/img/4th_depth.png';
import img5 from '../../assets/img/5th_depth.png';
import Image from '../../components/UI/Image/Image';

const Blog10 = () => {
  return (
    <div className="blog">
      <p className="blog-title">The Depth of a Quantum Circuit</p>
      <div className="blog-content">
        <p>
          Let’s visit some history of Quantum Mechanics. Computers based on
          Quantum Mechanics laws were thought unworkable in the 1970s. The
          quantity of inaccuracy in each Qubit was the primary reason behind
          this. But thanks to the researchers working world wide for more than
          four decades we can now execute algorithms on Quantum Computers by
          converting them into Quantum Circuits. However far we may have come,
          the problem of error in Qubits still persists.
        </p>
        <p>
          The amount of error scales linearly with single qubit gates and
          exponentially when we use CNOT gates for entangling multiple qubits.
          As a result, the bigger the number of gates in a Quantum Circuit, the
          lower the accuracy of Quantum States. So we want to have a circuit
          which can execute the algorithm we want which has the least number of
          gates. But how can you compare the number of gates in two Quantum
          Circuits with numerous qubits? Depth metric for the win!!
        </p>
        <p>
          The depth of a Quantum Circuit is the length of the longest path from
          the preparation to the measurement gate, moving forward in time along
          qubit wires. Each gate in this longest path is considered as one unit.
          Generally theoreticians only consider Unitary operations to be a part
          of the depth. So the final measurement is often not included. But
          quantum programming packages such as QISKIT also include measurement
          while calculating the depth of the circuit. From my perspective I
          think it should be calculated as measurement also leads to error.
        </p>
        <p>
          The reason we are actually looking for the longest path is because we
          want to see how much time it takes for a circuit to execute. Often one
          qubit has to wait due to entanglement with another. To give you an
          example, both the qubits in the below image start with the hadamard
          gate, then the qubit 0 waits until the X gate can be applied on qubit
          1. So the total amount of time taken is proportional to the
          --H---X--CNOT-- path because the qubit 0 has to wait until qubit 1 is
          properly operated upon.
        </p>
        <Image imgName={img1} />
        <h3 className="blog-heading">
          Calculating the depth of Quantum Circuits
        </h3>
        <p>
          All you have to do is find the longest path in the whole circuit,
          taking into consideration all the gates present, especially the CNOT
          gates. Remember we do not consider the barrier in the depth because it
          is technically not an operation on the quantum state rather, just an
          instruction to the transpiler.
        </p>
        <p>Let’s take a look at a few examples,</p>
        <ul>
          <li>
            For the above circuit I have marked the longest path that has to be
            taken and we can clearly see that the depth of this circuit is 4.
            <Image
              imgName={img2}
              imgCaption="The red line indicates the longest path and the circuit depth"
            />
          </li>
          <li>
            If we apply the famous Quantum Fourier transform algorithm for two
            qubits we obtain something like this.
            <Image
              imgName={img3}
              imgCaption="QFT for two qubits
            "
            />
            Again I have used the red marker to show which is the longest path
            and we see that the depth of the circuit is 4.
          </li>
          <li>
            This circuit is a random circuit and when you follow the longest
            path you will find that there are 5 gates and the depth here is 5.
            <Image imgNAme={img4} imgCaption="Random circuit with a depth 5" />
          </li>
        </ul>
        <h3 className="blog-heading">On a Side Note:</h3>
        <p>
          One thing to keep in mind while calculating the depth of a Quantum
          Circuit is that when the circuit goes through the process of
          transpilation, the circuit’s depth will probably change. For the 2nd
          example of QFT that we looked at above, when we map it to ibmq_bargota
          the circuit that we get is the following -
        </p>
        <Image
          imgName={img5}
          imgCaption="QFT circuit when transpiled onto ibmq_bargota"
        />
        <p>
          It is clearly visible that the depth increased from 4 to 12. This
          happens because the transpiler convertes the circuits according to the
          backends configuration.
        </p>
        <hr />
        <p>Hope you learned something new about Quantum Computing today.</p>
        <h3 className="blog-heading">Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.nap.edu/read/25333/chapter/6"
              target="_blank"
              rel="noreferrer"
            >
              Quantum Computing with Noisy Qubits
            </a>
          </li>
          <li>
            <a
              href="https://quantumcomputing.stackexchange.com/questions/5769/how-to-calculate-circuit-depth-properly"
              target="_blank"
              rel="noreferrer"
            >
              Quantum Computing, StackExchange
            </a>
          </li>
          <li>
            <a
              href="https://quantumcomputing.stackexchange.com/questions/14431/whats-meant-by-the-depth-of-a-quantum-circuit"
              target="_blank"
              rel="noreferrer"
            >
              Quantum Computing, StackExchange
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/arnaldo-gunzi-quantum/how-to-calculate-the-depth-of-a-quantum-circuit-in-qiskit-868505abc104"
              target="_blank"
              rel="noreferrer"
            >
              How to calculate the depth of a quantum circuit in Qiskit?,
              Medium.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog10;
