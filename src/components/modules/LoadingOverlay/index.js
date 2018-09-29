import { connect } from 'react-redux';

import LoadingOverlay from './LoadingOverlay';

const mapStateToProps = ({ globalLoading }) => ({ loading: globalLoading.loading });

export default connect(mapStateToProps)(LoadingOverlay);
