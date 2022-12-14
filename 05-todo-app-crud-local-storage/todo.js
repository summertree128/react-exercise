class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.itemKey = 'todos'
  }

  componentDidMount () {
    const items = this.getTodos()
    this.setState({ items: items })
  }

  render () {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList
          items={this.state.items}
          onDelete={this.handleDelete}
          onSave={this.handleSave}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo' className="todo-item-add-label">
            What needs to be done?
          </label>
          <input
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.text}
            className="todo-item-add-input"
          />
          <button className="todo-item-add-button">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }

    const newItems = this.state.items.concat(newItem)

    this.saveTodos(newItems)
    this.setState({ items: newItems, text: '' })
  }

  handleDelete (itemId) {
    const newItems = this.state.items.filter(item => item.id != itemId)
    this.saveTodos(newItems)
    this.setState({ items: newItems })
  }

  handleSave (itemId, text) {
    const newItems = Array.from(this.state.items)
    const editedItem = newItems.find(item => item.id == itemId)
    editedItem.text = text
    this.saveTodos(newItems)
    this.setState({ items: newItems })
  }

  getTodos() {
    const todos = localStorage.getItem(this.itemKey)
    return todos === null ? [] : JSON.parse(todos)
  }

  saveTodos(todos) {
    localStorage.setItem(this.itemKey, JSON.stringify(todos))
  }
}

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  render () {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            <TodoItem
              item={item}
              onDelete={this.handleDelete}
              onSave={this.handleSave}
            />
          </li>
        ))}
      </ul>
    )
  }

  handleDelete (itemId) {
    this.props.onDelete(itemId)
  }

  handleSave (itemId, text) {
    this.props.onSave(itemId, text)
  }
}

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editing: false, text: this.props.item.text }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    if (this.state.editing) {
      return (
        <div className="todo-item">
          <form onSubmit={this.handleSave} className="todo-item-edit-form">
            <input type='text' name='text' value={this.state.text} onChange={this.handleChange} className="todo-item-edit-input" />
            <input type='hidden' name='id' value={this.props.item.id} />
            <button className="todo-item-button">Save</button>
          </form>
        </div>
      )
    }

    return (
      <div className="todo-item">
        <div className="todo-item-text">{this.props.item.text}</div>
        <button onClick={this.handleEdit} value={this.props.item.id} className="todo-item-button">Edit</button>
        <button onClick={this.handleDelete} value={this.props.item.id} className="todo-item-button">Delete</button>
      </div>
    )
  }

  handleDelete (e) {
    e.preventDefault()
    this.props.onDelete(e.target.value)
  }

  handleEdit (e) {
    e.preventDefault()
    this.setState({ editing: true })
  }

  handleSave (e) {
    e.preventDefault()
    this.props.onSave(this.props.item.id, this.state.text)
    this.setState({ editing: false })
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }
}

const domContainer = document.querySelector('#todo_app_container')
const root = ReactDOM.createRoot(domContainer)
root.render(<TodoApp />)
