import {connect} from "react-redux"
import ShowModal from "../components/ShowModal"
import {openModal} from "../actions/index"

const mapDispatchToProps = {
    toggleModal: openModal
}
export default connect(null, mapDispatchToProps)(ShowModal)