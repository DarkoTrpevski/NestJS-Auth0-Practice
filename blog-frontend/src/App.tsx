import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/post/Create';
import Edit from './components/post/Edit';
import Post from './components/post/Post';


const App = (): JSX.Element => {
  return (
    <div className="App">
    <Navbar />
      <div className={'container'}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/post/:postId"} component={Post}/>
          <Route path={"/edit/:postId"} component={Edit}/>
          <Route path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}
export default App;