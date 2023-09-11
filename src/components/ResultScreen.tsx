import React, { useState, useEffect } from 'react';
import treeObj1 from '../assets/Group 1766.png'
import treeObj2 from '../assets/Mask group.png'
import WheelImg from '../assets/wheeel.png'
import { useLocation } from 'react-router-dom';


const ResultScreen: React.FC = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const winner = searchParams.get('winner') || 'No winner';

  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const randomCode = generateRandomCode();
    setCode(randomCode);
  }, []);

  const generateRandomCode = () => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomCode = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }
    return randomCode;
  };

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  };

  return (
    <div className='bg-[#C6EFC8] h-screen'>
      <img className='absolute' src={treeObj1} alt='None' />
      <div className='relative pt-44 mx-auto z-40 flex justify-center items-center gap-48 sm:overflow-x-hidden'>
        <div>
          <img className='w-80 md:absolute md:-left-24 md:top-52 sm:absolute sm:w-56 sm:-top-24 sm:left-24' src={WheelImg} alt='None' />
        </div>
        <div className='grid justify-center items-center sm:relative right-24 bottom-2'>
          <h3 className='text-lg mb-2 font-bold text-center'>Congrats! You Won:</h3>
          <h2 className='text-3xl mb-2 font-bold w-80 break-words text-center'>{winner}</h2>
          <div className='flex justify-start items-center mb-4 pl-5 gap-4 border rounded-md bg-[#A2C3A4] border-black w-80 h-16'>
            <div className='w-2/3  '>
              <p className='text-4xl text-white font-extrabold'>
                {code}
              </p>
            </div>
            <div className='w-1/3 rounded-md bg-green-600 h-16'>
              <button onClick={copyToClipboard} className='text-xl pt-5 ml-4 text-white text-center font-extrabold'>
                COPY
              </button>
            </div>
          </div>
          <button className='bg-green-600 w-80 h-16 rounded-full'>
            <span className='font-bold text-white text-2xl'>Close Panel & Copy</span>
          </button>
          <p className='italic text-xs text-center mt-2'>*You can claim your coupon for 10 minutes only!</p>
        </div>
      </div>

      <img className='absolute bottom-0' src={treeObj2} alt='None' />
    </div>
  );
};

export default ResultScreen;
