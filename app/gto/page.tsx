"use client"
import { Estonia, Jim_Nightshade } from "next/font/google"
import Image from "next/image"
import {
  EventHandler,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react"

const Nightshade = Jim_Nightshade({ subsets: ["latin"], weight: ["400"] })
const estonia = Estonia({ subsets: ["latin"], weight: ["400"] })
const COUNT = 28

export default function Template() {
  const [locked, setLocked] = useState(true)
  const [locks, setLocks] = useState(new Array(COUNT).fill(1))
  const [password, setPassword] = useState("")
  const [passwordValid, setPasswordValid] = useState(false)

  const unlock = async () => {
    setTimeout(() => {
      setLocks(new Array(COUNT).fill(!locked))
      setLocked(false)
    }, 2000)
  }

  const submit: EventHandler<FormEvent> = (e) => {
    e.preventDefault()
    if (password.toLocaleLowerCase() === "royal token") {
      unlock()
      setPasswordValid(true)
    } else {
      setPassword("")
    }
  }

  // useEffect(() => {
  //   if (locked)
  //     // (async () => {
  //     setTimeout(() => {
  //       unlock()
  //     }, 1000)
  //   // })()
  // }, [])

  return (
    <div
      className={`block absolute h-full w-full min-h-screen bg-[#f1e6da] overflow-hidden ${estonia.className} text-[#26221f]`}
    >
      <div
        className={`absolute top-0 h-1/2 w-full bg-[#402f2f] z-20
          transform transition-transform`}
        style={{
          transform: locked ? "translateY(0)" : "translateY(-200%)",
          transitionDelay: "6.1s",
          transitionDuration: "2s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      >
        <div
          className={`pointer-events-none absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-red-900 p-2 border-4 border-yellow-400
          flex items-center`}
        >
          <Image
            src="/gto.png"
            alt=""
            className="z-20"
            width={70}
            height={70}
          ></Image>
          {/* <p
            className={`${Nightshade.className} text-yellow-400 text-[40px] text-center w-full font-bold`}
          >
            GO
          </p> */}
        </div>
        <div
          className={`pointer-events-none absolute z-30 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full bg-[#402f2f] transition-opacity duration-[2000ms] delay-[1500ms]
          ${locked ? "opacity-100" : "opacity-0"}`}
        ></div>
        {locked ? (
          <div
            className={`relative transitiom-opacity duration-1000 z-40 delay-1000 flex flex-col h-full ${
              passwordValid ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* <p
              className={`z-30 whitespace-pre-line text-center text-4xl text-yellow-400`}
            >{`To George Tiger Old
          By royal order of
          KING GRIMLAD The FIRST`}</p> */}
            <form onSubmit={submit}>
              <input
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={passwordValid}
                className={`absolute z-40 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2
                        w-44 text-center text-4xl h-28 bg-transparent outline-none text-yellow-400 ${Nightshade.className}`}
              />
            </form>
            {/* <p
              className={`z-30 whitespace-pre-line text-center text-4xl text-yellow-400`}
            >{`14th February 2024`}</p> */}
          </div>
        ) : null}
        <div
          className={`z-30 pointer-events-none absolute w-full h-full -bottom-1/2 flex items-center justify-center
          transition-opacity duration-[2000ms]
        ${locked ? "opacity-0" : "opacity-100"}`}
        >
          {locks.map((locked, i) => {
            const rotation = Math.round(((i + 1) / COUNT) * 360 * 1000) / 1000
            return (
              <div
                key={i}
                className={`absolute bg-[#402f2f] rounded-t-2xl rounded-b-md border-t-4 border-yellow-400 transform transition-transform duration-500 ${
                  locked ? "-translate-y-1/4" : "-translate-y-full"
                } ${i + 1 === locks.length ? "" : ""}`}
                style={{
                  height: "80px",
                  width: "30px",
                  rotate: `${rotation}deg`,
                  transitionDelay: `${2 + i / 10}s`,
                }}
              ></div>
            )
          })}
        </div>
        <span
          className={`absolute bottom-0 translate-y-full z-10 bg-yellow-400 h-1 w-full
          transition-opacity duration-[2000ms]
        ${locked ? "opacity-0" : "opacity-100"}`}
        ></span>
        {/* <div
          className={`absolute z-0 left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 block transform transition-transform duration-500 scale-0 h-screen rounded-full bg-yellow-400 ${
            !locked && "scale-250"
          }`}
          style={{ transitionDelay: "4s", aspectRatio: "1/1" }}
        ></div> */}
      </div>
      <div
        className={`absolute bottom-0 h-1/2 w-full bg-[#402f2f] z-10
              transform transition-transform duration-1000
              ${locked ? "translate-y-0" : "translate-y-full"}`}
        style={{
          transitionDelay: "6s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      ></div>
      <div
        className={`${
          locked ? "" : "overflow-scroll"
        } absolute w-full z-0 h-full`}
      >
        <div className="relative w-full z-0 h-full bg-linen flex flex-col justify-center items-center">
          <div className="font-estonia whitespace-pre-line text-3xl align-middle flex flex-col w-full text-center font-bold px-3 md:px-12">
            {`To George Tiger Old
By royal order of
KING GRIMLAD The FIRST

14th February 2024`}
            <span className="w-16 my-9 h-0.5 bg-[#402f2f] rounded-lg mx-auto"></span>
            {`His Majesty King Grimlad the First, ruler of Aglia and saviour of the Isles, wishes this letter to lay on the hands of George Tiger Old.
            
            Anyone who interfieres with the delivery will be punished with the maximum sentence and thereby executed by hanging at Ceredils Main Square. `}
          </div>
        </div>
        <div className="absolute bottom-2 text-3xl leading-none font-bold text-ink w-full text-center flex justify-center flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            // className="w-14"
            viewBox="0 5 16 10"
          >
            <path
              fillRule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </div>
        <div className="w-full z-0 h-auto min-h-full bg-linen flex flex-col justify-center items-center">
          <div className=" align-middle flex flex-col leading font-extrabold w-full text-left px-3 md:px-12 lg:px-20">
            <p className="py-5 text-[29px] leading-none whitespace-pre-line">
              {`Esteemed warrior,

It is with great pleasure and admiration that I pen this missive to you, recognizing your exceptional valor and unwavering courage displayed in the recent battles for our beloved Isles. Your steadfast commitment to the defense of our realm has not gone unnoticed, and it is my duty as your sovereign to express my deepest gratitude for your service.

In recognition of your bravery and dedication, I am delighted to bestow upon you a token of my esteem and admiration. A delegation of my trusted Kings Man has been dispatched to seek you up in the cold north to give you what belongs to you now. You shall find a magnificent sword, meticulously forged in silver by the skilled hands of Aglia's finest blacksmith. The sword, once named The Winter Bearer by its forger, may now get a new name by its deserving wielder.


May this present serve as a testament to your unwavering loyalty to your king and the glory Aglia. `}
            </p>
            <p className="py-5 text-[27px] leading-none whitespace-pre-line text-right">
              {`King Grimlad the First
              Ruler of Aglia and Saviour of the Isles`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
