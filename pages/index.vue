<template >
    <div>
        <input type="text" v-model="q" placeholder="Type here" class="input w-full max-w-xs" />
        <button @click="calıstır" class="btn btn-primary">Getir</button>
        <pre>{{data}}</pre>


    </div>
</template>
<script setup>
      const config = useRuntimeConfig()

    const q= ref("")
    const {data}= useFetch(()=>`https://api.edamam.com/api/recipes/v2?app_id=${config.APP_ID}&app_key=${config.APP_KEY}&q=chicken&type=public`)

</script>