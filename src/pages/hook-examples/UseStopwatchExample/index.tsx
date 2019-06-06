import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core'

import useStopwatch from 'hooks/useStopwatch'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  control: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
}))

const UseStopwatchExample: React.FC = () => {
  const classes = useStyles()
  const timer1 = useStopwatch()
  const timer2 = useStopwatch({ initialTime: 5000 })

  return (
    <section>
      <Paper className={classes.paper}>
        <Typography>Elapsed Time: {timer1.time}ms</Typography>
        <div className={classes.control}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={timer1.stop}
          >
            Stop
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={timer1.isRunning ? timer1.pause : timer1.start}
          >
            {timer1.isRunning ? 'Pause' : 'Start'}
          </Button>
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography>Elapsed Time: {timer2.time}ms</Typography>
        <div className={classes.control}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={timer2.stop}
          >
            Stop
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={timer2.isRunning ? timer2.pause : timer2.start}
          >
            {timer2.isRunning ? 'Pause' : 'Start'}
          </Button>
        </div>
      </Paper>
    </section>
  )
}

export default UseStopwatchExample
