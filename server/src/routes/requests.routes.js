const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')
const { isAuthenticated } = require('../middleware/auth')
const { validate } = require('../middleware/validate')
const { createRequestSchema, updateRequestSchema } = require('../schemas/requests.schema')

router.post('/', isAuthenticated, validate(createRequestSchema), create)
router.put('/:id', isAuthenticated, validate(updateRequestSchema), update)
router.get('/', isAuthenticated, getAll)
router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
