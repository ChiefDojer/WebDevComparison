<script setup lang="ts">
import { ref, onUnmounted, computed } from 'vue'

const targetDate = ref('')
const timeLeft = ref(0)
const isRunning = ref(false)
const isDone = ref(false)
let intervalId: number

const formatTimeLeft = computed(() => {
  if (timeLeft.value <= 0) return '00:00:00:00'
  
  const days = Math.floor(timeLeft.value / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft.value % (1000 * 60)) / 1000)
  
  return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const start = () => {
  if (!targetDate.value) return
  
  const target = new Date(targetDate.value).getTime()
  if (isNaN(target)) return
  
  isRunning.value = true
  isDone.value = false
  
  const update = () => {
    const now = new Date().getTime()
    const distance = target - now
    
    if (distance < 0) {
      timeLeft.value = 0
      isRunning.value = false
      isDone.value = true
      clearInterval(intervalId)
    } else {
      timeLeft.value = distance
    }
  }
  
  update()
  intervalId = setInterval(update, 1000)
}

const reset = () => {
  clearInterval(intervalId)
  isRunning.value = false
  isDone.value = false
  timeLeft.value = 0
  targetDate.value = ''
}

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="countdown" :class="{ 'done': isDone }">
    <h1>Countdown</h1>
    
    <div v-if="!isRunning && !isDone" class="setup">
      <input 
        type="datetime-local" 
        v-model="targetDate"
        :min="new Date().toISOString().slice(0, 16)"
      >
      <button @click="start" :disabled="!targetDate">Start Countdown</button>
    </div>
    
    <div v-else class="active-countdown">
      <div class="display">{{ formatTimeLeft }}</div>
      <div v-if="isDone" class="done-message">DONE!</div>
      <button @click="reset" class="reset-btn">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.5s;
}

.countdown.done {
  background-color: #ffeba7;
  animation: flash 1s infinite;
}

@keyframes flash {
  0%, 100% { background-color: #ffeba7; }
  50% { background-color: #ff4444; color: white; }
}

.setup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

input {
  padding: 0.8rem;
  font-size: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #a8d5c2;
  cursor: not-allowed;
}

.display {
  font-size: 4rem;
  font-family: monospace;
  font-weight: bold;
  margin: 2rem 0;
}

.done-message {
  font-size: 3rem;
  font-weight: bold;
  color: #ff4444;
  margin-bottom: 1rem;
}

.reset-btn {
  background-color: #666;
}
</style>
