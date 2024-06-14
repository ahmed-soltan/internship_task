import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import { useState, useEffect } from 'react';


const API_URL = 'https://jsonplaceholder.typicode.com/todos';
export type TasksType ={
  id: number;
  title: string;
  completed: boolean;
}
function Tasks() {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data.slice(0, 10));
      setLoading(false);
    } catch (err:any) {
      setError(err.message);
      setLoading(false);
    }
  };

  console.log(tasks)

  const addTask = async (title: string) => {
    try {
      const newTask = { userId: 1, id: Math.random(), title, completed: false };
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      const result = await response.json();
      
      const completeTask = { ...newTask, ...result };
      setTasks([...tasks, completeTask]);
    } catch (err: any) {
      setError(err.message);
    }
  };
  

  const deleteTask = async (id:number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err:any) {
      setError(err.message);
    }
  };

  const editTask = async (id: number, title: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, // Corrected header
        body: JSON.stringify({ title, completed: false })
      });
      const updatedTask = await response.json();
      
      // Update the task in the state
      setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  const toggleTaskStatus = async (id:number, completed:boolean) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'Taskslication/json' },
        body: JSON.stringify({ completed: !completed })
      });
      const updatedTask = await response.json();
      setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    } catch (err:any) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col items-center justify-center gap-5 py-10 px-5'>
      <h1 className='text-center text-slate-800 font-medium text-4xl'>Tasks</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
}

export default Tasks;
