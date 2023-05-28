import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Basic() {
  return (
    <div style={{ backgroundColor: '#9de2ff', display: "flex" }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4"  >
                <div className="d-flex ext-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '160px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      />
                  </div>
                </div>
              </MDBCardBody>
              <div  style={{marginLeft: "500", position: "unset", width: "80%"}} >
                    <MDBCardTitle>Danny McLoan</MDBCardTitle>
                    <MDBCardText>Senior Journalist</MDBCardText>
                    <MDBCardText>Email: email</MDBCardText>


                    </div>

            </MDBCard>
            
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
    </div>
  );
}