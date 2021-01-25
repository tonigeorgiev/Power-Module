import React from 'react';
import { connect } from "react-redux";
import { manipulateConnectionOBC, manipulateConnectionCamera } from '../../redux/commanding-panel/commanding-panel.actions';
import { modifyVoltageOBC, modifyVoltageCamera, modifyDrawOBC, modifyDrawCamera, manipulateDrawOBC, manipulateDrawCamera } from "../../redux/parameter-display/parameter-display.actions"
import "./parameter-display.scss"

const MODIFY_VOLTAGE_TIMEOUT_MILLISECONDS = 1000;
const MODIFY_DRAW_TIMEOUT_MILLISECONDS = 5000;

class ParameterDisplay extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="battery-payload border">
                        <h1>{this.props.parameter.batteryVoltageOBC}V</h1>
                        <h3>OBC Battery Pack voltage</h3>
                    </div>
                    <div class="battery-payload border">
                        <h1>{this.props.parameter.batteryVoltageCamera}V</h1>
                        <h3>Camera Battery Pack voltage</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="battery-payload border">
                        <h1>{this.props.parameter.batteryDrawOBC}A</h1>
                        <h3>OBC current draw</h3>
                    </div>
                    <div class="battery-payload border">
                        <h1>{this.props.parameter.batteryDrawCamera}A</h1>
                        <h3>Camera current draw</h3>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.modifyVoltage();
        this.modifyDraw();
    }
    modifyVoltage = () => {
        this.props.modifyVoltageOBC();
        this.props.modifyVoltageCamera();
        setTimeout(this.modifyVoltage, MODIFY_VOLTAGE_TIMEOUT_MILLISECONDS)
    }
    modifyDraw = () => {
        this.props.modifyDrawOBC();
        this.props.modifyDrawCamera();
        setTimeout(this.modifyDraw, MODIFY_DRAW_TIMEOUT_MILLISECONDS)
    }

    componentWillUpdate(prevProps, _prevState) {
        if(prevProps.parameter.batteryVoltageOBC === 0 && prevProps.parameter.isConnectedOBC) {
            this.handleConncectionOBC()
        }
        if(prevProps.parameter.batteryVoltageCamera === 0 && prevProps.parameter.isConnectedCamera) {
            this.handleConncectionCamera()
        }
    }

    handleConncectionOBC = () => {
        this.props.manipulateDrawOBC();
        this.props.manipulateConnectionOBC();
    }

    handleConncectionCamera = () => {
        this.props.manipulateDrawCamera();
        this.props.manipulateConnectionCamera();
    }
}

const mapStateToProps = state => ({
    parameter: state.parameter,
    commanding: state.commanding,
});

const mapDispatchToProps = dispatch => ({
    modifyVoltageOBC: () => dispatch(modifyVoltageOBC()),
    modifyVoltageCamera: () => dispatch(modifyVoltageCamera()),
    modifyDrawOBC: () => dispatch(modifyDrawOBC()),
    modifyDrawCamera: () => dispatch(modifyDrawCamera()),
    manipulateDrawOBC: () => dispatch(manipulateDrawOBC()),
    manipulateDrawCamera: () => dispatch(manipulateDrawCamera()),
    manipulateConnectionOBC: () => dispatch(manipulateConnectionOBC()),
    manipulateConnectionCamera: () => dispatch(manipulateConnectionCamera()),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ParameterDisplay);