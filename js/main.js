
import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';
import landingpage from './components/landingpage.js';

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      // { path: '/', redirect: { name: "login" } },
      { path: '/', name:"landingpage", component:landingpage},
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/userhome', name: 'home', component: UserHomeComponent, props: true }
    ]
  });

  const vm = new Vue({
    data: {
      authenticated: false,
      administrator: false,
      user: [],

      //currentUser: {},
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;

        if (localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        if (localStorage.getItem("cachedVideo")) {
          localStorage.removeItem("cachedVideo")
        }
      }
    },

    router: router
  }).$mount("#app");

  // router.beforeEach((to, from, next) => {
  //   //console.log('router guard fired!', to, from, vm.authenticated);

  //   if (vm.authenticated == false) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });
  
})();