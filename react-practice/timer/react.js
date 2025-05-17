class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => {
        return { seconds: prev.seconds + 1 };
      });
    }, 1000);
  }

  render() {
    if (this.state.seconds > this.props.maxSeconds)
      return React.createElement("p", null, `Times Up`);

    return React.createElement("p", null, `Seconds ${this.state.seconds}`);
  }
}

const container = document.querySelector(".main-container");
const root = ReactDOM.createRoot(container);
const timer1 = React.createElement(Timer, { maxSeconds: 10 });
const timer2 = React.createElement(Timer, { maxSeconds: 5 });
root.render(
  React.createElement(
    "div",
    {
      style: { background: "cyan", border: "1px solid black" },
    },
    timer1,
    timer2
  )
);
