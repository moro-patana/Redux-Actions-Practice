import { increase } from "../actions";

import {connect} from "react-redux"
import {increaseCounter, decreaseCounter} from "../actions/index"
import CounterButton from "../components/CounterButton"

const mapToDispatchProps = {
    increase: increaseCounter,
    decrease: decreaseCounter
}

export default connect(null, mapToDispatchProps)(CounterButton);