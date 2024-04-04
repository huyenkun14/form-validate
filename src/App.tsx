
import Register from './pages/Register';
import ThemeProvider from './context/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <Register />
      </div>
    </ThemeProvider>
  );
}

export default App;
