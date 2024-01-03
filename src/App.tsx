import { useState } from 'react'
import Accordion from './components/Accordion'
import Tabs from './components/Tabs'
import Modal from './components/Modal'

function App() {
  const [showAccordion, setShowAccordion] = useState(false)
  const [showTabs, setShowTabs] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='flex min-h-screen'>
      <div className='w-1/4 p-4 flex flex-col gap-4 border border-slate-400 rounded-xl m-1'>
        <button
          type='button'
          className='w-full border-2 border-slate-400 bg-slate-400 px-4 py-2 rounded-md font-semibold tracking-wider shadow-lg backdrop-blur hover:bg-slate-500 hover:border-slate-500 hover:text-slate-100'
          onClick={() => {
            setShowAccordion(!showAccordion)
            setShowTabs(false)
            setShowModal(false)
          }}
        >
          Accordion
        </button>
        <button
          type='button'
          className='w-full border-2 border-slate-400 bg-slate-400 px-4 py-2 rounded-md font-semibold tracking-wider shadow-lg backdrop-blur hover:bg-slate-500 hover:border-slate-500 hover:text-slate-100'
          onClick={() => {
            setShowAccordion(false)
            setShowTabs(!showTabs)
            setShowModal(false)
          }}
        >
          Tabs
        </button>
        <button
          type='button'
          className='w-full border-2 border-slate-400 bg-slate-400 px-4 py-2 rounded-md font-semibold tracking-wider shadow-lg backdrop-blur hover:bg-slate-500 hover:border-slate-500 hover:text-slate-100'
          onClick={() => {
            setShowAccordion(false)
            setShowTabs(false)
            setShowModal(true)
          }}
        >
          Modal
        </button>
      </div>

      <div className='w-3/4 p-4 border border-slate-400 rounded-xl m-1'>
        {showAccordion && (
          <div className='flex flex-col items-center mt-20 gap-4'>
            <Accordion
              tab={1}
              title='How am I coding?'
              text="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            />
            <Accordion
              tab={2}
              title='How does a browser even work?'
              text="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            />
            <Accordion
              tab={3}
              title='Why does an all loving god cause so much suffering?'
              text="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            />
          </div>
        )}
        {showTabs && <Tabs />}
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false)
            }}
          >
            <h1 className='font-bold text-lg'>Content goes here</h1>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
