
import { FaListAlt } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
export default function TodoList(props) {

    const { currentThem, currentData, todos, currentError, HandleSubmitData, handleDelete} = props;
    console.log( todos);
    const Handle = (e) => props.Handle(e);
    const HandleOnChange = (event) => props.HandleOnChange(event);
    const HandleThem = (e) => props.HandleThem(e);
   



    // const handle = (e) => props.handle(e);
    // const currentData = props.currentData;
    return (
        < div className='ColorMood' style={{ background: currentThem ? 'rgb(229, 228, 232)' : 'rgb(25, 25, 27)' }}>
            <button className='MoodButton' onClick={HandleThem}>
                <FaMoon style={{ color: !currentThem ? 'rgb(229, 228, 232)' : 'rgb(25, 25, 27)' }} className='moonIcon'></FaMoon>
            </button>
            <div className='mainlinedesign' style={{ color: !currentThem ? 'rgb(229, 228, 232)' : 'rgb(25, 25, 27)' }} ><FaListAlt className='listIcon' /><h1>ToDo List</h1></div>

            <div className="todoContainer">
                <div className='textContainer'>
                    <input className='inputBox' type="text" value={currentData} placeholder='write your Todo Here......' onChange={HandleOnChange}></input>
                    <span className="errorMessage">{currentError && currentError}</span>
                    <button onClick={HandleSubmitData}>submit</button>
                    <hr></hr>
                    {todos.map((item, index) => (
                        <div key={index} id={index}>
                            <div className='todotextcontainer'>
                                   <h1>{index}</h1>
                            <input type="checkbox" className='checkbox' key={index} id={index} onChange={(e) =>Handle(e)}
                                  ></input>
                          
                                <p style={{ textDecoration: item.status ? 'line-through' : 'none' }} className="todotext" >{item.title}</p>
                                <RiDeleteBin5Line className="deleteicon" onClick={() => handleDelete(index)} />
                            </div>
                            <hr></hr>
                        </div>

                    ))}

                </div>
                <div className="buttonContainer">
                    <span>{todos.length} items left</span>
                    <button className='buttons'>all</button>
                    <button className='buttons'>active</button>
                    <button className='buttons'>completed</button>
                    <button className='buttons'>clear completed</button>
                </div>

            </div>

        </div>
    );
}