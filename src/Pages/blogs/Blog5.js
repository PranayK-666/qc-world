import './blog.css';
import ionq from '../../assets/img/ionq.jpeg';
import rigettiChip from '../../assets/img/rigetti-chip.png';
import Image from '../../components/UI/Image/Image';

const Blog5 = () => {
  return (
    <div className="blog">
      <p className="blog-title">Top Quantum StartUps to look out For</p>
      <div className="blog-content">
        <p>
          Quantum technology is a novel and rapidly developing sector with
          limitless promise. This field has exploded in popularity in recent
          years because it has the ability to tackle many of the challenges that
          we currently face. These devices will be able to process far larger
          amounts of data in a fraction of the time.
        </p>
        <p>
          Researchers have predicted that by the year 2026, the overall worth of
          the QuantumTechnology industry will reach $31.57 billion. With IBM, D
          Wave and Rigetti all launching commercial quantum computers the field
          has seen a huge surge in the number of startups who have been able to
          land clients and funding.
        </p>
        <p>
          Here, we have listed a few startups that have shown tremendous
          potential in the past couple of years for the growth of quantum
          technology and its applications.
        </p>
        <h3 className="blog-heading">IonQ</h3>
        <p>
          While most major firms, such as IBM and Google, are rushing to develop
          Transmon qubits, IonQ is concentrating on developing Ion trapped
          quantum computers. They claim that superconducting qubits have shown
          to be error prone, their devices on the other hand trap individual
          ionized ytterbium atoms as their qubits.
        </p>
        <p>
          The communication between qubits is provided by precisely aimed laser
          beams, these laser beams also help cool the system and provide a lot
          of advantages over the more widely used LC resonators.
        </p>
        <p>
          IonQ is the first company to present a 32 qubit system which works on
          ion traps;the device has broken multiple records as it is much less
          prone to noise as compared to other quantum computers. The researchers
          say that this is just a stepping stone and they are currently working
          on much bigger systems. If they are able to prove the prowess of their
          systems over the Transmon systems they will change the face of the
          Industry as we know it.
        </p>
        <Image
          imgName={ionq}
          imgCaption="The perfect 32 Qbit system by IonQ"
          imgSource="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmms.businesswire.com%2Fmedia%2F20210406005388%2Fen%2F869563%2F5%2FIonQ_system_enclosure_2021_credit_Erin_Scott.jpg&imgrefurl=https%3A%2F%2Fwww.businesswire.com%2Fnews%2Fhome%2F20210406005388%2Fen%2FAirbus-Ventures-Commends-Quantum-Computing-Leader-IonQ-Inc.-on-Upcoming-Public-Debut&tbnid=GA9mc-h3IZi2kM&vet=12ahUKEwjHnMOxr57xAhXQeisKHfm4B8cQMygGegUIARCpAQ..i&docid=BiWfbOawKnpUgM&w=3000&h=1996&q=ionq&ved=2ahUKEwjHnMOxr57xAhXQeisKHfm4B8cQMygGegUIARCpAQ"
        />
        <h3 className="blog-heading">Q-CTRL</h3>
        <p>
          The biggest issue facing this generation's quantum computers, often
          known as the NISQ devices, is decoherence and noise. The information
          in quantum processors is extremely fragile, and interactions with the
          environment cause errors also known as noise and decoherence. The word
          NISQ itself stands for noisy intermediate scale quantum machines, the
          fact that scientists had to coin a term for it shows how big of a
          problem we have at our hands.
        </p>
        <p>
          Q-CTRL uses software based solutions in order to tackle the problem of
          decoherence and noise. They provide different packages in order to
          deal with noise at gate level, improve measurements and to utilize the
          full potential offered by cloud based quantum computing. The
          Australian company also provides tools for modifying algorithms such
          that they will be less prone to errors.
        </p>
        <p>
          Softwares by Q-CTRL will be able to increase the scope of the NISQ
          devices and will be able to help uplift the Quantum Computing
          Community.
        </p>
        <h3 className="blog-heading">1QBit</h3>
        <p>
          Using quantum computers, the 1Qbit firm hopes to solve the industry's
          most computationally difficult challenges. They give their users the
          opportunity to connect to hardware via 1QCloud, pre-built algorithms
          that may be customised based on the needs, tools for various types of
          testing, and a tool that can convert quantum computing difficulties
          into polynomial form.
        </p>
        <p>
          They have also worked in collaboration with other quantum software
          companies in order to find better applications of quantum computers.
          One of their recent projects with Accenture labs and Biogen is to
          leverage these devices for molecular comparison. This can be used in
          order to accelerate drug discovery. The procedure for creating a drug
          starts by early phase drug design and molecular comparison, this is
          where the software created by 1Qbit comes in. This will help
          scientists cut down the cost and time for creating a new drug.
        </p>
        <p>
          1Qbits work will turn out to be beneficial for the whole mankind, one
          example would be using their above mentioned project with Biogen and
          Accenture to cure the next Pandemic.
        </p>
        <h3 className="blog-heading">Rigetti Computing</h3>
        <p>
          They are a full stack quantum computing company. Working on both
          hardware such as superconducting quantum integrated circuits to
          software for design and applications of quantum algorithms.
        </p>
        <p>
          In 2017, they launched Forest there own cloud which gives the access
          to devices and provides them with an interface upon which the users
          can use python and Quil (Quantum Information Language) to create and
          execute their algorithms. FAB-1 is one of the most high tech rapid
          prototyping fabrication labs and is owned by Rigetti computing, this
          empowers them to produce transmon qubit chips at a fast pace. Their
          circuits are also designed in FAB-1.
        </p>
        <p>
          Rigetti Computing is one of the leading corporations in quantum
          computing and has been compared to Google and IBM by Peter Diamandis,
          the founder of{' '}
          <a href="https://www.xprize.org/" target="_blank" rel="noreferrer">
            X-Price.
          </a>
        </p>
        <Image
          imgName={rigettiChip}
          imgCaption="Quantum Integrated chip"
          imgSource="https://www.rigetti.com/"
        />
        <h3 className="blog-heading">Post Quantum</h3>
        <p>
          In the next few years anyone with enough knowledge and a big enough
          quantum computer will be able to get any information in the world by
          breaking the current encryption schemes. As we are aware that most of
          the transactions use RSA encryption and these can be easily broken
          using the famous Shor’s algorithm.
        </p>
        <p>
          Post Quantum focuses on providing protection of information against
          such quantum threats. They offer a wide range of cryptography
          solutions for commercial as well as government clients, making it
          their duty to make sure that data of each individual remains safe.
        </p>
        NTS-KEM, one of the best quantum cryptography algorithms, is one of the
        methods that they have been implementing in their softwares.NTS stands
        for “Never the Same”, the name comes from the fact that the ciphertext
        that is used is always new and different, making the encryption
        extremely hard to break. This is the only code based algorithm to be a
        finalist in the NIST (National Institute of Standards and Technology)
        process to produce a new global standard.
        <p>
          This blog article merely scratches the surface of the field's
          expansion. Many more startups and researchers are pushing the limits
          of Quantum Computing on a daily basis, making the world a better
          place. I hope this motivated you to explore more and maybe start your
          own quantum start-up someday.
        </p>
        <h3 className="blog-heading">Resources:</h3>
        <ul>
          <li>
            <a
              href="https://www.researchandmarkets.com/reports/5317365/quantum-technology-market-by-computing?w=5&utm_source=CI&utm_medium=PressRelease&utm_code=jwnczw"
              target="_blank"
              rel="noreferrer"
            >
              Quantum Technology Market by Computing, Communications, Imaging,
              Security, Sensing, Modeling and Simulation 2021 - 2026
            </a>
          </li>
          <li>
            <a
              href="https://q-ctrl.com/solutions/quantum-computing/"
              target="_blank"
              rel="noreferrer"
            >
              Quantum Computing, Q-CTRL
            </a>
          </li>
          <li>
            <a href="https://ionq.com" target="_blank" rel="noreferrer">
              ionq.com
            </a>
          </li>
          <li>
            <a
              href="https://www.networkworld.com/article/3489098/10-hot-quantum-computing-startups-to-watch.html"
              target="_blank"
              rel="noreferrer"
            >
              10 hot quantum-computing startups to watch
            </a>
          </li>
          <li>
            <a
              href="https://www.startus-insights.com/innovators-guide/5-top-emerging-quantum-computing-startups/"
              target="_blank"
              rel="noreferrer"
            >
              5 Top Emerging Quantum Computing Startups
            </a>
          </li>
          <li>
            <a
              href="https://www.predictiveanalyticstoday.com/what-is-quantum-computing/"
              target="_blank"
              rel="noreferrer"
            >
              What is Quantum Computing? Top 18 Quantum Computing Companies
            </a>
          </li>
          <li>
            <a
              href="https://www.post-quantum.com"
              target="_blank"
              rel="noreferrer"
            >
              Protecting the world's information, today and tomorrow,
              post-quantum.com
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/1QBit"
              target="_blank"
              rel="noreferrer"
            >
              1QBit
            </a>
          </li>
          <li>
            <a
              href="https://newsroom.accenture.com/news/accenture-labs-and-1qbit-work-with-biogen-to-apply-quantum-computing-to-accelerate-drug-discovery.htm"
              target="_blank"
              rel="noreferrer"
            >
              Accenture Labs and 1QBit Work with Biogen to Apply Quantum
              Computing to Accelerate Drug Discovery
            </a>
          </li>
          <li>
            <a
              href="https://www.post-quantum.com/quantum-resistant-encryption/"
              target="_blank"
              rel="noreferrer"
            >
              Quantum-Resistant Encryption, post-quantum.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog5;
