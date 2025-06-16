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

<style scoped lang="scss">
    .layout {
        min-height: 100svh;

        @include flex-column();

        .header {
            padding: 20px;

            @include flex-row(unset, center);
        }

        .main {
            flex: 1;
        }
    }   
</style>