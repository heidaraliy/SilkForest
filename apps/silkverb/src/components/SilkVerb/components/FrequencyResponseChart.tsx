import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

type FrequencyResponseChartProps = {
  data: { frequency: number; gain: number }[];
};

const FrequencyResponseChart: React.FC<FrequencyResponseChartProps> = ({
  data,
}) => {
  // format the tick labels to show frequencies in Hz or kHz
  const formatFrequency = (value: number) => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`;
  };

  return (
    <div className="w-full mt-4">
      <div className="flex">
        <span
          data-tooltip-id="freq-response-tooltip"
          data-tooltip-html={`The Frequency Spectrum helps you visualize the changes you've made to the High Pass and Low Pass Frequency Filters. <br><br> As the high end of the graph curves down and to the left, the higher end frequencies, such as high hats and snares, are cut out. <br><br> When the lower end of the graph curves in, lower frequencies, like the bass and kick, are removed, giving the higher frequencies space within the mix.`}
          data-tooltip-place="right"
          data-tooltip-delay-show={500}
          data-tooltip-delay-hide={300}
          className="mr-2 text-zinc-800 cursor-help"
        >
          ⓘ
        </span>
        <h1 className="text-xl font-bold text-left mb-4 text-zinc-700">
          Frequency Spectrum
        </h1>
      </div>
      <div className="flex justify-start mb-4 italic text-sm tracking-wide">
        The Frequency Spectrum helps you visualize the changes you've made to
        the High Pass and Low Pass Frequency Filters.
      </div>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis
              dataKey="frequency"
              scale="log"
              domain={["dataMin", "dataMax"]}
              type="number"
              tickFormatter={formatFrequency}
            >
              <Label
                value="Frequency (Hz)"
                offset={-10}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              domain={[-60, 0]}
              ticks={[-60, -50, -40, -30, -20, -10, 0]}
              label={{ value: "Gain (dB)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number) => value.toFixed(1) + " dB"}
              labelFormatter={(label: number) => formatFrequency(label) + " Hz"}
            />
            <Line
              type="monotone"
              dataKey="gain"
              stroke="#3F4DA8"
              dot={false}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FrequencyResponseChart;
