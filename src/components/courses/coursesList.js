"use strict";

var React = require("react");

var CoursesList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    render: function() {
        var createCourseRow = function(course) {
            return (
                <tr key={course.id}>
                    <td><a href={course.watchHref} target="_blank">Watch</a></td>
                    <td>{course.title}</td>
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
                        <th>Watch</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CoursesList;