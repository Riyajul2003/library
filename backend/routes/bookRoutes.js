import express from 'express';
import { authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';
import { addABook, borrowOrReturnABook, deleteABook, getABook, getAllBooks } from '../controllers/bookController.js';

const router = express.Router();

router.post("/add", isAuthenticated, authorizedAdmin, addABook);
router.delete("/delete/:id", isAuthenticated, authorizedAdmin, deleteABook);
router.get("/all", isAuthenticated, getAllBooks);
router.get("/:id", isAuthenticated, getABook);
router.put("/borrow-or-return/:id", isAuthenticated, borrowOrReturnABook);

export default router;