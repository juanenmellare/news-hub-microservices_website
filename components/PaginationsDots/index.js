import styles from './PaginationDots.module.scss';


const PaginationDots = () => (
    <li className="page-item">
        <a className={`page-link ${styles.newsPaginationDots} disabled`}>...</a>
    </li>
);

export default PaginationDots;
