import express from 'express'
import mentorController from '../controller/mentor.js'

const router = express.Router()

router.get('/',mentorController.allMentor)

router.get('/:id/',mentorController.getOneMentor)

router.post('/',mentorController.addMentor)

router.put('/:id/',mentorController.editMentor)

router.delete('/:id',mentorController.deleteMentor)

router.get('/student/:id',mentorController.mentorStudentList)

router.put('/:id/:batch',mentorController.addBatch)

export default router