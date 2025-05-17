const { createElement, Component } = React;
const { createRoot } = ReactDOM;

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }

  isChecked() {
    return this.state.count % 3 === 0;
  }

  render() {
    return createElement(
      "label",
      null,
      createElement("input", {
        type: "checkbox",
        checked: this.isChecked(),
        onClick: this.handleClick,
      }),
      this.props.content
    );
  }
}

const container = document.querySelector(".main-container");
const root = createRoot(container);
const checklist1 = createElement(CheckList, { content: "Abu" });

root.render(createElement(CheckList, { content: "Abu" }));
