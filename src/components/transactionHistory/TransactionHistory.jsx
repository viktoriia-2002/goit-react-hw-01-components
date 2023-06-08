import PropTypes from 'prop-types';
import {TableEl, TdEl, ThEl, RowEl,TrEl } from './transactionHistory.styled';

const TransactionHistory = ({ data }) => {
  return (
    <TableEl className="transaction-history">
      <thead>
        <RowEl>
          <ThEl>Type</ThEl>
          <ThEl>Amount</ThEl>
          <ThEl>Currency</ThEl>
        </RowEl>
      </thead>

      <tbody>
        {data.map(TransactionHistoryEl => (
          <TrEl key={TransactionHistoryEl.id}>
            <TdEl>{TransactionHistoryEl.type}</TdEl>
            <TdEl>{TransactionHistoryEl.amount}</TdEl>
            <TdEl>{TransactionHistoryEl.currency}</TdEl>
          </TrEl>
        ))}
      </tbody>
    </TableEl>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
