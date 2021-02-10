import { connect } from 'react-redux';
import ImageUrlTextBox from "../components/ImageUrlTextBox";
import {setImageUrl} from "../actions/index"


const mapDispatchToProps = {
    set: setImageUrl
  
}

export default connect(null, mapDispatchToProps)(ImageUrlTextBox);
