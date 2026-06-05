import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';

function App() {
  return (
    <BrowserRouter>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body, #root {
            width: 100%;
            min-height: 100vh;
            background-color: #1a1a1a;
            overflow-x: hidden;
          }
        `}
      </style>
      <Routers />
    </BrowserRouter>
  );
}

export default App;