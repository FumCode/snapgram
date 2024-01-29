import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
    projectId: '65aa8de05e155865913e',
    url: 'https://cloud.appwrite.io/v1',
    storageId: '65ad1b27b6b55dd2c6e3',
    databaseId: '65ad1bb62b895f656fa0',
    sevesCollectionId: '65ad1c9d6db58bb1831d',
    postCollectionId: '65ad1c17a37bf110f846',
    userCollectionId: '65ad1c630d7c8ac3b65a',

    // projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    // url: import.meta.env.VITE_APPWRITE_URL,
    // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    // sevesCollectionId: import.meta.env.VITE_APPWRITE_SEVES_COLLECTIONS_ID,
    // postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTIONS_ID,
    // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTIONS_ID
}


export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);