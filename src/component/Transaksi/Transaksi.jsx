import React from 'react'
import './StyleTransaksi.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar/NavBar'

function Transaksi() {
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
            <Form.Select id="">
              <option>Daftar Detinasi Sumbawa Besar</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 form-trs">
            <Form.Label htmlFor="">Where</Form.Label>
            <Form.Select id="">
              <option>Daftar Detinasi Sumbawa Barat</option>
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
    </>
  );
}

export default Transaksi;
