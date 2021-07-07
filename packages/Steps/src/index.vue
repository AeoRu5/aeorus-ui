<template>
  <div
    class="aeorus-steps"
    :style="{
      '--active': activeColor,
      '--default': defaultColor,
      '--spacing': `${spacing}px`,
      '--lineSpacing': `${lineSpacing}px`,
    }"
  >
    <div
      :class="[
        'aeorus-step-wrapper',
        {
          active: index <= active,
        },
      ]"
      v-for="index in count"
      :key="index"
    >
      <div class="aeorus-step-item">
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aeorus-steps',
  props: {
    spacing: {
      type: Number,
      default: 40,
    },
    lineSpacing: {
      type: Number,
      default: 4,
    },
    count: {
      type: Number,
      default: 5,
    },
    active: {
      type: Number,
      default: 3,
    },
    activeColor: {
      type: String,
      default: '#409eff',
    },
    defaultColor: {
      type: String,
      default: '#3a3c4c',
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
:root {
  --default: #3a3c4c;
  --active: #409eff;
  --spacing: 30px;
  --lineSpacing: 8px;
}
.aeorus-step-wrapper {
  position: relative;
  padding-bottom: var(--spacing);
}
.aeorus-step-wrapper::after {
  left: 10px;
  width: 1px;
  content: '';
  position: absolute;
  transform: translateX(-50%);
  background-color: var(--default);
  top: calc(var(--lineSpacing) + 20px);
  height: calc(100% - (var(--lineSpacing) * 2 + 20px));
}
.aeorus-step-wrapper:last-child::after {
  width: 0;
  height: 0;
}
.aeorus-step-item {
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: var(--default);
  border: 1px solid var(--default);
}
.aeorus-step-wrapper.active::after {
  background-color: var(--active);
}
.aeorus-step-wrapper.active .aeorus-step-item {
  color: var(--active);
  border: 1px solid var(--active);
}
</style>