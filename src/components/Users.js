import React, {Component} from 'react'
import API from '../utils/API'
export default class Users extends Component {
    constructor(props){
        super(props)
        this.state={users:[]}
    }

    componentDidMount(){
        API.getUsers().then(results => {
            console.log(results.data.results)
            this.setState({users:results.data.results})
        })
    }
    render(){
        return(
            <div>
                {this.state.users && this.state.users.length > 0 ?(
                this.state.users.map(user => {
                    return(
                    <p>{user.name.first}</p>
                    )
                }) ) : (<></>)}
            </div>
        )
    }
}