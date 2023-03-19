import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {console.error('putDb not implemented')
console.log('PUT to the database');
const editorDb = await openDB('editor', 1);
const tx = editorDb.transaction('editor', 'readwrite');
const store = tx.objectStore('editor');
const request = store.delete({ id: id, edit: content });
const result = await request;
console.log('🚀 - data saved to the database', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');
  // Create a connection to the database database and version we want to use.
  const editorDb = await openDB('editor', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = editorDb.transaction('editor', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('editor');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;

};

initdb();
