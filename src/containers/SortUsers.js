import {connect} from "react-redux"
import SortUsers from "../components/SortUsers"
import {sortUsers} from "../actions/index"

function mapStateToProps(state) {
    return {
        sortUser: state.currentUserSort
    }
}

const mapToDispatchProps = {
    set: sortUsers
}

export default connect(mapStateToProps, mapToDispatchProps)(SortUsers)