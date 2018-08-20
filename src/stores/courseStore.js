"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionType = require('../constants/actionTypes');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = "change";

var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllCourses: function() {
        return _courses;
    }
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionType.INITIALIZE:
            _courses = action.initialData.courses;
            CourseStore.emitChange();
            break;
        case ActionType.CREATE_COURSE:
            _courses.push(action.course);
            CourseStore.emitChange();
            break;
        default:
    }
});

module.exports = CourseStore;
