import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 xl:place-content-center grid gap-10 lg:grid-cols-2 xl:grid-cols-3 space-y-5 min-h-screen">
      <div className="bg-white flex flex-col justify-between p-10 rounded-2xl shadow-2xl">
        <span className="font-semibold text-3xl">Select item</span>
        <ul>
          {[1].map((i) => (
            <div className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50" >
            <span className="text-gray-500">Gray Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          ))}
        </ul>

        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$8</span>
        </div> 
        <div className="flex justify-between  mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button 
        className="mt-5 bg-blue-500 text-white text-center rounded-xl w-1/2 mx-auto">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-blue-300 rounded-full group-hover:bg-red-300 transition-colors">
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Spent</span>
              <span className="font-semibold">$2310</span>
            </div>
          </div>
          <div className="flex flex-col relative -mt-10 -mb-5 items-center">
            <span className="text-lg font-medium">Seungyoon cho</span>
            <span className="text-sm text-gray-500 -bottom-10">Korea, south</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-center">
          <span>⬅️ </span>
          <div className="space-x-3">
            <span>4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 mt-3">

        </div>
        <div className="flex flex-col">
          <span className="font-medium mb-1 text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-400">Chair</span>
        </div>
        <div className="mt-3 mb-5 flex justify-between">
          <div className="mt-3 space-x-2">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
          </div>
          <div className="flex items-center space-x-5">
            <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-400">-</button>
            <button>1</button>
            <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-400">+</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 rounded-lg text-center text-white py-2 px-8">Add to cart</button>
        </div>
      </div>
    </div>
  ); 
}

export default Home
