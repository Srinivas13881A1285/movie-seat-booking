import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddSeat from './components/AddSeat'
import Admin  from './components/Admin'
import Booking from './components/Booking'
import DeleteSeat from './components/DeleteSeat'
import Search from './components/Search'
import SwapSeat from './components/SwapSeat'
import UserBookingSeat from './components/UserBookingSeat';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import GetList from './components/GetList';

function App() {
  return (
    <div className="App">
{/*      <AddSeat />
 */}     
{/*  <Admin />
 */}    
{/*  <Booking /> */}
{/* <DeleteSeat /> */}
{/* <Search /> */}
{/* <SwapSeat />
 */} 
{/*  <UserBookingSeat />
 */} 
 
 
      <Router>
        <Route path="/" exact strict render={
          () => {
            return (<h1>Welcome to Shreya Movies</h1>);
          }
        } />

        <Route path="/about" exact strict render={
          () => {
            return (<h1>Welcome About</h1>);
          }
        } />

        <Route path="/admin" exact strict component={Admin}/>

        <Route path="/addseat" exact strict component={AddSeat}/>

        <Route path="/booking" exact strict component={Booking}/>

        <Route path="/deleteseat" exact strict component={DeleteSeat}/>

        <Route path="/search" exact strict component={Search}/>

        <Route path="/swapseat" exact strict component={SwapSeat}/>

        <Route path="/userbookingseat" exact strict component={UserBookingSeat}/>

        <Route path="/getlist" exact strict component={GetList}/>





      </Router>

    
 
 
 
 </div>
  );
}

export default App;
