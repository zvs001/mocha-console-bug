import admin from 'firebase-admin'
import serviceAccount from '../../../../env/firebaseServiceAccount.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: 'https://media-service-cloud.firebaseapp.com',
})

export default admin
