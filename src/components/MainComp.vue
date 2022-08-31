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
  <div class="flex flex-col justify-start h-full" v-for="tierTitle, index in defaultTierTitles" :key="tierTitle.index">
    <div class="flex w-full">
      <div class="bg-red-500 h-20 w-[20%] text-3xl flex flex-col justify-center pl-2">
        <h1 contenteditable="true" class="outline-none" 
        @click="titleClicked(index)"
        @input="changeTierTitle($event, index)">{{ tierTitle }}</h1>
      </div>
      <div class="bg-green-500 w-[80%]">

      </div>
    </div>
  </div>
</template>

<script>
let currentTierTitle = "";
export default {
  "name": "MainComp",
  data() {
    return {
      "defaultTierTitles": ["Tier A", "Tier B", "Tier C", "Tier D", "Tier E"]
    }
  },
  "methods": {
    "titleClicked": function(index) {
      currentTierTitle = this.defaultTierTitles[index];
    },
    "changeTierTitle": function(event, index) {
      const usersTierTitle = event.target.innerText;
      this.defaultTierTitles[index] = usersTierTitle;
    }
  }
}
</script>