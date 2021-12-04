<template>
  <div type="button" class="btn btn-primary position-relative w-100 mb-3">
    {{ name }}
    <span
      class="
        position-absolute
        top-0
        start-100
        translate-middle
        badge
        rounded-pill
        bg-danger
      "
    >
      {{ length }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["name", "length"],
};
</script>

<style scoped>
div {
  position: fixed;
}
</style>
