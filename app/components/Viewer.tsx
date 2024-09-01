'use client'; // Add this line at the top

import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const Viewer = () => {
  return (
    <div style={{ height: '50vh', width: '100%', overflow: 'hidden' }}>
      <ReactPhotoSphereViewer
        src="/images/pano.jpg"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Viewer;
