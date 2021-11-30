import { useState } from 'react'
import './App.css'
import list from './contacts.json'

function App() {
  const first5 = list.slice(0, 6)
  const [contacts, setContacts] = useState(first5)
  return (
    <div className='contacts-page'>
      <h1>IronContacts</h1>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ pictureUrl, name, popularity, id }) => (
              <tr key={id}>
                <td>
                  <img src={pictureUrl} alt={name} />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App
