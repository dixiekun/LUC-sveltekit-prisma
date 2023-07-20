<script lang="ts">
    import playIcon from "$lib/icons/icon_play.svg"
    import { fade } from "svelte/transition";


    export let videoSrc: string;
    export let thumbnail: string;
    let isPlaying = false;
  
    function togglePlay() {
      isPlaying = !isPlaying;
    }
  </script>
  
  <div class="video-container">
    
      {#if !isPlaying}
        <div class="thumbnail-container">
          <img src={thumbnail} alt="Video Thumbnail" class="thumbnail" />
          <button class="play-button" on:click={togglePlay}>
            <img src={playIcon} alt="Play Icon" class="play-icon" />
          </button>
        </div>
      {/if}
    
  
    {#if isPlaying}
      <video transition:fade src={videoSrc} class="video" controls autoplay>
        <track kind="captions" default />
      </video>
    {/if}
  </div>
  
  <style>
    .video-container {
      border-radius: var(--text-base);
      overflow: hidden;
      position: relative;
      aspect-ratio: 16/9;
    }

    .thumbnail {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 71.493px;
      height: 71.493px;
      transform: translate(-50%, -50%);
      display: grid;
      place-items: center;
      border-radius: 100%;
      border: 2px solid #FFF;
      background: rgba(14, 14, 14, 0.40);
      backdrop-filter: blur(3px);
      cursor: pointer;

      &:hover {
        border-color: var(--color-accent);
      }
    }

    .play-icon {
      margin-left: 2px;
    }
  
    .video {
      display: block;
      width: 100%;
      height: auto;
    }
  </style>
  