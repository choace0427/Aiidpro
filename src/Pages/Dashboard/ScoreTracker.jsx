import Card from '../../Components/Card';
import { BarChart } from '@mantine/charts';

export default function ScoreTracker() {
  const data = [
    { month: '02/23', TransUnion: 1200, Experian: 900, Equifax: 200 },
    { month: '03/23', TransUnion: 1900, Experian: 1200, Equifax: 400 },
    { month: '04/23', TransUnion: 400, Experian: 1000, Equifax: 200 },
    { month: '05/23', TransUnion: 1000, Experian: 200, Equifax: 800 },
    { month: '06/23', TransUnion: 800, Experian: 1400, Equifax: 1200 },
    { month: '08/23', TransUnion: 750, Experian: 600, Equifax: 1000 },
    { month: '09/23', TransUnion: 750, Experian: 600, Equifax: 1000 },
    { month: '10/23', TransUnion: 750, Experian: 600, Equifax: 1000 },
    { month: '11/23', TransUnion: 750, Experian: 600, Equifax: 1000 },
    { month: '12/23', TransUnion: 750, Experian: 600, Equifax: 1000 },
    { month: '02/24', TransUnion: 750, Experian: 600, Equifax: 1000 },
  ];
  return (
    <Card>
      <span className=' text-gray-800 font-semibold text-2xl'>Score Tracker</span>
      <div className='min-h-[300px]'>
        <BarChart
          data={data}
          dataKey='month'
          series={[
            { name: 'TransUnion', color: '#6E8DFF' },
            { name: 'Experian', color: '#DB73E4' },
            { name: 'Equifax', color: '#FF748D' },
          ]}
          tickLine='none'
        />
      </div>
    </Card>
  );
}
