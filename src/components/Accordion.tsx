import { useState } from 'react'

type accordionProps = {
  title: string
  text: string
  tab: number
}

const Accordion = (props: accordionProps) => {
  const [expandText, setExpandText] = useState(false)
  return (
    <div className='w-1/2 flex flex-col gap-2'>
      <div
        className='flex justify-between items-center border-b-2 py-1 group hover:cursor-pointer'
        tabIndex={props.tab}
        onFocus={() => setExpandText(true)}
        onBlurCapture={() => setExpandText(false)}
      >
        <div>
          <h1 className='text-md group-hover:text-red-500 dark:text-slate-300 dark:group-hover:text-teal-500'>
            {props.title}
          </h1>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`lucide lucide-chevron-down ${
            expandText
              ? 'tansform -rotate-180 duration-500 text-red-600 dark:text-teal-500'
              : ''
          }`}
        >
          <path d='m6 9 6 6 6-6' />
        </svg>
      </div>
      <div
        className={`text-justify dark:text-slate-300 ${
          expandText ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}
      >
        <p className='py-2'>{props.text}</p>
      </div>
    </div>
  )
}

export default Accordion
