
<script setup>
    const route = useRoute();
    const toTitleCase = (str) => {
        let arr = str.split(" ");
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            let newWord = word[0].toUpperCase() + word.slice(1, word.length);
            newArr.push(newWord);
        }
        return newArr.join(" ");
    }
    useHead({
        title: toTitleCase(route.params.name)
    })
</script>



<template>
    <div>
        <NavBar></NavBar>
        <div class="mx-auto 
        mt-4 
        max-w-7xl 
        space-y-4 
        px-4 
        xs:ps-8 
        sm:px-10 
        lg:px-16 
        pb-16 
        w-3/5">
    <div>
<!-- CAR HERO -->

    <CarDetailHero></CarDetailHero>
    <!-- CAR HERO -->
    </div>
    <!-- CAR ATTRIBUTES -->
    <!-- <div class="justify-center"> -->
    <CarDetailAttributes></CarDetailAttributes>
    <!-- </div> -->
    <!-- CAR ATTRIBUTES -->
    <!-- CAR DESCRIPTION -->
    <CarDetailDescription></CarDetailDescription>
    <!-- CAR DESCRIPTION -->
    <!-- CAR CONTACT -->
    <CarDetailContact></CarDetailContact>
    <!-- CAR CONTACT -->
    </div>
    </div>
</template>