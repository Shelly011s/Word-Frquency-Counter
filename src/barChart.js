import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Bar = ({data}) => {
  const keys = Object.keys(data);
  return (
    <>
      <ResponsiveBar
        data={[data]}
        keys={keys}
        margin={{ top: 50, right: 130, bottom: 50, left: 50 }}
        padding={0.1}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set3" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", "0.3"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Words",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Frequency",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          background: "#282c34",
          textColor: "#f7f7f7",
          fontSize: 16,
        }}
        role="application"
        ariaLabel="Word Frequency"
        tooltip={({ id, value, color }) => (
          <div style={{ background: "#f7f7f7", color: "#282c34", fontSize: 12, padding: '5px' }} >
            <strong>
            {id}: {value}
            </strong>
          </div>
        )}
      />
    </>
  );
};

export default Bar;
