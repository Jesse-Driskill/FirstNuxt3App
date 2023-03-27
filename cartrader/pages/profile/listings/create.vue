<script setup>
    definePageMeta({
        layout: "custom",
    });

    const {makes} = useToilets();

    const info = useState('adInfo', () => {
        return {
            manufacturer: "",
            city: "",
            model: "",
            year: "",
            price: "",
            description: "",
            image: null
        }
    })

    const onChangeInput = (data, name) => {
        info.value[name] = data;
    }

    const inputs = [
        {
            id: 1,
            title: "Model *",
            name: "model",
            placeholder: "Civic"
        },
        {
            id: 2,
            title: "Year *",
            name: "year",
            placeholder: "2020"
        },
        {
            id: 3,
            title: "Manufacturer *",
            name: "manufacturer",
            placeholder: "ENVO"
        },
        {
            id: 4,
            title: "City *",
            name: "city",
            placeholder: "San Francisco"
        },
        {
            id: 5,
            title: "Description:",
            name: "description",
            placeholder: "Lorem",
        },
        {
            id: 6,
            title: "Features *",
            name: "features",
            placeholder: "Bidet system"
        }
    ]
</script>

<template>
    <div>
        <div class="mt-24">
            <h1 class="text-6xl">Create a New Listing</h1>
                {{ info.make }}
        </div>

        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <ToiletAdSelect 
            name="make" 
            @change-input="onChangeInput" 
            title="Make *" 
            :options="makes"></ToiletAdSelect>

            <ToiletAdInput v-for="input in inputs" :key="input.id" :title="input.title" 
            :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput"></ToiletAdInput>
            <ToiletAdTextarea title="Description *"
            name="description" placeholder="" @change-input="onChangeInput"></ToiletAdTextarea>
            <ToiletAdImage @change-input="onChangeInput"></ToiletAdImage>
        </div>
    </div>
</template>