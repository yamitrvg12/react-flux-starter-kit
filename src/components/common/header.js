"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img width="23px" src="images/logo.png" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="app">Home</Link>
                        </li>
                        <li>
                            <Link to="authors">Authors</Link>
                        </li>
                        <li>
                            <Link to="courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Header;