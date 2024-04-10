import { useState } from 'react';
import Card from '../../Components/Card';
import { CiCircleCheck, CiCircleInfo, CiCircleRemove } from 'react-icons/ci';
import { CgFileDocument } from 'react-icons/cg';

export default function RequiredDocument() {
  const [documents, setDocuments] = useState([
    {
      require: true,
      content: 'Social Security card',
    },
    {
      require: false,
      content: 'Photo ID Uploaded',
    },
    {
      require: false,
      content: 'Utility Bill Uploaded',
    },
  ]);

  return (
    <Card>
      <span className=' text-gray-800 font-semibold text-[18px] flex gap-3 items-center'>
        <CgFileDocument /> Required Documents
      </span>
      <div className='flex flex-col gap-4'>
        {documents?.map((item, index) => {
          return (
            <div className='flex justify-between items-center' key={index}>
              <div className='flex gap-3 items-center'>
                {item?.require ? <CiCircleCheck fill='green' color='white' /> : <CiCircleInfo fill='red' color='white' />}{' '}
                <span className=' text-gray-500 font-normal text-[14px]'>{item?.content}</span>
              </div>
              <span className={`${item.require ? 'text-green-500' : 'text-red-500'} font-normal text-[14px]`}>{item.require ? 'View' : 'Uploaded'}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
