import { CgAlarm, CgBell, CgRing, CgTab } from 'react-icons/cg';
import { ActionIcon, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className='flex justify-between items-center'>
        <img src='/images/logo.png' className='h-5 md:block hidden' alt='logo' />
        <div className='md:hidden block'>
          <ActionIcon bg={'red'} size={'xl'} style={{ borderRadius: '100%' }} onClick={open}>
            <svg class='h-4 w-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </ActionIcon>
        </div>
        <div className='md:block hidden'>
          <div className='flex items-center gap-4'>
            <div className='rounded-xl cursor-pointer px-5 py-3 text-[#232323] bg-white'>Dashboard</div>
            <div className='rounded-xl cursor-pointer px-5 py-3 text-white bg-[#1C1C1C]'>Reports</div>
            <div className='rounded-xl cursor-pointer px-5 py-3 text-white bg-[#1C1C1C]'>Monitoring</div>
            <div className='rounded-xl cursor-pointer px-5 py-3 text-white bg-[#1C1C1C]'>Plan Ahead</div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='md:block hidden'>
            <div className='rounded-xl cursor-pointer px-5 py-2 text-white bg-[#1C1C1C] flex gap-3 items-center'>
              <img src='/images/logo_1.png' className=' w-8' />
              <span>AI Advisor</span>
            </div>
          </div>
          <div className='bg-[#1C1C1C] flex justify-center items-center w-fit p-4 rounded-full'>
            <CgBell size={'1.2rem'} color='white' />
          </div>
          <div>
            <Avatar src='avatar.png' alt='me' size={'lg'} />
          </div>
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        title={<img src='/images/logo.png' className='h-5 ' alt='logo' />}
        styles={{
          header: {
            background: '#131313',
            paddingBlock: '24px',
          },
          body: {
            background: '#131313',
            height: '90.9%',
          },
        }}
      >
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-6'>
            <hr className=' border-[#1C1C1C]' />
            <button className=' rounded-2xl px-6 py-[14px] text-[#1C1C1C] text-[18px] font-normal bg-white'>Dashboard</button>
            <button className=' rounded-2xl px-6 py-[14px] text-white text-[18px] font-normal bg-[#1C1C1C]'>Reports</button>
            <button className=' rounded-2xl px-6 py-[14px] text-white text-[18px] font-normal bg-[#1C1C1C]'>Monitoring</button>
            <button className=' rounded-2xl px-6 py-[14px] text-white text-[18px] font-normal bg-[#1C1C1C]'>Plan Ahead</button>
          </div>
          <div className='flex flex-col mb-7'>
            <button className=' rounded-2xl px-6 py-[14px] text-white text-[18px] font-normal bg-[#1C1C1C] flex gap-3 justify-center'>
              <img src='/images/logo_1.png' className=' w-8' />
              <span>AI Advisor</span>
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
