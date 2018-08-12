"use strict";

var React = require('react');
var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if (!confirm('Are you sure you want to read this boring page?')) {
                // When the user click on CANCEL button the page doesn't go to that page
                transition.abort();
            } else {
                // When the user click on OK button the page go to that page
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            if (!confirm('Are you sure you want to leave like this?')) {
                // When the user click on CANCEL button the page doesn't leave the page
                transition.abort();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;