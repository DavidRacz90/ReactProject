import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = state => {
  return {
    counter: state.acorn.clicks,
  }
}

const DisplayAcorn = connect(mapStateToProps)(Display);

export default DisplayAcorn;