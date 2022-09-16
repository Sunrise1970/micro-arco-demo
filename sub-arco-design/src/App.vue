<template>
    <div class="sub-app">
      <h2>sub arco-design app</h2>
      <a-space size="large">
        <a-select :style="{width:'320px'}" placeholder="Please select ...">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
        <a-select defaultValue="Beijing" :style="{width:'320px'}" placeholder="Please select ...">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
        <a-select v-model="value" :style="{width:'320px'}" placeholder="Please select ...">
          <a-option v-for="item of data" :value="item" :label="item.label" />
        </a-select>
        <div>Select Value: {{ value }}</div>
        <a-select :style="{width:'160px'}" placeholder="Select" :trigger-props="{ autoFitPopupMinWidth: true }">
          <a-option>Beijing-Beijing-Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
        <a-date-picker />
      </a-space>
      <div style="margin-top: 100px">
        <a-space size="large">
          <a-select :style="{width:'320px'}" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
          <a-select defaultValue="Beijing" :style="{width:'320px'}" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
          <a-select v-model="value" :style="{width:'320px'}" placeholder="Please select ...">
            <a-option v-for="item of data" :value="item" :label="item.label" />
          </a-select>
          <div>Select Value: {{ value }}</div>
          <a-select :style="{width:'160px'}" placeholder="Select" :trigger-props="{ autoFitPopupMinWidth: true }">
            <a-option>Beijing-Beijing-Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
        </a-space>
      </div>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref();
    const data = [{
      value: 'beijing',
      label: 'Beijing',
      other: 'extra'
    }, {
      value: 'shanghai',
      label: 'Shanghai',
      other: 'extra'
    }, {
      value: 'guangzhou',
      label: 'Guangzhou',
      other: 'extra'
    }, {
      value: 'chengdu',
      label: 'Chengdu',
      other: 'extra'
    }]
</script>

<style scoped>
  .sub-app {
    width: 100%;
  }
</style>
