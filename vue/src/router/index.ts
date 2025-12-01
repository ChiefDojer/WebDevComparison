import { createRouter, createWebHashHistory } from 'vue-router'
import WorldClock from '../views/WorldClock.vue'
import Timer from '../views/Timer.vue'
import Countdown from '../views/Countdown.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/world-clock'
        },
        {
            path: '/world-clock',
            name: 'world-clock',
            component: WorldClock
        },
        {
            path: '/timer',
            name: 'timer',
            component: Timer
        },
        {
            path: '/countdown',
            name: 'countdown',
            component: Countdown
        }
    ]
})

export default router
