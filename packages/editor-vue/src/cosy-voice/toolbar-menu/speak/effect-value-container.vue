<template>
  <div class="se-effect-value-container">
    <effect-eq v-model="eqValue" @update:model-value="updateHandler()" v-if="effect === 'eq'"></effect-eq>
    <effect-filter v-model="lpFilterValue" @update:model-value="updateHandler()"
      v-if="effect === 'lpfilter'"></effect-filter>
    <effect-filter v-model="hpFilterValue" @update:model-value="updateHandler()"
      v-if="effect === 'hpfilter'"></effect-filter>
  </div>
</template>

<script setup lang="ts">
import { Effect } from '@/cosy-voice';
import { onMounted, ref, watch } from 'vue';
import EffectEq from './effect-eq.vue';
import EffectFilter from './effect-filter.vue';

const model = defineModel<string | undefined>()
const { effect } = defineProps<{ effect?: Effect; }>()
const eqValue = ref("0 0 0 0 0 0 0 0")
const lpFilterValue = ref("6000")
const hpFilterValue = ref("12000")

function updateHandler() {
  if (effect === Effect.EQ) {
    model.value = eqValue.value
  } else if (effect === Effect.LPFILTER) {
    model.value = lpFilterValue.value
  } else if (effect === Effect.HPFILTER) {
    model.value = hpFilterValue.value
  }
}

watch(() => effect, (newValue) => {
  if (newValue === Effect.EQ) {
    model.value = eqValue.value
  } else if (newValue === Effect.LPFILTER) {
    model.value = lpFilterValue.value
  } else if (newValue === Effect.HPFILTER) {
    model.value = hpFilterValue.value
  } else {
    model.value = undefined
  }
})

onMounted(async () => {
  if (model.value) {
    if (effect === 'eq') {
      eqValue.value = model.value
    } else if (effect === 'lpfilter') {
      lpFilterValue.value = model.value
    } else if (effect === 'hpfilter') {
      hpFilterValue.value = model.value
    }
  }
})
</script>

<style scoped>
@reference "tailwindcss";

.se-effect-value-container {
  @apply box-border border border-(--el-border-color) border-solid text-center overflow-x-hidden overflow-y-auto h-50
}
</style>
