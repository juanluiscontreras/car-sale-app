'use client';

import React, { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

// Add type for src prop
interface ViewerProps {
  src: string;
}

const Viewer: React.FC<ViewerProps> = ({ src }) => {
  const [isPanoramic, setIsPanoramic] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      // Determine if the image is panoramic (width should be twice the height)
      if (aspectRatio !== 2) {
        setIsPanoramic(false); // Not a panoramic image
      } else {
        setIsPanoramic(true); // Panoramic image
      }
    };
  }, [src]);

  return (
    <>
      {isPanoramic ? (
        <div className="w-full h-64 md:h-96 lg:h-120 overflow-hidden rounded-lg shadow-lg">
          <ReactPhotoSphereViewer
            src={src}
            height="100%"
            width="100%"
            container="viewer-container"
          />
        </div>
      ) : (
        <div className="w-full h-64 md:h-96 lg:h-120 overflow-hidden rounded-lg shadow-lg">
          <img
            src={src}
            alt="Non-panoramic view"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
};

const ViewerContainer = () => {
  return (
    <div className="w-full h-auto max-w-[100vw]">
      <Viewer src="/images/pano-exterior.jpg" />
      <br />
      <Viewer src="/images/pano-interior.jpg" />
    </div>
  );
};

export default ViewerContainer;
