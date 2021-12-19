import React from "react";
import "./../../css/tile.css";

class Tile extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4">
                <div className="thumbnail">
                    <div className="date_image_holder">
                        <span className="heart_position glyphicon glyphicon-heart"></span>
                    </div>
                    <div className="caption">
                        <h4 className="pull-right">$24.99</h4>
                        <h4><a href="#">First Product</a>
                        </h4>
                        <p>See more snippets like this online store item at <a target="_blank" href="https://www.bootsnipp.com">Bootsnipp - https://bootsnipp.com</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;