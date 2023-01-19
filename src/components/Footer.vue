<template>
  <section class="footerContact">
    <div class="container">
      <div class="send flex">
        <div class="text">
          <h1>Do You Have Questions ?</h1>
          <p>We'll help you to grow your career and growth.</p>
        </div>
        <button class="btn5">Contact Us Today</button>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="box">
        <div class="logo">
          <h2>Do You Need Help With Anything?</h2>
          <p>
            Receive updates, hot deals, tutorials, discounts sent straignt in
            your inbox every month
          </p>

          <div class="input ">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div v-for="val in footer" :key="val.title">
        <div className="box">
          <h3>{{ val.title }}</h3>
          <ul>
            <div v-for="items in val.text" :key="items.list">
              <li>{{ items.list }}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </footer>
 
</template>

<script>
export default {
  name: "MainFooter",
  components: {},
  data: () => ({
    footer: [
      {
        title: "LAYOUTS",
        text: [
          { list: "Home Page" },
          { list: "About Page" },
          { list: "Service Page" },
          { list: "Property Page" },
          { list: "Contact Page" },
          { list: "Single Blog" },
        ],
      },
      {
        title: "ALL SECTIONS",
        text: [
          { list: "Headers" },
          { list: "Features" },
          { list: "Attractive" },
          { list: "Testimonials" },
          { list: "Videos" },
          { list: "Footers" },
        ],
      },
      {
        title: "COMPANY",
        text: [
          { list: "About" },
          { list: "Blog" },
          { list: "Pricing" },
          { list: "Affiliate" },
          { list: "Login" },
          { list: "Changelog" },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.footerContact {
  background-color: #27ae60;
  padding: 40px 0;
  color: #fff;
}
.footerContact h1 {
  font-size: 40px;
}
footer {
  background-color: #1d2636;
  padding: 50px 0;
  color: #fff;
}
footer .container {
  display: grid;
  grid-template-columns: 6fr 2fr 2fr 1fr;
  grid-gap: 20px;
}
footer img {
  width: 150px;
}
footer h2 {
  font-weight: 500;
}
footer p {
  color: grey;
  margin: 20px 0;
}
footer input {
  background-color: #fff;
  padding: 17px;
  width: 100%;
  border-radius: 5px;
}
footer h3 {
  font-weight: 500;
  margin-bottom: 30px;
}
footer ul {
  display: block;
}
footer ul li {
  display: block;
  color: grey;
  margin-bottom: 20px;
}
.legal {
  text-align: center;
  padding: 20px;
  background: #1d2636;
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
@media screen and (max-width: 800px) {
  footer .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
