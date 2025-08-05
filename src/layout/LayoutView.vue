<script setup lang="ts">
import AppSidebar from '@/layout/AppSidebar.vue';
import { SidebarProvider, 
    SidebarInset, 
    SidebarTrigger
} from '@/components/ui/sidebar';
import { 
    Breadcrumb, 
    BreadcrumbSeparator, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/theme/ThemeToggle.vue';
import { ref } from 'vue';

const open = ref(false)
</script>

<template>
    <SidebarProvider v-model:open="open">
        <AppSidebar />
        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div class="flex items-center gap-2 px-4">
                    <SidebarTrigger class="-ml-1" />
                    <Separator orientation="vertical" class="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem class="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator class="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <ThemeToggle />
            </header>
            <Separator />
            <main>
                <RouterView />
            </main>
        </SidebarInset>
    </SidebarProvider>

</template>