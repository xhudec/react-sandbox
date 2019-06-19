import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import IconCode from '@material-ui/icons/Code'
import IconSchedule from '@material-ui/icons/Schedule'
import IconSettings from '@material-ui/icons/Settings'

import ListItemLink from './ListItemLink'

const navigationLinks = [
  {
    icon: <IconCode color="action" />,
    label: 'Hooks',
    href: '/hook-examples',
  },
  {
    icon: <IconSchedule color="action" />,
    label: 'Suspense',
    href: '/suspense-examples',
  },
  {
    icon: <IconSettings color="action" />,
    label: 'Experimental',
    href: '/experimental',
    disabled: true,
  },
]

function NavigationList() {
  return (
    <List component="nav">
      {navigationLinks.map(navigationLink => (
        <ListItemLink
          disabled={navigationLink.disabled}
          icon={navigationLink.icon}
          label={navigationLink.label}
          to={navigationLink.href}
        />
      ))}

      <Divider />
    </List>
  )
}

export default NavigationList
