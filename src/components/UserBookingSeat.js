import React, { Component } from 'react'

class UserBookingSeat extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand"><big><b>USER SEAT BOOKING</b></big></a>
                    <form class="form-inline">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button>
                    </form>
                </nav>

                <div class="container" style={{margin: 'auto'}} >
                    <form action="/action_page.php" style={{width: '50%'}}>
                        <div class="form-group">
                            <label for="email">Seat Id:</label>
                            <input type="text" class="form-control" id="seat id" value="1" />
                        </div>     

                        <div class="form-group">
                            <label for="email">Office:</label>
                            <input type="text" class="form-control" id="office" value="1"/>
                        </div>  

                        <div class="form-group">
                                <label for="email">Date:</label>
                                <input type="date" class="form-control" id="date"/>
                        </div> 

                        <div class="form-group">
                            <label for="email">Start Time:</label>
                            <input type="time" class="form-control" id="start time" value="1" />
                        </div>

                        <div class="form-group">
                            <label for="email">End Time:</label>
                            <input type="time" class="form-control" id="end time" value="1" />
                        </div>

                        <button type="submit" class="btn btn-outline-warning ">Book</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserBookingSeat
