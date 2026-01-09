import { useEffect, useRef, useState } from 'react'

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function TimerCard() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_12px_40px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(15,23,42,0.45)]">
      <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
        <span className={`h-2 w-2 rounded-full ${isRunning ? 'bg-emerald-300' : 'bg-white/30'}`} />
        {isRunning ? 'Running' : 'Paused'}
      </div>
      <div className="my-5 font-mono text-4xl font-bold text-white sm:text-5xl">{formatTime(seconds)}</div>
      <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
        <button
          className="rounded-full border border-emerald-300/60 bg-emerald-300/20 px-4 py-2 text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-300/30 hover:shadow-[0_12px_30px_rgba(105,255,226,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
          type="button"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="rounded-full border border-rose-300/60 bg-rose-300/15 px-4 py-2 text-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-300/30 hover:shadow-[0_12px_30px_rgba(251,113,133,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300 disabled:cursor-not-allowed disabled:opacity-40"
          type="button"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/80 transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:text-emerald-100 hover:shadow-[0_12px_30px_rgba(105,255,226,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
