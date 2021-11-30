import { useState } from 'react'
import "./App.css";
import list from './contacts.json'

function App() {
  const first5 = list.slice(0, 6)
  const [contacts, setContacts] = useState(first5)
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(({ pictureUrl, name, popularity, id }) => 
        <tr key={id}>
          <td><img src={pictureUrl} alt={name} /></td>
          <td>{name}</td>
          <td>{popularity}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}
export default App;

