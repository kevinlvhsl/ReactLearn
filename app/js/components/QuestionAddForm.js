var React = require('react')

module.exports = React.createClass({
	getInitialState: function () {
		return {
		}
	},
	handleForm: function (e) {
		e.preventDefault()
		var newQuestion = {
			title: this.refs.titleInput.getDOMNode().value,
			desc: this.refs.descInput.getDOMNode().value,
			voteCount: 0,
			voted: false
		}
		if (newQuestion.title.length <= 0) {
			alert('标题不能为空！')
			return
		}
		if (newQuestion.title.length <= 0) {
			alert('描述不能为空！')
			return
		}
		this.props.onNewQuestion( newQuestion )
		this.refs.addQuestionForm.getDOMNode().reset()
	},
	render: function () {
		var styleObj = {
			display: this.props.showForm ? 'block' : 'none'
		}
		return (
			<form ref="addQuestionForm" style={styleObj} name="addQuestion" className="clearfix" onSubmit={this.handleForm}>
				<div className="form-group">
					<label htmlFor="qtitle">问题</label>
					<input ref="titleInput" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
				</div>
				<textarea ref="descInput" className="form-control" rows="3" placeholder="问题的描述"></textarea>
				<button className="btn btn-success pull-right" >确认</button>
				<a className="btn btn-default pull-right" onClick={this.props.toggleAddForm}>取消</a>
			</form>
		)
	}
})