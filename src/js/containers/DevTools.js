import React, { Component } from 'react'

import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// const DevTools = createDevTools(
//   <DockMonitor 
//     toggleVisibilityKey="ctrl-h"
//     changePositionKey="ctrl-q"
//   >
//     <LogMonitor theme='tomorrow' />
//   </DockMonitor>
// )

const DevTools = createDevTools(
    <LogMonitor theme='tomorrow' />
)

export default DevTools