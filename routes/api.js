var
  express = require('express'),
  apiCtrl = require('../controllers/api.js'),
  apiRouter = express.Router()


apiRouter.route('/talks')
  .get(apiCtrl.index)
  .post(apiCtrl.create)

apiRouter.route('/talks/:id')
  .get(apiCtrl.show)
  .patch(apiCtrl.update)
  .delete(apiCtrl.delete)

module.exports = apiRouter
