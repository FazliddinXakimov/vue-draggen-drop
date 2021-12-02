<template>
  <div>
    <form-add @onAdd="handleAdd"></form-add>
  </div>
  <div>
    <div class="listGroup">
      <div class="column bg-dark">
        <base-header :length="products.length" name="Buyurtma" />
        <draggable
          v-model="products"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in products"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>

      <div class="column bg-dark">
        <base-header :length="preparing.length" name="Tayyorlanmoqda" />
        <draggable
          v-model="preparing"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in preparing"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>

      <div class="column">
        <base-header :length="prepared.length" name="Tayyor" />
        <draggable
          v-model="prepared"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in prepared"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>

      <div class="column bg-dark">
        <base-header :length="delivering.length" name="Yetkazilmoqda" />
        <draggable
          v-model="delivering"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in delivering"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>

      <div class="column bg-dark">
        <base-header :length="delivered.length" name="Yetkazildi" />
        <draggable
          v-model="delivered"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in delivered"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>

      <div class="column bg-dark" style="color: red">
        <fa :icon="['fas', 'trash']"></fa>
        <draggable
          v-model="trash"
          group="tasks"
          class="dragArea list-group w-full"
        >
          <product-table-item
            v-for="element in trash"
            :key="element.id"
            :name="element.name"
          ></product-table-item>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTableItem from "./ProductTableItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
import FormAdd from "./FormAdd";

export default {
  components: { draggable: VueDraggableNext, ProductTableItem, FormAdd },
  data() {
    return {
      products: [],
      preparing: [],
      prepared: [],
      delivering: [],
      delivered: [],
      trash: [],
    };
  },
  methods: {
    handleAdd(product) {
      this.products.unshift(product);
    },
  },

  watch: {
    trash() {
      this.trash = [];
    },
  },
};
</script>

<style scoped>
.listGroup {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.column {
  height: 80vh;
  border-radius: 12px;
  flex: 1;
  padding: 0.6rem 0.8rem;
  border-right: 2px solid white;
  text-align: center;
  background-color: #212529;
}
.column:target {
  background-color: #555;
}

.dragArea {
  height: 100%;
}
.trashZone {
  display: none;
}
</style>
