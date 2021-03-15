<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id" >
          <td>{{post.id}}</td>
          <td class="post-title">{{post.title}}</td>
          <td>{{post.userId}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      const response = await Axios.get(apiUrl);
      
      if (response?.data) {
        const { data } = response;

        this.posts = data;
      }
    },
  }
}
</script>

<style scoped>
  table {
    margin: 0 auto;
    border: 1px solid lightgray;
    border-collapse: collapse;
  }

  tr:hover {
    background: lightgray;
  }

  td {
    padding: 5px 5px;
  }

  .post-title {
    text-align: left;
  }
</style>