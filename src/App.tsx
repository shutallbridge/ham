import { ResponsiveHeatMap } from '@nivo/heatmap';
import { data } from './mock-data';

function App() {
  return (
    <div style={{ width: '80vw', height: '90vh' }}>
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: '',
          legendOffset: 46,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 70,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '時間',
          legendPosition: 'middle',
          legendOffset: -72,
        }}
        colors={{
          type: 'diverging',
          scheme: 'greens',
          divergeAt: 0.5,
          minValue: 0,
          maxValue: 10,
        }}
        emptyColor="#555555"
        legends={[
          {
            anchor: 'bottom',
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: 'row',
            tickPosition: 'after',
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: '>-.2s',
            title: 'Value →',
            titleAlign: 'start',
            titleOffset: 4,
          },
        ]}
      />
    </div>
  );
}

export default App;
