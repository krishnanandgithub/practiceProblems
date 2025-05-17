class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((prev) => {
      return {
        timesClicked: prev.timesClicked + 1,
      };
    });
  }

  reset() {
    this.setState({ timesClicked: 0 });
  }

  createClickButton() {
    return React.createElement(
      "button",
      {
        onClick: this.increment,
      },
      `Times Clicked ${this.state.timesClicked}`
    );
  }

  createResetButton() {
    return React.createElement(
      "button",
      {
        onClick: this.reset,
      },
      "Reset"
    );
  }

  render() {
    const counter = this.createClickButton();
    const reset = this.createResetButton();

    return React.createElement("div", null, counter, reset);
  }
}

const container = document.querySelector(".main-container");
const root = ReactDOM.createRoot(container);
const clicker1 = React.createElement(Clicker);
const clicker2 = React.createElement(Clicker);
const clicker3 = React.createElement(Clicker);
root.render(React.createElement("div", null, clicker1, clicker2, clicker3));
