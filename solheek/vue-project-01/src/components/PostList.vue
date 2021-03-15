<template>
    <div>
        <table border="1"
            width="100%"
            height="200"
            cellspacing="5">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.userId">
                    <td>{{ item.userId }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.body }}</td>       
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'PostList',
    data() {
        return {
            items : []
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.items = response.data)
        .catch(error => console.log(error));
    }
}

</script>

<style>
</style>