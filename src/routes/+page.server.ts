import { kv } from '@vercel/kv'

export async function load() {
    try {
        const currentFilepath = await kv.get<string>('currentFilepath')

        return {currentFilepath};
    } catch (error) {
        console.log(error)
    }
}