import React from 'react';

function Knob({ min = 0, max = 100, value, onChange }) {
  const ratio = (value - min) / (max - min);
  const angle = 30 + 300*ratio;

  const width = 42;
  const margin = width*0.2;
  const radius = width/2;
  const center = margin + radius;
  const strokeWidth = radius*0.07;

  const onMouseMove = startY => e => {
    const distance = startY - e.clientY;
    const newValue = Math.ceil(Math.max(min, Math.min(max, value + (Math.max(-200, Math.min(distance, 200)/200)) * (max - min))));
    onChange(newValue);
  };

  const onMouseUp = startY => e => {
    // do nothing for now
  };

  const onMouseDown = e => {
    e.preventDefault();
    clearEventListeners();
    const onMouseMoveListener = onMouseMove(e.clientY);
    document.body.addEventListener('mousemove', onMouseMoveListener);
    document.body.addEventListener('mouseup', onMouseUp(e.clientY), { once: true });
    const clearListeners = () => {
      document.body.removeEventListener('mousemove', onMouseMoveListener);
    };
    document.body.addEventListener('mouseup', clearListeners, { once: true });
  };

  const clearEventListeners = () => {
  };

  return (
    <svg
      width={width + 2*margin}
      height={width + 2*margin}
      style={{ border: "solid 1px lightgrey" }}
    >
      {[...Array(11).keys()].map(i => (
        <circle
          key={i}
          cx={0}
          cy={0}
          r={strokeWidth}
          transform={`translate(${center}, ${center}) rotate(${30 + i*30}) translate(0, ${radius*1.3})`}
        />
      ))}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="white"
        stroke="black"
        strokeWidth={strokeWidth}
        onMouseDown={onMouseDown}
      />
      <rect
        x={-1}
        y={0}
        width={2}
        height={radius - 3}
        transform={`translate(${center}, ${center}) rotate(${angle})`}
      />
    </svg>
  );
};

export default Knob;
