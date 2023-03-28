import PropTypes from 'prop-types';
import css from '../styles/Section.module.css'


export default function Section ({title, children}) {
    return (
        <div className={css.section}>
        <h2>
            {title}
        </h2>
        {children}
        </div>
        
    )
}

Section.propTypes = {
    title: PropTypes.string,
    chilgren: PropTypes.node,
}