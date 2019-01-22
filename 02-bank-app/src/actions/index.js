export function withdrawAmount(text) {
  return {
    type: 'WITHDRAW_AMOUNT',
    amount: text
  };
}
