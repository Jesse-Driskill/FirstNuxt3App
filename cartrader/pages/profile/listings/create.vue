<script setup>
    definePageMeta({
        layout: "custom",
    });

    const {makes} = useToilets();
</script>

<template>
    <div>
        <div class="mt-24">
            <h1 class="text-6xl">Create a New Listing</h1>
        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <ToiletAdSelect title="Make *" :options="makes"></ToiletAdSelect>
        </div>
    </div>
</template>