function Task(id, name, desc, date, url, isMarked = false) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.date = date;
  this.url = url;
  this.isMarked = isMarked; // red
}
Task.prototype.toggle = function () {
  this.isMarked = !this.isMarked;
};
export default Task;
