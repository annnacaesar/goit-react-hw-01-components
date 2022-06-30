import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem';

export const FriendList = ({ friends }) => {
	return (
		<ul className={css.friendList}>
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					isOnline={friend.isOnline}
					avatar={friend.avatar}
					name={friend.name}
				/>
			))}
		</ul>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			isOnline: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};
