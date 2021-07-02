import './App.css';
import { useState, useEffect } from 'react';
//import { employee } from './search';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

const App = () => {
  const [text, setText] = useState("")
  const [array, setarray] = useState([])
  const [responseData, setResponseData] = useState([]);
  const [loading, setloading] = useState(false)

  const fetchData = () => {
    axios({
      "method": "GET",
      "url": "https://60dc1e14c2b6280017feb6c2.mockapi.io/react/users",

    })
      .then((response) => {
        setResponseData(response.data)
        setarray(response.data)
        setloading(true)
      })
  }


  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {
    if (text.length >= 3) {
      setarray(searchName(text))
    }
    if (text.length === 0) {
      setarray(responseData)
    }
  }, [text])

  const searchName = (queryString) => {
    if (queryString === '') {
      return responseData;
    }
    const regex = new RegExp(`${queryString.trim()}`, 'i');
    return responseData.filter(
      (array =>array.name.search(regex) >= 0
    ));
  };


  return (
    <div className="App" >
      <ul>Name of employee</ul>
      <input type="text" value={text} placeholder="search" onChange={(e) => setText(e.target.value)}></input>

      {loading? (array && array.map((item) => {

        return (
          <li >{item.name}</li>
          )

      })) :(<ReactBootStrap.Spinner animation="border" variant="success"/>
      )}
    

      {/* {responseData && JSON.stringify(responseData, null, 4)}  */}

    </div>
  );
}

export default App;
