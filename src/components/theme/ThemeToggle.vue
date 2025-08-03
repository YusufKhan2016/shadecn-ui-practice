<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import Button from '../ui/button/Button.vue';
import { computed, type ComputedRef } from 'vue';

const mode = useColorMode({
    attribute: 'class',
    initialValue: 'light',
    storageKey: 'theme',
    emitAuto: true
});

const toggleMode: () => void = () => {
    if (mode.value === 'light') {
        mode.value = 'dark';
        return;
    } else {
        mode.value = 'light';
        return;
    }
};

const toggleIcon: ComputedRef<string> = computed(():string => {
    if (mode.value === 'light' || mode.value === 'auto') {
        return 'dark_mode';
    } else {
        return 'light_mode';
    }
});

</script>

<template>
    <Button @click="toggleMode" class="cursor-pointer text-background p-2">
        <span class="material-symbols-outlined">
            {{toggleIcon}}
        </span>
    </Button>
</template>