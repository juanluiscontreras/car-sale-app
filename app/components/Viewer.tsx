'use client';

import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const Viewer = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactPhotoSphereViewer
        src="/images/pano.jpg"
        height={"100vh"}
        width={"100%"}
      />
    </div>
  );
};

export default Viewer;
