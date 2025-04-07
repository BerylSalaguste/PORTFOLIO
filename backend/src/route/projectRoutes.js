import express from 'express';
import {createProject,getAllProjects,getProjectById,updateProject,deleteProject,addCertificate,deleteCertificate} from '../controllers/projectController.js';

const router = express.Router();

router.post('/projects', createProject);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

// Certificates
router.post('/projects/:projectId/certificates', addCertificate);
router.delete('/projects/:projectId/certificates/:certId', deleteCertificate);

export default router;