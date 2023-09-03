import Router from 'express'
import PostContoller from './PostContoller.js'
const router = new Router()

router.post('/posts', PostContoller.create)
router.get('/posts', PostContoller.getAll)
router.get('/post/:id', PostContoller.getOne)
router.put('posts', PostContoller.update)
router.delete('/posts/:id', PostContoller.create)

export default router
