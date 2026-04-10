import express from 'express';
import { createNote, getNotes, getNotesById, editNoteById, deleteNoteById } from './controller.js';
const router = express.Router();


router.post('/notes', createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNoteById);

router.use((_, res) => {
  res.status(404).json({ 'message': 'hallaman tidak ditemukan' });
});

export default router;