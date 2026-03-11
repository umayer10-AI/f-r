

const card = ({dollar_per_hour,img,name,designer,job,item,description}) => {

  return (
    <div className='card'>
          <h3 className='top'>{dollar_per_hour}</h3>
          <div className='center'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='job'>{designer}</p>
            <h4 className='design'>{job}</h4>
            <ul>
                <li>{item.a}</li>
                <li>{item.b}</li>
                <li>{item.c}</li>
                <li>{item.d}</li>
            </ul>
            <p className='description'>{description}</p>
          </div>
          <div className='dag'><hr /></div>
          <div className='end'>
            <button>View Profile</button>
          </div>
      </div>
  )
}

export default card;