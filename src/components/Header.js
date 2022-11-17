import { useState } from "react";

import { FaDog } from "react-icons/fa";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#264653",
  },
};

function refreshPage() {
  window.location.reload();
}

Modal.setAppElement("#root");

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="title" id="startShow">
        <h1>
          PuppyWorks <FaDog />
        </h1>
      </div>

      <div id="navbar">
        <ul className="navlink">
          <li href="#">
            <button className="btn btn-refresh" onClick={refreshPage}>
              Refresh
            </button>
          </li>
          <li href="#">
            <button className="btn" onClick={() => setModalIsOpen(true)}>
              Info
            </button>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h1>
          Welcome to PuppyWorks <FaDog />
        </h1>
        <h2>There are always paw prints on our hearts.</h2>
        <hr></hr>
        <h2>Author: Ng Jun Rong</h2>
        <h2>Special thanks to: Abel Choy</h2>
        <p>Assignment 2: Fetching Dog API</p>
        <p>Software: ReactJS REST-API</p>
        <p>Credit Images: dog.ceo/dog-api/</p>
        <p>Special note:</p>
        <p>
          Money can buy you a fine dog, but only love can make him wag his tail.
        </p>
        <p>Click on a dog's image to receive a surprise!</p>
        <div>
          <button className="btn" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
