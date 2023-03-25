
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
            <NuxtErrorBoundary>
                <ToiletSideBar></ToiletSideBar>
                <NuxtPage></NuxtPage>
                <template #error="{error}">
                    <div class="text-center mx-auto flex flex-col mb-5">
                        <h1 class="text-5xl text-red-600 mb-5">
                            Sorry something went wrong!
                        </h1>
                            <code>{{ error }}</code>
                            <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4" @click="error.value = null">
                                Go back</button>
                        
                    </div>
                </template>
            </NuxtErrorBoundary>
        </div>
    </div>

</template>