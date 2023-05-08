import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import BandsList from "./components/BandsList";
import ModalView from "./components/ModalView";

function App() {
  const [bands, setBands] = useState([]);
  const [modalBand, setModalBand] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    const podaci = axios
      .get(
        "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json"
      )
      .then((res) => {
        setBands(() => res.data);
      });
  }, []);

  const handleClick = (band) => {
    setModalBand(band);
    handleShow();
    //  console.log(band);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  const handleClose = ()=>{
  //   setShow(()=>false);
  // }
  // const handleShow=()=>{
  //   setShow(()=>true)
  // }

  // console.log(modalBand)

  return (
    <div className="App">
      <Navbar />
      <BandsList bands={bands} handleClick={handleClick} />
      <ModalView modalBand={modalBand} handleClose={handleClose} show={show} />
    </div>
  );
}

export default App;
