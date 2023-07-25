import { writable } from 'svelte/store';

// Initialize the store with null as the initial value
export const mapInstance = writable<mapboxgl.Map | null>(null);
