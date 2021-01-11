import { connect } from 'react-redux';
import { onSelectChange } from '../../redux/slices/SiderMenuSlice';
import SiderMenu from '../SiderMenu';

const mapStateToProps = (state) => {
    return ({
        state: state.siderState,
    });
};

const mapDispatchToProps = {
    changeSelected: onSelectChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu);
