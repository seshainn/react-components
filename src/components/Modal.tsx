import { useCallback, useEffect, useRef } from 'react'

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])
  const handleEscapeKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    },
    [handleClose]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyPress)
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleEscapeKeyPress, handleOutsideClick])

  return (
    <div className='w-[100%] h-[100%] relative'>
      <div
        ref={dialogRef}
        className='absolute top-20 bottom-20 left-20 right-20 border border-slate-200 rounded-xl shadow-lg backdrop-blur bg-white z-20 flex flex-col items-center justify-center gap-4'
      >
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
          className='lucide lucide-x absolute top-4 right-4 cursor-pointer'
          onClick={() => {
            handleClose()
          }}
        >
          <path d='M18 6 6 18' />
          <path d='m6 6 12 12' />
        </svg>
        {children}
      </div>
    </div>
  )
}

export default Modal
