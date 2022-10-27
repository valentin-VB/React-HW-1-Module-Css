import css from 'components/Profile/Profile.module.css'
import PropTypes from 'prop-types';

export const Profile = ({ username = "Unknown", tag, location, avatar, stats }) => { 
  return <div className={css.profile}>
  <div className="description">
    <img
        src={avatar
                ? avatar
                : "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"}
        alt="User avatar"
        className="avatar"
    />
    <p className={css.name}>{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers </span>
            <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),
};