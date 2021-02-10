import React, { useState } from "react";
import { useProxy } from "valtio";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import id from "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

import { object } from "./localObject";
import { state } from "../../../stores/order";

dayjs.extend(relativeTime);
function Foods() {
  const snapshot = useProxy(state);
  const [value, onChange] = useState(new Date());

  const timeFromNow = dayjs().locale("id", object).to(dayjs(value));
  const format = dayjs(value).locale(id).format("D MMMM YYYY");
  const showDateISO = dayjs().locale("id").format("HH:mm:ss");

  return (
    <div>
      Food {snapshot.count}
      <p>
        <Calendar onChange={onChange} value={value} />
      </p>
      <br />
      <h1>{JSON.stringify(timeFromNow)}</h1>
      <h1>{JSON.stringify(format)}</h1>
      <h1>{JSON.stringify(showDateISO)}</h1>
      <p>
        <button onClick={() => ++state.count}>Increment</button>{" "}
        <button onClick={() => --state.count}>Decrement</button>
      </p>
    </div>
  );
}

export default Foods;
