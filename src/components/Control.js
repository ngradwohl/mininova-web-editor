import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchControlChanged } from '../redux/patch';
import InputEnum from './InputEnum';
import InputRange from './InputRange';
import Knob from './Knob';

function Control(props) {
  const dispatch = useDispatch();

  const { control, emit, id } = props;

  const value = useSelector(state => state.patch[id]);

  if (control.hasOwnProperty('enum')) {
    return <InputEnum {...props} />;
  }

  const onChange = newValue => {
    dispatch(patchControlChanged(id, newValue));
    emit(control.msg(newValue));
  };

  return (
    <div>
      <Knob
        min={control.range[0]}
        max={control.range[1]}
        value={value}
        {...props}
        onChange={onChange}
      />
      <InputRange {...props} />
    </div>
  );
}

export default Control;
