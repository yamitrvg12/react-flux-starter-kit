"use strict";

var React = require("react");
var CourseActions = require("../../actions/courseActions");
var toastr = require('toastr');
var Link = require('react-router').Link;

var CoursesList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    deleteCourse: function(id, event) {
        event.preventDefault();
        CourseActions.deleteAuthor(id);
        toastr.success('Course Deleted');
    },

    render: function() {
        var createCourseRow = function(course) {
            return (
                <tr key={course.id}>
                    <td><a className="btn btn-link" href={course.watchHref} target="_blank">Watch</a></td>
                    <td>
                        <button onClick={ this.deleteCourse.bind(this, course.id) } className="btn btn-link">Delete</button>
                    </td>
                    <td>
                        <Link to="manageCourse" params={{ id: course.id }}>{course.title}</Link>
                    </td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CoursesList;