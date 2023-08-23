import express from "express"

// importamos los controladores
import {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    actualizarUsuario,
    deleteUsuario
} from '../../../controllers/v1/usuarios'

// importamos los middlewares


import { updateDateMiddleware } from '../../../middlewares/updateDate'

// definimos una constante para crear la ruta
const router = express.Router();

// endpoints
// usamos los verbos GET, PUT, POST, DELETE
// para añadir los middlewares pasamos despues de la ruta un arreglo
// el primer campo es el middleware y el segundo es el controlador
// ahora el middleware se inyecta en cada ruta
// router.get('/', getAllUsuarios)
router.get('/', [updateDateMiddleware, getAllUsuarios])
router.get('/:id', [updateDateMiddleware, getUsuarioById])
router.post('/', [updateDateMiddleware, createUsuario])
router.put('/:id', [updateDateMiddleware, actualizarUsuario])
router.delete('/:id', [updateDateMiddleware, deleteUsuario])


// exportamos la ruta
// para asociarla a la ruta principal

export default router