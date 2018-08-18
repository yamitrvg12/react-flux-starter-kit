"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var actionType = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: actionType.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;