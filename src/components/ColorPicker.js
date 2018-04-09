import React, { Component } from 'react';


class ColorPicker extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">Color Picker</div>
                    <div className="panel-body">
                        <span id={"red"}></span>
                        <span id={"green"}></span>
                        <span id={"blue"}></span>
                        <span id={"silver"}></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
