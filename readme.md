# Test API for ToDo task supports below methods:
```
ToDo = {
  id: int,
  creationDate: Date, 
  finishDate: Date,
  status: string,
  caption: string,
  description: string
}
```
```
GET /api/todo  - returns Array<ToDo>
GET /api/todo/:id - returns toDo item by id Object:ToDo
GET /api/todo/:id/description - returns description for toDo item by id {description: string}
POST /api/todo - returns new toDoItem Object:ToDo
DELETE /api/todo returns {id: itemId} 
PUT /api/todo/:id - returns toDo Object: ToDo
```

### for start you need:
 - clone the repo 
 - npm install 
 - npm run start
 
# Pay attention exeptions don't precessed, you have to sent right request format
