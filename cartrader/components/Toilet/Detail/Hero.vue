<script setup>
  const props = defineProps({
    toilet: Object
  })
</script>


<template>
    <div class="mt-10">
      <div class="flex justify-center">
  <NuxtImg :src="toilet.imageUrl"
  class=""
  alt=""/></div>

  <h2 class="mt-10 text-4xl">{{ toilet.name }}</h2>
  <div class="w=full text-slate-500 flex text-lg mt-[30px] border-b pb-5 justify-between">
    
      
        <p class="mr2 text-slate-500 self-center"> Company: {{ toilet.manufacturer }}
        </p>
    
      
        <p class="self-center font-bold text-2xl">
          ${{ toilet.price }}
        </p>
     
    
    <!-- <div class="w=full flex justify-center mt-10"> -->
      <!-- <p class="mr2">Features: {{ toilet.features.join(" | ") }}</p> -->
    <!-- </div> -->
  

    
    
    
 
  
    
  </div>
</div>
</template>