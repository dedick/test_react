class TodoModel {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.isVisible = true;
  }
  static checkProperty(obj){
    return 'id' in obj && 'text' in obj;
  }
}

export default TodoModel;