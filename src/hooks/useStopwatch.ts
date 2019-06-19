import React from 'react'
import useInterval from './useInterval'

export enum STOPWATCH_ACTION_TYPES {
  START = 'START',
  STOP = 'STOP',
  PAUSE = 'PAUSE',
  SET_TIME = 'SET_TIME',
}

type TStopwatchState = {
  time: number
  isRunning: boolean
}

type TStopwatchAction = {
  type: STOPWATCH_ACTION_TYPES

  payload?: any
}

function stopwatchReducer(state: TStopwatchState, action: TStopwatchAction): TStopwatchState {
  switch (action.type) {
    case STOPWATCH_ACTION_TYPES.SET_TIME:
      return {
        ...state,
        time: action.payload,
      }
    case STOPWATCH_ACTION_TYPES.START:
      return {
        ...state,
        isRunning: true,
      }
    case STOPWATCH_ACTION_TYPES.STOP:
      return {
        time: 0,
        isRunning: false,
      }
    case STOPWATCH_ACTION_TYPES.PAUSE:
      return {
        ...state,
        isRunning: false,
      }
    default:
      throw new Error(`[stopwatchReducer] Unknown Action type ${action.type}`)
  }
}

interface IUseStopwatchInit {
  initialTime?: number
}

function useStopwatch({ initialTime }: IUseStopwatchInit = {}) {
  const [state, dispatch] = React.useReducer(stopwatchReducer, {
    isRunning: false,
    time: initialTime || 0,
  })
  const { isRunning, time } = state

  const started = Date.now() - time

  useInterval(
    () => {
      dispatch({ type: STOPWATCH_ACTION_TYPES.SET_TIME, payload: Date.now() - started })
    },
    isRunning ? 1 : null
  )

  function start() {
    dispatch({ type: STOPWATCH_ACTION_TYPES.START })
  }

  function pause() {
    dispatch({ type: STOPWATCH_ACTION_TYPES.PAUSE })
  }

  function stop() {
    dispatch({ type: STOPWATCH_ACTION_TYPES.STOP })

    // FIXME: make sure that timer is reset
    // reason - race conditions set intervals callback might be launched after STOP action which rewrites the time state
    setTimeout(() => {
      dispatch({ type: STOPWATCH_ACTION_TYPES.SET_TIME, payload: 0 })
    })
  }

  return {
    time,
    isRunning,
    start,
    pause,
    stop,
  }
}

export default useStopwatch
