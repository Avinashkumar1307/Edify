import './App.css';
import Task from './Components/Task';
import TaskFrom from './Components/TaskFrom';
import TaskList from './Components/TaskList ';
import Comman from './Components/Comman';

import { useState } from 'react';

function App() {
  const [formVisible,setFormVisible] = useState(false)
  return (
    <div className="h-full w-full bg-black">
      <div>
        <Comman formVisible={formVisible} setFormVisible={setFormVisible}/>
      </div>
      <div>
        {formVisible && <TaskFrom formVisible={formVisible} setFormVisible={setFormVisible}/>}
        <TaskList />
      </div>
    </div>
  );
}

export default App;
