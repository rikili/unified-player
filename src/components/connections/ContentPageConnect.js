import { connect } from 'react-redux';
import ContentPage from '../ContentPage';

const mapStateToProps = (state) => {
    return ({
        currState: state.siderState,
    });
};

// const mapDispatchToProps = {
//     changeSelected: onChange,
// };

export default connect(mapStateToProps)(ContentPage);
