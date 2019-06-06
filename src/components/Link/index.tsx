import React from 'react'
import { Link as DefaultLink, LinkProps } from 'react-router-dom'

import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

interface ILinkProps extends LinkProps {}

function Link({ to, children }: ILinkProps) {
  const classes = useStyles()

  return (
    <DefaultLink className={classes.link} to={to}>
      {children}
    </DefaultLink>
  )
}

export default Link
