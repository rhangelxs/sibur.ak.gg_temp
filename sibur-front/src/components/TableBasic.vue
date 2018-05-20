<template>
  <div>
    <b-table striped hover :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fields" :current-page.sync="currentPage" :per-page.sync="perPage"></b-table>
    <b-pagination :total-rows="items.length" :per-page.sync="perPage" v-model="currentPage"></b-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortBy: 'age',
      sortDesc: false,
      currentPage: 1,
      perPage: 2,
      fields: [
        { key: 'last_name', sortable: true },
        { key: 'first_name', sortable: true },
        { key: 'age', sortable: true },
        { key: 'isActive', sortable: false }
      ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>
