import React from "react";

import { BrowserRouter as Router,
    Switch,
    Route, 
    Link
   } from 'react-router-dom';

import Children from "./Children";

const Dashboard = () =>{
    return (
        <Router>
            <div>
                <h2>Social Accounts</h2>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard/netflix"> Netflix</Link>
                </li>
                <li>
                    <Link to="/dashboard/facebook"> Facebook</Link>
                </li>
                <li>
                    <Link to="/dashboard/orkut"> Orkut</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/dashboard/:id" children={<Children />} />
            </Switch>
        </Router>
        
      );
}

export default Dashboard;