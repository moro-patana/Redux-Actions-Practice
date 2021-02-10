import {connect} from "react-redux"
import { closeModal} from "../actions"
import Modal from "../components/Modal"

function mapStateToProps(state) {
    return {
        displayModal: state.displayModal,
    }
}
const mapDispatchToProps = {
    toggleModal: closeModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
