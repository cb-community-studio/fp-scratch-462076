import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className=" w-8"></div>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
