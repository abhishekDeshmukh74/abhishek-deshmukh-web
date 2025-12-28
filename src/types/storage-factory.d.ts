declare module 'storage-factory' {
    export function storageFactory(getStorage: () => Storage): Storage;
}
