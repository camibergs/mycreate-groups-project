import { useState } from 'react';
import Datetime from 'react-datetime';
import './DatetimePicker.scss';


function DatetimePicker() {

  const [value, setValue] = useState(new Date());

    // View -------------------------------------
    return (
      <div className='datetime'>
        <Datetime onChange={setValue} value={value} />
    </div>
    );
}

export default DatetimePicker;