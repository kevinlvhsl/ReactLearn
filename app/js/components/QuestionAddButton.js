var React = require('react')

module.exports = React.createClass({
	render: function () {
		return (
			<button id="add-question-btn" className="btn btn-success" onClick={this.props.toggleAddForm}>添加问题</button>
		)
	}
})