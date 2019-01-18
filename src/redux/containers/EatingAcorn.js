import { connect } from 'react-redux';
import { eatingAcorn } from '../actions/eatingAcorn';
import Button from '../components/Button';

const mapStateToProps = () => {
  return {
    name: 'eat one',
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eatingAcorn())
    }
  }
}

const EatAcorn = connect (
  mapStateToProps,
  dispatchToProps,
)(Button);

export default EatAcorn;