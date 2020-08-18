import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='notfound-background'>
      <div className='notfound-container'>
        <div className='card notfound-card' style={{ width: '18rem' }}>
          <div className='card-body'>
            <h5 className='card-title'>Whoops!</h5>
            <p className='card-text'>
              We appeared to have stumbled on a page that doesn't exist!
            </p>
            <Link to='/' className='card-body-button btn btn-secondary '>
              Take Me to the Cannolis!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
