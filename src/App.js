import { useState } from 'react'
import './App.css'
import list from './contacts.json'

function App() {
  const first5 = list.slice(0, 6)
  const rest = list.slice(7)
  const [contacts, setContacts] = useState(first5)

  const handleClick = () => {
    let randomContact = rest[Math.floor(Math.random() * rest.length)]
    setContacts((contacts) => [randomContact, ...contacts])
  }

  return (
    <div className='contacts-page'>
      <h1>IronContacts</h1>
      <div className="button-container">
        <button onClick={handleClick}>Add Random Contact</button>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(
              ({ pictureUrl, name, popularity, id, wonOscar, wonEmmy }) => (
                <tr key={id}>
                  <td>
                    <img src={pictureUrl} alt={name} />
                  </td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  {wonOscar ? <td>🏆</td> : <td></td>}
                  {wonEmmy ? <td>🏆</td> : <td></td>}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App
