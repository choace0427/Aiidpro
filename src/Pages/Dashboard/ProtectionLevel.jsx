import { useState } from 'react';
import Card from '../../Components/Card';
import { Checkbox } from '@mantine/core';

export default function ProtectionLevel() {
  return (
    <Card>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-2'>
          <div className=' bg-[#DC425F]/10 rounded-[34px] px-[14px] py-1 font-bold text-[14px] text-[#DC425F]'>0%</div>
          <span className=' text-gray-800 font-semibold text-[18px]'>Protection Level</span>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <span className=' font-normal text-[14px] text-gray-500'>It looks like you haven't finished setting up your protection.</span>
          <button className=' hover:bg-[#DC425F] rounded-2xl px-8 w-full py-[14px] bg-gray-900 font-normal text-[14px] text-white'>Resume</button>
          <span className='text-gray-900 font-normal text-[14px] underline hover:text-[#DC425F]'>Tell us why</span>
        </div>
      </div>
      <hr className='w-full' />
      <div className='flex flex-col gap-4'>
        <Checkbox label='Identify Your Goals' color='lime' radius='xl' />
        <Checkbox label='Set Up Identity Protection' color='lime' radius='xl' />
        <Checkbox defaultChecked label='Review Action Plan' color='lime' radius='xl' />
      </div>
    </Card>
  );
}
