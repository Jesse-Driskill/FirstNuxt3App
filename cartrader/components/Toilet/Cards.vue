<script setup>
    const {toilets} = useToilets();
    const liked = useLocalStorage("liked", {});

    const handleLike = (id) => {
        if (id in liked.value) {
            delete liked.value[id];
        }
        else {
            liked.value = {
                ...liked.value,
                [id]: true
            }
        }

       
    }
</script>


<template>
    <!-- <div class="w-full"></div> -->
    <ClientOnly>
        <ToiletCard :liked="toilet.id in liked" @like="handleLike" v-for="toilet in toilets" :key="toilet.id" :toilet="toilet" >
        </ToiletCard>
    </ClientOnly>
</template>