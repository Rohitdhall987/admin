import { Outlet } from 'react-router-dom';
import SessionProvider from './provider/sessionProvider';

function App() {
    return (
      <SessionProvider>
        <Outlet />
      </SessionProvider>
    );
  }
  
  export default App;