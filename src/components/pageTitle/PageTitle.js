import React from 'react'
import classes from './PageTitle.css'

const PageTitle = (props) => {
	return(
		<h1 className={classes.PageTitle}>
			{props.title}
		</h1>
	)
}

export default PageTitle