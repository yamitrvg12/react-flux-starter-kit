"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var actionType = require('../constants/actionTypes');

var AuthorActions = {
    update: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionType.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author) {
        var updateAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionType.UPDATE_AUTHOR,
            author: updateAuthor
        });
    },

    deleteAuthor: function(id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: actionType.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;
