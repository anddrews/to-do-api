import {STATUSES} from '../constants';

export class ToDo {
  constructor({
    id = 0,
    creationDate = new Date(),
    finishDate = null,
    status = STATUSES.NEW,
    caption,
    description}
) {
    this.id = +id;
    this.creationDate = creationDate;
    this.finishDate = finishDate;
    this.status = status;
    this.caption = caption;
    this.description = description;
  }
  setId(id) {
    this.id = id;
  }
  changeStatus(status) {
    this.status = status;
    this.finishDate = new Date();
  }
  getToDo() {
    return {
      id: this.id,
      creationDate: this.creationDate,
      finishDate: this.finishDate,
      status: this.status,
      caption: this.caption
    }
  }
  getToDoDescription() {
    return {
      description: this.description
    }
  }
  update({
    id,
    creationDate,
    finishDate,
    status,
    caption,
    description
  }) {
    this.id = id;
    this.creationDate = new Date(creationDate);
    this.finishDate = new Date(finishDate);
    this.status = status;
    this.caption = caption;
    this.description = description;
    return this;
  }
}