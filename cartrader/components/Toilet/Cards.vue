<script setup>
    const {toilets} = useToilets();
</script>


<template>
    <div class="w-full"></div>
    <ToiletCard v-for="toilet in toilets" :key="toilet.id" :toilet="toilet" ></ToiletCard>
</template>