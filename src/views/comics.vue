<template>
  <section class="posts">
    <header class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }} {{ selections.length === 1 ? 'item' : 'items' }} selected</h1>
      <h1 class="title" v-else>{{ posts.length }} {{ posts.length === 1 ? 'item' : 'items' }}</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark"></a></li>
          <li><a href="#" class="icon-before icon-blocked"></a></li>
          <li><a href="#" class="icon-before icon-bin"></a></li>
          <li><a href="#" class="icon-before icon-copy"></a></li>
        </ul>
      </transition>
      <label class="search icon-before icon-search">
        <input type="text" placeholder="Search">
      </label>
      <router-link :to="{ name: 'new', params: { type: $route.params.type } }"><el-button type="primary" size="small" icon="el-icon-edit">Add item</el-button></router-link>
    </header>
    <el-table :data="posts" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="Title" show-overflow-tooltip></el-table-column>
      <el-table-column label="Status" width="100">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="Categories" width="200">
        <template slot-scope="scope">
          <a v-for="item in scope.row.categories" :key="item.slug" href="#">{{ item.name }}, </a>
        </template>
      </el-table-column>
      <el-table-column label="Tags" width="240">
        <template slot-scope="scope">
          <a v-for="item in scope.row.tags" :key="item.slug" href="#">{{ item.name }}, </a>
        </template>
      </el-table-column>
      <el-table-column label="Author" width="100">
        <template slot-scope="scope">
          <a href="#">{{ scope.row.author.name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Comments" width="120" align="center">
        <template slot-scope="scope">
          <i class="icon-before icon-bubble"></i>
          <span>{{ scope.row.comment }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Date" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper"
      :current-page="4"
      :page-size="50"
      :total="400">
    </el-pagination>
  </section>
</template>

<script>
export default {
  name: 'comics',
  data () {
    return {
      currentPage: 1,
      posts: [],
      selections: []
    }
  },
  created () {
    this.$title = 'All Comics'
    this.initData()
  },
  methods: {
    initData () {
      const params = { }
      params.page = this.currentPage
      this.$services.comic.allComic({ params })
        .then(res => {
          console.log(res.data)
          return this.$services.post.getComments(res.data[0].id)
        })
        .then(comments => {
          console.log(comments)
        })

      this.posts = []
      for (let i = 0; i < this.size; i++) {
        this.posts.push({
          title: `Hello world ${i}`,
          status: 'pub',
          categories: [
            { name: 'None', slug: 'uncategoried' },
            { name: 'Test', slug: 'test-category' }
          ],
          tags: [
            { name: 'demo', slug: 'demo' },
            { name: 'tag', slug: 'test-tag' },
            { name: 'tag2', slug: 'test-tag2' },
            { name: 'tag3', slug: 'test-tag3' }
          ],
          author: { name: 'Wang Lei', slug: 'zce' },
          comment: 10,
          date: new Date().toLocaleDateString()
        })
      }
    },
    handleSelectionChange (value) {
      this.selections = value
    },
    handleCurrentChange (value) {
      this.currentPage = value
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
.el-pagination {
  margin: 1rem 0 2rem;
  text-align: right;
}
</style>
