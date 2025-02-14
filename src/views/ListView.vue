<template>
    <Input :addNewTodo="addNewTodo" />
    <List :todoStore="todoStore" :removeTodo="removeTodo" :toggleTodo="toggleTodo"/>
</template>

<script setup>
    import List from '../components/List.vue';
    import Input from '../components/Input.vue';
    import { useTodoStore } from '../stores/todo';

    const todoStore = useTodoStore();

    const addNewTodo = (text) => {
        todoStore.addTodo(text);
    };

    const removeTodo = (index) => {
        todoStore.removeTodo(index);
    };

    const toggleTodo = (index) => {
        todoStore.toggleTodo(index);
    };

</script>