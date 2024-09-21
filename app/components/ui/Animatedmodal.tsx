import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { FaLocationArrow } from 'react-icons/fa'

const Animatedmodal = () => {
  return (
    <div className='w-full z-[999] overflow-hidden' suppressHydrationWarning={true}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2 cursor-pointer">
            <span>Get a Quote</span>
            <FaLocationArrow />
          </div>
        </DialogTrigger>
        <DialogContent className='w-full bg-neutral-800 overflow-hidden z-[999]'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Animatedmodal
