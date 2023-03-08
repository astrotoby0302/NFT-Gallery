import {
  Container
} from 'react-bootstrap';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  return (
    <Container fluid className='nft-viewer pt-2'>
      <Header />
      <Board />
    </Container>
  );
}

export default App;
