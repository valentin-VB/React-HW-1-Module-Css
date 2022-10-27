import PropTypes from 'prop-types';
import css from 'components/Statistic/Statistic.module.css'

export const Statistics = ({ stats, title}) => { 
  return <section className="statistics">
      { title &&
          <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(stats => { 
        return <li
          key={stats.id}
          className={css.item}
          style={{
            backgroundColor: `${getRandomHexColor()}`}}>
    
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage} %</span>
          </li>
      }) }
    </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}