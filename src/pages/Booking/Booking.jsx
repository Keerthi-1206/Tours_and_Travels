import React, { useState,useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Col, Container, Form, Row, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../Booking/booking.css"

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email:"",
    phone:"",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(()=>{
    document.title ="Booking Page "
    window.scroll(0, 0)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.phone
    ) {
      setIsSubmitted(true); // Set form submission status to true
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <>
      <Breadcrumbs title="Booking" pagename="Booking" />
      <section className="booking-section py-5">
        <Container>
          <Row>
            <Col md="8" lg="8">
              <div className="booking-form-warp border rounded-3">
                <div className="form-title px-4 border-bottom py-3">
                  <h3 className="h4 font-bold m-0"> Your Details</h3>
                </div>
                {!isSubmitted ?(

                  <Form className="p-4" onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="firstname"
                      className="mb-4"
                      >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        />
                
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="lastname"
                      className="mb-4"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="email.ControlInput1"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="phone"
                      as={Col}
                      md="6"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="checkin"
                      as={Col}
                      md="6"
                    >
                      <Form.Label className="d-block">Check In</Form.Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="form-control w-100"
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="checkout"
                      as={Col}
                      md="6"
                    >
                      <Form.Label className="d-block">Check Out</Form.Label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={endDate}
                        endDate={startDate}
                        dateFormat="dd, MMMM, yyyy"
                        className="form-control w-100"
                      />
                    </Form.Group>
                    <Col md="12">
                      <button className="primaryBtn "> Submit Now</button>
                    </Col>
                  </Row>
                </Form>
              ) : (   
                <div className="success-message">
                <h3>Your destination is booked!</h3>
                <p>Thank you, {formData.firstname} {formData.lastname}!</p>
                {/* <p>
                  A confirmation email has been sent to <strong>{formData.email}</strong>.
                </p> */}
              </div>
              )}
              </div>
            </Col>

            <Col md="4" lg="4">
              <Card className="card-info p-0 shadow-sm bg-white">
                <Card.Header>
                  {" "}
                  <h1 className="font-bold  h4 mt-2">Price Summary</h1>{" "}
                </Card.Header>
                <Card.Body className="pb-0">
                  <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span> Base Price</span>
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span> Total Discount <span className="badge bg-danger">
                        10%
                      </span></span>
                      <strong>$20</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span> Taxes % Fees</span>
                      <strong>$28,660</strong>
                    </ListGroup.Item>

                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between py-4">
                  <span className="font-bold h5"> Payable Now</span>
                  <strong className="font-bold h5">$28,660</strong>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Booking;
