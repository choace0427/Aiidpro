import Card from '../../Components/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { useState } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CreditScore() {
  const [score, setScore] = useState([
    {
      type: 'TransUnion',
      date: '02/21/23',
      score: 820,
    },
    {
      type: 'Experian',
      date: '02/21/23',
      score: 585,
    },
    {
      type: 'Equifax',
      date: '02/21/23',
      score: 320,
    },
  ]);

  return (
    <>
      <Card>
        <div className='flex justify-between items-center'>
          <span className=' text-gray-800 font-semibold text-2xl'>Credit Scores</span>
          <div className='md:block hidden'>
            <div className='flex gap-4'>
              <button className='py-[14px] px-4 flex gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal'>View Latest Report</button>
              <button className='py-[14px] px-4 flex gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal'>Refresh Report</button>
            </div>
          </div>
        </div>
        <div className='lg:block hidden'>
          <div className='grid md:grid-cols-3 grid-cols-1 md:overflow-x-hidden overflow-auto gap-6'>
            {score.map((item, index) => {
              return (
                <div className='p-6 bg-gray-50 rounded-2xl' key={index}>
                  <div className='flex justify-between items-center'>
                    <span className=' font-normal text-[18px] text-gray-800'>{item.type}</span>
                    <span className=' text-xs font-normal text-gray-800/30'>Updated {item.date}</span>
                  </div>
                  <div className=' min-h-32 mt-6'>
                    <div className='w-full h-full relative'>
                      <CircularProgressbarWithChildren
                        value={66}
                        circleRatio={0.75}
                        styles={buildStyles({
                          rotation: 1 / 2 + 1 / 8,
                          strokeLinecap: 'butt',
                          trailColor: item.score > 700 ? '#EBF0E7' : item.score > 400 && item?.score < 700 ? '#F7EAE2' : '#F3E3E7',
                          pathColor: item.score > 700 ? '#82C441' : item.score > 400 && item?.score < 700 ? '#FF802D' : '#DC425F',
                        })}
                      >
                        <div className='text-[30px]'>
                          <span
                            className={`text-[53px] ${
                              item.score > 700 ? 'text-[#82C441]' : item.score > 400 && item?.score < 700 ? 'text-[#FF802D]' : 'text-[#DC425F]'
                            }`}
                          >
                            {item.score}
                          </span>
                        </div>
                        <div
                          className={`rounded-[32px] px-[12.86px] py-[3.67px] w-fit lg:bottom-7 bottom-3 text-white absolute ${
                            item.score > 700 ? 'bg-[#82C441]' : item.score > 400 && item?.score < 700 ? 'bg-[#FF802D]' : 'bg-[#DC425F]'
                          }`}
                        >
                          {item.score > 700 ? 'Excellent' : item.score > 400 && item?.score < 700 ? 'Poor' : 'Very Poor'}
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                  <button className='bg-white hover:bg-[#DC425F] hover:text-white rounded-2xl px-4 py-[14px] text-[14px] font-normal text-gray-900 w-full mt-8'>
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className='lg:hidden block'>
          <Carousel slideSize='80%' height={'fit-content'} align='start' slideGap='md' controlSize={34} dragFree withControls={false} withIndicators>
            {score.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <div className='p-6 bg-gray-50 rounded-2xl' key={index}>
                    <div className='flex justify-between items-center'>
                      <span className=' font-normal text-[18px] text-gray-800'>{item.type}</span>
                      <span className=' text-xs font-normal text-gray-800/30'>Updated {item.date}</span>
                    </div>
                    <div className=' min-h-32 mt-6'>
                      <div className='w-full h-full'>
                        <CircularProgressbarWithChildren
                          value={66}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: 'butt',
                            trailColor: '#eee',
                            pathColor: item.score > 700 ? '#82C441' : item.score > 400 && item?.score < 700 ? '#FF802D' : '#DC425F',
                          })}
                        >
                          <div className='text-[30px]'>
                            <span
                              className={`text-[53px] ${
                                item.score > 700 ? 'text-[#82C441]' : item.score > 400 && item?.score < 700 ? 'text-[#FF802D]' : 'text-[#DC425F]'
                              }`}
                            >
                              {item.score}
                            </span>
                          </div>
                          <div
                            className={`rounded-[32px] px-[12.86px] py-[3.67px] w-fit md:bottom-10 bottom-6 text-white absolute ${
                              item.score > 700 ? 'bg-[#82C441]' : item.score > 400 && item?.score < 700 ? 'bg-[#FF802D]' : 'bg-[#DC425F]'
                            }`}
                          >
                            {item.score > 700 ? 'Excellent' : item.score > 400 && item?.score < 700 ? 'Poor' : 'Very Poor'}
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                    <button className='bg-white hover:bg-[#DC425F] hover:text-white rounded-2xl px-4 py-[14px] text-[14px] font-normal text-gray-900 w-full mt-8'>
                      Details
                    </button>
                  </div>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
        <div className='md:hidden block'>
          <div className='flex gap-4 flex-col'>
            <button className='py-[14px] px-4 flex gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal justify-center'>
              View Latest Report
            </button>
            <button className='py-[14px] px-4 flex gap-2 rounded-2xl text-gray-900/70 bg-gray-50 text-[14px] font-normal justify-center'>Refresh Report</button>
          </div>
        </div>
      </Card>
    </>
  );
}
