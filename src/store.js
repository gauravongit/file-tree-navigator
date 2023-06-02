import { writable } from 'svelte/store';

export const fileStructure = writable([]);

export const updateFileStructure = newStructure => {
  fileStructure.set(newStructure);
};
