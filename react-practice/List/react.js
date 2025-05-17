const { createElement, Component } = React;
const { createRoot } = ReactDOM;

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return createElement(
      "ul",
      null,
      this.props.list.map((item, index) => {
        return createElement("li", { key: index }, item.toUpperCase());
      })
    );
  }
}

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", list: this.props.item };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      list: this.state.list,
    });
  }

  createInput() {
    return createElement("input", {
      type: "text",
      value: this.state.value,
      placeholder: "Add an item",
      onChange: this.handleChange,
    });
  }

  handleSubmit(event) {
    this.setState((prev) => {
      const value = prev.value;
      console.log(value, "from handle submit");
      console.log([...prev.list, value]);

      return { value: "", list: [...prev.list, value] };
    });
  }

  createButton() {
    return createElement(
      "button",
      {
        onClick: this.handleSubmit,
      },
      "Add"
    );
  }

  render() {
    const input = this.createInput();
    const btn = this.createButton();
    const p = createElement("p", null, `Your item : ${this.state.value}`);
    const list = createElement(List, { list: this.state.list });

    return createElement("div", null, input, btn, p, list);
  }
}

const container = document.querySelector(".main-container");
const root = createRoot(container);
root.render(createElement(ToDo, { item: ["item 1", "item 2", "item 3"] }));
