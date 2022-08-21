import React from 'react';
import './App.css';

const UserGreeting = (props) => {
  return <h2>Welcome back!</h2>;
}

const GuestGreeting = (props) => {
  return <h2>Please sign in.</h2>;
}

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const LoginButton = (props) => {
  return(
    <button onClick={props.onClick}>
      Login 
    </button>
  )
}

const LogoutButton = (props) =>{
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  };

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {
        isLoggedIn ? (
          <LogoutButton onClick = {this.handleLogoutClick}/>
        ) : (
          <LoginButton onClick = {this.handleLoginClick}/>
        )}
      </div>
    )

  }
}

function App() {
  return (
    <div className="App">
        <LoginControl />
    </div>
  );
}

export default App;
