"use client";
import React, { useState } from "react";
//import Mapper from "./mapper";
import Autocompletor from "./Autocompletor";

function MapArea({ coordinates, setCoordinates }) {
  // return (
  //     <div class="w-full h-screen">
  //         <GoogleMapReact
  //         bootstrapURLKeys={{key:process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}}
  //         defaultCenter={coordinates}
  //         center={coordinates}
  //         defaultZoom={11}
  //         margin={[50,50,50,50]}
  //         options={""}
  //         onChange={() => {}}
  //         onChildClick={() => {}}

  //         >
  //         </GoogleMapReact>
  //     </div>
  // )

  return (
    <>
      <Autocompletor></Autocompletor>
    </>
  );
}
//      //removed <Mapper></Mapper> inside return statement

export default MapArea;
