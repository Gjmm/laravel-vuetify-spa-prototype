<template>
    <div>
        <h1 class="h2 grey--text">Users</h1>

        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
  
</template>


<script>
  import usersService from '../../services/users'
  export default {
    
    data: () => ({
      users: []
    }),

    async created() {
        let response = await usersService.retrieve()
        this.users = response.data       

    }
  }
</script>
