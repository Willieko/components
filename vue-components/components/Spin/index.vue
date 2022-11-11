<!--
 * @Author: GWY
 * @Date: 2022-11-08 18:49:38
 * @LastEditors: GWY
 * @LastEditTime: 2022-11-11 13:06:42
 * @Description: 
-->
<template>
  <div class="index-root">
    <div class="center">
      <Spin v-show="isLoading" />
    </div>

    <p v-if="loadingTips" class="mt5">{{ loadingTips }}</p>
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
    loadingTips: {
      type: String,
      default: '',
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
  text-align: center;
}
.center {
  display: flex;
  justify-content: center;
}
.mt5 {
  margin-top: 5px;
}
</style>