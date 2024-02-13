"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"

const GLOBULE_DENSITY = 0.03
const S_MIN = 40
const S_RANGE = 50

export default function Curtains() {
  const [mounted, setMounted] = useState(false)
  const [nGlobules, setNGlobules] = useState([20, 40])

  useEffect(() => {
    setNGlobules([
      Math.round(window.innerWidth * GLOBULE_DENSITY),
      Math.round(window.innerHeight * GLOBULE_DENSITY),
    ])
    setMounted(true)
  }, [])

  return (
    <div className="z-20 fixed w-full h-screen">
      <div
        className={clsx(
          "absolute h-full w-1/2 left-0 bg-action transition-transform  delay-500 duration-[2000ms]",
          mounted && "-translate-x-full lg:-translate-x-3/4"
        )}
      >
        {mounted
          ? Array(nGlobules[1])
              .fill("")
              .map((_, i) => {
                const width = parent?.innerWidth
                const height = parent?.innerHeight
                const s = S_MIN + Math.round(Math.random() * S_RANGE) //size
                const y = (i * height) / (nGlobules[1] - 1) //* (width / height) // Where it is from the top
                const x_0 = Math.floor(s / 2) // This will get it so the center is on the vertical line of the curtain
                const x = x_0

                return (
                  <span
                    key={i}
                    className="rounded-full block bg-action absolute animate-wiggle"
                    style={{
                      width: s,
                      height: s,
                      right: `-${x}px`,
                      top: y,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></span>
                )
              })
          : null}
      </div>
      <div
        className={clsx(
          "absolute h-full w-1/2 right-0 bg-action transition-transform  delay-500 duration-[2000ms]",
          mounted && "translate-x-full lg:translate-x-3/4"
        )}
      >
        {mounted
          ? Array(nGlobules[1])
              .fill("")
              .map((_, i) => {
                const width = parent?.innerWidth
                const height = parent?.innerHeight
                const s = S_MIN + Math.round(Math.random() * S_RANGE) //size
                const y = (i * height) / (nGlobules[1] - 1) //* (width / height) // Where it is from the top
                const x_0 = Math.floor(s / 2) // This will get it so the center is on the vertical line of the curtain
                const x = x_0

                return (
                  <span
                    key={i}
                    className="rounded-full block bg-action absolute animate-wiggle"
                    style={{
                      width: s,
                      height: s,
                      left: `-${x}px`,
                      top: y,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></span>
                )
              })
          : null}
      </div>
      <div
        className={clsx(
          "absolute h-1/2 w-full top-0 bg-action transition-transform  delay-500 duration-[2000ms]",
          mounted &&
            "-translate-y-1/3 sm:-translate-y-3/4 md:-translate-y-[60%]"
        )}
      >
        {mounted
          ? Array(nGlobules[0])
              .fill("")
              .map((_, i) => {
                const width = parent?.innerWidth
                const height = parent?.innerHeight
                const s = S_MIN + Math.round(Math.random() * S_RANGE) //size
                const y = (i * width) / (nGlobules[0] - 1) //* (width / height) // Where it is from the top
                const x_0 = Math.floor(s / 2) // This will get it so the center is on the vertical line of the curtain
                const x = x_0

                return (
                  <span
                    key={i}
                    className="rounded-full block bg-action absolute animate-wiggle"
                    style={{
                      width: s,
                      height: s,
                      right: `${y}px`,
                      bottom: -x,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></span>
                )
              })
          : null}
      </div>
      <div
        className={clsx(
          "absolute h-1/2 w-full bottom-0 bg-action transition-transform  delay-500 duration-[2000ms]",
          mounted && "translate-y-1/3 sm:translate-y-3/4 md:translate-y-[60%]"
        )}
      >
        {mounted
          ? Array(nGlobules[0])
              .fill("")
              .map((_, i) => {
                const width = parent?.innerWidth
                const height = parent?.innerHeight
                const s = S_MIN + Math.round(Math.random() * S_RANGE) //size
                const y = (i * width) / (nGlobules[0] - 1) //* (width / height) // Where it is from the top
                const x_0 = Math.floor(s / 2) // This will get it so the center is on the vertical line of the curtain
                const x = x_0

                return (
                  <span
                    key={i}
                    className="rounded-full block bg-action absolute animate-wiggle"
                    style={{
                      width: s,
                      height: s,
                      right: `${y}px`,
                      top: -x,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></span>
                )
              })
          : null}
      </div>
    </div>
  )
}

// const CircularGlobules = () => {
//   return Array(nGlobules)
//     .fill("")
//     .map((_, i) => {
//       const width = window?.innerWidth
//       const height = window?.innerHeight
//       const s = S_MIN + Math.round(Math.random() * S_RANGE) //size
//       const y = (i * width) / (nGlobules - 1) + (height - width) / 2 //* (width / height) // Where it is from the top
//       const x_0 = Math.floor(s / 2) // This will get it so the center is on the vertical line of the curtain
//       const r = width / 2
//       const x =
//         x_0 +
//         Math.sqrt(r ** 2 - ((i * width) / nGlobules - r) ** 2) *
//           (i % 2 === 0 ? 1 : -1) +
//         r

//       return (
//         <span
//           key={i}
//           className="rounded-full block bg-action absolute animate-wiggle"
//           style={{
//             width: s,
//             height: s,
//             right: `-${x}px`,
//             top: y,
//             animationDelay: `${Math.random() * 3}s`,
//           }}
//         ></span>
//       )
//     })
// }
