import * as React from "react";
import CalendarCard from "./calendar/CalendarCard";
import type { upData } from "../../screens/Home";
function Updates(props: { updates: upData[] }) {
  return (
    <div className="horizontal-scroll">
      {props.updates[0] && props.updates[0].id === -1 ? (
        <CalendarCard
          title="Uh Oh!"
          content="Looks like there was an issue!"
        ></CalendarCard>
      ) : props.updates && props.updates.length > 0 ? (
        props.updates.map((update) => {
          return (
            <CalendarCard
              title={update.attributes.title}
              content={update.attributes.content}
            ></CalendarCard>
          );
        })
      ) : (
        <CalendarCard
          title="No Updates"
          content="Check back later!"
        ></CalendarCard>
      )}
    </div>
  );
}

export default Updates;
