<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const time = ref(0)
const isRunning = ref(false)
let animationFrameId: number
let lastTime: number

const formatTime = (ms: number) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  const centiseconds = Math.floor((ms % 1000) / 10)
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`
}

const update = (timestamp: number) => {
  if (!lastTime) lastTime = timestamp
  const delta = timestamp - lastTime
  lastTime = timestamp
  
  time.value += delta
  
  if (isRunning.value) {
    animationFrameId = requestAnimationFrame(update)
  }
}

const start = () => {
  if (isRunning.value) return
  isRunning.value = true
  lastTime = performance.now()
  animationFrameId = requestAnimationFrame(update)
}

const stop = () => {
  isRunning.value = false
  cancelAnimationFrame(animationFrameId)
}

const reset = () => {
  stop()
  time.value = 0
}

const toggle = () => {
  if (isRunning.value) {
    stop()
  } else {
    start()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    e.preventDefault() // Prevent scrolling
    toggle()
  } else if (e.code === 'KeyR') {
    reset()
  }
}

// Add global event listener
window.addEventListener('keydown', handleKeydown)

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div class="timer">
    <h1>Timer</h1>
    
    <div class="display">{{ formatTime(time) }}</div>
    
    <div class="controls">
      <button @click="toggle" :class="{ 'stop': isRunning }">
        {{ isRunning ? 'Stop' : 'Start' }}
      </button>
      <button @click="reset" class="reset">Reset</button>
    </div>
    
    <div class="shortcuts">
      <p>Shortcuts: <code>Space</code> to Start/Stop, <code>R</code> to Reset</p>
    </div>
  </div>
</template>

<style scoped>
.timer {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.display {
  font-size: 5rem;
  font-family: monospace;
  font-weight: bold;
  color: #2c3e50;
  margin: 2rem 0;
}

.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3aa876;
}

button.stop {
  background-color: #ff4444;
}

button.stop:hover {
  background-color: #cc0000;
}

button.reset {
  background-color: #666;
}

button.reset:hover {
  background-color: #555;
}

.shortcuts {
  color: #666;
  margin-top: 2rem;
}

code {
  background: #eee;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
}
</style>
