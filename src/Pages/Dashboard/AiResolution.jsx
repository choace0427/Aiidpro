import { useState } from 'react';
import Card from '../../Components/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutChart } from '@mantine/charts';
import { BiBorderRadius } from 'react-icons/bi';
import classes from './demo.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AIResolution() {
  const [resolutionData, setResolutionData] = useState([
    {
      status: 'Unspecified',
      transUnion: 0,
      experian: 1,
      equifax: 0,
    },
    {
      status: 'Positive',
      transUnion: 7,
      experian: 7,
      equifax: 5,
    },
    {
      status: 'Deleted',
      transUnion: 5,
      experian: 1,
      equifax: 3,
    },
    {
      status: 'Resolved',
      transUnion: 0,
      experian: 0,
      equifax: 0,
    },
    {
      status: 'Updated',
      transUnion: 0,
      experian: 0,
      equifax: 0,
    },
    {
      status: 'In Dispute',
      transUnion: 3,
      experian: 2,
      equifax: 1,
    },
    {
      status: 'Verified',
      transUnion: 0,
      experian: 0,
      equifax: 0,
    },
    {
      status: 'Negative',
      transUnion: 2,
      experian: 2,
      equifax: 2,
    },
    {
      status: 'Bureau Letters',
      transUnion: 0,
      experian: 0,
      equifax: 0,
    },
  ]);

  const data = [
    { name: 'Positive', value: 1000, color: '#82C441' },
    { name: 'Negative', value: 300, color: '#DC425F' },
    { name: 'In Dispute', value: 100, color: '#60CAE4' },
    { name: 'Unspecified', value: 200, color: '#FF802D' },
  ];

  const options = {
    rounded: '10px',
    rotation: 180,
    plugins: {
      legend: {
        display: false,
      },
      doughnutCutout: false,
    },
  };
  return (
    <Card>
      <div className='flex justify-between items-center'>
        <span className=' text-gray-800 font-semibold text-2xl'>AI Dispute Resolutions</span>
        <button className='py-[14px] px-4 gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] hover:bg-gray-200 font-normal md:block hidden'>
          View Details
        </button>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 md:space-x-8 md:space-y-0 space-y-8'>
        <div className='flex flex-col justify-between col-span-1'>
          <div className=' rounded-3xl p-8 gap-10 bg-gray-50'>
            <div className='w-full h-full'>
              {/* <Doughnut data={data} options={options} /> */}
              <DonutChart paddingAngle={4} data={data} tooltipDataSource='segment' mx='auto' thickness={50} />
            </div>
          </div>
          <div className='flex flex-col gap-4  md:mt-0 mt-8'>
            <button className='hover:bg-[#DC425F] rounded-2xl px-8 py-[14px] bg-gray-900 font-normal text-[14px] text-white'>Learn more</button>
            <button className='hover:bg-gray-200 py-[14px] px-4 gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal'>Create Disputes</button>
          </div>
        </div>
        <div className='bg-gray-50 rounded-3xl col-span-2 p-2'>
          <div className='bg-white rounded-2xl grid md:grid-cols-4 grid-cols-5 px-4 py-3 gap-[5px]'>
            <span className='md:col-span-1 col-span-2'>Status</span>
            <span class='hidden sm:inline md:text-start text-center'>TransUnion</span>
            <span class='inline sm:hidden md:text-start text-center'>TRU</span>
            <span class='hidden sm:inline md:text-start text-center'>Experian</span>
            <span class='inline sm:hidden md:text-start text-center'>EXP</span>
            <span class='hidden sm:inline md:text-start text-center'>Equifax</span>
            <span class='inline sm:hidden md:text-start text-center'>EQ</span>
          </div>
          {resolutionData.map((item, index) => {
            return (
              <div className='grid md:grid-cols-4 grid-cols-5 px-4 py-3 gap-[5px]' key={index}>
                <span className='md:col-span-1 col-span-2'>{item?.status}</span>
                <span className='md:text-start text-center'>{item?.transUnion}</span>
                <span className='md:text-start text-center'>{item?.experian}</span>
                <span className='md:text-start text-center'>{item?.equifax}</span>
              </div>
            );
          })}
        </div>
        <button className='hover:bg-gray-200 py-[14px] px-4 gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal md:hidden block'>
          View Details
        </button>
      </div>
    </Card>
  );
}
