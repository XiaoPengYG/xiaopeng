import React, {Component} from 'react';
import 'isomorphic-fetch';//fetch需要用node安装，没有的可以去下载一下


export default class petList extends Component {
    constructor() {
        super();
        this.state = {}
    }
    async componentDidMount() {
        let users = await (await fetch(`http://localhost:8081/getCatList`)).json();//主要是从后台拿json数据
        this.setState({users});
    }
    render() {
        let {users = []} = this.state;

        return (
            <div>
            <table className='table'>
            <thead>
            <tr>
            <th>性别</th>
            <th>姓名</th>
            </tr>
            </thead>
            <tbody>
            {users.map(({gender, name}) =>
                <tr>>
                <td>{gender}</td>
                <td>{name}</td>

                   </tr>
    )}
    </tbody>
        </table>
        </div>
    );
    }
}