class HelloComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.name}</h1>
			</div>
		)
	}
}

ReactDOM.render(
  <HelloComponent name="Ievgen" />,
  document.getElementById("root")
);
