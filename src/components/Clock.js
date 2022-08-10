import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    } //Constructor which sets the initial state of the clock and binds it

    tick() {
        this.setState({time: new Date()});
    } //Renders the state to Date() again

    componentDidMount(){
        this.ticker = setInterval(() => this.tick(), 1000);
    } //Updates the clock every 1 second

    componentWillUnmount() {
        clearInterval(this.ticker);
    } //Clears previously made ticker interval

    render(){
        return(
            this.state.time.toLocaleTimeString()
        );
    }

}

export default Clock;