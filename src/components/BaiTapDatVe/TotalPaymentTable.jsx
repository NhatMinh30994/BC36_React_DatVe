import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAllTicketsAction } from "../../store/actions/bookingTicketActions";

class TotalPaymentTable extends Component {
  totalPayment = () => {
    let total = 0;
    this.props.bookingTicketList.map((element) => {
      return (total += element.gia);
    });
    return total;
  };

  render() {
    return (
      <>
        <tr
          className="text-light"
          style={{
            fontSize: "24px",
          }}
        >
          <td>Tổng tiền</td>
          <td className="text-warning">{this.totalPayment().toLocaleString()} đ</td>
          <td>
            <i className="fa-solid fa-xmark delete" onClick={() => {
                this.props.dispatch(removeAllTicketsAction());
              }}></i>
          </td>
        </tr>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTicketList: state.bookingMovieTicketReducer.bookingTicketList,
  };
};

export default connect(mapStateToProps)(TotalPaymentTable);
