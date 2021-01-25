import React from 'react';
import { connect } from 'react-redux';
import { NotificationEnum, DEFAULT_NOTIFICATIONS } from './notification.enum'
import './notification-panel.scss'

class NotificationPanel extends React.Component {
    notifications = DEFAULT_NOTIFICATIONS;
    componentWillUpdate(prevProps, _prevState) {
      if(prevProps.parameter.batteryVoltageOBC <= 18) {
        this.notifications[NotificationEnum.LOW_VOLTAGE_OBC].show = true;
      } else {
        this.notifications[NotificationEnum.LOW_VOLTAGE_OBC].show = false;
      }

      if(prevProps.parameter.batteryVoltageCamera <= 18) {
        this.notifications[NotificationEnum.LOW_VOLTAGE_CAMERA].show = true;
      } else {
        this.notifications[NotificationEnum.LOW_VOLTAGE_CAMERA].show = false;
      }

      if(prevProps.parameter.batteryDrawOBC >= 2.5 && prevProps.parameter.batteryDrawOBC < 3) {
        this.notifications[NotificationEnum.HIGH_CURRENT_VALUE_OBC].show = true;
      } else {
        this.notifications[NotificationEnum.HIGH_CURRENT_VALUE_OBC].show = false;
      }

      if(prevProps.parameter.batteryDrawCamera >= 2.5 && prevProps.parameter.batteryDrawCamera < 3) {
        this.notifications[NotificationEnum.HIGH_CURRENT_VALUE_CAMERA].show = true;
      } else {
        this.notifications[NotificationEnum.HIGH_CURRENT_VALUE_CAMERA].show = false;
      }

      if(prevProps.parameter.batteryDrawOBC >= 3) {
        this.notifications[NotificationEnum.EXTREMELY_HIGH_CURRENT_VALUE_OBC].show = true;
      } else {
        this.notifications[NotificationEnum.EXTREMELY_HIGH_CURRENT_VALUE_OBC].show = false;
      }

      if(prevProps.parameter.batteryDrawCamera >= 3) {
        this.notifications[NotificationEnum.EXTREMELY_HIGH_CURRENT_VALUE_CAMERA].show = true;
      } else {
        this.notifications[NotificationEnum.EXTREMELY_HIGH_CURRENT_VALUE_CAMERA].show = false;
      }

    }
    render() {
          return (
              <div class="notifications border">
                  <h1>Notifications</h1>
                  {this.notifications
                  .filter(val => val.show)
                  .map((val, index) => {
                    return (
                      <div class={val.class}>
                       {val.text}
                      </div>
                    )
                  })}
              </div>
          )
    }
}

const mapStateToProps = state => ({
  parameter: state.parameter  
});

export default connect(
  mapStateToProps,
  null
)(NotificationPanel);