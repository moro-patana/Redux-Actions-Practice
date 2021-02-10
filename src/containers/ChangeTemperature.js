import {connect} from "react-redux"
import {setCurrentTemperature} from "../actions/index"
import ChangeTemperature from "../components/ChangeTemperature"

const mapToDispatchProps = {
    set: setCurrentTemperature
}

export default connect(null, mapToDispatchProps)(ChangeTemperature);
