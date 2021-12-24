import React from 'react';
import NavBar from '../utils/navigbar';
// import Tile from '../utils/tile';
import Memecard from '../utils/memecards';
import { Input } from "antd";
import { NavLink } from 'react-router-dom';
import Toggle from '../utils/toggle';

class Home extends React.Component {

    render() {
        return (
            <>
                < NavBar >
                    <NavLink to="#" className="nav-logo">
                        <Input.Search
                            placeholder="Search"
                            style={{ "max-width": "65%", "margin-top": "auto", "margin-bottom": "auto" }}
                        />
                    </NavLink>
                </NavBar >


                <div class="container container-fluid">
                    <div class="row row-fluid">
                        <Memecard>
                        </Memecard>
                    </div>
                </div>

                <Toggle></Toggle>
            </>
        )
    }

}

export default Home;