
"use client"
import React from 'react';

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="tekup-preloader-wrap">
      <div className="tekup-preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    )
  );
};

export default Loading;

