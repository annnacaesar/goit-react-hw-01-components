//------------------------CSS MODULE----------------------------

// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
// import { FriendListItem } from 'components/FriendListItem/FriendListItem';

// export const FriendList = ({ friends }) => {
// 	return (
// 		<ul className={css.friendList}>
// 			{friends.map(friend => (
// 				<FriendListItem
// 					key={friend.id}
// 					isOnline={friend.isOnline}
// 					avatar={friend.avatar}
// 					name={friend.name}
// 				/>
// 			))}
// 		</ul>
// 	);
// };

// FriendList.propTypes = {
// 	friends: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 		})
// 	),
// };

//------------------------WITH EMOTION----------------------------

import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
	return (
		<List>
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					isOnline={friend.isOnline}
					avatar={friend.avatar}
					name={friend.name}
				/>
			))}
		</List>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};