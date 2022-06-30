import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from 'components/Transaction';

export const TransactionHistory = ({ items }) => {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(item => (
					<Transaction
						key={item.id}
						type={item.type}
						amount={item.amount}
						currency={item.currency}
					/>
				))}
			</tbody>
		</table>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		})
	),
};
