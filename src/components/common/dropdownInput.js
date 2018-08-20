"use strict";

var React = require('react');

var DropdownInput = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.authorSelected
        };
    },

    _handleChange: function(event) {
        this.props.onChange(event);
        this.setState({
            value: event.target.value
        });
    },
    
    render: function() {
        var wrapperClass = 'form-group';

        if (this.props.error && this.props.error > 0) {
            wrapperClass += '' + 'has-error';
        }

        var createAuthorRow = function(author) {
            return (
                <option value={author.name}>{author.name}</option>
            );
        };

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field" id={this.props.name}>
                    <select 
                        className="form-control"
                        onChange={this._handleChange}
                        name={this.props.name}
                        value={this.state.value} >
                        {this.props.list.map(createAuthorRow)}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = DropdownInput;
