//------------------------CSS MODULE----------------------------

// import css from './Transaction.module.css';
// import PropTypes from 'prop-types';

// export const Transaction = ({ type, amount, currency }) => {
// 	return (
// 		<tr className={css.line}>
// 			<td>{type}</td>
// 			<td>{amount}</td>
// 			<td>{currency}</td>
// 		</tr>
// 	);
// };

// Transaction.propTypes = {
// 	type: PropTypes.string,
// 	amount: PropTypes.string,
// 	currency: PropTypes.string,
// };

//------------------------WITH EMOTION----------------------------

import PropTypes from 'prop-types';
import { Line } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
	return (
		<Line>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</Line>
	);
};

Transaction.propTypes = {
	type: PropTypes.string,
	amount: PropTypes.string,
	currency: PropTypes.string,
};
