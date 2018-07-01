import express from 'express'
import {dao} from '../dao';
import {toDoItemMiddleware} from '../middelwares';

export const toDoRouter = express.Router();

toDoRouter.use(toDoItemMiddleware.extendReqItem, toDoItemMiddleware.errorHandler);

toDoRouter.get('/api/todo', (req, res) => {
  dao.getToDoList()
    .then((data) => {res.status(200).end(JSON.stringify(data))})
    .catch((err) => {res.status(404).end('Something gone wrong')});
});

toDoRouter.get('/api/todo/:id', (req, res) => {
  dao.getToDoItem(+req.params.id)
    .then((data) => { res.status(200).json(data)})
    .catch(() => {res.status(404).end('Something gone wrong')});
});

toDoRouter.get('/api/todo/:id/description', (req, res) => {
  console.log('get description' + req.params.id);
  dao.getItemDescription(+req.params.id)
    .then((data) => {res.status(200).json(data)})
    .catch(() => {res.status(404).end('Something gone wrong')});
});

toDoRouter.post('/api/todo', (req, res) => {
  dao.addToDoItem(req.item)
    .then((data) => {res.status(201).json(data) })
    .catch(() => {res.status(404).end('Something gone wrong')});
});

toDoRouter.put('/api/todo', (req, res) => {
  dao.updateToDo(req.item)
    .then((data) => {res.status(201).json(data) })
    .catch(() => {res.status(404).end('Something gone wrong')});
});
toDoRouter.delete('/api/todo/:id', (req, res) => {
  dao.deleteToDoItem(+req.params.id)
    .then((data) => {res.status(201).json(data) })
    .catch(() => {res.status(404).end('Something gone wrong')});
});