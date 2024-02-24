import React, {useState, useEffect} from 'react'
import './App.css'


const title = <h1>Riky&Morty</h1>
const titleStyle= {textAlign: 'center'}
const Card = (props)=> {
 const {image, name, status, species} = props.characther;

  return (
   <div className='card'>
    <img src={image} alt='img'/>
    <h2>{name}</h2>
    <p>{status} - {species}</p>

   </div>
  )
}
const App = () => {
  const [data , setDate] = useState([])

useEffect(() =>{
   fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(body=>{
    setDate(body.results)
   })
}, [])

  return (
    <>
    <div style={titleStyle}>
    {title}
    </div>
    <section className='card-section'>
      {
        data.map(el => (
          
          <Card characther={el} key={el.id} />
          ))
        }
    </section>
        </>
  )
}

export default App;
