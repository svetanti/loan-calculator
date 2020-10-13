import React from 'react';

export default function CalculatorHeader(props) {
  const { initialSum, totalSum } = props;

  return (
    <div className='hdr'>
      <div>
        <span className='hdr__text'>Вы вносите</span>
        <div className='hdr__heading hdr__heading_initial'>
          {initialSum === '' ? '' : Number(initialSum).toLocaleString()}
        </div>
      </div>
      <div>
        <span className='hdr__text'>Вы получите</span>
        <div className='hdr__heading hdr__heading_total'>{totalSum}</div>
      </div>
    </div>
  )
}