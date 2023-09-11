import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes';
import treeObj1 from '../assets/Group 1766.png'
import treeObj2 from '../assets/Mask group.png'

const SpinWheel: React.FC = (winner) => {
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate()

  const segments = [
    // 'BUY 1 GET 1 FREE',
    // 'FREE COFFEE MUG ON PURCHASE WORTH 1000+',
    // 'Buy 2 Effervescent tablets & get 1 free',
    // 'Free 50g tea on purchase of Rs. 500',
    // 'HOT CHOCLATE FREE WITH TEA',
    // '30% SITEWIDE OFF',
    'Iphone 12',
    'Iphone 14',
    'Galaxy S10',
    'Realme 6',
    'Oneplus 10',
    'IQOO 7',
  ];

  const segColors = [
    '#EC1D1D',
    '#EFEFD4',
    '#EC1D1D',
    '#EFEFD4',
    '#EC1D1D',
    '#EFEFD4',
  ];

  const onFinished = (winner: string) => {
    console.log(winner);
    setResult(winner);
    navigate(`/result?winner=${winner}`);
  };

  return (
    <div className='bg-[#C6EFC8] h-full overflow-y-hidden'>
      <div className='absolute'>
        <img className='' src={treeObj1} alt='None' />
      </div>
      <div className='relative top-10 z-10 grid justify-center items-center ml-96 text-center'>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner: string) => onFinished(winner)}
          primaryColor="#ECBA3F"
          contrastColor="black"
          buttonText="Spin"
          isOnlyOnce={false}
          size={180}
          upDuration={100}
          downDuration={1000}
          fontFamily="Arial"
        />
      </div>
      <div className='absolute bottom-10 inset-x-1/2 z-10 grid justify-center items-center sm:bottom-44'>
        <button className='bg-green-500 w-40 h-16 rounded-full'>
          <span className='font-bold text-white text-3xl'>Spin</span>
        </button>
      </div>


      <div className='absolute bottom-0'>
        <img className='' src={treeObj2} alt='None' />
      </div>
    </div>
  )
};



export default SpinWheel;
