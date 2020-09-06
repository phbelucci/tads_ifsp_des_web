import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../index.css'

function MapContainer({ eletroPostos }) {
    return (
        <div style={{ width: "80vw", height: "80vh", marginLeft: "100px" }}>
            <Map id="mapid" zoom={9} center={[-23.164177, -46.700502]}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    eletroPostos.map(posto => {
                        return (
                            <Marker position={[posto.coordenadas[0], posto.coordenadas[1]]}>
                                <Popup>
                                    <img src={`${posto.imagem}`} style={{ width: "200px", height: "100px" }} alt="foto"></img>
                                    <br />
                                    {posto.nome}
                                    <br />
                                    {posto.endereco}
                                    <br />
                                    Aberto 24hrs? {posto.atendimento24 && "Sim" || "Não"}
                                </Popup>
                            </Marker>
                        );
                    })
                }
            </Map>
        </div>

    );
}

export default MapContainer;
