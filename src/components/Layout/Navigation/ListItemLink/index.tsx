import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const LinkWithRef = React.forwardRef<Link, LinkProps>((props, ref) => {
  return <Link ref={ref} to={props.to} {...props} />
})

interface IListItemLinkProps {
  icon: React.ReactElement
  label: React.ReactText
  to: string

  disabled?: boolean
}

export default function ListItemLink(props: IListItemLinkProps) {
  return (
    <li>
      <ListItem button disabled={props.disabled} component={LinkWithRef} to={props.to}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.label} />
      </ListItem>
    </li>
  )
}
