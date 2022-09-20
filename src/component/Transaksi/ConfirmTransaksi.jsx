import React from 'react'
import NavBar from '../Navbar/NavBar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ConfirmTransaksi() {
  const [BookingRegister, setBookingRegister] =  useState([])
  
  
  const getBookingTour = async () =>{
    const booking = await axios.get("https://631843e9f6b281877c677851.mockapi.io/register")
    setBookingRegister(booking.data)
    console.log(booking);

    const userLogin = localStorage.getItem('login')
    const userBooking =
  }

  useEffect(() => {
    getBookingTour()
  }, [])

  return (
    <>
      <NavBar />
      {BookingRegister.map((get) => {
        const { id, user, email, transaksi } = get;

        return (
      <div className="container">
        <div className="row" key={id}>
          <div className="col-6">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
               User Login
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue= {user} />
              </Col>
            </Form.Group>
          </div>
          <div className="col-6 ">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue= {email} />
              </Col>
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
               Daftar Transaksi
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue= {transaksi} />
              </Col>
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                No Telpon
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
              </Col>
            </Form.Group>
          </div>
        </div>
      </div>
    )
    })}

    </>
  )
}

export default ConfirmTransaksi