var React = require('react')

module.exports = React.createClass({
    upVote: function (){
        var count = parseInt(this.props.question.voteCount, 10) + 1
        this.props.onVote(this.props.indexKey, count)
    },
    downVote: function (){
        var count = parseInt(this.props.question.voteCount, 10) - 1
        this.props.onVote(this.props.indexKey, count < 0 ? 0 : count)
    },
    shoudComponentUpdate() {
        if (this.props.question.voteCount < 0) {
            return false
        }
        return true
    },
    render: function () {
        var voted = {
            background: this.props.question.voted ? 'lightblue' : 'transparent'
        }
        return (
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.upVote} style={voted}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.question.voteCount}</span>
                    </button>
                    <button className="btn btn-default" onClick={this.downVote} style={voted}>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.question.title}</h4>
                    <p>{this.props.question.desc}</p>
                </div>
            </div>
        )
    }
})
