<script lang="ts">
  import { getStore, setStore } from '../index';
  export let value;
  const storeKey = {};
  setStore(storeKey, value);
  const storeValue = getStore(storeKey);
</script>

<div data-testid="store-value">{$storeValue}</div>