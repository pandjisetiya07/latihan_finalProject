import React, { useState, useEffect}from 'react'
import './StyleTransaksi.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar/NavBar'; 
import axios from 'axios';
import { useParams } from 'react-router-dom'


function Transaksi() {
   // penanda saat user select antara sumbawa besar dan barat
  // Sumbawa Besar || Sumbawa Barat
const [destinationSelect, setDestinationSelect] = useState("")
const [destinasiSumbawa, setDestinasiSumbawa]=useState([]);
const [destinasiSumbawaBarat, setDestinasiSumbawaBarat]=useState([]);
const [stateTransaksi, setStateTransaksi] = useState({});
const {tujuan, id } = useParams();

const handleChange = (event) => {
    setDestinationSelect(event.target.value);
  }

const fetchPromise = async () => {
  const [firstResponse, secondResponse] = await Promise.all([
  axios.get(`https://631843e9f6b281877c677851.mockapi.io/sumbawa`),
  axios.get(`https://631843e9f6b281877c677851.mockapi.io/sumbawa_barat`)
]);
setDestinasiSumbawa(firstResponse.data)
setDestinasiSumbawaBarat(secondResponse.data)
}

useEffect(() =>{
  fetchPromise()
  filteretSumbawa()
  setDestinationSelect(tujuan)
}, []);


const hendleKota = (event) =>{
  const getKotaId = event.target.value;
}

const filteretSumbawa = () =>{
  const selectTransaksi = destinasiSumbawa.filter((destinasi)=> {
    return destinasi.id === id
  })
  setStateTransaksi(selectTransaksi)
  console.log(selectTransaksi);
}

  return (
    <>
      <Navbar />
      <div name='payment' className='transaksi'>
        <div className="container">
          <div className="right">
            <h4>Biodata Diri</h4>
            <div className="mb-3">
              <input id="inputNamaLengkap" type="nama" placeholder="Nama Lengkap" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputAlamat" type="alamat" placeholder="Alamat" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputEmail" type="email" placeholder="Email Addres" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
            <div className="mb-3">
              <input id="inputNoHandphone" type="handphone" placeholder="No Handphone" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
            </div>
          </div>

          <Form>
        <fieldset>
          <h4><strong>Booking</strong></h4>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Kota Destinasi</Form.Label>
            <Form.Select value={destinationSelect} onChange={handleChange}>
              <option>Search Your Destination</option>
              <option value={'SumbawaBesar'}>Sumbawa Besar</option>
              <option value={'SumbawaBarat'}>Sumbawa Barat</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Tujuan Wisata</Form.Label>
            <Form.Select id="" onChange={(e) => hendleKota()} >
              <option>Daftar Destinasi</option>

              {
                destinationSelect === 'SumbawaBesar' && destinasiSumbawa.map( (daftarNama) =>(
                  <option selected={id === daftarNama.id} key={daftarNama.id} value={daftarNama.id}>{daftarNama.namaTempat}</option>
                )
                )
              }

              {
                destinationSelect === 'SumbawaBarat' && destinasiSumbawaBarat.map( (daftarNama) =>(
                  <option key={daftarNama.id} value={daftarNama.id}>{daftarNama.namaTempat}</option>
                )
                )
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Your Trip</Form.Label>
            <Form.Select id="">
              <option>Choose Your Type</option>
              <option>Adventure</option>
              <option>Camping</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Choose Ticket </Form.Label>
            <input type="date"></input>
          </Form.Group>
          <Button type="submit">CHECKOUT</Button>
        </fieldset>
      </Form>
      </div>
      </div>
    </>
  )
}

export default Transaksi
