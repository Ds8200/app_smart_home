import { Box } from '@mui/material'
import React from 'react';

interface GenericLogoProps {
  imageUrl: string;
  altText: string;
  width: string;
  height: string;
}

const GenericLogo: React.FC<GenericLogoProps> = ({ imageUrl, altText, width, height }) => {
  return (
    <Box>
      <img
        src={imageUrl}
        alt={altText}
        style={{ width, height, objectFit: 'contain' }}
      />
    </Box>
  );
}

export default GenericLogo;

