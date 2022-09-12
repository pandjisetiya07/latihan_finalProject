import React from 'react'
import NavBar from '../Navbar/NavBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './sumbawa.css'

function Sumbawa() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [modalReact, setModalReact] = useState({}) 

  const [DataSumbawa, setMyDataSumbawa] = useState([]);

  const getApiDataSumbawa = async () =>{
    const dataSumbawa = await axios.get("https://631843e9f6b281877c677851.mockapi.io/sumbawa");
          setMyDataSumbawa(dataSumbawa.data)      
  }

  const trasnferDataModal = (data) => {
    setModalReact(data)
    setShow(true)
  } 

  useEffect(() => {
   getApiDataSumbawa()
  }, [])

  return (
    <>
      <NavBar />
      <div className='container' >
          <div className="row">

      {DataSumbawa.map((get) => {
        const { id, namaTempat, lokasi, images, price } = get;

        return(
        
            <div key={id} className="col-lg-4 col-md-6 col-sm-6 py-3">
              <Card >
                <Card.Img className='img' variant="top" src={images} />
                <Card.Body>
                  <Card.Title>{namaTempat}</Card.Title>
                  <Card.Text>
                    <p>{lokasi}</p>
                    <p>{price}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" onClick={() => trasnferDataModal(
                    { id, namaTempat, lokasi, images, price }
                  )}>
                    Detail Destinasi
                  </Button>

                </Card.Footer>
              </Card>
            </div>
            
        )
      })}
                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>{modalReact.namaTempat}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalReact.lokasi}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
       </div>
        </div>
    </>
  )
}

export default Sumbawa
