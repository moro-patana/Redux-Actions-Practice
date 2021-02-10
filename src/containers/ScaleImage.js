import {connect} from "react-redux"
import ScaleImage from "../components/ScaleImage"
import {ImgScale} from "../actions/index"

const mapToDispatchProps = {
    set: ImgScale
}

export default connect(null, mapToDispatchProps)(ScaleImage)
