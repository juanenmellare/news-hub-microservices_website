import Link from "next/link";

import styles from './PaginationNumber.module.scss';


const PaginationNumber = ({pageNumber, isActive, setPage}) => (
    <Link href={`?page=${pageNumber}`}>
        <li className={`page-item ${styles.newsPaginationLi}`}>
            <a className={`page-link ${styles.newsPaginationLink} ${isActive ? styles.newsPaginationLinkActive : ''}`}
               onClick={(_) => setPage(pageNumber)}>
                {pageNumber}
            </a>
        </li>
    </Link>
);


export default PaginationNumber;
