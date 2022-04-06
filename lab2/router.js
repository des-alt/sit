import  Router  from "express";
import Post from "./Post.js";
import PostController from "./PostController.js";

const router = new Router()

router.post('/students', PostController.create)
router.get('/students', PostController.getAll)
router.get('/students/:id', PostController.getOne)
router.put('/students', PostController.update)
router.delete('/students/:id', PostController.delete) 

export default router;