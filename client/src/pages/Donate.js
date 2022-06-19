import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { TransactionContext } from '../context/TransactionContext'

export default function Donate() {

  return (
    <div className=''>

      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">Donate</h1>
        <div className='bg-blue-500 h-1 w-44 my-2 rounded-lg'></div>
      </div>

      <div>
          <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen"
          >
            <div className="relative my-6 mx-auto w-screen">
              <div className="ml-[25rem] border-0 rounded-lg shadow-lg relative flex flex-col w-128 bg-gray-800 outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div>
                    <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                      Donate HBAR
                    </div>
                  </div>

                </div>

                <div className="grid justify-center">
                  <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                </div>

                <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4">

                  <div className='py-2'>
                    <input className='w-96 p-2 active:border-none checked:border-none rounded-md text-xl' placeholder='Senders address' value="0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE" />
                  </div>

                  <div className='py-2'>
                    <input className='w-96 p-2 active:border-none checked:border-none rounded-md text-xl' placeholder='HBAR' />
                  </div>

                  <div className='py-2'>
                    <input className='w-96 p-2 active:border-none checked:border-none rounded-md text-xl' placeholder='Message' />
                  </div>

                  <button className='bg-blue-600 text-white py-2 px-8 rounded-md ml-2'>
                    Do transaction
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}
