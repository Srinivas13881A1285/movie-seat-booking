import React, { Component } from 'react'
import axios from 'axios';

class GetList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/demo/listhello")
                .then((response)=>{
                    console.log(response);
                    this.setState({
                        data:response.data
                    })
                })
                .catch((error => {
                    console.log(error)
                }))
    }

    render() {
        const { data } = this.state 

        return (
            <div>
                data from api
                {
                    data.map(one => <div> {one}</div>)
                }
            </div>
        )
    }
}

export default GetList
