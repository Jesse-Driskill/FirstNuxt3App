<script setup>
    const props = defineProps({
        toilet: Object,
    });
</script>


<template>
    <div class="shadow border w-full mb-5 cursor-pointer "
    @click="navigateTo(`/toilet/${toilet.name}-${toilet.id}`)">
            <div class="flex gap-4 align-middle">
                <img 
                :src=toilet.imageUrl
                alt=""
                class="w-1/2 h-1/2 p-4"/>
                <div class="p-4 flex flex-col ml-[100px]">
                    
                  <div>
                    <h1 class="text-2xl text-blue-700"> {{ toilet.name }}</h1>
                    <p class="text-gray-700">{{ toilet.description }}</p>
                  </div>
                  <h1 class="mt-auto text-xl">$ {{ toilet.price }}</h1>
                </div>
            </div>
    </div>
</template>