<template>
    <div class="logo">
        <Icon name="custom:crypto"/>

        <span class="name">CRYPTO</span>
    </div>
</template>

<style scoped lang="scss">
    .logo {
        @include flex-row(center);
        @include flex-gap(8px);

        .name {
            @include font-style(700, 24px);
        }
    }
</style>