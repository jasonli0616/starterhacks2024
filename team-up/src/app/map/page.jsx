"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import MapArea from "./MapArea";
import styles from "./Home.module.css";

export default function Home() {
  const [coordinates, setCoordinates] = useState({
    lat: 2.996576908645812,
    lng: 101.59493478782426,
  });
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <main className="flex flex-col justify-center items-center w-screen, h-screen bg-blue">
        <h1 className="m-4 justify-center">
          <a
            className="font-bold underline"
          >
          </a>
        </h1>
        <MapArea
          className="mb-4"
          setCoordinates={setCoordinates}
          coordinates={coordinates}
        ></MapArea>
        {/* <GooglePlacesAutocomplete
          className="w-full rounded border px-2"
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        /> */}
        {/* <Autocomplete
          className="rounded border my-20 px-2"
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
        />*/}
      </main>

      <footer className={styles.footer}>
        <a
        >
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  );
}
