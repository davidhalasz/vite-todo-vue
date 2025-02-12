<template>
    <div class="flex gap-2 mb-4">
        <input class="border p-2 rounded" placeholder="add new item" v-model="textInput" type="text" >
        <button @click="handleAddTodo" class="bg-green px-3 py-1">Add</button>
    </div>
</template>

<script>
import {ref} from 'vue';

export default {    
    props: ['addNewTodo'],
    setup(props) {
        const textInput = ref('');

        const handleAddTodo = () => {
            console.log(textInput.value);
            if (textInput.value.trim()) {
                props.addNewTodo(textInput.value.trim());
                textInput.value = '';
            }
        };

        return {textInput, handleAddTodo};
   }
}
</script>