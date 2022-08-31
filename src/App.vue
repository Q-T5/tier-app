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
  <div class="relative h-screen max-h-screen flex flex-col">
    <navbar-comp @showSettings="hideSettings = !hideSettings" />
    <div class="w-full flex justify-center">
      <settings-comp class="absolute shadow-md shadow-primary-focus/50 rounded-md top-2 w-[30rem] h-[24rem] backdrop-blur-md"
      :class="hideSettings ? 'hidden': 'flex'"/>
    </div>
    <main-comp />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
import SettingsComp from './components/SettingsComp.vue'
import MainComp from './components/MainComp.vue'
export default {
  "components": {
    NavbarComp, SettingsComp, MainComp
  },
  data() {
    return {
      "hideSettings": true
    }
  }
}
</script>