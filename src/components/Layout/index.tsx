import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import Link from '../Link'
import Navigation from './Navigation'

import { ReactLogo } from 'assets/images'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 256,
  },
  pageContainer: {
    flexGrow: 1,
  },
  content: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  logoContainer: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
    animation: '$custom-rotation 16s linear infinite',
  },
  logoTitle: {
    marginBottom: 0,
  },
  '@keyframes custom-rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}))

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
          <Link to="/">
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={ReactLogo} />
              <Typography className={classes.logoTitle} variant="h5">
                React Sandbox
              </Typography>
            </div>
          </Link>
          <Divider />
          <Navigation />
        </Drawer>
      </nav>
      <div className={classes.pageContainer}>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
