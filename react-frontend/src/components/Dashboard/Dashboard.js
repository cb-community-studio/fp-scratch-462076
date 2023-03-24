import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MegaMenu } from "primereact/megamenu";
import { Galleria } from "primereact/galleria";
// import { PhotoService } from "./service/PhotoService";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    // vertical dropdown menu

    const items = [
        {
            label: "Videos",
            icon: "pi pi-fw pi-video",
            items: [
                [
                    {
                        label: "Video 1",
                        items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
                    },
                    {
                        label: "Video 2",
                        items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
                    },
                ],
                [
                    {
                        label: "Video 3",
                        items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
                    },
                    {
                        label: "Video 4",
                        items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Users",
            icon: "pi pi-fw pi-users",
            items: [
                [
                    {
                        label: "User 1",
                        items: [{ label: "User 1.1" }, { label: "User 1.2" }],
                    },
                    {
                        label: "User 2",
                        items: [{ label: "User 2.1" }, { label: "User 2.2" }],
                    },
                ],
                [
                    {
                        label: "User 3",
                        items: [{ label: "User 3.1" }, { label: "User 3.2" }],
                    },
                    {
                        label: "User 4",
                        items: [{ label: "User 4.1" }, { label: "User 4.2" }],
                    },
                ],
                [
                    {
                        label: "User 5",
                        items: [{ label: "User 5.1" }, { label: "User 5.2" }],
                    },
                    {
                        label: "User 6",
                        items: [{ label: "User 6.1" }, { label: "User 6.2" }],
                    },
                ],
            ],
        },
        {
            label: "Events",
            icon: "pi pi-fw pi-calendar",
            items: [
                [
                    {
                        label: "Event 1",
                        items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
                    },
                    {
                        label: "Event 2",
                        items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
                    },
                ],
                [
                    {
                        label: "Event 3",
                        items: [{ label: "Event 3.1" }, { label: "Event 3.2" }],
                    },
                    {
                        label: "Event 4",
                        items: [{ label: "Event 4.1" }, { label: "Event 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Settings",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                    {
                        label: "Setting 2",
                        items: [{ label: "Setting 2.1" }, { label: "Setting 2.2" }],
                    },
                    {
                        label: "Setting 3",
                        items: [{ label: "Setting 3.1" }, { label: "Setting 3.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
    ];

    // autoplay img
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: "991px",
            numVisible: 4,
        },
        {
            breakpoint: "767px",
            numVisible: 3,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
        },
    ];

    // useEffect(() => {
    //     PhotoService.getImages().then((data) => setImages(data));
    // }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%", display: "block" }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: "block" }} />;
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="grid w-10 border-solid border-blue-500 ">
                <div class="left-col col-3 text-center border-solid border-blue-500 ">
                    <MegaMenu model={items} orientation="vertical" breakpoint="767px" />
                </div>
                <div class="mid-col col-6 text-center border-solid border-blue-500 ">
                    <div className="card">
                        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: "640px" }} item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
                    </div>
                </div>
                <div class="right-col col-3 text-center border-solid border-blue-500 ">
                    <div className="r-banner-container"></div>
                </div>
            </div>
            <div className="grid hot-products-container w-10 border-solid border-blue-500 mt-4 p-5 justify-content-between h-18rem">
                <div class="col-3 border-solid border-blue-500"></div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
            </div>
            <div className="grid hot-products-container w-10 border-solid border-blue-500 mt-4 p-3 justify-content-between h-25rem">
                <div className="col border-solid border-blue-500 mr-2"></div>
                <div className="col border-solid border-blue-500"></div>
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
