import React from 'react'
import Navbar from './components/Navbar'
 const App = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}
export default App;



















// import logo from "./logo.svg";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";
// // import GoodNews from './components/GoodNews';
// import Navbar from "./components/Navbar";
// import World from "./components/world";
// import LoadingBar from 'react-top-loading-bar'


// import PropTypes from 'prop-types';
// import React, { Component } from 'react'

// export class App extends Component {
//   static propTypes = {}
//    state = {
//     progress : 100
//   }
//   render() {
//     return (
//       <div>
//       <Router>
//       <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//       />
//         <Navbar />
//         <div className="container my-3">
//           {/* <GoodNews title="my title" description="my desc"/> */}
//           <Routes>
//             <Route
//               path="/"
//               element={<World setProgress={this.setProgress} country="in" category="genral" />}
//             />
//             <Route path="/buisness" element={<World setProgress={this.setProgress} category="business" />} />
//             <Route path="/science" element={<World setProgress={this.setProgress} category="science" />} />
//             <Route path="/genral" element={<World setProgress={this.setProgress} category="general" />} />
//             <Route path="/health" element={<World setProgress={this.setProgress} category="health" />} />
//             <Route path="/sports" element={<World setProgress={this.setProgress} category="sports" />} />
//             <Route
//               path="/entertainment"
//               element={<World category="entertainment" />}
//             />
//             <Route
//               path="/technology"
//               element={<World category="technology" />}
//             />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//     )
//   }
// }

// export default App
























// function App() {  old method
 
//    let state = {
//     progress : 0
//   }
//   const setProgress = (progress) => {
//      setProgress({progress:progress})
//   }
//   return (
//     <div>
//       <Router>
//       <LoadingBar
//         color='#f11946'
//         progress={state.progress}
//       />
//         <Navbar />
//         <div className="container my-3">
//           {/* <GoodNews title="my title" description="my desc"/> */}
//           <Routes>
//             <Route
//               path="/"
//               element={<World setProgress={setProgress} country="in" category="genral" />}
//             />
//             <Route path="/buisness" element={<World setProgress={setProgress} category="business" />} />
//             <Route path="/science" element={<World setProgress={setProgress} category="science" />} />
//             <Route path="/genral" element={<World setProgress={setProgress} category="general" />} />
//             <Route path="/health" element={<World setProgress={setProgress} category="health" />} />
//             <Route path="/sports" element={<World setProgress={setProgress} category="sports" />} />
//             <Route
//               path="/entertainment"
//               element={<World category="entertainment" />}
//             />
//             <Route
//               path="/technology"
//               element={<World category="technology" />}
//             />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// // export default App;




