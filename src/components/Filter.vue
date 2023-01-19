<template>
  <div>
    <header id="header">
      <div class="header-content">
        
        <!-- <div class="text-white">search box here</div> -->
        <div class="filter-column-wrapper ">
          <h3 class="text1">Browse property types</h3>
          <div class="filter-columns ">
            <div
              class="filter-item"
              v-for="filterItem in filterItems"
              :key="filterItem.name"
            >
              <div class="filter-item-icon">
                <img :src="filterItem.imgSrc" alt="Apartment" />
              </div>
              <div class="filter-item-label text">
                {{ filterItem.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "propertyFilter",
  components: {},
  data: () => ({
    filterItems: [
      {
        imgSrc: require("@/assets/icons/building.png"),
        name: "House",
      },
      {
        imgSrc: require("@/assets/icons/building-land.png"),
        name: "Land",
      },
      {
        imgSrc: require("@/assets/icons/apartment.png"),
        name: "Apartment",
      },
      {
        imgSrc: require("@/assets/icons/house.png"),
        name: "Housing",
      },
    ],
  }),
 
};
</script>

<style lang="scss" scoped>

  .header-content {
    text-align: center;
    height: 100%;
    padding: 5% 10%;

    h4 {
      text-transform: uppercase;
      font-weight: 400;
    }

    h1 {
      text-transform: capitalize;
      font-weight: 400;

      .primary {
        color: #faa018;
      }
    }

    .filter-columns {
      display: flex;
      margin-top: 10px;
      // grid-template-columns:repeat(4,1fr);
      justify-content: space-between;
      margin: 0 auto;
      flex-wrap: wrap;

      @media (min-width: 768px) {
        width: 70%;
      }
    }

    .filter-item-icon {
      padding: 2rem;
      background-color: #1d2636;
      transition: all ease-in 0.1s;

      &:hover {
        background-color: #faa018;
        cursor: pointer;
      }
    }

    .filter-item-label {
        padding-top: 5px;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .text{
    color: black;
  }
  .text1{
    color:#faa018 ;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }
  }

</style>
