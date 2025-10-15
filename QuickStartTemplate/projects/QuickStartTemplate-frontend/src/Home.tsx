// src/Home.tsx
// Redesigned modern landing page using TailwindCSS.
// Logic preserved — visual structure and styling enhanced.

import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import { AiOutlineDeploymentUnit, AiOutlineSend, AiOutlineStar } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import Transact from './components/Transact'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false)
  const [openPaymentModal, setOpenPaymentModal] = useState(false)
  const [openMintModal, setOpenMintModal] = useState(false)
  const [openTokenModal, setOpenTokenModal] = useState(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-100 font-inter">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          Algorand dApp Gateway
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-sm font-semibold transition shadow-lg shadow-cyan-500/20"
          onClick={() => setOpenWalletModal(true)}
        >
          <BsWallet2 className="text-lg text-white" />
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15)_0%,_transparent_60%)] pointer-events-none"></div>

        <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-green-300 drop-shadow-lg">
          Explore Algorand on TestNet
        </h2>
        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mb-8">
          Experience the next generation of decentralized finance — connect your wallet, send transactions, mint NFTs,
          and deploy smart contracts all in one seamless interface.
        </p>
        <button
          onClick={() => setOpenWalletModal(true)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-neutral-900 font-semibold text-lg transition transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          {activeAddress ? 'Launch App' : 'Connect Wallet to Begin'}
        </button>
      </header>

      {/* ---------------- Features Grid ---------------- */}
      <main className="flex-1 px-6 pb-20">
        {activeAddress ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
            {/* Send Payment */}
            <div className="group p-6 bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-cyan-500 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20">
              <AiOutlineSend className="text-4xl mb-3 text-cyan-400 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold mb-2">Send Payment</h3>
              <p className="text-sm text-gray-400 mb-4">
                Try sending 1 ALGO to any address on TestNet to understand wallet-based transactions.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition"
                onClick={() => setOpenPaymentModal(true)}
              >
                Open
              </button>
            </div>

            {/* Mint NFT */}
            <div className="group p-6 bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-pink-500 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20">
              <AiOutlineStar className="text-4xl mb-3 text-pink-400 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold mb-2">Mint NFT</h3>
              <p className="text-sm text-gray-400 mb-4">
                Upload an image and mint it as an NFT with metadata stored on IPFS via Pinata.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-semibold transition"
                onClick={() => setOpenMintModal(true)}
              >
                Open
              </button>
            </div>

            {/* Create Token */}
            <div className="group p-6 bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-purple-500 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              <BsArrowUpRightCircle className="text-4xl mb-3 text-purple-400 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold mb-2">Create Token (ASA)</h3>
              <p className="text-sm text-gray-400 mb-4">
                Spin up your own Algorand Standard Asset in seconds — perfect for token creation testing.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition"
                onClick={() => setOpenTokenModal(true)}
              >
                Open
              </button>
            </div>

            {/* Contract Interactions */}
            <div className="group p-6 bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-amber-500 transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/20">
              <AiOutlineDeploymentUnit className="text-4xl mb-3 text-amber-400 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold mb-2">Contract Interactions</h3>
              <p className="text-sm text-gray-400 mb-4">
                Interact with a simple smart contract to understand stateful Algorand dApps.
              </p>
              <button
                className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold transition"
                onClick={() => setOpenAppCallsModal(true)}
              >
                Open
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-16">
            <p>⚡ Connect your wallet first to unlock the features below.</p>
          </div>
        )}
      </main>

      {/* ---------------- Modals ---------------- */}
      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
      <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
    </div>
  )
}

export default Home
