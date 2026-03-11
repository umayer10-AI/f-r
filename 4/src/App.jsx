import Card from './component/Card.jsx'
import User from './component/User.jsx'


const App = () => {

  const jobs = [
  {
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "4 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "7 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  }
];

  return (
    <div className='parent'>
        {/* <Card></Card> */}
        {/* <User name={a[0]}></User>
        <User name={a[1]}></User>
        <User name={a[2]}></User> */}

        {/* {
          a.map(v => {
            return <h2>{v.user}</h2>
          })
        } */}

        {
          jobs.map((v,i) => {
            return <div key={i}>

                <Card {...v} />

            </div>
          })
        }
    </div>
  )
}

export default App;