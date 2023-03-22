
<script setup>
    const route = useRoute();

    const {toTitleCase} = useUtils();

    let toiletModel = 'Toilet';

    if (route.params.make) {
        toiletModel = route.params.make;
    }
    
    useHead({
        title: `${toTitleCase(toiletModel)}s in ${toTitleCase(route.params.city)}`
    })

    definePageMeta({
        layout: "custom"
    })
</script>



<template>
    <div>       
        <div class="mt-32 flex">
            <CarSideBar></CarSideBar>
            <NuxtPage></NuxtPage>
        </div>
    </div>

</template>