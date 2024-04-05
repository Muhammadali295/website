import Form from "./form";
import Slideshow from "./home";
import { BrowserRouter as Router,Routes, Route, Link,} from "react-router-dom"

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Slideshow} />
    //     <Route path="/formsubmit" component={Form} />
    //   </Switch>
    // </Router>

<Router>
{/* <Link to='/'>Home</Link>
<Link to='/formsubmit'>About</Link> */}

<Routes>
<Route path='/' element={<Slideshow/>} />
<Route path='/formsubmit' element={<Form/>} />

</Routes>
</Router>

  );
}

export default App;
