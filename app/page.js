import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../styles/style.css';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <div className='light'>

      <header className='header'>
        <h1 className="logo">Logo</h1>
        <i class="bi bi-list icons"></i>
        <nav className='navbar'>
            <Link className='links' href={"/"}>Home</Link>
            <Link className='links' href={"/"}>About</Link>
            <Link className='links' href={"/"}>Contact</Link>
            <Link className='links' href={"/"}>Service</Link>
        </nav>
      </header>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Container className='container-xl'>

          <Row>
            <Col className='sec1 d-flex justify-content-center align-items-center'>
              <div className="card customCard glass-card" style={{ width: "30rem" }}>
                <Image src={"/assets/astro.png"} width={250} height={250} className='floatingAstroOnCard'></Image>
                <div className="card-body">
                  <h5 className="card-title">Welcome to My Portfolio</h5>
                  <p className="card-text mt-4 text-center desc">Hello and welcome to my portfolio! I'm <b>John Paul Orencio</b>, a passionate software developer with a knack for creating elegant and efficient solutions. My journey in technology has been fueled by a deep curiosity and a drive to continuously learn and innovate.
                  </p>
                </div>
              </div>
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Home;
