"use strict";

var React = require("react");
var Router = require('react-router');
var CourseForm = require("./courseForm");
var toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');
var AuthorStore = require('../../stores/authorStore');
var CourseStore = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getAuthors: function() {
        var authorList = AuthorStore.getAllAuthors().map(function(author) {
            return {
                name: author.firstName + ' ' + author.lastName
            };
        });

        return authorList;
    },

    getInitialState: function() {
        return {
            course: {
                title: '',
                author: '',
                length: '',
                category: ''
            },
            errors: {},
            dirty: false,
            authorList: this.getAuthors()
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id;
        
        if(courseId) {
            this.setState({
                course: CourseStore.getCourseById(courseId)
            });
        }

    },

    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        if (field === 'author') {
            this.state.course[field] = {
                name: value
            };
        } else {
            this.state.course[field] = value;
        }

        return this.setState({
            course: this.state.course,
            dirty: true
        });
    },

    courseFormIsValid: function() {
        var formIsValid = true;

        this.state.errors = {}; // clear any previous errors
        
        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({
            errors: this.state.errors
        });

        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        CourseActions.update(this.state.course);

        this.setState({
            dirty: false
        });

        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function() {
        return (
            <div>
                <CourseForm 
                    course={this.state.course} 
                    onChange={this.setAuthorState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                    authorList={this.state.authorList}
                    authorSelected={this.state.course.author} />
            </div>
        );
    }
});

module.exports = ManageCoursePage;