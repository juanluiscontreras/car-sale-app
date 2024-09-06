'use client'; // Add this line at the top

import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const Viewer = () => {
  return (
    <>
      <div className="w-full h-64 md:h-96 lg:h-120 overflow-hidden rounded-lg shadow-lg">
        <ReactPhotoSphereViewer
          src="/images/pano-exterior.jpg"
          height="100%"
          width="100%"
          container="viewer-container" />
      </div>
      <div className="w-full h-64 md:h-96 lg:h-120 overflow-hidden rounded-lg shadow-lg">

        <ReactPhotoSphereViewer
          src="/images/pano-interior.jpg"
          height="100%"
          width="100%"
          container="viewer-container" />
      </div>
    </>
  );
};

export default Viewer;
