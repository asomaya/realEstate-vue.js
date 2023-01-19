<template>
  <div class=" background">
    <section className='container custom-padding' id="property-list"
   >
        <h2 class="section-header"><span>Our Featured </span>  Agents</h2>
  <h5 class="section-subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'</h5>


<div className='team container mtop grid3'>
    <div className='box'  v-for="val in vals" :key="val.index">
        <button className='btn3'>{{val.list}} Listings</button>
        <div className='details'>
          <div className='img'>
            <img  :src="val.cover" alt='' />
            
          </div>
          <i class="fa-solid fa-location-dot"></i>    
            <label>{{val.address}}</label>
          <h4>{{val.name}}</h4>

         
          <div className='button flex'>
            <button>
              <i className='fa fa-envelope'></i>
              Message
            </button>
            <button className='btn4'>
              <i className='fa fa-phone-alt'></i>
            </button>
          </div>
        </div>
      </div>
    
  </div>

</section>
  </div>
</template>

<script>
export default {
  name: " FeaturedCard",
  components: {},

  data: () => ({
    vals:   [
  {
    list: "50",
    cover: require("@/assets/agent1.png"),
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
  },
  {
    list: "70",
    cover: require("@/assets/agent2.png"),
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
  },
  {
    list: "80",
    cover: require("@/assets/agent3.png"),
    address: "Denever, USA",
    name: "Anna K. Young",
  },
  {
    list: "51",
    cover: require("@/assets/agent4.png"),
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
  },
] 
  }),
};
</script>

<style lang="scss" scoped>
    .team .box {
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid rgb(62 28 131 / 10%);
        padding: 2rem;
        transition: 0.5s;
      }
      .team .box:hover {
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
        cursor: pointer;
      }
      .team .details {
        text-align: center;
        margin-top: 30px;
      }
      .team .img {
        width: 90px;
        height: 90px;
        margin: auto;
        position: relative;
      }
      .team img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .team .img i {
        color: #108be7;
        font-size: 17px;
        position: absolute;
        top: 35px;
        right: -10px;
      }
      .team .img::after {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 110px;
        height: 110px;
        border: 5px solid #edf0f5;
        border-radius: 50%;
      }
      .team label {
        display: inline-block;
        margin-top: 20px;
      }
      .team i {
        color: grey;
        margin-right: 5px;
      }
      .team ul {
        display: inline-block;
        margin-top: 10px;
      }
      .team ul li {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        align-items: center;
        background-color: #f4f5f7;
        border-radius: 50%;
        margin: 5px;
      }
      .team .button {
        margin-top: 20px;
      }
      .team .button i {
        color: white;
        font-size: 20px;
      }



      #property-list {
        margin-bottom: 30px;
        text-align: center;
          .section-header {
              font-weight: 500;
              margin: 0;
      
              span {
                  color: #ff9800;
              }
          }
      
          .section-subheader {
              margin: 0;
          }
      
         
      }
</style>


 
