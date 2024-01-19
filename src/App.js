import React, {useState} from 'react';

// css
import './App.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const App = () => {

  const shoppingData = [
  'Semmeln',
  'Erbsen',
];  

  // useState
  const [shoppingList, setShoppingList] = useState(shoppingData)
  const [newItem, setNewItem] = useState('')

  // function to add Item when clicked on plus
  const addItem = () => {
    if (newItem.trim() !== '') {
      setShoppingList([...shoppingList, newItem])
      setNewItem('');
    }
  }

  // function to remove Item when clicked on minus
  const removeItem = (index) => {
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  }

  return (
    <div className="App">
      <div className="title">
        Shopping List
      </div>

      <div className="separator" />

      <div>
        <div>

          {/* mapped shopping list from dummyData */}
          {shoppingList.map((item, index) => (
            <div className="minus-button" key={index}>
              <div className="item">
                {item}
              </div>

              {/* button */}
              <button
                type="button"
                className="button"
                onClick={() => removeItem(index)}
              >
                {/* minus icon */}
                <FontAwesomeIcon icon={faMinus} style={{ fontSize: '3em' }} />
              </button>
            </div>
          ))}

          {/* TextInput */}
          <div className="input-container">
            <div className="input-item">
              <input
                className="input"
                placeholder='Neues Item'
                onChange={(e) => setNewItem(e.target.value)}
              />
            </div>

            {/* button */}
            <button
              type="button"
              className="plus-button"
              onClick={addItem}
            >
              {/* plus icon */}
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '3em' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
