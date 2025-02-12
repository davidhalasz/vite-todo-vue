<template>
    <div>
        <h1 class="text-4xl">TODO List</h1>
        <ul>
            <li class="flex items-center gap-4" v-for="(todo, index) in todoStore.todos" :key="index">
                <input type="checkbox" @change="toggleTodo(index)" />
                <p>{{ todo.text }}</p>
                <button @click="removeTodo(index)" >remove</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['todoStore', 'toggleTodo', 'removeTodo'],
}
</script>