'use client';

import React, { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

// Define the type for the Viewer component props
interface ViewerProps {
  src: string;
}

const Viewer: React.FC<ViewerProps> = ({ src }) => {
  const [isPanoramic, setIsPanoramic] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Determine if the image is panoramic based on its aspect ratio
      const aspectRatio = img.width / img.height;
      if (aspectRatio < 2) {  // Adjust threshold as needed for panoramic determination
        setIsPanoramic(false);
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

const ViewerContainer: React.FC = () => {
  return (
    <>
      <Viewer src="/images/pano-exterior.jpg" />
      <br />
      <Viewer src="/images/pano-interior.jpg" />
    </>
  );
};

export default ViewerContainer;
