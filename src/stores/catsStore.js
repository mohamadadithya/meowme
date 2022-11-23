import { writable } from "svelte/store"
import { PUBLIC_API_BASE_URL } from '$env/static/public'

export const cats = writable([]), tags = writable([]), isLoading = writable(false)

export const getCats = async (tag = '') => {
    isLoading.set(true)
    const response = await fetch(`${PUBLIC_API_BASE_URL}/cats?limit=50&skip=0&tags=${tag}`)
    const result = await response.json()
    cats.set(result)
    isLoading.set(false)
}

const getTags = async () => {
    isLoading.set(true)
    const response = await fetch(`${PUBLIC_API_BASE_URL}/tags`)
    const result = await response.json()
    tags.set(result)
    isLoading.set(false)
}

getCats()
getTags()