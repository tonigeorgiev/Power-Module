import React from 'react';
import { Provider } from "react-redux";
import './App.scss';
import ParameterDisplay from './components/parameter-display/parameter-display.component.js'
import CommandingPanel from './components/commanding-panel/commanding-panel.component'
import NotificationPanel from './components/notifications-panel/notification-panel.component'
import store from './store'

class PowerModule extends React.Component {
    render() {
          return (
            <Provider store={store}>
                <div class="power-module border">
                    <div class="side">
                        <ParameterDisplay />
                        <CommandingPanel />
                    </div>
                    <NotificationPanel />
                </div>
            </Provider>
          );
      }
  }

  export default PowerModule;