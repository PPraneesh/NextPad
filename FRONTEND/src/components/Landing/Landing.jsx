import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBFooter } from "mdb-react-ui-kit";
import './HomePage.css';

function HomePage({ goToLogin }) {
  return (
    <div className="homePageBackground">
      <MDBContainer className="py-5">
        <MDBRow className="align-items-center">
          <MDBCol md={6}>
            <div>
              <h1>Welcome to Our Creative Writing Platform</h1>
              <p>
                Join our community of creative writers and share your work with fellow enthusiasts.
              </p>
              <p>
                Discover new literary pieces, receive valuable feedback, and grow as a writer.
              </p>
              <MDBBtn onClick={goToLogin} color="primary">Get Started</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md={6}>
            <img src="https://www.rnfinity.com/storage/gallery/1667063901_reading3.jpg" alt="Creative Writing" className="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us</h5>
              <p>
                Email: info@creativewriting.com<br/>
              </p>
            </MDBCol>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-0'>Copyrights</h5>
              <p>
                © 2024 Creative Writing Platform. All rights reserved.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default HomePage;