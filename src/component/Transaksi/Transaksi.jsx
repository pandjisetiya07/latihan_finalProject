import React, { useState, useEffect}from 'react'
import './StyleTransaksi.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar/NavBar'; 
// import Card from 'react-bootstrap/Card';
// import gambar2 from '../../assets/background/bg2.jpg';
// import Table from 'react-bootstrap/Table';


function Transaksi() {
const [destinasiSumbawa, setDestinasiSumbawa]=useState([]);
// const [destinasiSumbawaBarat, setDestinasiSumbawaBarat]=useState([]);  

useEffect( () =>{

  const getSumbawa = async () => {
      const sumbawa = await fetch("https://631843e9f6b281877c677851.mockapi.io/sumbawa");
      const getcon =  await sumbawa.json();

      setDestinasiSumbawa(await getcon);
  }
  getSumbawa();

  
});

// useEffect( () =>{

//   const getSumbawaBarat = async () => {
//       const barat = await fetch("https://631843e9f6b281877c677851.mockapi.io/sumbawa_barat");
//       const getBarat =  await barat.json();

//       setDestinasiSumbawaBarat(await getBarat);
//   }
//   getSumbawaBarat();
// });

const hendleKota = (event) =>{
  const getKotaId = event.target.value;
  console.log(getKotaId);

}

  return (
    <>
      <Navbar />
      <Form>
        <fieldset>
          <h4><strong>PAYMENT</strong></h4>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Where</Form.Label>
            <Form.Select id="">
              <option>Search Your Destination</option>
              <option>Sumbawa Besar</option>
              <option>Sumbawa Barat</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Where</Form.Label>
            <Form.Select id="" onChange={(e) => hendleKota()} >
              <option>Daftar Detinasi Sumbawa Besar</option>
              {
                destinasiSumbawa.map( (daftarNama) =>(
                  <option key={daftarNama.id} value={daftarNama.id}>{daftarNama.namaTempat}</option>
                )
                )
              }
{/* 
               {
                destinasiSumbawaBarat.map( (sumbawa) =>(
                  <option key={sumbawa.id} value={sumbawa.id}>{sumbawa.namaTempat}</option>
                )
                )
              } */}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">When</Form.Label>
            <input type="date"></input>
          </Form.Group>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Type</Form.Label>
            <Form.Select id="">
              <option>Choose Your Type</option>
              <option>Adventure</option>
              <option>Camping</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Choose Ticket</Form.Label>
            <input type="date"></input>
          </Form.Group>
          <Form.Group className="mb-3 form-trs">
            <Form.Check
              type="checkbox"
              id=""
              label=""
            />
          </Form.Group>
          <Button type="submit">CHECKOUT</Button>
        </fieldset>
      </Form>
      {/* <div className="container">
        <div className="row">
          <div className="logo col-lg-3 col-md-5 col-sm-1 py-2 mt-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={gambar2} />
            </Card>
          </div>
          <div className="col-lg-8 col-md-7 py-2">
            <h1>TRIP TO Destination ......</h1>
            <Table>
      <thead>
        <tr>
          <th>Trip Type</th>
          <th>Price</th>
          <th>Lokasi Trip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <Form.Select id="">
              <option>Choose Your Type</option>
              <option>Adventure</option>
              <option>Camping</option>
            </Form.Select>
        </tr>
        <tr>
        </tr>
        <tr>
        </tr>
      </tbody>
    </Table>
          </div>
        </div>
      </div> */}
       
    </>
  );
}

export default Transaksi;
