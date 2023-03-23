
<script setup>
    const route = useRoute();
    const {toTitleCase} = useUtils();
    const {toilets} = useToilets();

    // const toTitleCase = (str) => {
    //     let arr = str.split(" ");
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         let word = arr[i];
    //         let newWord = word[0].toUpperCase() + word.slice(1, word.length);
    //         newArr.push(newWord);
    //     }
    //     return newArr.join(" ");
    // }
    
    useHead({
        title: toTitleCase(route.params.name)
    })

    const toilet = computed(() => {
        return toilets.find((toilet) => {
            return toilet.id === parseInt(route.params.id)
        })
    })

    definePageMeta({
        layout: "custom"
    });
</script>



<template>
    <div v-if="toilet">
        
        
         

    <ToiletDetailHero :toilet="toilet"></ToiletDetailHero>

    <ToiletDetailAttributes :features="toilet.features"></ToiletDetailAttributes>

    <ToiletDetailDescription :description="toilet.description"></ToiletDetailDescription>

    <ToiletDetailContact></ToiletDetailContact>

    </div>
    
</template>