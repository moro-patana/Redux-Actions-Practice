import {connect} from "react-redux"
import {setCurrentCity} from "../actions/index"
import CityDropDown from "../components/CityDropDown"

const mapToDispatchProps = {
    set: setCurrentCity
}
export default connect((state) => ({currentCity: state.currentCity}), mapToDispatchProps)(CityDropDown)