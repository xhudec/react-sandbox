import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Slide from '@material-ui/core/Slide'
import IconCode from '@material-ui/icons/Code'
import IconSchedule from '@material-ui/icons/Schedule'
import IconSettings from '@material-ui/icons/Settings'

import Link from 'components/Link'

import { TRANSITION_DELAY, TIMEOUT } from 'utils/constants'

function NavigationList() {
  return (
    <List>
      <Link to="/hook-examples">
        <Slide in direction="right" timeout={TIMEOUT}>
          <ListItem button>
            <IconCode color="action" />
            <ListItemText primary="Hooks" />
          </ListItem>
        </Slide>
      </Link>
      <Slide
        in
        direction="right"
        timeout={TIMEOUT}
        style={{ transitionDelay: `${TRANSITION_DELAY}ms` }}
      >
        <ListItem disabled button>
          <IconSchedule color="action" />
          <ListItemText primary="Suspense" />
        </ListItem>
      </Slide>
      <Link to="/experimental">
        <Slide
          in
          direction="right"
          timeout={TIMEOUT}
          style={{ transitionDelay: `${TRANSITION_DELAY * 2}ms` }}
        >
          <ListItem button>
            <IconSettings color="action" />
            <ListItemText primary="Experimental" />
          </ListItem>
        </Slide>
      </Link>
      <Divider />
    </List>
  )
}

export default NavigationList
