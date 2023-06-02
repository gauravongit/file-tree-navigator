<script>
  import { onMount } from 'svelte';
  import { fileStructure, updateFileStructure } from './store.js';

  let username = '';
  let password = '';
  let isLoggedIn = false;
  let fileStructureData; 

  $: {
    fileStructureData = $fileStructure;
  }

  /* check if the user is logged in */
  onMount(function () {
    const FileTreeAppUser = localStorage.getItem('FileTreeAppUser');
    if (FileTreeAppUser) {
      username = FileTreeAppUser;
      isLoggedIn = true;
    }
  });

  function onLogout() {
    isLoggedIn = false;
    localStorage.setItem('FileTreeAppUser', '');
  }

  function handleSubmit() {
    isLoggedIn = true;
    localStorage.setItem('FileTreeAppUser', username);
  }
</script>

{#if !isLoggedIn}
  <div class="form-container">
    <h2 class="form-title">{'File Tree Navigator App'}</h2>
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
  <my-filetree-web-component
    user_name={username}
    tree_data={fileStructureData}
    update_files_structure={updateFileStructure}
    on_logout={onLogout}
  />
{/if}

<style>
  .form-container {
    max-width: 400px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem;
    border: 2px solid #ffffff;
    border-radius: 0.5rem;
    background-color: #f7fafc;
    color: #2d3748;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    animation: loadingAnimation 0.5s ease-in;
  }
  .form-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #2d3748;
    align-self: center;
    font-family: circular;
  }
  .form-input {
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    width: 93%;
    font-size: 1rem;
    font-family: circular;
  }
  .form-label {
    font-weight: 500;
    font-family: circular;
    margin-bottom: 0.5rem;
    color: #4a5568;
  }
  .form-submit-btn {
    background-color: #ffca28;
    color: #ffffff;
    padding: 0.75rem;
    margin-top: 5%;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    font-family: circular;
  }
  .form-submit-btn:hover {
    background-color: #e4b81c;
  }
  .welcome-text {
    margin-bottom: 1.5rem;
    color: #2d3748;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }
    @keyframes loadingAnimation {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px) rotate(-5deg);
      }
      50% {
        transform: translateX(5px) rotate(5deg);
      }
      75% {
        transform: translateX(-5px) rotate(-5deg);
      }
      100% {
        transform: translateX(0);
      }
    }
</style>
