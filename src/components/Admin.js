import React, { Component } from 'react'

class Admin extends Component {
    render() {
        return (
            <div>
                
    <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand"><big><big><b>ADMIN VIEW SEATS</b></big></big></a>
        <form class="form-inline">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button>
        </form>
      </nav>
                <form className="form-inline">
                    <div class="form-group mb-2">
                    
                    <span class="form-group mx-sm-3 mb-2">Date</span>
                    <input type="date" class="form-control mr-1"  id="date"/>
                    

                    <span class="form-group mx-sm-3 mb-2">Username</span>
                    <input type="text" class="form-control mr-1" id="Username"></input>

                    <span class="form-group mx-sm-3 mb-2">Office</span>
                    <input type="text" class="form-control mr-1" id="office"></input>

                    <span class="form-group mx-sm-3 mb-2">Seat Id</span>
                    <input type="text" class="form-control mr-1" id="seatId"></input>

                    <span class="form-group mx-sm-3 mb-2">Status</span>
                    <select class="custom-select mr-1" style={{width:'150px'}}> 
                        <option>Confirmed</option> 
                        <option>Pending</option> 
                        <option>Swap-Req</option> 
                    </select> 

                    </div>
                    <button type="submit" class="btn btn-primary mb-2 ml-2 l">SEARCH</button>
                </form>

                <div style={{width: '80%', margin: '0 auto'}}>
                    <table className="table" style={{width: '100%'}}>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Seat Id</th>
                            <th scope="col">OFFICE</th>
                            <th scope="col">DATE</th>
                            <th scope="col">START TIME</th>
                            <th scope="col">END TIME</th>
                            <th scope="col">STATUS</th>
                            <th scope="col"></th>
                      </tr>
                        </thead> 
                        <tbody>
                        <tr>
            
            <th scope="row">Kavin</th>
            <td>1</td>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 1:00 PM</td>
            <td> 3:00 PM</td>
            <td>Swap-Req</td>
            <td>
                <button class="btn btn-success">Confirm</button>
                <button class="btn btn-warning">Cancel</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Kavin</th>
            <td>3</td>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 4:00 PM</td>
            <td> 5:00 PM</td>
            <td>Confirmed</td>
            <td>
                <button class="btn btn-success">Confirm</button>
                <button class="btn btn-warning">Cancel</button>
            </td>
          </tr>

          <tr>
              
            <th scope="row">Kavin</th>
            <td>2</td>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 5:00 PM</td>
            <td> 6:00 PM</td>
            <td>Pending</td>
            <td>
                <button class="btn btn-success">Confirm</button>
                <button class="btn btn-warning">Cancel</button>
            </td>
          </tr>
    
                        </tbody>   
                    </table>
                </div>
            </div>
        )
    }
}

export default Admin
