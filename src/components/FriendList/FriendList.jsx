import { FriendListItem } from "../FriendsListItem/FriendsListItem";
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';


export const FriendList = ({ friends }) => { 
    return <ul className={css.friendList}>
        {friends.map(friend => { 
            return <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />
        })}
   </ul>
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        })
    )
}




