import React from 'react';
import { connect } from 'react-redux'; 

function Counter({ count }) {
  return (
      <div>
        Counter: {count !== undefined ? count : "null"}
      </div>
  );
}



function mapStateToProps(state){
  return {
      count: state.currentCount
  }
}

export default connect(mapStateToProps, null)(Counter);
 