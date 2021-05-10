const express = require('express')
const router = express.Router()
const urlsCltr = require('../app/controllers/urlsCltr')



//
router.get('/urls', urlsCltr.list)
router.post('/urls', urlsCltr.create)
router.get('/urls/:id', urlsCltr.show)
router.put('/urls/:id', urlsCltr.update)
router.delete('/urls/:id', urlsCltr.destroy)
//router.redirect('/urls', urlsCltr.redirect)

module.exports = router