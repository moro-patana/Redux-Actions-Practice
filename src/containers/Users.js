import {connect} from 'react-redux';
import Users from '../components/Users';
import {getUsersList} from "../actions/index"

function mapStateToProps(state){
    return {
        users: state.users,
        sortOn: state.currentUserSort,
        firstNameFilter: state.searchText
    }
}
const mapDispatchToProps = {
    getUsersList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)