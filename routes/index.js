const contactsRouter = require('./contacts');

const apiRouter = (app) => {
    app.use('/contacts', contactsRouter);
}
module.exports = apiRouter;