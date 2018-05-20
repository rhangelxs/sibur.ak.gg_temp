<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Сибур</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!--<b-navbar-nav>-->
          <!--<b-nav-item href="#">Link</b-nav-item>-->
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        <!--</b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Profile" right>
            <!-- Using button-content slot -->
            <!--<template slot="button-content">-->
              <!--<em>User</em>-->
            <!--</template>-->
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <div class="row flex-xl-nowrap2">
        <div class="main-sidebar col-md-3 col-xl-2 col-12">
          <!--<div class="sidebar-header">-->
            <!--<h3>Collapsible Sidebar</h3>-->
          <!--</div>-->
          <!--<b-nav pills>-->
          <!--<b-nav-item>Active</b-nav-item>-->
          <!--<b-nav-item>Link</b-nav-item>-->
          <!--<b-nav-item-dropdown text="Dropdown" right style="background-color:white">-->
            <!--<b-dropdown-item active>one</b-dropdown-item>-->
            <!--<b-dropdown-item active>two</b-dropdown-item>-->
            <!--<b-dropdown-divider></b-dropdown-divider>-->
            <!--<b-dropdown-item active>three</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->
          <!--</b-nav>-->
        </div>
        <div class="pb-md-3 pl-md-5 bd-content col-md-9 col-xl-8 col-12">
          <tablebasic></tablebasic>
          <!--<h1>{{ msg }}</h1>-->
          <!--<h2>Essential Links</h2>-->
          <!--<ul>-->
            <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
            <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
            <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
            <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
            <!--<br>-->
            <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
          <!--</ul>-->
          <!--<h2>Ecosystem</h2>-->
          <!--<ul>-->
            <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
            <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
            <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
            <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
          <!--</ul>-->
        </div>
        <div class="d-none d-xl-block bd-toc pt-4 col-xl-2"><b-progress :value=75 class="mb-3"></b-progress></div>
      </div>
    </b-container>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">AK.GucciGang, 2018</span>
      </div>
    </footer>
  </div>
</template>

<script>
import TableBasic from '@/components/TableBasic.vue'

export default {
  components: {
    'tablebasic': TableBasic
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/
/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/
/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/
/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
