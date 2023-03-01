import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Messaging from '../components/Messaging';

function Chat() {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <Messaging />
    </div>
  );
}

export default Chat;
