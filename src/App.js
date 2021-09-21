import logo from './logo.svg';
import './App.css';
import contactList from "./contacts.json"
import { useState } from "react";

function App() {

  let contacts = contactList.slice(0,5);
  console.log("contacts: ", contacts)
  const [listContacts, setListContacts] = useState(contacts)
    return (
    <div className="App">
      <h2>HTML Table</h2>

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
        {listContacts.map(contact => {
          return (
            <tr>
          <td><img src={contact.pictureUrl}></img></td>
          <td>{contact.name}</td>
          <td>{Math.round(contact.popularity*100)/100}</td>
          <td>{contact.wonOscar && "🏆"}</td>
          <td>{contact.wonEmmy  && "🏆"}</td>
        </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
