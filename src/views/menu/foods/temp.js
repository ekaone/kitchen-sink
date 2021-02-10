import React, { useState } from "react";
import { useProxy } from "valtio";
import Calendar from "react-calendar";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import id from "dayjs/locale/id";

import { state } from "../../../stores/order";

function Foods() {
  // dayjs.extend(relativeTime);

  const snapshot = useProxy(state);
  const [value, onChange] = useState(new Date());

  // const format = dayjs().locale(id).format(value);

  return (
    <div>
      Food {snapshot.count}
      <p>
        <Calendar onChange={onChange} value={value} />
      </p>
      <br />
      {value}
      <p>
        <button onClick={() => ++state.count}>Increment</button>{" "}
        <button onClick={() => --state.count}>Decrement</button>
      </p>
    </div>
  );
}

export default Foods;
