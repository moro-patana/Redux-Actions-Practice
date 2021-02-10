import {connect} from "react-redux"
import {setUser, removeUser} from "../actions/index"
import UserButtons from "../components/UserButtons"

const mapToDispatchProps = {
    add: setUser,
    remove: removeUser
}

export default connect(null, mapToDispatchProps)(UserButtons);