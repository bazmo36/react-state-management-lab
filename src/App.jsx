import { useState } from "react";
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: '/fighters/survivor.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: '/fighters/scavenger.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: '/fighters/shadow.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: '/fighters/tracker.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: '/fighters/sharpshooter.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: '/fighters/medic.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: '/fighters/engineer.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: '/fighters/brawler.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: '/fighters/infiltrator.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: '/fighters/leader.png',
  },
])


  const handleAddFighter = (fighter) => {
    if (fighter.price < money) {

      setTeam([...team, fighter])

      setZombieFighters(zombieFighters.filter(fighters => fighters.id !== fighter.id))


      //Another way to write it 
      // const newArray = zombieFighters.filter(fighters => fighters.id !== fighter.id)
      // SetzombieFighters(newArray)

      setMoney(money - fighter.price)

    } else {
      console.log('"Not enough money"')
      return
    }
  }

  //Calculate Total Strength
  const getTotalStrength = (total, fighter) => (
    total + fighter.strength
  )
  const totalStrength = team.reduce(getTotalStrength, 0)


  //Calculate Total Agility
  const getTotalAgility = (total, fighter) => (
    total + fighter.agility
  )
  const totalAgility = team.reduce(getTotalAgility, 0)



  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(fighters => fighters.id !== fighter.id))
    setZombieFighters([...zombieFighters, fighter])
    setMoney(money + fighter.price)

  }

  return (
    <>
      <h2>Money:{money}</h2>

      <section>
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <p>Name:{fighter.name}</p>
              <p>Price:{fighter.price}</p>
              <p>Strength:{fighter.strength}</p>
              <p>Agility:{fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </section>



      <section>
        <h3>Your Team</h3>
        {team.length === 0 ? (<p>Pick some team members!</p>)

          : (
            <ul>
              {team.map((fighter) => (
                <li key={fighter.id}>
                  <img src={fighter.img} alt={fighter.name} />
                  <p>Name:{fighter.name}</p>
                  <p>Price:{fighter.price}</p>
                  <p>Strength:{fighter.strength}</p>
                  <p>Agility:{fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
                </li>
              ))}
            </ul>
          )
        }

        <div>
          <p>Total Srength: {totalStrength}</p>
          <p>Total Agility: {totalAgility}</p>
        </div>

      </section>


    </>
  )
}

export default App