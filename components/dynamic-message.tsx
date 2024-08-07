"use client"

const messages = [
  "under construction",
  "in development",
  "coming soon",
]

export default function DynamicMessage() {
  const message = messages.at(Math.floor(Math.random() * messages.length))
  return (
    <h3
      className="text-xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center"
      // suppressHydrationWarning
    >
      {message}
    </h3>
  )
}
