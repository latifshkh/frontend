import React from 'react'

const NewsletterBox = () => {


  const onSubmitHandler = (event) => {
        event.preventDefault();
  }


  return (
    <div className='text-center'>
    <p className='text-2xl font-medium text-gray-800'>Follow Now & Get 12% off</p>     
    <p className='text-gray-400 mt-3'>Follow us now and unlock a fantastic 12% discount on your next purchase! By joining our community, you'll stay informed about our latest products, promotions, and exclusive offers.</p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required></input>
      <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Follow For More Updates!!</button>
    </form>
    </div>
  )
}

export default NewsletterBox
