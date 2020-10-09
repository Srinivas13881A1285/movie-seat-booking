import React, { Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';


class AddSeat extends Component {
    render() {
        return (
                <div> 
                      <nav class="navbar navb   ar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>ADD SEAT</b></big></big></a>
    <form class="form-inline">
      
      <NavLink to="/admin" exact activeStyle={
              { color:'green' }
            }><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></NavLink>
    </form>
  </nav>
                          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 

                        <div className="container" style={{margin: 'auto'}}>
                            <form action="/action_page.php" style={{width: '50%'}}>
                                <div className="form-group">
                                    <label for="email">Seat Id:</label> 
                                    <input type="text" className="form-control" id="email" value="7" />
                                </div>
                                <div className="form-group">
        <label for="email"> Floor:</label>
        <input type="number" className="form-control" id="email" />
      </div>

      <div class="form-group">
        <label for="email"> Office:</label> 
        <input type="text" className="form-control" id="email" name="email" />
      </div>

      <div class="form-group">
        <label for="email"> Admin's Password:</label>
        <input type="password" className="form-control" id="email" value="username" />
      </div>

                            </form>
                        </div>


     


    <button type="submit" class="btn btn-outline-warning">Submit Request</button>
                </div>
        )
    }
}

export default AddSeat
