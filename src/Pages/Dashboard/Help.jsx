import Card from '../../Components/Card';

export default function Help() {
  return (
    <div>
      <Card className='!bg-gray-900 bg-help-pattern' style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='flex flex-col gap-8 mt-40'>
          <span className='text-white font-semibold text-[18px]'>Do you need help, John? 😃</span>
          <span className='text-white/70 font-normal text-[14px]'>
            I'm your AI credit Advisor. Designed to empower your with actionable financial inlishgts, I'm your personal guide to a brighter financial future.
          </span>
          <button className=' hover:bg-[#DC425F] hover:text-white rounded-2xl px-8 w-full py-[14px] bg-white font-normal text-[14px] text-gray-900'>
            Start
          </button>
        </div>
      </Card>
    </div>
  );
}
