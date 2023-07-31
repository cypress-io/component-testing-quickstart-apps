<template>
  <div>
    <button data-cy="decrement" @click="decrement">-</button>
    <span data-cy="counter">{{ count }}</span>
    <button data-cy="increment" @click="increment">+</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps(['count'])

  const emit = defineEmits(['change'])

  const count = ref(props.count || 0)

  const increment = () => {
    count.value++
    emit('change', count.value)
  }

  const decrement = () => {
    count.value--
    emit('change', count.value)
  }
</script>