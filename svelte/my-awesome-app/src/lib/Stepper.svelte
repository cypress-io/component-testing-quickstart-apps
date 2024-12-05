<script>
  let { 
    count = $bindable(0), 
    onChange = () => undefined 
  } = $props()

  const decrement = () => {
    count--
    onChange(count)
  }

  const increment = () => {
    count++
    onChange(count)
  }
</script>

<button data-cy="decrement" onclick="{decrement}">-</button>
<span data-cy="counter">{count}</span>
<button data-cy="increment" onclick="{increment}">+</button>