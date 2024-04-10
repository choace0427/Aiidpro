import Card from '../../Components/Card';

export default function UpgradeProtection() {
  return (
    <Card className='bg-upgrade-protection-pattern' style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
      <div className='flex flex-col gap-6 mt-24'>
        <span className='text-gray-900 font-semibold text-[18px]'>Upgrade your Protection</span>
        <span className='text-gray-500 font-normal text-[14px]'>
          Facing identity theft? Upgrade to the AI Elite Plan for superior recovery assistance. Our plan outlines clear, actionable steps for a methodical
          recovery, ensuring your financial safety is restored.
        </span>
        <button className=' hover:bg-[#DC425F] hover:text-white rounded-2xl px-8 w-full py-[14px] bg-gray-900 font-normal text-[14px] text-white'>
          Upgrade Now
        </button>
      </div>
    </Card>
  );
}
