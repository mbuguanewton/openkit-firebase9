import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const config = {
    apiKey: import.meta.env.VITE_FIRE_API_KEY,
    authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIRE_DB_URL,
    projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIRE_MSG_SENDER_ID,
    appId: import.meta.env.VITE_FIRE_APP_ID,
}

// init firebase application
initializeApp(config)

// services
const store = getFirestore()

export default store
