import fs from 'fs';
import path from 'path';
import {omitBy, findIndex} from 'lodash';
import {ToDo} from '../models';

class Dao {
  constructor() {
    let basicPath = path.dirname(path.dirname(path.resolve(require.main.filename)));
    this.pathToFile = path.resolve(basicPath,'./assets/to-do-list.json');
    this.toDoList =
      JSON.parse(fs.readFileSync(this.pathToFile, 'utf8')).map(item => new ToDo(item));
  }
  getToDoList() {
    return new Promise((resolve, reject) => {
      resolve(this.toDoList.map(item => omitBy(item, (value, key) => key === 'description')))
    })
  }
  getToDoItem(id) {
    return new Promise((resolve, reject) => {
      resolve(this.toDoList.filter(item => item.id === id)[0])
    })
  }
  updateToDo(toDo) {
    return new Promise((resolve, reject) => {
      const index = findIndex(this.toDoList, item => item.id === toDo.id);
      const tmp = new ToDo(toDo);
      this.toDoList[index] = tmp;
      this.saveFile();
      resolve(tmp);
    })
  }
  deleteToDoItem(id) {
    return new Promise((resolve, reject) => {
      this.toDoList = this.toDoList.filter(item => item.id !== id);
      this.saveFile();
      resolve({id})
    })
  }
  addToDoItem(toDo) {
    return new Promise((resolve, reject) => {
      const idList = this.toDoList.map(item => item.id);
      toDo.setId(idList.length > 0 ? Math.max(...idList) + 1 : 1);
      this.toDoList.push(toDo);
      this.saveFile();
      resolve(toDo);
    })
  }
  getItemDescription(id) {
    console.log(this.toDoList.filter(item => item.id === id));
    return new Promise((resolve, reject) => {
      resolve(omitBy(this.toDoList.find(item => item.id === id), (val, key) => key !== 'description'))
    })
  }
  saveFile() {
    fs.writeFileSync(this.pathToFile, JSON.stringify(this.toDoList), 'utf-8');
  }
}


export const dao = new Dao();
