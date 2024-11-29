
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import {fetchTodos} from './Redux/Slice/todoslice';


function App() {

  const dispatch = useDispatch();
  const jsonData = useSelector((state) => state.todo.data);

  console.log(jsonData);

  return (
    <div className="App">
       <button onClick = { (e) => dispatch(fetchTodos()) }>Fetch Todos</button>
       {jsonData && jsonData.map((item) => (
          <li>{item.title}</li>
         ))}
    </div>
  );
}

export default App;
