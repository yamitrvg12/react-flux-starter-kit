"use strict";

var React = require("react");
var Input = require("../common/textInput");
var DropdownInput = require("../common/dropdownInput");

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        authorList: React.PropTypes.array.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />

                <br />

                <DropdownInput name="author"
                    label="Author"
                    list={this.props.authorList}
                    onChange={this.props.onChange} />

                <br />

                <Input name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />

                <br />

                <Input name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange} />

                <br />

                <input type="submit" 
                    value="Save" 
                    onClick={this.props.onSave}
                    className="btn btn-default" />
            </form>
        );
    }
});

module.exports = CourseForm;