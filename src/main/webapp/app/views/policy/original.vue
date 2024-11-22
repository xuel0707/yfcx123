<template>
  <div class="policy-original">
    <h2>政策原文</h2>
    <div class="policy-filters">
      <!-- 政策筛选条件 -->
      <div class="filter-group">
        <label>政策级别</label>
        <select v-model="filters.level">
          <option value="">全部</option>
          <option value="national">国家级</option>
          <option value="provincial">省级</option>
          <option value="city">市级</option>
        </select>
      </div>
      <div class="filter-group">
        <label>发布时间</label>
        <date-picker v-model="filters.date" type="daterange" />
      </div>
    </div>
    <div class="policy-list">
      <!-- 政策列表 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PolicyOriginal',
  setup() {
    const filters = ref({
      level: '',
      date: null
    });

    return {
      filters
    };
  }
});
</script> 