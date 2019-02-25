import React from 'react'
import classes from './MessagesList.css'


const MessagesList = (props) => {
	return (
		<ul className={classes.MessageList}>
			{props.messages.map((message, index) => {
				return (
					<li key={index}>
						<p className={classes.userId}>{message.senderId}</p>
						<p className={classes.userText}>{message.text}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default MessagesList