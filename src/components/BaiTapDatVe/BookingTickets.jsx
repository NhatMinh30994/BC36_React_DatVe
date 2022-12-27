import React, { Component } from "react";
import chairList from "../../data/danhSachGhe.json";
import "./assets/BaiTapBookingTicket.css"
import Chair from "./Chair";
import ChairInfo from "./ChairInfo";
import { connect } from "react-redux";
import BookedBtn from "./BookedBtn";

class BookingTickets extends Component {
  renderSeat = () => {
    //  Disable button Hang
    return chairList.map((element) => {
      let disabled;
      if (element.hang === "") {
        disabled = true;
      }

      return (
        <div
          key={element.hang}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
          }}
        >
          <button className="rowNumber" disabled={true}>
            {element.hang === "" ? "" : element.hang}
          </button>

          <Chair
            chairs={element.danhSachGhe}
            chairCss={element.hang === "" ? "rowNumber" : "ghe"}
            disabled={disabled}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('./images/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="display-4 text-warning">
                  <h2>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                </div>
                <div
                  className="mt-3 text-light mr-5"
                >
                  Màn hình
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  <div
                    style={{
                      display: "flex",
                      width: "85%",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    {this.renderSeat()}
                  </div>
                </div>
                <div>
                  <BookedBtn />
                </div>
              </div>
              <div className="col-4">
                <div
                  className="display-4 text-light mt-5"
                  style={{ fontSize: "30px" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                  <ChairInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BookingTickets);
