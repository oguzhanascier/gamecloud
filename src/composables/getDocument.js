import { ref } from 'vue'
import { firestoreRef } from '@/firebase/config'


const getDocuments = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = firestoreRef.collection(collection)

    collectionRef.onSnapshot(snap => {
        let results = []
        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null

    }, err => {
        console.log(err.message);
        documents.value = null
        err.value = 'Verilere Erişelemedi'
    })
    return { error, documents }
}

export default getDocuments