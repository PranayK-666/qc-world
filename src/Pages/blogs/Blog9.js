import './blog.css';

const Blog9 = () => {
  return (
    <div className="blog">
      <p className="blog-title">
        Which Quantum Computing language to use for starting your own Quantum
        Journey
      </p>
      <div className="blog-content">
        <p>
          Since its inception in the 1980s, quantum computing has grown at an
          exponential rate. Until recently, being a researcher at a world-class
          facility was the only way to get access to a real Quantum Computer.
          However, now that Quantum Computers are available in the cloud, the
          process has gotten much easier. This has made it feasible for anybody
          to set out on their own Quantum adventure.
        </p>
        <p>
          The job of a Quantum Software engineer is to create and build
          algorithms that use Quantum Hardware to address real-world problems.
          These algorithms are deconstructed into smaller quantum circuits,
          which are then easily implemented using Quantum Programming languages.
          While there are many packages for Quantum Computing to choose from,
          picking which one to start with might be difficult. This blog post
          will tell you of your options, allowing you to pick the ideal one for
          you. So that you can start experimenting with Quantum Circuits
          yourself.
        </p>
        <h3 className="blog-heading">Choosing a programming language</h3>
        <p>
          Software engineers work with a variety of programming languages- like
          C++, Python, Java, and Fortran. Python is, in my opinion, the most
          recommended one for Quantum Programming!
        </p>
        <h3 className="bolg-heading">
          Why is python better than other programming languages ?
        </h3>
        <p>
          Python is a widely used programming language with a simple syntax and
          a large number of features. It is significantly easier to grasp, and
          Python code is frequently 3-6 times shorter than Java code and 5-10
          times shorter than C++ code, resulting in significant time savings. It
          is also commonly used in machine learning, artificial intelligence,
          web development, and now Quantum Computing.
        </p>
        <p>
          Python's popularity and widespread use have resulted in a plethora of
          educational resources. There are numerous tutorials and books
          available, as well as interactive websites that allow you to practise
          your skills.
        </p>
        <p>
          All of the preceding reasons are good. But the best reason to start
          with Python is because there are many more Quantum Programming
          packages available than for any other programming language.
        </p>
        <h3 className="blog-heading">Different Quantum Programming Packages</h3>
        <p>
          Packages are the fundamental components of every programme. The import
          command in Python is used to incorporate features from various
          packages into a programme. Quantum Programming modules are used to
          create higher level circuits and algorithms without having to start
          from scratch.
        </p>
        <h3 className="blog-heading">QISKIT</h3>
        <p>
          Qiskit is one of the most developed packages and is provided by IBM.
          It is divided into four sections: Terra, Ignis, Aqua, and Aer. QISKIT
          Terra is the foundation that enables us to create circuits, Aqua
          contains all of the Quantum algorithms, Ignis' primary function is to
          battle noise and error, and Aer provides simulators for testing our
          circuits and algorithms. All circuits designed with QISKIT can be
          implemented on IBM Quantum Experience's real hardware.
        </p>
        <h3 className="blog-heading">Cirq</h3>
        <p>
          Cirq is a software library developed by Google for constructing,
          editing, and optimising Quantum Circuits. Cirq's principal goal has
          been to use NISQ-era technology to tackle real-world challenges.
        </p>
        <p>
          In 2019, Google scientists used their own programming language and the
          Google Sycamore device to achieve Quantum Supremacy.
        </p>
        <p>
          Algorithms designed by Cirq can be executed on Google's Quantum
          machines.
        </p>
        <h3 className="blog-heading">Q#</h3>
        <p>
          Q# is Microsoft’s package which enables you to develop Quantum
          algorithms for NISQ devices as well as future technology. . The
          development kit for Q# enables users to construct and implement
          various algorithms, as well as optimize Quantum Circuits using compute
          resources from Microsoft Azure.
        </p>
        <h3 className="blog-heading">Ocean</h3>
        <p>
          D-Wave provides us with Ocean software which is a suite of tools for
          solving problems using Quantum Computers. Ocean can be connected to
          the Leap platform provided by D-Wave for running jobs on real hardware
          as well as simulators.
        </p>
        <h3 className="blog-heading">PyQuill</h3>
        <p>
          PyQuil is a Python package provided by Rigetti Computing, a full stack
          quantum computing business. It creates, compiles, and executes
          algorithms and circuits using Quil (Quantum Instruction Language).
          PyQuil-created programmes can run on Quantum Virtual Machines or
          Quantum Cloud Services provided by Rigetti Computing.
        </p>
        <hr />
        <p>
          We just reviewed the top five software packages, but there are many
          others in the works that could take over in the next few years. I hope
          that this helps you to find the perfect Quantum Package for you.
        </p>
        <h3 className="blog-heading">Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.python.org/doc/essays/comparisons/#:~:text=Python%20programs%20are%20generally%20expected,much%20less%20time%20to%20develop.&text=For%20these%20reasons%2C%20Python%20is,together%20make%20an%20excellent%20combination"
              target="_blank"
              rel="noreferrer"
            >
              Comparing Python to Other Languages, python docs
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/pulse/programming-quantum-computing-what-language-should-you-marchenkova/"
              target="_blank"
              rel="noreferrer"
            >
              Programming for Quantum Computing: What language should you
              learn?, LinkedIN
            </a>
          </li>
          <li>
            <a
              href="https://qiskit.org/documentation/stable/0.24/the_elements.html"
              target="_blank"
              rel="noreferrer"
            >
              The Qiskit Elements, QISKIT docs
            </a>
          </li>
          <li>
            <a
              href="https://quantumai.google/cirq"
              target="_blank"
              rel="noreferrer"
            >
              Cirq docs
            </a>
          </li>
          <li>
            <a
              href="https://azure.microsoft.com/en-us/resources/development-kit/quantum-computing/"
              target="_blank"
              rel="noreferrer"
            >
              Q# and the Quantum Development Kit
            </a>
          </li>
          <li>
            <a
              href="https://docs.ocean.dwavesys.com/en/stable/"
              target="_blank"
              rel="noreferrer"
            >
              D-Wave Ocean Software Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rigetti/pyquil"
              target="_blank"
              rel="noreferrer"
            >
              Rigetti/pyQuill, GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog9;
