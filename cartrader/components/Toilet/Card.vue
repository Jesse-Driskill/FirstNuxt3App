<script setup>
    import heartFilled from "@/assets/heartFilled.png"
    import heartOutline from "@/assets/heartOutline.png"
    const props = defineProps({
        toilet: Object,
    });

    
</script>


<template>
    <div class="relative shadow border w-full mb-5 cursor-pointer "
    @click="navigateTo(`/toilet/${toilet.name}-${toilet.id}`)">
            <img :src="heartOutline" class="absolute w-6 right-2 top-2 z-20"/>
            <div class="flex gap-4 align-middle">
                <NuxtImg
                :src=toilet.imageUrl
                alt=""
                class="w-1/2 h-1/2 p-4"/>
                <div class="p-4 flex flex-col ml-[100px]">
                    
                  <div>
                    <h2 class="text-2xl text-blue-700 mr-7"> {{ toilet.name }}</h2>
                    <p class="text-gray-700">{{ toilet.description }}</p>
                  </div>
                  <h1 class="mt-auto text-xl">$ {{ toilet.price }}</h1>
                </div>
            </div>
    </div>
</template>