import React from 'react';

const VideoCard = () => {
  return (
    <div>
      <img src="/just.jpg" alt="hello" />
      <div className='grid grid-cols-12'>
        <div className='col-span-1'>
            <img src="/just.jpg" className='h-20 w-20 '></img>
            </div>
        <div className='col-span-11 '>this is th wden kee intro</div>
        <div></div>
      </div>
    </div>
  );
};

export default VideoCard;
