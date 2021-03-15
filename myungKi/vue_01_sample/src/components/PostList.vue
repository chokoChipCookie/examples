<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key=post.id>
                    <td>{{ post.userId }}</td>
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default{
    name: "PostList",
    data() {
        return {
            posts: []
        }
    },
    methods: {
       async getApiUrl() {
            const apiUrl = ('https://jsonplaceholder.typicode.com/posts');
            await this.$https.get(apiUrl)
            .then((result) => {
                this.posts = result.data
            })
        }
    },
    mounted() {
        this.getApiUrl();
    }
};
</script>