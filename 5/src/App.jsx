import Card from "./component/card";

const App = () => {

  const workers = [
{
  dollar_per_hour: "$32/hr",
  img: "https://randomuser.me/api/portraits/men/11.jpg",
  name: "John Carter",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Experienced UI/UX designer with strong frontend skills."
},

{
  dollar_per_hour: "$28/hr",
  img: "https://randomuser.me/api/portraits/women/12.jpg",
  name: "Emma Watson",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Mobile developer specializing in Android and iOS."
},

{
  dollar_per_hour: "$40/hr",
  img: "https://randomuser.me/api/portraits/men/13.jpg",
  name: "Michael Brown",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Creative UI designer working on modern web apps."
},

{
  dollar_per_hour: "$35/hr",
  img: "https://randomuser.me/api/portraits/women/14.jpg",
  name: "Sophia Lee",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Cross-platform mobile developer."
},

{
  dollar_per_hour: "$30/hr",
  img: "https://randomuser.me/api/portraits/men/15.jpg",
  name: "David Miller",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Frontend designer focusing on clean UI."
},

{
  dollar_per_hour: "$42/hr",
  img: "https://randomuser.me/api/portraits/women/16.jpg",
  name: "Olivia Davis",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Senior mobile developer."
},

{
  dollar_per_hour: "$27/hr",
  img: "https://randomuser.me/api/portraits/men/17.jpg",
  name: "James Wilson",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Dashboard and SaaS UI expert."
},

{
  dollar_per_hour: "$33/hr",
  img: "https://randomuser.me/api/portraits/women/18.jpg",
  name: "Ava Taylor",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Android and iOS app developer."
},

{
  dollar_per_hour: "$38/hr",
  img: "https://randomuser.me/api/portraits/men/19.jpg",
  name: "Daniel Anderson",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Senior UX specialist."
},

{
  dollar_per_hour: "$29/hr",
  img: "https://randomuser.me/api/portraits/women/20.jpg",
  name: "Mia Thomas",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Performance-focused mobile coder."
},

{
  dollar_per_hour: "$45/hr",
  img: "https://randomuser.me/api/portraits/men/21.jpg",
  name: "William Harris",
  designer: "UI/UX",
  job: "Freelancer",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Professional interface designer."
},

{
  dollar_per_hour: "$31/hr",
  img: "https://randomuser.me/api/portraits/women/22.jpg",
  name: "Charlotte Martin",
  designer: "Mobile",
  job: "Coder",
  item: { a: "PHP", b: "IOS", c: "Android", d: "Linux" },
  description: "Full stack mobile developer."
}
];

  return (
    <div className='p'>
      
      {
        workers.map((v,i) => <Card key={i} {...v}></Card>)
      }

    </div>
  )
}

export default App;