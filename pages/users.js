import styles from "../styles/User.module.scss"
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  return (
    <MainContainer keywords="user list" title="Users list">
      <h1>Users list pages</h1>
      <ul>
        {
          users.map(({id, name}) => (
            <li key={id} className={styles.user}>
              <A href={`users/${id}`} text={name}/>
            </li>
          ))
        }
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return {
    props: {users}, // will be passed to the page component as props
  }
}
