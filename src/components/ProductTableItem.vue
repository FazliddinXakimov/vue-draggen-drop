<template>
  <div type="button" class="btn btn-info btn-sm my-1 d-flex">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.btn {
  overflow: hidden;
}
</style>
