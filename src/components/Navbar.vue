<template>
  <header>
    <div class="container flex">
      <div class="logo">
        <p><i class="fa fa-home" aria-hidden="true"></i> your logo</p>
      </div>
      <div class="nav">
        <ul :class="navList ? 'small' : 'flex'">
          <i v-for="nav in navs" :key="nav.text">
            <router-Link class="rr" :to="nav.path">{{ nav.text }}</router-Link>
          </i>
        </ul>
      </div>
      <div class="button flex">
        <h4><span>2</span> My List</h4>
        <button><i class="fa fa-sign"></i> Sign In</button>
      </div>

      <div class="toggle">
        <button @click="navList = !navList" class="btn1">
          <p v-if="navList"><i class="fa fa-times"></i></p>
          <p v-else><i class="fa fa-bars"></i></p>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  components: {},

  data: () => ({
    navList: false,
    navs: [
      {
        text: "home",
        path: "/",
      },
      {
        text: "about",
        path: "/about",
      },
      {
        text: "Our CLients",
        path: "/Broker",
      },
      {
        text: "blog",
        path: "/blog",
      },
      {
        text: "Contact",
        path: "/contact",
      },
    ],
  }),
};
</script>

<style scoped>
header {
  background-color: #fff;

  box-shadow: 0 5px 30px rgb(0 22 84 / 10%);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 99999;
}
header img {
  width: 170px;
}
header a {
  margin-left: 30px;
  transition: 0.5s;
  font-weight: 500;
}
header a:hover {
  color: #27ae60;
}
header span {
  width: auto;
  padding: 0px 6px;
  background: #27ae60;
  border-radius: 50px;
  color: #ffffff;
  margin-right: 4px;
  font-weight: 400;
}
header h4 {
  font-weight: 500;
  margin-right: 20px;
}
header .toggle {
  display: none;
}
@media screen and (max-width: 990px) {
  header {
    padding: 0;
  }
  header img {
    margin-top: 30px;
  }
  header .button {
    display: none;
  }
  header .nav .flex {
    display: none;
  }
  header .toggle {
    display: block;
    margin-top: 20px;
  }
  header .small {
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    background-color: #27ae60;
    padding: 20px;
   
  }
  .rr  {
   
   
    color: #fff;
  }
  @media screen and (max-width: 500px) {
 .rr  {
    display: block;
    margin-bottom: 20px;
    color: #fff;
  }}
}
</style>
