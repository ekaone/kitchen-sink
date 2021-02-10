import React, { useState } from "react";
import { useProxy } from "valtio";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { state } from "../../../stores/order";

dayjs.extend(relativeTime);
function Foods() {
  const snapshot = useProxy(state);
  const [value, onChange] = useState(new Date());

  const format = dayjs(value).format("DD/MM/YYYY");

  return (
    <div>
      Food {snapshot.count}
      <p>
        <Calendar onChange={onChange} value={value} />
      </p>
      <br />
      {JSON.stringify(format)}
      <p>
        <button onClick={() => ++state.count}>Increment</button>{" "}
        <button onClick={() => --state.count}>Decrement</button>
      </p>
    </div>
  );
}

export default Foods;
