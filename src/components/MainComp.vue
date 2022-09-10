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
  <div class="flex flex-col h-full">
    <div class="flex flex-col items-center w-full h-full">
      <h1 class="text-xl">Add new tier items</h1>
      <div class="relative">
        <input type="text" class="w-[28rem] h-9 rounded outline-none p-2 text-black/75" maxlength="40"
        v-model="itemName" placeholder="item name e.g Mango" @keypress.enter="addNewTierItem"/>
        <button class=" daisyui-btn daisyui-btn-sm absolute w-fit right-0.5 top-0.5 rounded no-animation space-x-1"
        @click="addNewTierItem">
          <span>Add</span>
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
      <div class="flex flex-col h-full w-full mt-4">
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier A</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, 'A')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in tierAItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier B</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, 'B')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in tierBItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier C</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, 'C')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in tierCItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier D</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, 'D')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in tierDItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier E</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, 'E')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in tierEItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
        <div class="shadow shadow-primary h-fit flex">
          <div class="h-20 flex justify-start items-center w-[20%] pl-2">
            <h1 class="text-3xl">Tier Items</h1>
          </div>
          <div class="min-h-20 border-l-2 border-l-primary flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2" 
          @dragover.prevent @dragenter.prevent
          @drop="itemDropped($event, '')">
            <p class="bg-primary/75 p-2 rounded text-xl m-2" v-for="item in untieredItems" :key="item.index" 
            draggable="true" @dragstart="startingDrag($event, item)">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class TierItem {
  constructor(name, tier) {
    this.name = name;
    this.tier = tier;
  }
}

export default {
  "name": "MainComp",
  "emits": ["changeTheme"],
  data() {
    return {
      "tierItems": [],
      "itemName": ""
    }
  },
  "methods": {
    "addNewTierItem": function() {
      this.tierItems.push(new TierItem(this.itemName, ""));
      this.itemName = "";
    },
    "startingDrag": function(event, item) {
      console.log(`item being dragged: ${ JSON.stringify(item) }`);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemIndex", this.tierItems.indexOf(item));
    },
    "itemDropped": function(event, tier) {
      console.log("Item has been dropped... ");
      const itemIndex = event.dataTransfer.getData("itemIndex");
      event.dataTransfer.clearData();
      this.tierItems[itemIndex].tier = tier;
      console.log(`New item state: ${ JSON.stringify(this.tierItems[itemIndex]) }`);
    }
  },
  "computed": {
    untieredItems() {
      return this.tierItems.filter((item) => item.tier === "");
    },
    tierAItems() {
      return this.tierItems.filter((item) => item.tier === "A");
    },
    tierBItems() {
      return this.tierItems.filter((item) => item.tier === "B");
    },
    tierCItems() {
      return this.tierItems.filter((item) => item.tier === "C");
    },
    tierDItems() {
      return this.tierItems.filter((item) => item.tier === "D");
    },
    tierEItems() {
      return this.tierItems.filter((item) => item.tier === "E");
    }
  }
}
</script>