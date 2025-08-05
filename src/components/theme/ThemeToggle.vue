<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-vue-next';

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
</script>   

<template>
    <Button @click="toggleMode" class="cursor-pointer text-background mx-4">
        <component
        :is="mode === 'light' || mode === 'auto' ? Moon : Sun"
        :stroke-width="2.5"
        />
    </Button>
</template>