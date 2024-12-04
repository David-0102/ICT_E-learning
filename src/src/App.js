import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import CourseList from './components/CourseList';
import EnrollmentList from './components/EnrollmentList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/courses" component={CourseList} />
                <Route path="/enrollments" component={EnrollmentList} />
            </Switch>
        </Router>
    );
}

export default App;