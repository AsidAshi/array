import logo from './logo.svg';
import './App.css';
//
const employee =[{name:"asid" , id:47},{name:"basl" , id:66},{name:"ash" , id:55},{name:"mirsh" , id:36}]


const App=()=> {
  
  
  return (
    <div className="App">
      <h1>
        Name of employee
        
        </h1>
        {employee.map((item)=>{
          
          return(
          <h3>{item.name}</h3>)

        })}
      <h1>filtered employees</h1>

      {employee.filter(item => item.name.includes('sh')).map(filteredNames => (
        <li>
          {filteredNames.name}
        </li>
      ))}
    </div>
  );
}

export default App;
