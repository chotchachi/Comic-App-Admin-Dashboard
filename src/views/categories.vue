<template>
  <section class="posts">
    <header class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }} {{ selections.length === 1 ? 'item' : 'items' }} selected</h1>
      <h1 class="title" v-else>{{ categories.length }} {{ categories.length === 1 ? 'item' : 'items' }}</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-bin"></a></li>
        </ul>
      </transition>
      <form class="search icon-before icon-search" @submit.prevent="handleSearch">
        <label>
          <input type="text" placeholder="Search category name" v-model="search">
        </label>
      </form>
      <router-link :to="{ name: 'new', params: { type: $route.params.type } }"><el-button type="primary" size="small" icon="el-icon-edit">Add item</el-button></router-link>
    </header>
    <el-table :data="categories" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="Thumbnail" width="200">
        <template slot-scope="scope">
          <img v-bind:src="scope.row.thumbnail" alt="" class="img" />
        </template>
      </el-table-column>
      <el-table-column label="Name" width="150">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Link" width="200">
        <template slot-scope="scope">
          <a v-bind:href="scope.row.link">{{ scope.row.link }} </a>
        </template>
      </el-table-column>
      <el-table-column label="Description" width="500">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'categories',
  data () {
    return {
      search: '',
      categories: [],
      selections: []
    }
  },
  created () {
    this.$title = 'All Categories'
    this.initData()
  },
  methods: {
    initData () {
      const params = { }
      // search
      if (this.search) params.q = this.search
      this.$services.category.get({ params })
        .then(res => {
          this.categories = res.data
        })
        .catch(err => {
          // handle error
          console.error(err)
        })
    },
    handleSelectionChange (value) {
      this.selections = value
    },
    handleSearch () {
      this.initData()
    }
  },
  watch: {
    $route () {
      this.initData()
    }
  }
}
</script>

<style scoped>
img {
  width: 150px;
  transition: width 1s;
}
</style>
