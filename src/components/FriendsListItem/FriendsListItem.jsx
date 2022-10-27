import css from 'components/FriendsListItem/FriendsListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return <li className={css.item}>
        <span className={!isOnline ? css.indicator : css.indicatorOnline}></span>
        <img className="avatar" src={avatar} alt={name} style={{width: "48px"}}/>
        <p className="name">{name}</p>
    </li>
}