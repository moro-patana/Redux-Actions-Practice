import {connect} from "react-redux"
import SearchTextBox from "../components/SearchTextBox"
import {searchTextByName} from "../actions/index"

const mapDispatchToProps = {
    set: searchTextByName
}
export default connect(null, mapDispatchToProps)(SearchTextBox)