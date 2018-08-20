"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var actionType = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: actionType.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitializeActions;