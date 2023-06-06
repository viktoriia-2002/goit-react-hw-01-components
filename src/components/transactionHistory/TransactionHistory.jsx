import PropTypes from 'prop-types';

const TransactionHistory = ({ data }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(TransactionHistoryEl => (
          <tr key={TransactionHistoryEl.id}>
            <td>{TransactionHistoryEl.type}</td>
            <td>{TransactionHistoryEl.amount}</td>
            <td>{TransactionHistoryEl.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
