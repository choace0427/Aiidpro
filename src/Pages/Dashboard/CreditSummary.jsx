import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import Card from '../../Components/Card';
import '@mantine/carousel/styles.css';

export default function CreditSummary() {
  const [summary, setSummary] = useState([
    {
      title: 'Open Accounts',
      data: '15',
    },
    {
      title: 'Hard Inquiries',
      data: '10',
    },
    {
      title: 'Credit Utilization',
      data: '97%',
    },
    {
      title: 'Negative Accounts',
      data: '98%',
    },
    {
      title: 'Debt to income Ratio',
      data: '8%',
    },
  ]);
  return (
    <>
      <Card className='mt-8'>
        <span className=' text-gray-800 font-semibold text-2xl'>Credit Summary</span>
        <div className=' xl:block hidden'>
          <div className='flex gap-6 justify-between'>
            {summary.map((item, index) => {
              return (
                <Card className='bg-summary-pattern !bg-gray-900 w-full !gap-2' key={index}>
                  <span className='text-green-500 font-medium text-[50px] leading-[65px]'>{item?.data}</span>
                  <span className='text-white font-normal text-[16px]'>{item?.title}</span>
                  <button className='bg-gray-800 px-6 py-[14px] font-normal text-[14px] text-white/70 rounded-2xl mt-5'>Actions</button>
                </Card>
              );
            })}
          </div>
        </div>
        <div className='xl:hidden block'>
          <Carousel slideSize='70%' height={'fit-content'} align='start' slideGap='md' controlSize={34} dragFree withControls={false} withIndicators>
            {summary.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Card className='bg-summary-pattern !bg-gray-900 w-full !gap-2 min-w-[240px] max-w-[400px]'>
                    <span className='text-green-500 font-medium text-[50px] leading-[65px]'>{item?.data}</span>
                    <span className='text-white font-normal text-[16px]'>{item?.title}</span>
                    <button className='bg-gray-800 px-6 py-[14px] font-normal text-[14px] text-white/70 rounded-2xl mt-5'>Actions</button>
                  </Card>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </Card>
    </>
  );
}
