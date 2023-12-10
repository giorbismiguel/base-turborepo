import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
