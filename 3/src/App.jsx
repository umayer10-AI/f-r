import Card from "./assets/components/Card.jsx"

const App = () => {

  const users = [
    {
      user: "Umayer",
      age: 18,
      img: "https://images.unsplash.com/photo-1726824766919-da693390ee0e"
    },
    {
      user: "Ahmad",
      age: 21,
      img: "https://images.unsplash.com/photo-1768928955656-ee026c4baf15"
    },
    {
      user: "Boss",
      age: 25,
      img: "https://images.unsplash.com/photo-1750050659008-70ac8d9a713c"
    }
  ]
  return (
    <div className="parent">

      {
        users.map(v => (
          <Card user={v.user} age={v.age} img={v.img} />
        ))
      }
      {
        users.map((v,i) => (
          <Card {...v} />
        ))
      }
      
      {/* <Card user="Umayer" age={18} img="https://images.unsplash.com/photo-1726824766919-da693390ee0e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Ahmad" age={21} img="https://images.unsplash.com/photo-1768928955656-ee026c4baf15?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="boss" age={25} img="https://images.unsplash.com/photo-1750050659008-70ac8d9a713c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}

    </div>
  )
}

export default App;