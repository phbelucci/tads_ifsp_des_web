import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../index.css'

function MapContainer({eletroPostos}) {
    return (
        <Map id="mapid" zoom={12} center={[-22.915777, -47.065287]}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                eletroPostos.map(posto => {
                    return (
                        <Marker position={[posto.coordenadas[0], posto.coordenadas[1]]}>
                            <Popup>
                                <img src={`${posto.imagem}`} style={{width : "200px", height: "100px"}}></img>
                                <br />
                                {posto.nome}
                                <br />
                                {posto.endereco}
                                <br />
                                Aberto 24hrs? {posto.atendimento24 && "SIM" || "NÃO"} 
                            </Popup>
                        </Marker>
                    )
                })
            }
        </Map>
    );
}

export default MapContainer;
