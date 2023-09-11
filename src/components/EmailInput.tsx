import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import treeObj1 from '../assets/Group 1766.png'
import treeObj2 from '../assets/Mask group.png'
import WheelImg from '../assets/wheeel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faX } from '@fortawesome/free-solid-svg-icons'

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleStartGame = () => {
    if (isValidEmail) {
      if (!email) {
      // Display an alert if the email field is empty
      alert('Please enter an email');
      return;
    }
      // Show loading state
      setIsLoading(true);

      // Simulate a mock API call with a delay
      setTimeout(() => {
        // Replace this with actual API call logic
        // For now, we're just setting a message
        // alert(`Mock API call successful for email: ${email}`);
        setIsLoading(false);
        navigate('/game');
      }, 2000); // Simulate a 2-second API call

    } else {
      alert('Please enter a valid email.');
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  return (
    <div className='bg-[#C6EFC8] h-screen'>
      <img className='absolute' src={treeObj1} alt='None' />
      <div className='relative pt-40 mx-auto z-40 flex justify-center items-center gap-48 sm:overflow-x-hidden'>
        <div>
          <img className='w-80 md:absolute md:-left-24 md:top-52 sm:absolute sm:w-56 sm:-top-24 sm:left-24' src={WheelImg} alt='None' />
        </div>
        <div className='grid justify-center items-center sm:relative right-24'>
          <h2 className='text-2xl mb-4 font-bold'>This is how EngageBud <br /> looks like in action!</h2>
          <div className='flex justify-start items-center mb-4 pl-5 gap-4 border rounded-md border-b-2 border-b-green-400 w-80 h-16 bg-white'>
            <FontAwesomeIcon className='text-2xl' icon={faEnvelope} />
            <div className='grid justify-start text-["#49454F"]'>
              <label className='text-["#49454F"]'>Email</label>
              <input
                className='focus:outline-none'
                type="email"
                placeholder="joe@gmail.com"
                value={email}
                onChange={handleEmailChange}
                style={{
                  borderColor: isValidEmail ? 'initial' : 'red',
                }}
              />
            </div>
          </div>
          <div className='flex justify-start items-center mb-4 pl-5 gap-4 border rounded-md border-b-2 border-b-green-400 w-80 h-16 bg-white'>
            <FontAwesomeIcon className='text-2xl' icon={faPhone} />
            <div className='grid justify-start text-["#49454F"]'>
              <label className='text-["#49454F"]'>Phone Number</label>
              <input
                className='focus:outline-none'
                type="number"
                placeholder="+91-98256 XXXXX"
              />
            </div>
          </div>
          <div className='flex justify-start items-center mb-4 pl-5 gap-4 border rounded-md border-black w-80 h-16'>
            <input type='checkbox' required className='w-6 h-6'/>
            <p className='text-xs'>I agree to receiving recurring automated messages at the number I have provided. <br/> Consent is not a condition to purchase.</p>
          </div>
          <button className='bg-green-500 w-80 h-16 rounded-full' onClick={handleStartGame}>
            <span className='font-bold text-white text-2xl'>Try Your Luck</span>
          </button>
          <p className='italic text-xs text-center mt-2'>*You can spin the wheel only once! *If you win, <br /> you can claim your coupon for 10 minutes only!</p>
          <h4 className='text-end font-bold cursor-pointer'>No, I don’t feel lucky <FontAwesomeIcon icon={faX} /></h4>
        </div>
      </div>

      <img className='absolute bottom-0' src={treeObj2} alt='None' />
    </div>
  );
};

export default EmailInput;
