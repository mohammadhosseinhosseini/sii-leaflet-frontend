import React, { useState, useEffect } from 'react'
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Polygon,
    GeoJSON,
} from 'react-leaflet'

import data from '../data.json'

const center = [51.9607, 7.6261]

function Map() {
    // const [map, setMap] = useState(null)

    // const position = [50.3144678, 11.1154909]

    const onEachProtectedSite = (feature, layer) => {
        layer.bindPopup(
            `<h4 style='font-size:16px'>Name: ${feature.properties.biotopeName}</h4>
            <p>Type: ${feature.properties.biotopeType}</p>
            <p>ID: ${feature.properties.biotopeId}</p>
            `
        )

        layer.on({
            mouseover: (e) => {
                e.target.setStyle({
                    color: 'red',
                })
            },
            mouseout: (e) => {
                e.target.setStyle({
                    color: 'blue',
                })
            },
            click: (e) => {
                // console.log(e)
            },
        })
    }

    return (
        <div>
            SII - Assignment 6
            <p>You can click on each Polygon to see the information.</p>
            <MapContainer
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                style={{
                    height: '90vh',
                    backgroundColor: 'gray',
                    marginTop: '8px',
                    marginBottom: '9px',
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={center}>
                    <Popup>City Name: Münster</Popup>
                </Marker>
                {/* <Polygon
                    pathOptions={{ color: 'purple' }}
                    positions={multiPolygon}
                /> */}
                <GeoJSON data={data} onEachFeature={onEachProtectedSite} />
            </MapContainer>
        </div>
    )
}

export default Map
