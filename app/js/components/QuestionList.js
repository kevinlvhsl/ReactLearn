var React = require('react')
var QuestionItem = require('./QuestionItem')
module.exports = React.createClass({
    render: function () {
        var questions = this.props.questions
        if ( !Array.isArray(questions) ) throw new Error('list的问题必须是数组')

        var questionComs = questions.map(function(qst){
            return <QuestionItem
                key={qst.key}
                indexKey={qst.key}
                question={qst}
                onVote={this.props.onVote}
            />
        }.bind(this));

        return (
            <div id="questions" className="">
                {questionComs}
            </div>
        )
    }
})