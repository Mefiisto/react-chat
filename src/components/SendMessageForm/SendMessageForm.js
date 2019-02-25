import React from 'react'
import classes from './SendMessageForm.css'

class SendMessageForm extends React.Component {

	state = {
		message: ''
	}

	inputChangeHadler(value) {
	  this.setState({
	  	message: value
	  })
	}

	render() {
		return (
			<form 
				action="#" 
				className={classes.SendMessageForm}
				onSubmit={(event) => {
					this.props.onSubmit(event, this.state.message)
					this.setState({
						message: ''
					})
				 }}
			>
				<input 
				type="text"
				placeholder={this.props.placeholder}
				onChange={event => this.inputChangeHadler(event.target.value)}
				value={this.state.message}
				/>
			</form>
		)
}

}


export default SendMessageForm