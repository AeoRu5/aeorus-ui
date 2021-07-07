<template>
  <div>
    <aeorus-steps :count="count" :active="active" />
    <aeorus-button type="primary" @click="active < count ? active++ : () => {}"
      >点击</aeorus-button
    >
  </div>
</template>

<script>
import Vue from 'vue'
import Steps from './packages/Steps'
import Button from './packages/Button'
Vue.use(Steps).use(Button)

export default {
  data() {
    return {
      count: 10,
      active: 0,
    }
  },
}
</script>

<style>
</style>