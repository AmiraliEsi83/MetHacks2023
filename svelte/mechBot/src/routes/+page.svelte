<!-- Container for demo purpose -->
<script lang="ts">
  import { Button, Dropdown, DropdownItem, Chevron } from "flowbite-svelte";
  import { onMount } from "svelte";

  const years = Array.from({ length: 74 }, (_, i) => 1950 + i);
  import data from "./carData.json";
  let arr = [];
  for (const datas in data) {
    arr.push(datas);
  }

  let selectedOption = "";
  let selectedOptionYear = "";
  let selectedOptionCar = "";
  let cars = [];
  let text = "";

  function carSelector() {
    cars = [];
    for (const datas in data[selectedOption]) {
      console.log(text);
      cars.push(data[selectedOption][datas]);
    }
    cars = cars;
  }
  function handleSelection(event) {
    console.log(`Selected option: ${event.target.value}`);
    console.log(selectedOption);
    cars = [];
    carSelector();
  }
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
    <div class="container my-24 px-6 mx-auto">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima officia consequatur adipisci tenetur repudiandae rerum
                  quos.
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <div
                  class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style="padding-top: 56.25%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
  </div>
</section>

<section
  class=" grid grid-cols-3 grid-flow-row items-center bg-[#EDF1D6] absolute container h-screen min-w-full right-0 left-0 pt-20"
>

  <div
    class=" col-span-2  w-[50%] ml-48 right-10 left-10 max-w-md space-y-8 p-4 border-slate-500 border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      bind:value={selectedOption}
      on:change={handleSelection}
    >
      <option value="">Car brand</option>
      {#each arr as item}
        <option value={item}>{item}</option>
      {/each}
    </select>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      bind:value={selectedOptionCar}
      on:change={handleSelection}
    >
      <option value="">Car model</option>
      {#each cars as item}
        <option value={item["model"]}>{item["model"]}</option>
      {/each}
    </select>

    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      bind:value={selectedOptionYear}
      on:change={handleSelection}
    >
      <option value="">Year built</option>
      {#each years as item}
        <option value={item}>{item}</option>
      {/each}
    </select>

    <label
      for="message"
      class="block text-sm font-medium text-gray-900 dark:text-white"
      >Tell us more about your car!</label
    >
    <textarea bind:value={text}
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Explain in detail..."
    />
    <button
      type="submit"
      class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <!-- Heroicon name: mini/lock-closed -->
      </span>
      Submit
    </button>
  </div>
  <div
    class=" mr-20 space-y-8 p-6 border-slate-500 border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
 <p> Results of AI anylysis</p>
  <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-black  rounded-full w-48 mb-4"></div>
    <div class="h-2 bg-black  rounded-full max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-black  rounded-full  mb-2.5"></div>
    <div class="h-2 bg-black  rounded-full  max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-black  rounded-full  max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-black rounded-full  max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
  
  </div>
</section>

<!-- Container for demo purpose -->
<style>
  body {
background-color: #EDF1D6;
  }
</style>
