<template>
  <section class="users">
    <header class="heading">
      <h1 class="title">{{ total }} users</h1>
      <form class="search icon-before icon-search" @submit.prevent="handleSearch">
        <label>
          <input type="text" placeholder="Search" v-model="search">
        </label>
      </form>
      <el-button type="primary" size="small" icon="el-icon-plus">Add user</el-button>
    </header>
    <el-table :data="users" v-loading="loading" element-loading-text="Loading...">
      <el-table-column prop="username" label="ID" min-width="200">
        <template slot-scope="scope">
          <div class="user-info">
            <div class="names">
              <span>{{ scope.row.id }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="Username" min-width="200">
        <template slot-scope="scope">
          <div class="user-info">
            <div class="names">
              <span>{{ scope.row.username }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="Name" min-width="200">
        <template slot-scope="scope">
          <div class="user-info">
            <div class="names">
              <span>{{ scope.row.name }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="roles" label="Role" width="320">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.role === 1">Admin</el-tag>
          <el-tag type="success" v-if="scope.row.role === 0">Member</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: [],
      selections: [],
      total: 0,
      search: '',
      sort: '',
      order: '',
      filter: {},
      loading: false
    }
  },
  created () {
    // initial data
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      // toggle loading
      this.loading = true
      // paginate
      const params = { }
      // search
      if (this.search) params.q = this.search
      // filter
      Object.assign(params, this.filter)
      // request
      return this.$services.user.get({ params })
        .then(res => {
          // response
          this.users = res.data
          this.total = res.data.length
          // toggle loading
          this.loading = false
        })
        .catch(err => {
          // handle error
          console.error(err)
          this.loading = false
        })
    },

    handleSearch () {
      this.loadUsers()
    }
  }
}
</script>

<style lang="scss">
@import '../theme';

.el-pagination {
  margin: 1rem 0 2rem;
  text-align: right;
}

.el-tag {
  margin: 0 .0625rem;
}

.user-info {
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border: .0625rem solid #c0c0c0;
    border-radius: 50%;
    background: #cfd2d7;
  }

  .names {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: .8125rem;
    line-height: 1.4;
  }
}
</style>
