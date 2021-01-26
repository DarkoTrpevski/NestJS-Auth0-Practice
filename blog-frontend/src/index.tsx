import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from './contexts/auth0-context';

//AUTH0 DOMAIN: test-login-1-22-21.eu.auth0.com
//AUTH0 CLIENTID: ChaLrnrYcGtwYo8rpKhO45Ha3YlW8wld
//AUTH0 CLIENTSECRET: i48b9HgrloIe18njAjBg3FuSgXADd8QlwM21jHSwtkzXRKwmzfZHhOaggwNWCKKe

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);