
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

    let toiletModel = 'Toilet';

    if (route.params.make) {
        toiletModel = route.params.make;
    }
    
    useHead({
        title: `${toTitleCase(toiletModel)}s in ${toTitleCase(route.params.city)}`
    })
</script>



<template>
    
    <div>
        
       <NavBar></NavBar>

       <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:ps-8 sm:px-10 lg:px-16 pb-16 w-3/5">
        <div class="mt-32 flex">
  
          <!-- CAR SIDE BAR -->
        <CarSideBar></CarSideBar>
          <!-- CAR SIDE BAR -->
  
          <!-- CAR CARDS -->
          
            <!-- CAR CARD -->
            <NuxtPage></NuxtPage>
            <!-- CAR CARD -->
          
          <!-- CAR CARDS -->
  
        </div>
        <!-- CARS PAGE -->
      </div>
       
       
    </div>

</template>