const { createElement, Component } = React;
const { createRoot } = ReactDOM;

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const task = createElement("label", null, this.props.task);
    const checkbox = createElement("input", {
      type: "checkbox",
      checked: this.props.done,
      onChange: this.props.toggle(this.props.taskId),
    });

    return createElement("div", null, checkbox, task);
  }
}

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return createElement(
      "div",
      null,
      this.props.tasks.map((task) => {
        return createElement(Task, {
          key: task.taskId,
          taskId: task.taskId,
          task: task.task,
          done: task.done,
          toggle: this.props.toggle,
        });
      })
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState((prev) => {
      return { value: event.target.value };
    });
  }

  handleSubmit(event) {
    this.setState((prev) => {
      if (event.key === "Enter" && event.target.value) {
        this.props.addItem(event.target.value);

        return { value: "" };
      }
    });
  }

  render() {
    return createElement("input", {
      type: "text",
      placeholder: "Add a new item",
      value: this.state.value,
      onChange: this.handleChange,
      onKeyDown: this.handleSubmit,
    });
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskIds: 1,
    };
    this.addItem = this.addItem.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  addItem(task) {
    this.setState((prev) => {
      const newTask = { taskId: this.state.taskIds++, task, done: false };
      return { tasks: [...prev.tasks, newTask] };
    });
  }

  toggleStatus(taskId) {
    return () => {
      this.setState((prev) => {
        const tasks = prev.tasks.map((task) => {
          return task.taskId === taskId ? { ...task, done: !task.done } : task;
        });

        return { tasks };
      });
    };
  }

  render() {
    const input = createElement(Input, { addItem: this.addItem });
    const tasks = createElement(Tasks, {
      tasks: this.state.tasks,
      toggle: this.toggleStatus,
    });

    return createElement("div", null, input, tasks);
  }
}

const container = document.querySelector(".main-container");
const root = createRoot(container);
root.render(createElement(Todo));
