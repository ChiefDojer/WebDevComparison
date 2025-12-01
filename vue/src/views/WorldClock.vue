<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const timezones = ref<string[]>([localTimezone])
const availableTimezones = [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Asia/Dubai',
  'Asia/Singapore'
]
const selectedTimezone = ref(availableTimezones[0])
const now = ref(new Date())
let intervalId: number

const updateTime = () => {
  now.value = new Date()
}

onMounted(() => {
  intervalId = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const addTimezone = () => {
  if (selectedTimezone.value && !timezones.value.includes(selectedTimezone.value)) {
    timezones.value.push(selectedTimezone.value)
  }
}

const removeTimezone = (tz: string) => {
  timezones.value = timezones.value.filter(t => t !== tz)
}

const formatTime = (date: Date, timeZone: string) => {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date)
}

const formatDate = (date: Date, timeZone: string) => {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}
</script>

<template>
  <div class="world-clock">
    <h1>World Clock</h1>
    
    <div class="controls">
      <select v-model="selectedTimezone">
        <option v-for="tz in availableTimezones" :key="tz" :value="tz">
          {{ tz }}
        </option>
      </select>
      <button @click="addTimezone">Add Clock</button>
    </div>

    <div class="clocks-grid">
      <div 
        v-for="tz in timezones" 
        :key="tz" 
        class="clock-card"
        :class="{ 'local': tz === localTimezone }"
      >
        <div class="clock-header">
          <h2>{{ tz }}</h2>
          <button v-if="tz !== localTimezone" @click="removeTimezone(tz)" class="remove-btn">×</button>
          <span v-else class="local-badge">Local</span>
        </div>
        <div class="time">{{ formatTime(now, tz) }}</div>
        <div class="date">{{ formatDate(now, tz) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.world-clock {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.controls {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #3aa876;
}

.clocks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.clock-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
}

.clock-card.local {
  border: 2px solid #42b883;
}

.clock-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
}

.clock-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.remove-btn {
  position: absolute;
  right: -10px;
  top: -10px;
  background: #ff4444;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
}

.remove-btn:hover {
  background: #cc0000;
}

.local-badge {
  background: #42b883;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.time {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
}
</style>
