//------------------------CSS MODULE----------------------------

// import PropTypes from 'prop-types';
// import css from './StatisticItem.module.css';

// export const StatisticItem = ({ label, percentage }) => {
// 	return (
// 		<li
// 			className={css.item}
// 			style={{
// 				backgroundColor: `#${Math.floor(
// 					Math.random() * 16777215
// 				).toString(16)}`,
// 			}}
// 		>
// 			<span className={css.label}>{label}</span>
// 			<span className={css.percentage}>{percentage}%</span>
// 		</li>
// 	);
// };

// StatisticItem.propTypes = {
// 	label: PropTypes.string.isRequired,
// 	percentage: PropTypes.number.isRequired,
// };

//------------------------WITH EMOTION----------------------------

import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
	return (
		<Item
		>
			<Label>{label}</Label>
			<Percentage>{percentage}%</Percentage>
		</Item>
	);
};

StatisticItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};