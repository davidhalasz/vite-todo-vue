<template>
    <div class="flex gap-2 mb-4">
        <input class="border p-2 rounded" placeholder="add new item" v-model="textInput" type="text" >
        <button @click="addNewTodo" class="bg-green px-3 py-1">Add</button>
    </div>
</template>

<script>

export default {
    props: ['addNewTodo'],
    data() {
        return {
            textInput: ''
        }
    },
}
</script>