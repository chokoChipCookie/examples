<template>
    <div>
        <table id="post-list">
            <tr v-for="post in posts" :key="post.id">
                <td> {{ post.id }}</td>
                <td> {{ post.userId }}</td>
                <td> {{ post.title }}</td>
                <td> {{ post.body }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "PostList",
        data(){
            return{
                posts:[]
            }
        },
        mounted(){
            this.getApi();
        },
        methods: {
            getApi(){
                const url = 'https://jsonplaceholder.typicode.com/posts';
                axios.get(url)
                .then((res) =>{
                    // console.log(res);
                    this.posts = res.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>
