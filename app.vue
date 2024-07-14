<template>
    <section>
        <NuxtRouteAnnouncer />
        <NuxtLayout />
        <section class="flex flex-col justify-center items-center mt-28">
            <div>
                <NuxtImg
                    class="h-[250px] border-solid border-[7px] border-bg_alt rounded-full"
                    src="/pfp.png"
                />
            </div>
            <div class="p-4">
                <span class="font-heading text-2xl">{{ "AyanW" }}</span>
            </div>
        </section>
    </section>
</template>
