<template>
    <div class="nav-div">
      <b-navbar class="navbar" :class="{ 'navbar--hidden': !showNavbar }" toggleable="lg" type="dark" top>
        <b-navbar-brand href="#">
          <b-nav-text id="brand">Myriad Techno Solutions</b-nav-text>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto menu">
            <b-nav-item class="menu-item" href="#">
              <b-nav-text class="menu-text">SERVICES</b-nav-text>
            </b-nav-item>
            <b-nav-item class="menu-item" href="#">
              <b-nav-text class="menu-text">PRODUCTS</b-nav-text>
            </b-nav-item>
            <b-nav-item class="menu-item" href="#">
              <b-nav-text class="menu-text">ABOUT</b-nav-text>
            </b-nav-item>
            <b-nav-item class="menu-item" href="#">
              <b-nav-text class="menu-text">TEAM</b-nav-text>
            </b-nav-item>
            <b-nav-item class="menu-item" href="#">
              <b-nav-text class="menu-text">CONTACT</b-nav-text>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    
    </div>
</template>

<script>
const OFFSET = 30;
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < 30;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap&subset=latin-ext");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.nav-div{
//   padding-top:20px;
  width: 100%;
  height:49vw;
  background:url('~@/assets/img/header-bg.jpg');
  background-size:cover;
  background-position: 0 -120px; 
  margin-bottom:7%;
}
.navbar {
  width:100%;
  background-color:transparent;
  position: fixed;
//   box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
 background-color:  black;
 box-shadow: none;
 transform: translate3d(0, -100%, 80%);
 
}
#brand {
  text-decoration: none;
  color: #fed136;
  font-family: "Kaushan Script", cursive;
  font-size: 1.5em;
  font-weight: 400;
  margin-left: 185px;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
.b-navbar-brand:hover {
  text-decoration: none;
  font-family: "Kaushan Script", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.menu {
  margin-right: 195px !important;
  font-size: 1.11em;
  font-weight: 400;
  text-decoration: none;
  background: none;
}
.menu-text {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  color: white !important;
  font-family: "Montserrat", sans-serif !important;
}
.menu-item {
  padding-left: 20px;
}
</style>