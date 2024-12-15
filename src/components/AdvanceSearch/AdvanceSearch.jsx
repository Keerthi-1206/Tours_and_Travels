import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  // Mapping of locations to their corresponding image URLs
  const locationImages = {
    "USA, Turkish": "https://images.unsplash.com/photo-1532952626554-d0cace1cd3fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Tokyo, Japan": "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
    "Sydney, Australia": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/640px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
    "Melbourne, Australia": "https://media.istockphoto.com/id/493621192/photo/melbourne-at-dusk.jpg?s=1024x1024&w=is&k=20&c=qdl3kVufi5d4hzvxGHp6fx2iyBvipKgTuC8rNmW3-cE=",
    "Paris, France": "https://media.istockphoto.com/id/1364380431/photo/the-eiffel-tower-from-the-river-seine-in-paris.jpg?s=1024x1024&w=is&k=20&c=kM0fkY674SC4f0KteVm5lMTB10k-VxwH0pVIiGA5UFs=",
  };

  const handleLocationSelect = (value) => {
    setSelectedLocation(value);
    console.log("Location", value);
  };

  const handleGuestSelect = (value) => {
    setSelectedGuest(value);
    console.log("Guest", value);
  };

  const handleSearch = () => {
    if (selectedLocation && startDate && endDate && selectedGuest) {
      setImageSrc(locationImages[selectedLocation]);
    } else {
      alert("Please fill in all fields before searching.");
    }
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  <CustomDropdown
                    label="Location"
                    onSelect={handleLocationSelect}
                    options={[
                      "USA, Turkish",
                      "Tokyo, Japan",
                      "Sydney, Australia",
                      "Melbourne, Australia",
                      "Paris, France",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check In</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check Out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guest"
                    onSelect={handleGuestSelect}
                    options={[
                      "2 adults, 1 children",
                      "2 adults, 2 children",
                      "2 adults, 3 children",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button
                    className="primaryBtn flex-even d-flex justify-content-center"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
              {/* Display the selected image */}
              {imageSrc && (
                <div className="search-result-image mt-4 text-center">
                  <img
                    src={imageSrc}
                    alt={selectedLocation}
                    className="img-fluid"
                    style={{ maxHeight: "400px", borderRadius: "10px" }}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;
