import React from 'react';
import { connect } from 'react-redux';
import { manipulateConnectionOBC, manipulateConnectionCamera } from '../../redux/commanding-panel/commanding-panel.actions';
import { manipulateDrawOBC, manipulateDrawCamera } from '../../redux/parameter-display/parameter-display.actions';
import "./commanding-panel.scss"
class CommandingPanel extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="commanding border">
                    <h1>Commanding</h1>
                    <div class="commanding-row">
                        <div class="button" onClick={this.handleConncectionOBC}>{this.props.commanding.buttonNameOBC} OBC</div>
                        <div class="button" onClick={this.handleConncectionCamera}>{this.props.commanding.buttonNameCamera} Camera</div>
                    </div>
                </div>
            </div>   
        )
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
    commanding: state.commanding,
    parameter: state.parameter,
});

const mapDispatchToProps = dispatch => ({
    manipulateDrawOBC: () => dispatch(manipulateDrawOBC()),
    manipulateDrawCamera: () => dispatch(manipulateDrawCamera()),
    manipulateConnectionOBC: () => dispatch(manipulateConnectionOBC()),
    manipulateConnectionCamera: () => dispatch(manipulateConnectionCamera()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommandingPanel);
