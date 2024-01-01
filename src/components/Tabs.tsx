import { useState } from 'react'

const Tabs = () => {
  const [tabSelected, setTabSelected] = useState(1)
  return (
    <div className='flex flex-col justify-center items-center mt-20 space-y-2'>
      <div className='max-w-xl px-10 space-y-2'>
        <div className='flex items-center rounded-md bg-slate-300 p-1'>
          <button
            autoFocus
            type='button'
            className='flex-grow bg-slate-300 px-4 font-semibold text-center rounded-md py-1 focus:bg-slate-100'
            onClick={() => setTabSelected(1)}
          >
            Existentialism
          </button>
          <button
            type='button'
            className='flex-grow bg-slate-300 px-4 font-semibold text-center rounded-md py-1 focus:bg-slate-100'
            onClick={() => setTabSelected(2)}
          >
            Absurdism
          </button>
          <button
            type='button'
            className='flex-grow bg-slate-300 px-4 font-semibold text-center rounded-md py-1 focus:bg-slate-100'
            onClick={() => setTabSelected(3)}
          >
            Nihilism
          </button>
        </div>
        {tabSelected === 1 ? (
          <div className='italic space-y-5 rounded-md p-6 border-2 border-slate-300'>
            <h1>I think, therefore I am ... confused</h1>
            <h1>
              The meaning of life? Ah, thats the question I forgot to google
            </h1>
            <h1>
              Life is a tragic comedy where we are all waiting for the punch
              line
            </h1>
          </div>
        ) : tabSelected === 2 ? (
          <div className='italic space-y-5 rounded-md p-6 border-2 border-slate-300'>
            <h1>
              I asked the universe for answers, and it replied with an error
              404: Not Found.
            </h1>
            <h1>
              I am definitely a background character in someone else's sitcom.
            </h1>
            <h1>
              They say life is a journey, but I think I took a wrong turn at the
              existential crossroads.
            </h1>
          </div>
        ) : (
          <div className='italic space-y-5 rounded-md p-6 border-2 border-slate-300'>
            <h1>
              If life gives you lemons, just remember: they're ultimately
              meaningless citrus.
            </h1>
            <h1>
              The meaning of life? It's like trying to find a signal in a
              universe with bad reception.
            </h1>
            <h1>
              The glass isn't half full or half empty; it's shattered on the
              floor of the universe.
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabs
