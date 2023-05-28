// fileStructure.js
import { writable } from 'svelte/store';

export const fileStructure = writable({
  name: 'Root',
  type: 'Folder',
  expanded: false,
  children: []
});

export const updateFileStructure = newStructure => {
  fileStructure.set(newStructure);
};
