import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'

import '../style/index'

import { BrowserRouter } from 'react-router-dom'

render(
    <Routes />,
    document.getElementById('root')   
)