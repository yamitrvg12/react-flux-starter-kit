"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var actionType = require('../constants/actionTypes');

var CourseActions = {
    update: function(course) {
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: actionType.CREATE_COURSE,
            course: newCourse
        });
    }
};

module.exports = CourseActions;
