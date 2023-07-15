import { useState } from 'react';
import './App.css';
import TodoList from './components/ToDoList';
function App() {
  // State Variable for Theme switching
  const [currentThem, setThem] = useState(true);
  const [currentData, setData] = useState('');
  const [todos, setTodos] = useState([]);
  const [currentError, setError] = useState('');
  // const [complete,setcomplete] = useState([]);

  //  function for Theme switching
  const HandleThem = (e) => {
    e.preventDefault();
    setThem(!currentThem)
  }
 
  // const handle = (e)=>{
  //  console.log("slected");
  // }
  const HandleSubmitData = (e) => {
    e.preventDefault();
    if (currentData === '') {
      setError('please write something')
    }
    else {
      setError('')
      const todo = {title:currentData,status:false};
      const todoss = [...todos, todo] 
      setTodos(todoss)
      setData('')
     
    }
  };
  const Handle = (e) => {
  
    console.log('Index ',e);
   const index = e.target.id
    console.log(todos[index]);
    const todoCon = [...todos];
   
    todoCon[index].status = !todoCon[index].status;

    setTodos(todoCon);
  }


  const HandleOnChange = (event) => {
  // console.log(event.target.value);
    setError('')
    setData(event.target.value);

  };

  const handleDelete = (index) => {

    const updatedList = setTodos.filter((item, i) => i !== index);
    setTodos(updatedList);
  };



  

  return (
    <div className="App" >
      <form onSubmit={HandleSubmitData}>
        <TodoList
          handleDelete={handleDelete}
          currentThem={currentThem}
          HandleThem={HandleThem}
          currentData={currentData}
          HandleOnChange={HandleOnChange}
          todos={todos}
          currentError={currentError}
          HandleSubmitData={HandleSubmitData} 
          Handle={Handle}
          />
      </form>
    </div>
  );
}

export default App;
