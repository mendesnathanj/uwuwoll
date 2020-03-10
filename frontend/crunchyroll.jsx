import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchList } from './actions/lists_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    }

    delete window.currentUser;
    const bootstrap = document.querySelector('script#bootstrap-script');
    if (bootstrap) bootstrap.remove();
  }

  document.querySelector('script#image-script').remove();

  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchList = fetchList;

  ReactDOM.render(<Root store={store} />, root);
});
