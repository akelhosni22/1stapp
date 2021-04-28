import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
  <p>Welcome to my Platform</p>
    </div>
  );
}

export default App;
