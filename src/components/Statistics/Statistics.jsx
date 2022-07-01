//------------------------CSS MODULE----------------------------


// import PropTypes from 'prop-types';
// import { StatisticItem } from 'components/StatisticItem/StatisticItem';
// import css from './Statistics.module.css';

// export const Statistics = ({ title, stats }) => {
// 	return (
// 		<section className={css.statistics}>
// 			{title && <h2 className={css.title}>{title}</h2>}

// 			<ul className={css.statList}>
// 				{stats.map(stat => (
// 					<StatisticItem
// 						key={stat.id}
// 						label={stat.label}
// 						percentage={stat.percentage}
// 					/>
// 				))}
// 			</ul>
// 		</section>
// 	);
// };

// Statistics.propTypes = {
// 	title: PropTypes.string,
// 	stats: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.string.isRequired,
// 		})
// 	),
// };

//------------------------WITH EMOTION----------------------------

import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { StatisticsSection, StatisticsTitle, StatisticsList } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
	return (
		<StatisticsSection>
			{title && <StatisticsTitle>{title}</StatisticsTitle>}

			<StatisticsList>
				{stats.map(stat => (
					<StatisticItem
						key={stat.id}
						label={stat.label}
						percentage={stat.percentage}
					/>
				))}
			</StatisticsList>
		</StatisticsSection>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		})
	),
};
