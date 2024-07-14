<template>
    <nav
        class="flex w-screen p-4 bg-bg_alt justify-between items-center fixed top-0"
    >
        <div class="text-2xl font-heading">
            <NuxtLink class="hover:underline" to="/">
                {{ "AyanW" }}
            </NuxtLink>
        </div>
        <div class="">
            <NuxtLink
                class="text-fg_alt pl-2 pr-2 hover:text-fg hover:underline"
                v-for="link in links"
                :to="link.href"
            >
                {{ link.text.toUpperCase() }}
            </NuxtLink>
        </div>
    </nav>
    <slot />
</template>

<script setup lang="ts">
const links = [
    { text: "Resume", href: "/resume" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Posts", href: "/posts" },
];
</script>
