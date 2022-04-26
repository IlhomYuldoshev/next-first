import MainContainer from "../../components/MainContainer";

export default function User({user}) {
  console.log(user)
  return (
    <MainContainer keywords={`users list user item ` + user.name} title={`User-${user.name}`}>
      <h1>User id {user.id}</h1>
      <h2>User name {user.name}</h2>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()

  return {
    props: {user}, // will be passed to the page component as props
  }
}
