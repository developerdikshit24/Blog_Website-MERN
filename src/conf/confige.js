const conf = {
    appwriteUrl: String(import.meta.url.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.url.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.url.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.url.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket: String(import.meta.url.VITE_APPWRITE_BUCKET_ID),
}

export default conf