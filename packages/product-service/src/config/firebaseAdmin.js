import admin from 'firebase-admin'
import serviceAccountFile from './the-booktown-adminsdk.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountFile),
})

export default admin
