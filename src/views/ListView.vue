<template>
    <Input :addNewTodo="addNewTodo" />
    <List :todoStore="todoStore" :removeTodo="removeTodo" :toggleTodo="toggleTodo"/>
</template>

<script>
    import List from '../components/List.vue';
    import Input from '../components/Input.vue';
    import { useTodoStore } from '../stores/todo';
    // import { ref } from 'vue';
    
    export default {
        components: {
            Input,
            List
        },
        setup() {
            const todoStore = useTodoStore();
            // const textInput = ref('');

            const addNewTodo = (text) => {
                console.log(text);
                todoStore.addTodo(text);
            };

            const removeTodo = (index) => {
                todoStore.removeTodo(index);
            };

            const toggleTodo = (index) => {
                todoStore.toggleTodo(index);
            };

            return { addNewTodo, removeTodo, toggleTodo, todoStore };
        }
    }
</script>