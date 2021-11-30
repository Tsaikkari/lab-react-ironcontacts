import { useState } from 'react'
import './App.css'
import list from './contacts.json'

function App() {
  const first5 = list.slice(0, 6)
  const rest = list.slice(7)
  const [contacts, setContacts] = useState(first5)

  const handleAddRandomContact = () => {
    let randomContact = rest[Math.floor(Math.random() * rest.length)]
    setContacts((contacts) => [randomContact, ...contacts])
  }

  const sortContactsByName = () => {
    const sortList = [...contacts];
    let name1 = ''
    let name2 = ''

    sortList.sort((a, b) => {
      name1 = a.name
      name2 = b.name

      if (name1 < name2) {
        return -1
      } else {
        return 1
      } 

      if (name1 > name2) {
        return 1
      } else {
        return -1
      }
      return 0
    })

    setContacts(sortList)
  }

  const sortContactsByPopularity = () => {
    const sortList = [...contacts];
    let popularity1 = 0
    let popularity2 = 0

    sortList.sort((a, b) => {
      popularity1 = a.popularity
      popularity2 = b.popularity

      if (popularity1 > popularity2) {
        return -1
      } else {
        return 1
      } 

      if (popularity1 < popularity2) {
        return 1
      } else {
        return -1
      }
      return 0
    })

    setContacts(sortList)
  }

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  return (
    <div className='contacts-page'>
      <h1>IronContacts</h1>
      <div className="button-container">
        <button onClick={handleAddRandomContact}>Add Random Contact</button>
        <button onClick={sortContactsByName}>Sort by name</button>
        <button onClick={sortContactsByPopularity}>Sort by popularity</button>
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
                  <td><button onClick={() => deleteContactHandler(id)}>Delete</button></td>
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
