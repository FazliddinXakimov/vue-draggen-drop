<template>
  <form @submit.prevent="submitForm">
    <div class="d-flex justify-content-between p-3 bg-dark">
      <div class="w-100 mx-3">
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          aria-label="First name"
          v-model="product.name"
        />
      </div>
      <div class="w-100 mx-3">
        <input
          type="text"
          class="form-control"
          placeholder="Description"
          aria-label="Last name"
          v-model="product.description"
        />
      </div>
      <div class="w-100 mx-3">
        <button type="submit" class="btn btn-success form-control">
          Buyurtma Berish
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.product.name !== "" && this.product.description !== "")
        this.$emit("onAdd", {
          ...this.product,
          id: new Date().toISOString,
        });
    },
  },
};
</script>
