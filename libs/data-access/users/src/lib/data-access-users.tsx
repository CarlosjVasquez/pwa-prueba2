import styles from './data-access-users.module.css';

/* eslint-disable-next-line */
export interface DataAccessUsersProps {}

export function DataAccessUsers(props: DataAccessUsersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataAccessUsers!</h1>
    </div>
  );
}

export default DataAccessUsers;
