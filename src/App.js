import logo from './logo.svg';
import './App.css';
import contactList from "./contacts.json"
import { useState } from "react";

function App() {

  let contacts = contactList.slice(0,5);
  const [listContacts, setListContacts] = useState(contacts)
  let notAddedContacts = contactList.filter ((contact)=> !listContacts.includes(contact) )
    return (
    <div className="App">
      <h2>HTML Table</h2>

      <button
      onClick = {() => {
        let newContact = notAddedContacts [Math.floor(Math.random() * notAddedContacts.length)];
        console.log ("notAddedContacts: ", notAddedContacts)
        let newArray = [...listContacts];
        newArray.push(newContact);
        console.log ("arrayToPush: ", newArray)
        setListContacts (newArray);
      }
      }>
      Add Random Contact
      </button>

      <button
      onClick = {() => {
        let newArray = [...listContacts];
        let sortedArray = newArray.sort((a,b) => {
          if (a.name < b.name){
            return -1;
          }
          if (a.name > b.name){
            return 1;
          } else {
            return 0;
          }
        });
        console.log ("sortedArray: ", sortedArray)
        setListContacts (sortedArray);
      }
      }>
      Sort by name
      </button>

      <button
      onClick = {() => {
        let newArray = [...listContacts];
        let sortedArray = newArray.sort((a,b) => {
          return b.popularity - a.popularity;
        });
        console.log ("sortedArray: ", sortedArray)
        setListContacts (sortedArray);
      }
      }>
      Sort by popularity
      </button>

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
            <tr key={contact.id}>
          <td><img src={contact.pictureUrl}></img></td>
          <td>{contact.name}</td>
          <td>{Math.round(contact.popularity*100)/100}</td>
          <td>{contact.wonOscar && "🏆"}</td>
          <td>{contact.wonEmmy  && "🏆"}</td>
          <td>      
            <button
              onClick = {() => {
                const filteredContacts = listContacts.filter ((elem) => {
                  console.log (contact.id)
                  return contact.id !== elem.id 
                })
                console.log (filteredContacts)
                setListContacts (filter3edContacts)
              }
          }>
          Delete Contact
          </button>
        </td>
        </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
