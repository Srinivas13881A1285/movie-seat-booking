import React, { Component } from 'react'

class SwapSeat extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand"><big><b>SEAT SWAP REQUEST</b></big></a>
                    <form class="form-inline">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button>
                    </form>
                </nav>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

                <div class="container" style={{margin: 'auto'}} >
                    <form action="/action_page.php" style={{width: '50%'}}>
                        <div class="form-group">
                            <label for="email"> swapper's username:</label>
                            <input type="text" class="form-control" id="email" value="username" name="email" />
                        </div>        

                        <div class="form-group">
                            <label for="email">Seat Id:</label>
                            <input type="text" class="form-control" id="email" value="7" name="email" />
                        </div>

                        <button type="submit" class="btn btn-outline-warning">Submit Request</button>
                   </form>
                </div>


            </div>
        )
    }
}

export default SwapSeat
