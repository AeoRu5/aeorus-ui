<template>
  <div>
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot />
    </el-button>
  </div>
</template>

<script>
import ElButton from 'element-ui/packages/button'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'aeorus-button',
  components: {
    ElButton,
  },
}
</script>

<style>
</style>