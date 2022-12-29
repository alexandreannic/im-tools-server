import express from 'express'
import {AppController} from '../controller/AppController'

export const getRoutes = () => {
  const router = express.Router()
  const app = new AppController()
  router.get('/', app.index)
  return router
}
