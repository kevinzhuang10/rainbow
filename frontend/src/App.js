import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import VendorCard from './VendorCard'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    };
  }

  async componentDidMount() {
    try {
      const vendors = await axios.get('/api/vendors');
      console.log(vendors.data);
      this.setState({
        vendors: vendors.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.vendors.map(vendor => <VendorCard vendor={vendor}/>)}
      </div>
    )
  }
}


export default App;
