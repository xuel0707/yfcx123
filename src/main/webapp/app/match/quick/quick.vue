<template>
  <div class="policy-match-quick">
    <h2>无感极速匹配</h2>
    <div class="match-form">
      <div class="form-group">
        <label>企业名称</label>
        <input type="text" v-model="matchForm.companyName" />
      </div>
      <div class="form-group">
        <label>所属行业</label>
        <select v-model="matchForm.industry">
          <option value="">请选择</option>
          <!-- 行业选项 -->
        </select>
      </div>
      <button @click="handleMatch">开始匹配</button>
    </div>
    <div class="match-results">
      <!-- 匹配结果 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MatchForm {
  companyName: string;
  industry: string;
}

export default defineComponent({
  name: 'PolicyMatchQuick',
  setup() {
    const matchForm = ref<MatchForm>({
      companyName: '',
      industry: ''
    });

    const handleMatch = () => {
      // 实现匹配逻辑
    };

    return {
      matchForm,
      handleMatch
    };
  }
});
</script> 