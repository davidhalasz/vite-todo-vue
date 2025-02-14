<template>
    <div>
        <h1 class="text-4xl my-10">TODO List</h1>
        <ul>
            <li class="flex items-center gap-4 mb-4" v-for="(todo, index) in todoStore.todos" :key="index">
                <input class="flex-none" type="checkbox" :checked="todo.done"  @change="toggleTodo(index)" />
                <p class="flex-grow">{{ todo.text }}</p>
                <button class="flex-none" @click="removeTodo(index)">remove</button>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps(['todoStore', 'toggleTodo', 'removeTodo']);

</script>