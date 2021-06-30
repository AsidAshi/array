import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';


const employee =[{name:"asid" , id:47},{name:"basl" , id:66},{name:"ash" , id:55},{name:"mirsh" , id:36}]

const App=()=> {
  const [text, setText] = useState("")
  const [array, setarray] = useState(employee)
  

  // const handleInput = (e) => {
  //   setText(e.target.value);
  // };
  useEffect(() => {
    if(text.length >= 3){
      setarray(searchName(text))
    }
    if(text.length === 0){
      setarray(employee)
    }
  }, [text])

  const searchName = (queryString) => {
    if (queryString === '') {
      return employee;
    }
    const regex = new RegExp(`${queryString.trim()}`, 'i');
    return employee.filter(
      (array) => array.name.search(regex) >= 0
    );
  };

  return (
    <div className="App" >
      <ul> 
        Name of employee  </ul>
        <input type="text" value={text} placeholder="search" onChange={(e)=>setText(e.target.value)}></input>
        
        {array.map((item)=>{
          
          return(
          <li >{item.name}</li>)

        })}
       
      <ul>filtered employees</ul>
      

      {array.filter(item => item.name.includes('sh')).map(filteredNames => (
        <li>
          {filteredNames.name}
        </li>
      ))}
    </div>
  );
}

export default App;
