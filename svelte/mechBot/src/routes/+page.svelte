<!-- Container for demo purpose -->
<script lang="ts" >

import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
import { onMount } from 'svelte';
import { data } from './js.js';



  




</script>
<section class="overscroll-contain">
<div class="top-0 right-0 left-0 h-screen bg-[#EDF1D6]">
  <nav class="">
    <div
      class="  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6"
    >
      <a href="#" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"
          >GreenTune</span
        >
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-base text-black rounded md:bg-transparent md:p-0"
              aria-current="page">Contacts</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container  my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 bg-[#7C96AB]">
      <style>
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
        }
      </style>

      <div class="px-6 py-12 md:px-12 text-center lg:text-left">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 flex items-center">
            <div class="mt-12 lg:mt-0">
              <h1
                class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                style="color: hsl(218, 81%, 95%)"
              >
                Are you ready <br /><span style="color: hsl(218, 81%, 75%)"
                  >for an adventure?</span
                >
              </h1>
              <p class="text-lg" style="color: hsl(218, 81%, 95%)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                officia consequatur adipisci tenetur repudiandae rerum quos.
              </p>
            </div>
            <div class="mb-12 lg:mb-0">
              <div
                class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                style="padding-top: 56.25%"
              >
                <iframe
                  class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                  allowfullscreen=""
                  data-gtm-yt-inspected-2340190_699="true"
                  id="240632615"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   

    </section>
    <!-- Section: Design Block -->
  </div>
</div>
</section>

<section class=" absolute container h-screen right-0 left-0 pt-20"> 
    <Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown >
    {#each data as item}
    <DropdownItem>{item}</DropdownItem>
  {/each}
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
{#if jsonDataa}
  <ul>
    {#each jsonDataa as item}
      <li>{item}</li>
    {/each}
  </ul>
{/if}
</section>
<!-- Container for demo purpose -->
<style>



</style>