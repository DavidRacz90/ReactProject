import { connect } from 'react-redux';
import { buyingAcorn } from '../actions/buyingAcorn';
import Button from '../components/Button';

const mapStateToProps = () => {
  return {
    name: 'buy one',
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyingAcorn())
    }
  }
}

const BuyAcorn = connect (
  mapStateToProps,
  dispatchToProps,
)(Button);

export default BuyAcorn;