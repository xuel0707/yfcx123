<template>
  <div id="footer" class="footer">
    <p></p>
    <p v-text="t$('footer')"></p>
    <p>
      全国营销与客服热线：0755-27960108
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      技术支持：深圳远方创新数据咨询有限公司问题反馈或意见
    </p>
  </div>
</template>

<script lang="ts" src="./jhi-footer.component.ts"></script>

<style scoped>
.footer {
  background-color: #353d47;
  border-top: 2px solid #efeb09;
  height:60px;
  text-align: center; /* 使内容居中 */
  position: absolute; /* 绝对定位或固定定位，根据需要选择 */
  color: white;       /* 设置字体颜色为白色 */
  bottom: 0;          /* 底部对齐 */
  width: 100%;        /* 宽度为100% */
}

.footer p {
  color: white;       /* 确保段落文本也是白色 */
  line-height: 0.5em;   /* 设置行距为1em */
  font-size:10px;
}

</style>
