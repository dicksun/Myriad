<template>
  <div>
    <b-navbar class="nav-div" toggleable="lg" type="dark" top>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap&subset=latin-ext");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.nav-div {
  background-color: black;
}
#brand {
  text-decoration: none;
  color: #fed136;
  font-family: "Kaushan Script", cursive;
  margin-left: 185px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.b-navbar-brand:hover {
  text-decoration: none;
  font-family: "Kaushan Script", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.menu {
  margin-right: 195px !important;
  font-size: 100%;
  font-weight: 400;
  text-decoration: none;
  background: none;
}
.menu-text {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  color: white !important;
  font-family: "Montserrat", sans-serif !important;
}
.menu-item {
  padding-left: 25px;
}
</style>

<script>
</script>