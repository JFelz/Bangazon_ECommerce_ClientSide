import React from 'react';
import {
  Spinner,
} from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <Spinner
        animation="border"
        style={{
          color: 'red',
          width: '100px',
          height: '100px',
        }}
      />
      <h3> Great job finding the error in Dev tools! Now solve it!</h3>
    </div>
  );
}
