<script>
  let { value = $bindable(0), cssClass } = $props();
  let inputEl;

  function formatNumber(n) {
    if (n === "" || isNaN(n)) return 0;
    const parts = n?.toString().split(".");
    parts[0] = parseInt(parts[0]).toString(); // convert part 0 to number and back to string to remove 0 from begining of the number 
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  function handleInput(e) {
    const raw = e.target.value.replace(/,/g, "");
    // Allow only digits and dot
    const sanitized = raw.replace(/[^\d.]/g, "");
    value = sanitized;

    // Format display
    //const cursor = inputEl.selectionStart;
    const formatted = formatNumber(sanitized);
    inputEl.value = formatted;
  }
</script>

<input
  class={cssClass}
  bind:this={inputEl}
  type="text"
  oninput={handleInput}
  value={formatNumber(value)}
  inputmode="decimal"
  autocomplete="off"
  onkeyup={handleInput}
/>
