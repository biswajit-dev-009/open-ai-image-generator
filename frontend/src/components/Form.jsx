import React, { useState } from 'react';

const Form = ({ handleSubmit, inputText, setInputText, imageSize, setImageSize, imageQuantity, setImageQuantity }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-3 gap-6'>
        <input
          placeholder={'Please describe your require image'}
          name={'inputText'}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='h-12 border-[2px] border-white rounded-xl py-1 px-5 w-full'
        />
        <select onChange={e => setImageSize(e.target.value)} value={imageSize} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input
          placeholder={'Please type how many photos you require'}
          type={'number'}
          name={'inputText'}
          value={imageQuantity}
          onChange={(e) => setImageQuantity(e.target.value)}
          className='h-12 border-[2px] border-white rounded-xl py-1 px-5 w-full'
        />
      </div>
      <button type={'submit'} disabled={!inputText} className='w-56 h-12 mt-6 bg-black rounded-full text-white'>SEND</button>
    </form>
  )
}

export default Form;