import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './quickdemo/App';
import { ThreekitProvider } from 'threekit';

const Project = () => {
  const config = Object.assign(
    {},
    process.env.NODE_ENV === 'development'
      ? { publishStage: 'published' }
      : undefined
  );

  return (
    <ThreekitProvider config={config}>
      <App />
    </ThreekitProvider>
  );
};

ReactDOM.render(<Project />, document.getElementById('root'));
