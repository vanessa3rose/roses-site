import './App.css'
import { useState } from 'react'
import { colors } from './assets/colors.js'

import Instagram from './assets/instagram-logo.png'
import Facebook from './assets/facebook-logo.png'
import Logo from './assets/roses-logo-rect.png'
import Menu from './assets/Menu_07-26.pdf'

function App() {

  const [hoursExpanded, setHoursExpanded] = useState(false);
  const today = new Date();
  const days = ["SUN",  "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const hours = [
    "Closed",
    "10:00 am — 3:00 pm", 
    "10:00 am — 3:00 pm",
    "10:00 am — 3:00 pm",
    "10:00 am — 3:00 pm",
    "11:00 am — 3:00 pm",
    "Closed"
  ]

  return (
    <div className='flex flex-col'>

      {/* HEADER */}
      <div className='flex flex-col gap-y-4 bg-white py-5 xl:px-50 lg:px-40 md:px-30 sm:px-20 px-10'>
        {/* slogan */}
        <p className='text-left font-stretch-110% font-bold tracking-[4px] text-roses-green xl:text-xl lg:text-xl md:text-xl text-md'>
          TASTES LIKE MA MADE IT
        </p>
        {/* logo */}
        <img src={Logo}/>
      </div>

      {/* MENU */}
      <div className='flex flex-col gap-y-4 w-full h-full bg-taupe-100 py-5 xl:px-50 lg:px-40 md:px-30 sm:px-20 px-10'>

        {/* divider */}
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-1 bg-gray-400 h-px'/>
          <p className='flex px-4 text-sm font-medium text-gray-600'>Our Menu</p>
          <div className='flex flex-1 bg-gray-400 h-px'/>
        </div>

        {/* view */}
        <div className="w-full h-[65vh] sm:h-[85vh] min-h-100">
          <iframe
            src={`${Menu}#toolbar=1&navpanes=1&view=FitH`}
            title="Menu PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* DETAILS */}
      <div className='flex xl:gap-10 lg:gap-10 md:gap-10 gap-2 w-full h-full py-5 bg-white xl:flex-row lg:flex-row md:flex-row flex-col xl:px-50 lg:px-40 md:px-30 sm:px-20 px-10'>

        {/* Info */}
        <div className='flex flex-col'>
          {/* divider */}
          <div className='flex flex-row justify-center items-center my-5'>
            <div className='flex bg-gray-400 h-px xl:flex-none lg:flex-none md:flex-none sm:flex-1 flex-1'/>
            <p className='flex xl:pl-0 lg:pl-0 md:pl-0 px-4 text-sm font-medium text-gray-600'>Contact Us</p>
            <div className='flex flex-1 bg-gray-400 h-px'/>
          </div>

          {/* contact */}
          <div className='flex flex-col mb-7'>
            <p className='text-left font-bold text-roses-green text-xl pb-2'>ROSE'S HOME COOKIN'</p>
            <p className='text-left'>53 Stiles Road, Salem, NH, USA</p>
            <a className='flex flex-row items-center gap-x-2' href={`tel:${6034581939}`}>
              <p className='text-left text-roses-red'>(603) 458-1939</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={colors.rosesRed} className="size-4">
                <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Hours Header */}
          <div className='flex flex-row gap-x-2 pb-2'>
            <p className='text-left font-bold text-roses-green text-xl'>Hours</p>
            <button onClick={() => setHoursExpanded(!hoursExpanded)}>
              {hoursExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={colors.rosesGreen} className="size-6">
                  <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={colors.rosesGreen} className="size-6">
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Hours List */}
          {hoursExpanded ? (
            <div className='flex flex-col pb-5'>
              {hours.map((hrs, index) => (
                <div className='flex flex-row gap-x-2'>
                  <p className={`text-right text-roses-red ${index === today.getDay() ? 'w-[3.7ch] font-bold' : 'w-[4ch]'}`}>{days[index]}</p>
                  <p className={`text-left ${index === today.getDay() && "font-bold"}`}>{hrs}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex flex-col pb-5'>
              {hours.filter((_, index) => today.getDay() === index).map((hrs, index) => (
                <div className='flex flex-row gap-x-2'>
                  <p className='text-right text-roses-red'>Today</p>
                  <p className='text-left'>{hrs}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Map */}
        <div className='flex flex-1 rounded-lg overflow-hidden border border-gray-200'>
          <iframe
            title="Rose's Home Cookin' Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=53%20Stiles%20Rd,%20Salem,%20NH%2003079&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>

      {/* SOCIALS */}
      <div className='flex flex-col gap-y-4 w-full h-full bg-taupe-100 py-5 xl:px-50 lg:px-40 md:px-30 sm:px-20 px-10'>

        {/* divider */}
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-1 bg-gray-400 h-px'/>
          <p className='flex px-4 text-sm font-medium text-gray-600'>Our Socials</p>
          <div className='flex flex-1 bg-gray-400 h-px'/>
        </div>

        {/* links */}
        <div className='flex flex-row h-10 gap-x-3 w-full justify-center'>
          <a className="flex h-full justify-end" href="https://www.facebook.com/share/1GWfu9NBzQ/?mibextid=wwXIfr">
            <img src={Facebook}/>
          </a>
          <a className="flex h-full justify-start" href="https://www.instagram.com/roseshomecookin/?igsh=d3AzNTBsOTJzYTFy&utm_source=qr">
            <img src={Instagram}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
