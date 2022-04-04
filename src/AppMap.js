import React, {Component, useEffect, useState} from "react";
import { render } from "react-dom";
import MapGL, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl
} from "react-map-gl";

import CityPin from "./city-pin";
import CityInfo from "./city-info";

import CITIES from "./cities.json";
import {useSelector} from "react-redux";

const TOKEN =
    "pk.eyJ1Ijoia2xlbm9vb2oiLCJhIjoiY2wxOXBldmdhMXBrZDNic2d4YXh6bjZ4diJ9.TZxc82dFKIwWJWvAuR5rKA"; // Set your mapbox token here

const fullscreenControlStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px"
};

const navStyle = {
    position: "absolute",
    top: 36,
    left: 0,
    padding: "10px"
};

function AppMap() {
    /*useEffect(() => {
        window.test = () => {
            setViewport({
                ...viewport,
                viewport: {
                    ...viewport,
                    zoom: viewport.zoom === 5 ? 1 : 5
                }
            });
        };
    },[]);*/
    const [viewport, setViewport] = useState({
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
    });

    const [popupInfo, setPopupInfo] = useState(null);
    const count = useSelector((state) => state.counter.places)
    console.log(count)
    function TestPopup() {
        if (popupInfo) {
            return <Popup
                tipSize={5}
                anchor="top"
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                closeOnClick={false}
                onClose={() =>setPopupInfo(null )}
            >
                <CityInfo info={popupInfo} />
            </Popup>;
        }else{
            return <></>
        }
    }
    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={TOKEN}
        >
            {count.map((city,index) =>
                <Marker
                    key={`marker-${index}`}
                    longitude={city.longitude}
                    latitude={city.latitude}
                >
                    <CityPin size={20} onClick={() => setPopupInfo( city )} />
                </Marker>
            )}
            <TestPopup popupInfo={popupInfo} />
            <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
            </div>
            <div className="nav" style={navStyle}>
                <NavigationControl />
            </div>
        </MapGL>
    );
}


export default AppMap
