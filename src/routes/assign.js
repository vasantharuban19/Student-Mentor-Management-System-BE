import express from 'express'
import assigncontroller from '../controller/assign.js'

const router = express.Router()

router.post('/student/:batch/mentor/:mentor_id',assigncontroller.assignStudents)
export default router