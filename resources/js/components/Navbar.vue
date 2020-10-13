<template>
    <nav>
        <!-- Top navbar -->
        <v-app-bar flat app>
            <v-app-bar-nav-icon 
                class="grey--text"
                @click="drawer = !drawer">

            </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Working</span>
                <span class="font-weight-black grey--text">Title</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text color="grey darken-1"
                @click="changeThemeMode">
                <span>Dark mode</span>
                <v-icon rigth>far fa-lightbulb</v-icon>
            </v-btn>

            <v-btn text color="grey darken-1">
                <span>Logout</span>
                <v-icon rigth>fas fa-sign-out-alt</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Sidebar -->
        <v-navigation-drawer 
            class="indigo"
            v-model="drawer"
            dark
            app>
            
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    dark
                    router :to="item.route">

                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>

        </v-navigation-drawer>


    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Dashboard', icon: 'fas fa-chart-line fa-lg', route: '/' },
                { title: 'Users', icon: 'fas fa-user fa-2x', route: '/users' },
                // { title: 'Stock', icon: 'fas fa-dolly fa-10x', route: '/stock' },
            ],
        }
    },

    methods: {
        changeThemeMode() {
            
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            // <!-- this.$vuetify.theme.dark -->

        }
    }
    
}
</script>
