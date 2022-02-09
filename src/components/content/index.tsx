import * as React from 'react';
import { Link, BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import "./index.scss";

import Wallets from "../pages/wallets";
import Prices from "../pages/prices";
import Peer2Peer from "../pages/peer2Peer";
import Activity from "../pages/activity";
import Settings from "../pages/settings";

const Content = () => {

    const list = [ 'wallets' , 'prices' , 'per2Peer' , 'activity' , 'settings' ];
    const [selectedItem , setSelectedItem ] = React.useState("wallets");

    return <>

        <Router >
            <div className='main'>

                <ul>
                    {
                        list.map((item)=> {
                            return <li key={item} className={selectedItem === item ? "selected" : "" } >
                                <Link to={"/"+item} onClick={()=>{setSelectedItem(item)}}>{item}</Link>
                            </li>
                        })
                    }
                </ul>
                <div className='page'>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/wallets" />} ></Route>
                        <Route path="/wallets" element={<Wallets />}></Route>
                        <Route path="/prices" element={<Prices />}></Route>
                        <Route path="/peer2Peer" element={<Peer2Peer />}></Route>
                        <Route path="/activity" element={<Activity />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    </>

}

export default Content;