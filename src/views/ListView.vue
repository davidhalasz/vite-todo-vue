<template>
    <Input :addNewTodo="addNewTodo" />
    <List :todoStore="todoStore" :removeTodo="removeTodo" :toggleTodo="toggleTodo"/>
</template>

<script>
    import List from '../components/List.vue';
    import Input from '../components/Input.vue';
    import { useTodoStore } from '../stores/todo';
    import { ref } from 'vue';
    
    export default {
        components: {
            Input,
            List
        },
        setup() {
            const todoStore = useTodoStore();
            const textInput = ref('');

            const addNewTodo = () => {
                if (textInput.value.trim()) {
                    todoStore.addTodo(textInput.value.trim());
                    textInput.value = '';
                }
            };

            const removeTodo = (index) => {
                todoStore.removeTodo(index);
            };

            const toggleTodo = (index) => {
                todoStore.toggleTodo(index);
            };

            return { addNewTodo, removeTodo, toggleTodo, todoStore, textInput };
        }
    }
</script>