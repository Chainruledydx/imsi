import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return <div>{toDo?.text}</div>;
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
