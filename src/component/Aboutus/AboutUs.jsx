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
            {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
          </Carousel>
          <div className="logo col-lg-4 col-md-5 col-sm-1 py-2 mt-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={gambar2} />
            </Card>
          </div>
          <div className="col-lg-8 col-md-7 py-2">
            <h1>About Us</h1>
            <p className='subAbout'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>

      <AboutTeam />
    </>
  )
}

export default AboutUs