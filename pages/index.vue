<script setup>
const { data, pending, error, refresh } = useFetch('/api/games')
const game = ref({
  title: '',
  developer: '',
  publisher: ''
})

function clearInputs() {
  game.value.title = ''
  game.value.developer = ''
  game.value.publisher = ''
}
async function addGame() {
  const res = await $fetch('/api/games/create', {
    method: "POST",
    body: {
      title: game.value.title,
      developer: game.value.developer,
      publisher: game.value.publisher
    }
  })
  console.log("Response", res);
  clearInputs()
}

</script>

<template>
  <div>
    Page: foo

  </div>
  <ul>
    <li v-for="game in data" :key="game._id">{{ game.title }}</li>
  </ul>

  <div>
    <input type="text" v-model="game.title">
    <input type="text" v-model="game.developer">
    <input type="text" v-model="game.publisher">
    <button @click.prevent="addGame">Add</button>
  </div>
</template>

<style scoped></style>
