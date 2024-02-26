import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://eu1-stirred-platypus-39526.upstash.io',
    token: process.env.REDIS_KEY!,
})

