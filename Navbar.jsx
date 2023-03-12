import { ethers } from 'ethers'
import React from 'react'

const Navbar = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-3xl tracking-tight">
          Web3 Discord
        </span>
      </div>
      <div className="flex">
        {account ? (
          <button
            type="button"
            className='className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"'
          >
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
          </button>
        ) : (
          <button
            type="button"
            className='className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"'
            onClick={connectHandler}
          >
            Connect
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar

/*
Don't forget to pass the parameters account and setAccount in app.js while importing
*/
