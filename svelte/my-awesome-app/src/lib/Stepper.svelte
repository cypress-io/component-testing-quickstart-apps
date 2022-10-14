<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let count = 0

  const decrement = () => {
    count--
    dispatch('change', { count })
  }

  const increment = () => {
    count++
    dispatch('change', { count })
  }
</script>

<button data-cy="decrement" on:click="{decrement}">-</button>
<span data-cy="counter">{count}</span>
<button data-cy="increment" on:click="{increment}">+</button>