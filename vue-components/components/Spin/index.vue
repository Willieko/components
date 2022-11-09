<!--
 * @Author: GWY
 * @Date: 2022-11-08 18:49:38
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-09 10:13:27
 * @Description: 
-->
<template>
  <div class="index-root">
    <Spin v-show="isLoading" />
    <p>正在加载中，请稍后....</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'spin',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style scoped lang="less">
.index-root {
}
</style>