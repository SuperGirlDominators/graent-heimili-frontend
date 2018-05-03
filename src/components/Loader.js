import React, { Component } from 'react';
import '../css/Loader.css';


class Loader extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.props.history.push('/checklist');
            console.log("timer running")
          }, 10000)
        // this.props.history.push('/checklist')
    }

    componentWillMount(){
        document.body.id= "loader";
    }

    render() {
        return (
            <div className="loading_content">
                <div className="loader">
                    <div className="square"></div>
                    <div className="square clear"></div>
                    <div className="square"></div>
                    <div className="square last"></div>
                </div>
                <h1 id="loading_checklist">Tékklisti í vinnslu</h1>
            </div>
        
        );
    }
}


export default Loader;
