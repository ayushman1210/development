const router=require('express').Router()

const { addexpense, getexpense, deleteexpense } = require('../controllers/expense.js')
const {addinc, getinc, deleteinc}=require('../controllers/income.js')
router.post('/addincome',addinc)
router.get('/getincome',getinc)
    .delete('/deleteincome/:id',deleteinc)
    .post('/addexpense',addexpense)
    .get('/getexpense',getexpense)
    .delete('/deleteexpense/:id',deleteexpense)


module.exports = router