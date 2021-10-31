import React from 'react';
import Envelope from './Envelope';
import Control from './Control';
import { controls } from '../mininova';

function Envelopes({ emit }) {
  return (
    <div>
      <div className="envelopes">
        {[1,2,3,4,5,6].map(i => (
          <Envelope
            key={i}
            emit={emit}
            number={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Envelopes;
