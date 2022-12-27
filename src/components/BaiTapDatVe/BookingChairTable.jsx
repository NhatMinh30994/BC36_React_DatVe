import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTicketAction } from "../../store/actions/bookingTicketActions";
import TotalPaymentTable from "./TotalPaymentTable";

class BookingChairTable extends Component {
  renderBookingList = () => {
    return this.props.bookingTicketList.map((bookingTicket) => {
      return (
        <tr
          className="text-light"
          style={{
            fontSize: "24px",
          }}
          key={bookingTicket.soGhe}
        >
          <td className="text-warning">{bookingTicket.soGhe}</td>
          <td className="text-warning">{bookingTicket.gia.toLocaleString()} đ</td>
          <td>
            <i className="fa-solid fa-xmark delete" onClick={() =>
                this.props.dispatch(removeTicketAction(bookingTicket.soGhe))}></i>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        {this.renderBookingList()}
        <TotalPaymentTable />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTicketList: state.bookingMovieTicketReducer.bookingTicketList,
  };
};

export default connect(mapStateToProps)(BookingChairTable);
