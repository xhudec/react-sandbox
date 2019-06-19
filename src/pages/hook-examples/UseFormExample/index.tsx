import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Fade from '@material-ui/core/Fade'
import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core';
import classNames from 'classnames'

import useForm from 'hooks/useForm'

import { TRANSITION_DELAY, TIMEOUT } from 'utils/constants'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  demoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  half: {
    width: '50%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  markdown: {
    color: '#ffffff',
  },
}))

function UseFormExample() {
  const { values, handleChange, handleBlur, handleSubmit, handleReset, isSubmitting } = useForm({
    initialValues: { firstName: '', lastName: '', email: '' },
    onSubmit: async values => console.log(values),
  })
  const classes = useStyles()

  return (
    <>
      <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY}ms` }}>
        <Typography variant="h5">📝Form implemented by custom form handling hook</Typography>
      </Fade>

      <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 2}ms` }}>
        <Typography variant="h6">Demo</Typography>
      </Fade>

      <div className={classes.demoContainer}>
        <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 3}ms` }}>
          <Paper className={classNames(classes.paper, classes.half)}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 3}ms` }}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Fade>
              <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 4}ms` }}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Fade>

              <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 5}ms` }}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Fade>

              <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 6}ms` }}>
                <div className={classes.formControl}>
                  <Button className={classes.button} variant="contained" onClick={handleReset}>
                    Reset
                  </Button>
                  <Button
                    className={classes.button}
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Fade>
            </form>
          </Paper>
        </Fade>
      </div>

      <div>
        <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 7}ms` }}>
          <Typography>
            For details, check file <pre>/src/hooks/useForm.ts</pre>
          </Typography>
        </Fade>
      </div>
    </>
  )
}

export default UseFormExample
