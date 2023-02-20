/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    // eslint-disable-next-line indent
    },
    {
      method: 'GET',
      path: '/notes',
      // eslint-disable-next-line no-undef
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      // eslint-disable-next-line no-undef
      handler: getNoteByIdHandler,
    },
  // eslint-disable-next-line indent
  ];
   // eslint-disable-next-line no-trailing-spaces
   
// eslint-disable-next-line eol-last
module.exports = routes;