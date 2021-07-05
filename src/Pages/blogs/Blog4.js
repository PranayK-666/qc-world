import './blog.css';
import quantumComputer from '../../assets/img/quantum-computer.jpeg';
import interatomicDistance from '../../assets/img/interatomic-distance.png';
import labAnimal from '../../assets/img/lab-animal.jpeg';
import Image from '../../components/UI/Image/Image';

const Blog4 = () => {
  return (
    <div className="blog">
      <p className="blog-title">
        How quantum computers will be able to save billions of lab animals
      </p>
      <div className="blog-content">
        <p>
          Previous decades have witnessed new developments and advancements in
          medical technologies, healthcare facilities, cures, treatments for
          various ailments, and the production of newer pharmaceuticals.
        </p>
        <p>
          It is critical to ensure that treatments and medications do not have
          any hazardous or severe side effects on the Human Body.
        </p>
        <p>
          We've made huge strides in terms of experimentation procedures,
          testing equipment for evasive substances, and virtual testing
          environments. However, hundreds of millions of animals are still
          employed in laboratories every year for drug testing, medical
          training, biological investigations, and even aesthetic testing. For
          the sake of experimentation, thousands of innocent animals have been
          killed in these studies. This method is Painful, Costly and
          Inefficient.
        </p>
        <Image
          imgName={labAnimal}
          imgCaption="Dogs are one of the common test subjects"
          imgSource="https://www.hsi.org/news-media/about/"
        />
        <p>
          Although these methods have proven reliable up to this point, recent
          research has been not less than a boon in demonstrating that utilising
          electrical simulations and Chemical Databases, we can simulate
          chemical reactions that occur inside the body. There exist plenty of
          databases containing information about properties of different
          molecules, which can be used for this purpose.
        </p>
        <p>
          This implies that no physical living subjects are required for the
          experiment. This may appear to be relatively simple, it is not
          possible to accomplish on ordinary computers. Even super and cluster
          computers can't recreate the chemical events that occur inside the
          human body.
        </p>
        <p>So is there a way to solve this problem?</p>
        <p>
          Well, Quantum Computers have shown an exponential speed over classical
          computers. According to research, using these devices, it is feasible
          to replicate chemical reactions with a high degree of precision. The
          results of these computations will be used to determine which
          compounds are potentially detrimental or useful to our bodies.
        </p>
        <p>
          This saves a lot of resources - time, money, and the misery that these
          poor living beings must endure.
        </p>
        <h3 className="blog-heading">What are we trying to simulate?</h3>
        <p>
          Chemical equations, as we all know, are made up of molecules, each of
          which has its own set of characteristics. These qualities will reveal
          everything we need to know about our medicine, from its efficacy to
          potential negative effects.
        </p>
        <p>
          The ideal software for these simulations would take molecules from the
          chemical that is injected into the body and tell us the outcome of the
          reactions inside. These molecules can then be further analyzed as we
          will see later.
        </p>
        <p>What would be the governing principle for this software?</p>
        <p>
          Quantum mechanical equations, such as the Many-Body Schrodinger
          Equation, will be solved at the atomic level, taking into
          consideration all of the molecules. The numeric values obtained from
          these computations will be compared with those in the database to see
          which molecules are produced as time passes. Scientists will examine
          the outcomes of our computations in order to advance pharmaceuticals
          that will be able to cure ailments and eliminate potentially dangerous
          drugs.
        </p>
        <p>
          Let's take a deeper look into the Quantum mechanics of all this. The
          Hamiltonian(H), the Wave Function, and the Energy of each State, all
          of which evolve over time, make up the Schrodinger equation. The main
          element that defines our system is the Hamiltonian.
        </p>
        <p>
          Our main goal is to find the Hamiltonian's eigen equations and
          eigenvalues. These are, respectively, the Wavefunction and the Energy.
          This is simple for a few atoms, but as the number of atoms grows, the
          number of terms inside the Hamiltonian grows exponentially, creating a
          gigantic mess that is unsolvable by conventional computers.
        </p>
        <p>Here quantum computers come to the rescue !</p>
        <h3 className="blog-heading">
          Why are quantum computers better at simulating chemical equations than
          classical computers?
        </h3>
        <p>
          Perhaps because chemical equations can be predicted using Quantum
          Mechanical laws, and Quantum Computers have the word "Quantum" in
          their name. This answer is amusing yet incorrect, however the correct
          answer isn't far away.
        </p>
        <p>
          Qubits, or quantum bits, are the most basic unit of quantum computers,
          and these qubits follow the laws of quantum mechanics which leads to
          the exponential speed up. These properties can be used by certain
          algorithms for modelling molecules. Variational Quantum EigenSolver is
          one such algorithm.
        </p>
        <Image
          imgName={quantumComputer}
          imgCaption="Quantum Computer"
          imgSource="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.roche.com%2Fdam%2Fjcr%3A2f49f503-1a5d-4c04-b701-5fb2ce9491d0%2Fen%2Fquantum-computer-740.jpg&imgrefurl=https%3A%2F%2Fwww.roche.com%2Fquantum-computing.htm&tbnid=jlUl4xBhBJe-QM&vet=12ahUKEwiJw4zs-JfxAhVTTSsKHVvpD2cQMygCegUIARDQAQ..i&docid=ashG34OkTNjiaM&w=740&h=416&q=quantum%20computers&ved=2ahUKEwiJw4zs-JfxAhVTTSsKHVvpD2cQMygCegUIARDQAQ"
        />
        <h3 className="blog-heading">Variational Quantum EigenSolver</h3>
        <p>
          The Variational Quantum Eigensolver is one of the most powerful
          quantum algorithms and is used for determining a molecule's ground
          state. The fact that it has been able to achieve workable outcomes
          employing NISQ Devices is the key reason for its fame.
        </p>
        <p>
          Quantum States are another name for the Wave Functions we discussed
          earlier. Quantum circuits can be used to represent these states. In
          VQE, we make a guess at a circuit that will be able to determine a
          molecule's quantum state; this circuit is called ansatz. The ansatz
          circuit is constructed using some fixed components and a few variable
          parameters. With each iteration, the parameters are tweaked in order
          to discover the lowest possible energy for our Quantum State (the most
          stable), which will reveal a lot about the molecule.
        </p>
        <p>
          VQE is a fantastic Algorithm that has been used to model real-world
          molecules like LiH. Researchers were able to find the interatomic
          distance between lithium and hydrogen. It can run on Noisy Quantum
          Computers because it incorporates the best aspects of both classical
          and quantum computing. The ansatz or our guess quantum circuit is the
          quantum part, the classical part is where we optimize the parameters
          of our ansatz in order to get the ground state energy.
        </p>
        <p>
          Despite the fact that we are still a long way from replicating
          chemical reactions inside human beings, VQE serves as confirmation
          that we are on the correct road and that quantum computers can really
          simulate Molecules.
        </p>
        <Image
          imgName={interatomicDistance}
          imgCaption="Simulating the interatomic distance between the LiH molecule using VQE"
          imgSource="https://arxiv.org/pdf/1704.05018.pdf"
        />
        <p>
          For a more depth intro to VQE look at this{' '}
          <a
            href="For a more depth intro to VQE look at this research paper"
            target="_blank"
            rel="noreferrer"
          >
            research paper
          </a>
        </p>
        <h3 className="blog-heading">Simualtions over Animal testing</h3>
        <p>
          One important consideration is that animal testing is fraught with
          controversy. Scientists reported in the Journal of the American
          Medical Association that medicines discovered in animals are not
          scalable to humans with identical conditions. In addition, diseases
          administered in laboratories are not the same as diseases that occur
          naturally in individuals.All of this debate makes animal testing even
          more implausible.
        </p>
        <p>
          And, while it may seem impossible to completely eliminate animal
          testing, it is conceivable to supplement it with Quantum Computational
          Power, which will make the procedure faster, cheaper, and save many
          lives in the process
        </p>
        <h3 className="blog-heading">References</h3>
        <ul>
          <li>
            <a
              href="https://www.peta.org/issues/animals-used-for-experimentation/animals-used-experimentation-factsheets/animal-experiments-overview"
              target="_blank"
              rel="noreferrer"
            >
              Facts and Statistics About Animal Testing, peta.org
            </a>
          </li>
          <li>
            <a
              href="https://www.peta.org/issues/animals-used-for-experimentation/"
              target="_blank"
              rel="noreferrer"
            >
              Animals Used for Experimentation, peta.org
            </a>
          </li>
          <li>
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3123518/#:~:text=Animals%20have%20been%20used%20repeatedly%20throughout%20the%20history%20of%20biomedical%20research.&text=Ibn%20Zuhr%20(Avenzoar)%2C%20an,applying%20them%20to%20human%20patients"
              target="_blank"
              rel="noreferrer"
            >
              Animal Testing and Medicine, ncbi
            </a>
          </li>
          <li>
            <a
              href="https://venturebeat.com/2020/05/16/quantum-computing-will-eventually-help-us-discover-vaccines-in-days/"
              target="_blank"
              rel="noreferrer"
            >
              Quantum computing will (eventually) help us discover vaccines in
              days, VentureBeat.com
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@lana.bozanic/the-variational-quantum-eigensolver-efb8fab14c85"
              target="_blank"
              rel="noreferrer"
            >
              The Variational Quantum Eigensolver, medium.com
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/1704.05018.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Hardware-efficient Variational Quantum Eigensolver for Small
              Molecules and Quantum Magnets, arxiv.org
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog4;
