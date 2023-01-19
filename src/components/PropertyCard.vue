<template>
  <div class="container">
    <section
			id="property-list"
			class="custom-padding"

		>
			<h2 class="section-header"><span>Latest</span> Properties</h2>
			<h5 class="section-subheader">Listing the hottest properties around you</h5>
   
    <div class="row align-items-center content grid3 mtop">
      <div  v-for="list in lists" :key="list.id">
        <div className="  col-sm">
        <div class="card" :key="list.index">
          <div>
            <img class="card-img-top" :src="list.cover" alt="jjj" />
          </div>
          <div class="card-body">
            <div className="card-text">
              <div className="category flex">
                <span :class="list.category === 'For Sale' ? 'sale' : 'rent'">{{
                  list.category
                }}</span>

                <i className="fa fa-heart"></i>
              </div>
              <h4>{{ list.name }}</h4>
              <p><i className="fa fa-location-dot"></i> {{ list.location }}</p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{{ list.price }}</button>
                <label htmlFor="">/sqft</label>
              </div>
              <span>{{ list.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: " PropertyCard",
  components: {},

  data: () => ({
    lists: [
      {
        id: 1,
        cover: require("@/assets/Properties/details-aside5.jpg"),
        name: "Red Carpet Real Estate",
        location: "210 Zirak Road, Canada",
        category: "For Rent",
        price: "$3,700",
        type: "Apartment",
      },
      {
        id: 2,
        cover: require("@/assets/Properties/details-aside6.jpg"),
        name: "Fairmount Properties",
        location: "5698 Zirak Road, NewYork",
        category: "For Sale",
        price: "$9,750",
        type: "Condos",
      },
      {
        id: 3,
        cover: require("@/assets/Properties/details-aside7.jpg"),
        name: "The Real Estate Corner",
        location: "5624 Mooker Market, USA",
        category: "For Rent",
        price: "$5,860",
        type: "Offices",
      },
      {
        id: 4,
        cover: require("@/assets/Properties/details-aside8.jpg"),
        name: "Herringbone Realty",
        location: "5621 Liverpool, London",
        category: "For Sale",
        price: "$7,540",
        type: "Homes & Villas",
      },
      {
        id: 5,
        cover: require("@/assets/Properties/details-aside9.jpg"),
        name: "Brick Lane Realty",
        location: "210 Montreal Road, Canada",
        category: "For Rent",
        price: "$4,850",
        type: "Commercial",
      },
      {
        id: 6,
        cover: "../images/list/p-6.png",
        name: "Banyon Tree Realty",
        location: "210 Zirak Road, Canada",
        category: "For Sale",
        price: "$2,742",
        type: "Apartment",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.recent .category span {
  padding: 4px 15px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  display: inline-block;
}
.recent .category i {
  font-size: 20px;
  color: #bec7d8;
}
.recent p {
  color: #72809d;
}
.recent .button {
  border-top: 1px solid #e4e8f3;
  padding: 10px 30px;
}
.sale {
  background: #25b5791a;
  color: #25b579;
}
.rent {
  background: #ff98001a;
  color: #ff9800;
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

	#property-list-grid {
		margin-top: 2%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
		grid-gap: 1rem;

		@media (min-width: 900px) {
			#property-list-grid {
				grid-template-columns: repeat(auto-fit, minMax(350px, 1fr));
			}
		}
	}
}

</style>
