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