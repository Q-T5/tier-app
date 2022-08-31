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
  <div class="h-full">
    <div class="space-y-1">
      <div class="flex shadow-sm shadow-primary">
        <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
          <h1 contenteditable="true" class="outline-none"
          @click="titleClicked(0)">{{ defaultTierTitles[0] }}</h1>
        </div>
        <div class="w-[80%] h-20"></div>
      </div>
      <div class="flex shadow-sm shadow-primary">
        <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
          <h1 contenteditable="true" class="outline-none"
          @click="titleClicked(1)">{{ defaultTierTitles[1] }}</h1>
        </div>
        <div class="w-[80%] h-20"></div>
      </div>
      <div class="flex shadow-sm shadow-primary">
        <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
          <h1 contenteditable="true" class="outline-none"
          @click="titleClicked(2)">{{ defaultTierTitles[2] }}</h1>
        </div>
        <div class="w-[80%] h-20"></div>
      </div>
      <div class="flex shadow-sm shadow-primary">
        <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
          <h1 contenteditable="true" class="outline-none"
          @click="titleClicked(3)">{{ defaultTierTitles[3] }}</h1>
        </div>
        <div class="w-[80%] h-20"></div>
      </div>
      <div class="flex shadow-sm shadow-primary">
        <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
          <h1 contenteditable="true" class="outline-none"
          @click="titleClicked(4)">{{ defaultTierTitles[4] }}</h1>
        </div>
        <div class="w-[80%] h-20"></div>
      </div>
    </div>
    <div class="flex w-full bg-red-300 mt-5  h-fitTier A rounded">
      <div class="w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2">
        Items
      </div>
      <div class="w-[80%] h-20" v-for="item in itemsToTier" :key="item.index">
        <p class="bg-primary/75 h-fit text-2xl p-2 rounded-md m-1">{{ item.name }}</p>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="flex flex-col space-y-2 w-[28rem] relative items-center">
        <h1 class="text-2xl">Manage Items</h1>
        <input type="text" 
        class="w-full text-black/75 h-10 rounded-full outline-none p-4 border-2 border-primary focus:border-4 focus:border-primary"
        placeholder="enter item name" v-model="itemName" />
        <button class="daisyui-btn rounded-full w-fit no-animation" @click="createNewItem">
          <span>Add Item</span>
          <font-awesome-icon icon="fa-solid fa-plus" class="ml-1" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
let currentTierTitle = "";
class Item {
  constructor(tier, name) {
    this.tier = tier;
    this.name = name;
  }
}
export default {
  "name": "MainComp",
  data() {
    return {
      "defaultTierTitles": ["Tier A", "Tier B", "Tier C", "Tier D", "Tier E"],
      "itemsToTier": [],
      "itemName": null
    }
  },
  "methods": {
    "titleClicked": function(index) {
      currentTierTitle = this.defaultTierTitles[index];
    },
    "changeTierTitle": function(event, index) {
      const usersTierTitle = event.target.innerText;
      this.defaultTierTitles[index] = usersTierTitle;
    },
    "createNewItem": function() {
      this.itemsToTier.push(new Item("", this.itemName));
      console.log(this.itemsToTier);
      this.itemName = null;
    }
  },
  "computed": {
    tierAItems() {
      return this.itemsToTier.filter((item) => { item.tier = "A" });
    },
    tierBItems() {
      return this.itemsToTier.filter((item) => { item.tier = "B" });
    },
    tierCItems() {
      return this.itemsToTier.filter((item) => { item.tier = "C" });
    },
    tierDItems() {
      return this.itemsToTier.filter((item) => { item.tier = "D" });
    },
    tierEItems() {
      return this.itemsToTier.filter((item) => { item.tier = "E" });
    }
  }
}
</script>