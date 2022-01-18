import { Router } from "express";
import { addUser, deleteUser, getUser, getUsers, patchUser } from "../controlers/user.constroler";

const router = Router();

router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/",addUser);
router.patch('/:id',patchUser);
router.delete("/:id",deleteUser);

export default router;