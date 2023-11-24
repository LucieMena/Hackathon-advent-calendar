<<<<<<< HEAD
import './App.css'
//import PageQuiz from './components/Quiz'
import PageQuiz from './pages/PageQuiz'

function App() {
  

  return (
    <>
    <h1 className='titre'>Quiz</h1>
      <PageQuiz />
=======
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
      <Outlet />
>>>>>>> 14f583661f31a36f0aa84994ba5aceed9eea2306
    </>
  )
}

export default App
