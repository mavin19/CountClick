import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'

class App extends React.Component{

  constructor (props){
    super(props);
    this.state ={
      prevState : 0,
      count : 0,
    }
    this.updateCount = this.updateCount.bind(this);
  }
 

  updateCount(number){
    const {count,prevState} = this.state; 
    number = prevState+1;
    this.setState({
      count:number,
      prevState: number
    })
    console.log ("number:", number);
}


  render(){
    return(
      <div>
        <Header/>
        <Content/>
        <Button count = {this.state.count}  updateCount={this.updateCount}/>
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
      return (
          <div>
              <h2>Content</h2>
              <p>The content text!!!</p>
          </div>
      );
  }
}
export default App;

ReactDOM.render(
  <App/>,
  document.getElementById ('root')
);

