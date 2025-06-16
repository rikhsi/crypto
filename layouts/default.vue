<template>
    <div class="layout">
        <header class="header">
            <DefaultHeader/>
        </header>

        <main class="main">
            <slot/>
        </main>

        <footer class="footer">
            <DefaultFooter />
        </footer>
    </div>
</template>

<script setup></script>

<style scoped>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100svh;
    }   

    .main {
        flex: 1;
    }
</style>