import './blog.css';
import spin_qubit from '../../assets/img/spin_qubit.jpeg';
import ion_qubit from '../../assets/img/ion_qubit.jpeg';
import transmon_qubit from '../../assets/img/transmon_qubit.png';
import Image from '../../components/UI/Image/Image';

const Blog3 = () => {
  return (
    <div className="blog">
      <p className="blog-title">
        Different types of hardware of quantum computer
      </p>
      <div className="blog-content">
        <p>
          At the moment you start using your laptop, multiple processes and
          computations are performed in order to make this possible. Bits,
          registers, and logic gates are the most common types of hardware used
          in a typical computer to do these tasks. Quantum computers, on the
          other hand, work with a distinct type of technology. Qubits, quantum
          registers and logic gates are the building blocks of these quantum
          computers. While most of the names sound similar there working is
          worlds apart.
        </p>
        <p>
          We're not attempting to construct a Quantum "Computer," but rather a
          Quantum "Processor" that can be controlled using a regular interface
          similar to that found on our laptops. These Quantum Processors are
          made up of qubits.The hardware system must fulfil a number of
          requirements.
        </p>
        <p>
          The first property which must be fulfilled is the ability to hold the
          initial state. We must be able to put our system into a starting point
          from where it will be able to follow different properties of quantum
          computing. Superposition or entanglement of two quantum states, for
          example.This beginning point is usually the ground state, where the
          system's energy is at its lowest.
        </p>
        <p>
          The second property is performing a universal family of unitary
          transformations on one or more qubits.This is how quantum gates are
          applied to qubits, which are crucial for the implementation of these
          systems. Larger algorithms are decomposed into gates, which are then
          implemented one at a time.
        </p>
        <p>
          The third property is that the system must be able to withstand
          measurement. This is akin to the famous Schrodinger's cat, where the
          cat is either dead or alive when you open the box. Similarly, when we
          measure the quantum state, it collapses into one of two possible
          states. If a system possesses the three features listed above, it can
          function as a quantum processor. Let's have a look at some of the
          systems that are currently being investigated as potential quantum
          processors.
        </p>
        <h3 className="blog-heading">Spin Qubits</h3>
        <p>
          Using electron spin as Qubits will appear intuitive to people who have
          attended a Quantum Mechanics course. Because electrons have all of the
          traits listed above, their spin can only be in one of two states: up
          or down.
        </p>
        <p>
          These electrons can be isolated using Quantum Dots, which are
          extremely small semiconducting materials that allow electrons to
          behave independently of other subatomic particles in their
          environment. Alternating Magnetic Fields may be used to control the
          quantum state of the electrons in these nanoparticles, and measurement
          can be done using a magnetic field perpendicular to the one used to
          manipulate the state of our system.Multi Qubit gates can be
          implemented by decreasing the potential barrier between any two
          qubits.
        </p>
        <p>
          Spin Qubits can operate at temperatures of 1-4K, which is a
          significant advantage over other systems. However, because to the
          presence of additional electrons and nuclei (essentially any subatomic
          particle) in the Quantum Dot, they confront a greater problem:
          excessive noise.
        </p>
        <Image
          imgName={spin_qubit}
          imgCaption="Intel has been developing spin qubit systems"
          imgSource="https://www.google.com/imgres?imgurl=https%3A%2F%2Fnewsroom.intel.com%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F04%2FSpin-Qubit-Intel-1.jpg&imgrefurl=https%3A%2F%2Fnewsroom.intel.com%2Fnews%2Fintel-qutech-demonstrate-high-fidelity-hot-qubits-practical-quantum-systems%2F&tbnid=tLBx8tmPCBkV1M&vet=12ahUKEwivh6ubn5_xAhXEQX0KHXq1BpQQMygBegUIARCgAQ..i&docid=JgM1ZXjwmYPzFM&w=7360&h=4912&q=spin%20qubits%20quantum%20dots&hl=en&ved=2ahUKEwivh6ubn5_xAhXEQX0KHXq1BpQQMygBegUIARCgAQ"
        />
        <h3 className="blog-heading">Ion Trapped Qubits</h3>
        <p>
          Instead of using the spin states as the basis for computation, Ion
          trapped qubits use Ions which are trapped in space using
          electromagnetic fields. The Ion trap used by quantum computers was
          designed in the 1950s by Wolfgang Paul, one of the leading pioneers of
          Quantum Mechanics. He used an oscillating electric field at radio
          frequency to create potential in the form of a saddle; the ions are
          trapped in the centre of the saddle point.
        </p>
        <p>
          These qubits can be created in one of two ways: using two ground state
          hyperfine levels or using one ground state and one excited state. The
          first is referred to as a hyperfine qubit, while the second is
          referred to as optical qubits.
        </p>
        <p>
          The first requirement is initialization of the quantum state is done
          by using optical pumping. The excited ion is generated by a laser, and
          subsequently decays to a state that is not in resonance with the
          laser, which can be utilized as your ground state. This ground state
          can be further manipulated into other states by changing the
          electromagnetic field which has been applied for creating the trap .
          The final procedure we want is measurement, this is also performed
          using a laser which is only coupled to one of the states, causing a
          photon to be created when the qubit collapses in this state, which is
          then detected.
        </p>
        <p>
          Ion trapped qubits have shown promising results and IonQ has been able
          to build a 32 qubit record breaking quantum computer using trapped ion
          qubits.
        </p>
        <Image
          imgName={ion_qubit}
          imgCaption="IonQ 32-qubit trapped ion qubit chip"
          imgSource="https://www.forbes.com/sites/moorinsights/2020/10/07/ionq-releases-a-new-32-qubit-trapped-ion-quantum-computer-with-massive-quantum-volume-claims/"
        />
        <h3 className="blog-heding">Superconducting qubits</h3>
        <p>
          Both spin and ion trapped qubits have exploited naturally occurring
          atoms in their construction. On the other hand, superconducting qubits
          are entirely man-made. This offers us an advantage because we can
          control all of our system's parameters.
        </p>
        <p>
          The Transmon qubit is basically an LC oscillator with a non-linear
          inductor, a Superconducting Josephson Junction, in place of the linear
          inductor. While a linear LC oscillator acts like a harmonic quantum
          system with equispaced energy levels, a non-linear one acts like an
          anharmonic oscillator. We leverage this anharmonicity and use this to
          isolate the ground and the first excited state.
        </p>
        <Image
          imgName={transmon_qubit}
          imgCaption="4 qubit device using Transmon Qubit by IBM"
          imgSource="https://en.wikipedia.org/wiki/Transmon"
        />
        <p>
          The state of our qubit system can be controlled by a drive line via
          capacitive coupling. The drive line delivers an Electric field at
          microwave range which evolves the Hamiltonian of the system and state
          of the qubit oscillates between the ground and the excited state.
          Measurement is performed via another coupled LC oscillator. This is
          fed a pulse that is reflected by the state of the qubit; the reflected
          pulse can then be analysed to obtain the measurement.
        </p>
        <p>
          Superconducting Qubits are widely acknowledged for usage in quantum
          computers, and companies like IBM and Google have employed them to
          create their own devices. One of the most interesting things you can
          do is experiment with these qubits yourself using{' '}
          <a
            href="https://qiskit.org/documentation/apidoc/pulse.html"
            target="_blank"
            rel="noreferrer"
          >
            QISKIT pulse
          </a>{' '}
          , which is a part of IBM’s Quantum Experience.
        </p>
        <hr />
        <p>
          While most quantum enthusiasts have a lot of knowledge about the
          software and algorithms that we use on quantum computers, we lack the
          knowledge about what the hardware for these devices really looks like.
          My intention for this blog was to get you guys warmed up to the
          hardware side too, and for those of you who are more interested I
          strongly recommend{' '}
          <a
            href="https://www.youtube.com/watch?v=NZD9APb7ZtY&list=PLZvSQ75Jheh_gUgGPC4TM7Lw3sWmdXDkh"
            target="_blank"
            rel="noreferrer"
          >
            QISKIT summer school
          </a>{' '}
          lectures for a more indepth look into transmon qubits and this course
          on the Hardware of Quantum Computer on edX.
        </p>

        <h3 className="blog-heading">Resources</h3>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Trapped_ion_quantum_computer"
              target="_blank"
              rel="noreferrer"
            >
              Trapped_ion_quantum_computer, Wikipedia
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Spin_qubit_quantum_computer"
              target="_blank"
              rel="noreferrer"
            >
              Spin_qubit_quantum_computer, Wikipedia
            </a>
          </li>
          <li>
            Nielsen, Michael A.; Chuang, Isaac L. (2010). Quantum Computation
            and Quantum Information (2nd ed.). Cambridge: Cambridge University
            Press
          </li>
          <li>
            <a
              href="https://qiskit.org/textbook/ch-quantum-hardware/transmon-physics.html"
              target="_blank"
              rel="noreferrer"
            >
              Qiskit Textbook, Qiskit.org
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog3;
