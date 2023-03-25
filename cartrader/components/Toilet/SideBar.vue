<script setup>

  const {makes} = useToilets();

  const modal = ref({
    make: false,
    location: false,
    price: false
  });

  const city = ref("");
  const priceRange = ref({
    min: "",
    max: ""
  });
  
  const route = useRoute();

  const updateModal = (key) => {
    modal.value[key] = !modal.value[key];
  }

  const onChangeLocation = () => {
    if (!city.value) return;
    if (!isNaN(parseInt(city.value))) {
      throw createError({
        statusCode: 400,
        message: "Invalid city format",
      })
    }
    updateModal("location");
    navigateTo(`/city/${city.value}/toilet/${route.params.make}`);
    city.value = "";
  }

  const onChangeMake = (make) => {
    updateModal("make")
    navigateTo(`/city/${route.params.city}/toilet/${make}`)
  }
</script>

<template>
          <!-- Location Start -->
              <div class="shadow border w-64 mr-10 z-30 h-[190px]">
            <div class="p-5 flex justify-between relative cursor-pointer border-b">
              <h3>Location</h3>
              <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
                {{ route.params.city }}
              </h3>
              
              <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input v-model="city" type="text" class="border p-1 rounded"/>
                <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
              </div>
  
            </div>
            <!-- Location End -->

            <!-- Make Start -->
            <div class="p-5 flex justify-between relative cursor-pointer border-b">
              <h3>Make</h3>
              <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
                {{ route.params.make ? route.params.make : 'Any' }}
              </h3>
              <div class="absolute border shadow left-56 p-5 
              top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
              v-if="modal.make">
                <h4 @click="onChangeMake(make)" v-for="make in makes" :key="make" class="w-1/3 ">
                  {{ make }}
                </h4>
              </div>
            </div>
            <!-- Make End -->
            
            <!-- Price Start -->
            <div class="p-5 flex justify-between relative cursor-pointer border-b">
              <h3>Price</h3>
              <h3 class="text-blue-400 capitalize">$2</h3>
              <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input type="number" placeholder="Min" v-model="priceRange.min">
              </div>
            </div>
            <!-- Price End -->
  
  
          </div>
</template>