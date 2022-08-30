<!--
 Copyright 2022 Bikathi Martin
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<template>
  <nav class="shadow-lg h-12 p-2 flex justify-between items-center">
    <div class="pl-5">
      <div class="daisyui-btn-group">
        <button class="daisyui-btn daisyui-btn-sm lowercase no-animation" @click="changeAppTheme">
          <div class="daisyui-tooltip daisyui-tooltip-bottom" data-tip="theme">
            <font-awesome-icon icon="fa-sun" class="text-yellow-500" /> /
            <font-awesome-icon icon="fa-moon" />
          </div>
        </button>
        <button class="daisyui-btn daisyui-btn-sm lowercase no-animation">
          <div class="daisyui-tooltip daisyui-tooltip-bottom" data-tip="settings">
            <font-awesome-icon icon="fa-gear" />
          </div>
        </button>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <h1 class="text-3xl">Your Title Here</h1>
      <div class="daisyui-tooltip daisyui-tooltip-bottom" data-tip="change title">
        <font-awesome-icon icon="fa-pencil" class="text-sm" />
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <img src="../assets/dog-png.png" alt="dog-logo" class="w-10">
      <h2 class="text-xl">Vue Teir App</h2>
    </div>
  </nav>
</template>

<script>
export default {
  "name": "NavbarComp",
  data() {
    return {

    }
  },
  "methods": {
    "changeAppTheme": function() {
      const targetElement = document.getElementById("theme-switcher");
      const attributeValue = targetElement.getAttribute("data-theme");

      if(attributeValue === "dark") {
        targetElement.setAttribute("data-theme", "garden");
      } else if(attributeValue === "garden") {
        targetElement.setAttribute("data-theme", "dark");
      }
    }
  }
}
</script>