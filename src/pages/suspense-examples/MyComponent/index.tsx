import React from 'react'
import { Theme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconCode from '@material-ui/icons/Code'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}))

const MyComponent: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography>I love to</Typography>
      <IconCode className={classes.icon} />
    </div>
  )
}

export default MyComponent
