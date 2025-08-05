<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

import { SidebarSeparator } from '@/components/ui/sidebar';

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
  data-slot="sidebar-footer"
  data-sidebar="footer"
  :class="cn('flex flex-col gap-2 p-2', props.class)"
  >
    <SidebarSeparator />
    <slot />
  </div>
</template>
