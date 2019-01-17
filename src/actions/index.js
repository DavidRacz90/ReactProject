
export const eatingAcorn = (count) => {
  return {
    type: 'EATING_ACORN',
    payload: count,
  };
};

export const buyingAcorn = (count) => {
  return {
    type: 'BUYING_ACORN',
    payload: count,
  };
};