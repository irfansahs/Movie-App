"use client";


import React from "react";
import { Rating } from "primereact/rating";

function Ratings(props:any) {
  return <Rating value={props.value/2} readOnly cancel={false} />;
}

export default Ratings;