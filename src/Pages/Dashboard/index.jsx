import { Container } from '../../Components/Container';
import AIResolution from './AiResolution';
import CreditScore from './CreditScore';
import CreditSummary from './CreditSummary';
import Help from './Help';
import ProtectionLevel from './ProtectionLevel';
import RequiredDocument from './RequiredDocument';
import ScoreTracker from './ScoreTracker';
import UpgradeProtection from './UpgradeProtection';

export default function Dashboard() {
  return (
    <>
      <div className='grid grid-cols-4 gap-6 mt-[-100px]'>
        <div className='flex md:col-span-3 col-span-4 flex-col gap-6 '>
          <CreditScore />
          <div className='md:hidden block'>
            <ProtectionLevel />
          </div>
          <div className='order-5 md:order-2 '>
            <AIResolution />
          </div>
          <div className='order-2 md:order-3 flex-2'>
            <ScoreTracker />
          </div>
          <div className='md:hidden block order-4'>
            <UpgradeProtection />
          </div>
          <div className='md:hidden block order-6'>
            <RequiredDocument />
          </div>
          <div className='md:hidden block order-7'>
            <Help />
          </div>
        </div>
        <div className='md:block hidden '>
          <div className='col-span-1 flex flex-col gap-6'>
            <ProtectionLevel />
            <RequiredDocument />
            <Help />
            <UpgradeProtection />
          </div>
        </div>
      </div>
      <CreditSummary />
    </>
  );
}
