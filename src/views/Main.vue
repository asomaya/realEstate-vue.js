<template>
  <div>
    <Navbar />
    <Form />
    <Filter />
    <PropertyCard />
    <FeaturedCard/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Form.vue";
import Filter from "@/components/Filter.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import FeaturedCard from "@/components/FeaturedCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    PropertyCard,
    Footer,
    Form,
    FeaturedCard,
    Filter,
  },
};
</script>

<style lang="scss" scoped></style>
