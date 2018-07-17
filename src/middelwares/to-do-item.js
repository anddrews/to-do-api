import {ToDo} from '../models';

export const toDoItemMiddleware = {
  extendReqItem: (req, res, next) => {
    console.log(req.body);
    const newToDo = new ToDo({
      id: req.body.id,
      creationDate: req.body.creationDate,
      finishDate: req.body.finishDate,
      status: req.body.status,
      caption: req.body.caption,
      description: req.body.description}
    );
    if(!newToDo) {
      next('Wrong data for model');
    } else {
      req.item = newToDo;
      res.status(204);
      next();
    }
  },
  isExistId: (req, res, next) => {
    const id = req.url.split('/')[1];
    if( id ) {
      if( !parseInt(id)) {
        console.log(req.url.split('/')[1]);
        next('Wrong Id');
      }
      Dao.isExistId(id).then(() => next()).catch(() => {
        res.status(404);
        next('Wrong Id')
      });
    } else {
      next();
    }
  },
  errorHandler: (err, req, res, next ) => {
    next(err);
  }
};