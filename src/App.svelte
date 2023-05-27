<script>
  import { onMount } from 'svelte';
  import { fileStructure } from './store.js';

  let username = '';
  let password = '';
  let isLoggedIn = false;
  let fileStructureData; // Declare a reactive variable

  function updateFileStructure(data){
    console.log('data received',data)
  }

// Subscribe to fileStructure changes
  $: {
    fileStructureData = $fileStructure;
    console.log('file:', fileStructureData);
  }
// Subscribe to fileStructure changes
// onMount(() => {
//   const unsubscribe = fileStructure.subscribe(value => {
//     fileStructureData = value;
//   });

//   // Unsubscribe when the component is destroyed
//   return unsubscribe;
// });
  function handleSubmit() {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    isLoggedIn = true;
      // Example update to the file structure
    // setTimeout(() => {
    //   updateFileStructure({
    //     data: 'Root',
    //     type: 'Folder',
    //     expanded: true,
    //     children: [
    //       { data: 'Child 1', type: 'Folder', expanded: false, children: [] },
    //       { data: 'Child 2', type: 'File' }
    //     ]
    //   });
    // }, 10000);
    // Reset form fields
    // username = '';
    // password = '';
  }
</script>

{#if !isLoggedIn}
  <div class="form-container">
    <h2 class="form-title">{'Filetree Navigator App'}</h2>
    <p class="welcome-text" />

    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          id="username"
          class="form-input"
          placeholder="Enter your username"
          bind:value={username}
          required
        />
      </div>

      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          class="form-input"
          placeholder="Enter your password"
          bind:value={password}
          required
        />
      </div>

      <button type="submit" class="form-submit-btn">Login</button>
    </form>
  </div>
{/if}
{#if isLoggedIn}
  <my-filetree-web-component name={username} tree_data={fileStructureData} update_files_structure={updateFileStructure} />
  <!-- <script>
    System.import('https://frolicking-ganache-207e77.netlify.app/basic-web-comp.js')
      .then(() => {
        // The web component has been loaded and registered
        // You can now use it in your code
      })
      .catch((error) => {
        console.error('Error loading web component:', error);
      });
  </script> -->
{/if}

<style>
  .form-container {
    max-width: 400px;
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem;
    border: 2px solid #ffffff;
    border-radius: 0.5rem;
    background-color: #f7fafc;
    color: #2d3748;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .form-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #2d3748;
  }

  .form-input {
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    width: 93%;
    font-size: 1rem;
  }

  .form-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #4a5568;
  }

  .form-submit-btn {
    background-color: #4c51bf;
    color: #ffffff;
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .form-submit-btn:hover {
    background-color: #4338ca;
  }

  .welcome-text {
    margin-bottom: 1.5rem;
    color: #2d3748;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }

  .additional-element {
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: #edf2f7;
    color: #2d3748;
  }
</style>
