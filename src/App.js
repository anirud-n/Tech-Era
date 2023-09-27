import {Route, Switch} from 'react-router-dom'

import CourseItem from './CourseItem/index'

import CourseItemDetails from './CourseItemDetails/index'

import NotFound from './NotFound/index'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={CourseItem} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App
