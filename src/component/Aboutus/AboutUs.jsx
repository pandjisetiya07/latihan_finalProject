import React from 'react'
import NavBar from '../Navbar/NavBar'
import './StyleAbout.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


// import gambar1 from '../../assets/background/bg1.jpg';
import gambar2 from '../../assets/background/bg2.jpg';
import gambar3 from '../../assets/background/bg4.jpg';
import AboutTeam from './AboutTeam';

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1 className='title hover-underline-animation'>Welcome to <span>Ngiung Travel Tour</span></h1>
                <h5 className="subtitle">Destinasi Wisata dan Tour Sumbawa Nusa Tenggara Barat</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="logo col-lg-4 col-md-5 col-sm-1 py-2 mt-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={gambar2} />
            </Card>
          </div>
          <div className="col-lg-8 col-md-7 py-2">
            <h1>About Us</h1>
            <p className='subAbout'> Selamat datang di NgiungTravel, kami adalah penyelenggara kegiatan perjalanan wisata dengan menawarkan paket dibeberapa lokasi di Sumbawa dan Sumbawa Barat yang sangat menabjubkan dan diminati oleh wisatawan baik domestic ataupun mancanegara dan merupakan salah satu Web Travel terpercaya di Sumbawa. Kami hadir untuk membantu perjalanan wisata anda dengan segala kebutuhan perjalanan wisata dengan kualitas terbaik. Kami memiliki team yang perpengalaman sehingga kepuasan costumer selalu menjadi proritas kami. Pelayanan kami mulai dari Paket wisata untuk perorangan, honeymoon, keluarga maupun rombongan, penyewaan tour guide dan lain-lain. Ayo buktikan dengan menjadi salah satu pelanggan kami.</p>
          </div>
        </div>
      </div>

      <AboutTeam />
    </>
  )
}

export default AboutUs