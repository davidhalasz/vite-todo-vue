<template>
    <div class="flex gap-2 mb-4">
        <input class="border p-2 rounded" placeholder="add new item" v-model="textInput" type="text" >
        <button @click="handleAddTodo" class="bg-green px-3 py-1">Add</button>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['addNewTodo']);
const textInput = ref('');

const handleAddTodo = () => {
    if(textInput.value.trim()) {
        props.addNewTodo(textInput.value.trim());
        textInput.value = '';
    }
}
</script>