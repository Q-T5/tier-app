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
        <button class="daisyui-btn daisyui-btn-sm lowercase no-animation" @click="changeAppTheme">
          <div class="daisyui-tooltip daisyui-tooltip-bottom" data-tip="theme">
            <font-awesome-icon icon="fa-sun" class="text-yellow-500" /> /
            <font-awesome-icon icon="fa-moon" />
          </div>
        </button>
    </div>
    <div class="flex items-center space-x-2">
      <div class="daisyui-tooltip daisyui-tooltip-bottom" data-tip="click to change title">
        <h1 class="text-3xl outline-none" contenteditable="true" @input="changeTitle($event)">{{ temporaryTitleText }}</h1>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <img src="../assets/dog-png.png" alt="dog-logo" class="w-10">
      <h2 class="text-xl">Vue Tier App</h2>
    </div>
  </nav>
</template>

<script>
const titleText = "Click To Edit Title";
export default {
  "name": "NavbarComp",
  "emits": ["showSettings"],
  data() {
    return {
      "temporaryTitleText": titleText,
      "userTitleText": titleText 
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
    },
    "changeTitle": function(event) {
      const usersTitle = event.target.innerText;
      this.userTitleText = usersTitle;
    }
  }
}
</script>