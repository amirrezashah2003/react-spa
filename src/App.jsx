import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./components/pages/Home/Home.jsx"
import About from "./components/pages/About/About.jsx"
import Courses from "./components/pages/Courses/Courses.jsx"
import Articles from "./components/pages/Articles/Articles.jsx"
import Panel from "./components/pages/Panel/Panel.jsx"
import Login from "./components/pages/Login/Login.jsx"
import Article from './components/pages/Articles/Article.jsx'
// ایمپورت کردن پرایوت روت برای روت هایی که میخوایم هرکسی بهش دسترسی نداشته باشه
import PrivateRoute from './components/pages/PrivateRoute.jsx'
import CreateArticle from './components/pages/CreateArticle/CreateArticle.jsx'
import NotFound from './components/pages/404/404.jsx'
import EditArticle from './components/pages/EditArticle/EditArticle.jsx'
import Comments from './components/pages/Comments/Comments.jsx'
import PrivateAdminRoute from './components/PrivateAdminRoute.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/courses/:courseId' element={ <Courses />} />

        <Route path='/articles' element={ <Articles /> } />
        <Route path='/articles/:blogId' element={ <Article />} >
          <Route path='edit' element={ <EditArticle />} />
        </Route >
        <Route path='/createArticle' element={ <PrivateAdminRoute> <CreateArticle /> </PrivateAdminRoute>  } />

        <Route path='/panel' element={ <PrivateRoute> <Panel /> </PrivateRoute> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/comments' element={ <Comments /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
