
<script setup>
    const route = useRoute();
    const {toTitleCase} = useUtils();

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

    definePageMeta({
        layout: "custom"
    });
</script>



<template>
    <div>
        
        


    <CarDetailHero></CarDetailHero>

    <CarDetailAttributes></CarDetailAttributes>

    <CarDetailDescription></CarDetailDescription>

    <CarDetailContact></CarDetailContact>

    </div>
    
</template>