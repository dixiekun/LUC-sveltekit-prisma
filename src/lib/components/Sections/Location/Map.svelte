<script lang="ts">
    import { onMount } from 'svelte';
    import markerSVG from "$lib/icons/icon_marker.svg";
    import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';
    import mapboxgl from 'mapbox-gl';

    
    export let longitude: number = -85.62;
    export let latitude: number = 42.87;

    mapboxgl.accessToken = PUBLIC_MAPBOX_ACCESS_TOKEN;
    
  

    onMount(() => {
    
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 10, // starting zoom
        });


      const popup = new mapboxgl.Popup({offset: 40})
        .setHTML("<h4 style='padding:var(--space-m); font-size:var(--text-s);';>Lucid Clean</h4>")
        .addTo(map);

      new mapboxgl.Marker({ element: createCustomMarker() })
        .setLngLat([longitude, latitude])
        .addTo(map)
        .setPopup(popup);
    });

    function createCustomMarker() {
        const el = document.createElement('div');
        const img = document.createElement('img');
        img.src = markerSVG;
        el.appendChild(img)
        return el;
    }

  </script>

<svelte:head>
  <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
</svelte:head>
  
  <div id="map"></div>
  
  <style>
    /* Add any custom styles for the map container here */
    #map {
      height: min(90dvh, 52rem);
      border-radius: var(--border-radius);
      overflow: hidden;
      margin-top: var(--space-m);
    }
  
  </style>