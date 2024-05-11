import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

// Static data for demonstration
export const staticContributions = [
  { date: '2024-03-01', count: 3 },
  { date: '2024-02-03', count: 3 },
  { date: '2024-04-03', count: 3 },
  { date: '2024-04-03', count: 3 },
  // Add more dates as needed
];

function ContributionGraph() {
  // In the future, replace staticContributions with fetched data from your server or database
  const contributions = staticContributions;

  return (
    <CalendarHeatmap
      startDate={new Date(new Date().getFullYear(), 0, 1)} // Start of the current year
      endDate={new Date()} // Today's date
      values={contributions}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }

        // Check if value is defined and has a date property
        if (value && value.date) {
          // Customize the color intensity based on the value count
          return `color-github-${Math.min(value.count, 4)}`;
        } else {
          return 'color-empty'; // Return default color if value is undefined or missing date property
        }
      }}
      tooltipDataAttrs={(value) => ({
        'data-tip': value ? `${value.date} has count: ${value.count}` : '' // Tooltips showing details
      })}
    />
  );
}

export default ContributionGraph;
