//------------------------CSS MODULE----------------------------

// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

// export const FriendListItem = ({ isOnline, avatar, name }) => {
// 	const status = isOnline ? 'green' : 'red';
// 	return (
// 		<li className={css.item}>
// 			<span
// 				className={css.status}
// 				style={{ backgroundColor: status }}
// 			></span>
// 			<img
// 				className={css.avatar}
// 				src={avatar}
// 				alt="User avatar"
// 				width="48"
// 			/>
// 			<p className={css.name}>{name}</p>
// 		</li>
// 	);
// };

// FriendListItem.propTypes = {
// 	isOnline: PropTypes.bool.isRequired,
// 	avatar: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired,
// };

//------------------------WITH EMOTION----------------------------


import PropTypes from 'prop-types';
import { Item, Status, Image, UserName } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
	return (
		<Item>
			<Status isOnline={isOnline} ></Status>
			<Image
				src={avatar}
				alt="User avatar"
				width="48"
			/>
			<UserName>{name}</UserName>
		</Item>
	);
};

FriendListItem.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};




























