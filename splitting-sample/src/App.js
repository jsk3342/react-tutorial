import logo from './logo.svg';
import './App.css';
import React, { Suspense} from 'react'

const SplitMe = React.lazy(() => import('./SplitMe'))

function App() {
  const [visible, setVisible] = React.useState(false);
  const onClick = () => {
    setVisible(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Hello react
        </p>
        <Suspense fallback={<div>lodding...</div>}>
          { visible && <SplitMe/ >}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
