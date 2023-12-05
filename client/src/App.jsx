import React from 'react'
import  { BrowserRouter,  Routes , Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
import Profile from "./pages/Profile.jsx"
import Header from './components/Header.jsx'
import { Toaster } from 'react-hot-toast'
import PrivateRoutes from './components/PrivateRoutes.jsx'
import CreateListing from './pages/CreateListing.jsx'
import UpdateListing from './pages/UpdateListing.jsx'
import Listing from './pages/Listing.jsx'
import Search from './pages/Search.jsx'

const App = () => {
  return (
    
   <BrowserRouter>
   <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
    <Header/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/signin' element={<Signin/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/listing/:listingId' element={<Listing/>}/>
      <Route   element={<PrivateRoutes/>}>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/create-listing' element={<CreateListing/>}/>
      <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App