import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './LoadingBox.css';

export default function LoadingBox() {
  return (
    <div className="progress">
      <CircularProgress />
    </div>
  );
}
