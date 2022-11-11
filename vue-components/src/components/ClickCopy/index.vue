<template>
  <!--复制组件-->
  <Tooltip placement="top-start" :content="toolContent" class="copy-item">
    <a
      href="javascript:void(0)"
      :data-clipboard-text="content"
      @click="copyFN('.app-key-copy', true)"
      class="app-key-copy copy-icon"
    >
      <Icon type="ios-copy-outline" />
    </a>
  </Tooltip>
</template>

<script>
import { copyFN } from '@/utils/idaas-utils';

export default {
  name: 'click-copy',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      toolContent: VM.$t('idaas.message.click.copy',[],'点击复制')
    }
  },
  methods: {
    // 复制功能
    copyFN(dom, key) {
      copyFN(dom, key);
    },
  },
};
</script>

<style scoped>
.copy-item {
  margin-left: 5px;
}
.app-key-copy {
  color: #0070cc;
  font-size: 18px;
  vertical-align: middle;
}
.slot-content {
  text-align: center;
}
</style>
