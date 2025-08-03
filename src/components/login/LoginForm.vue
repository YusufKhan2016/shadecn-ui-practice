<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'

import placeholderImg from '@/assets/images/login/placeholder.svg';

import { useRouter, type Router } from 'vue-router';
import { computed, ref, type ComputedRef } from 'vue';
import { Form } from 'vee-validate'

const router: Router = useRouter();
const visible = ref<boolean>(false);

const navigateToDashboard: Function = () => router.push('dashboard');

const toggleVisible = (): void => {
  visible.value = !visible.value
};
const passwordTypeChange: ComputedRef<string> = computed(() => {
  return visible.value ? 'text' : 'password';
});

</script>

<template>

<section>
  <div class="flex flex-col items-center bg-primary-foreground h-[100vh] justify-center">
    <div class="w-sm md:w-3xl">
      <div class="flex flex-col gap-6">
        <Card class="overflow-hidden p-0 mx-4 lg:mx-0">
          <CardContent class="grid p-0 md:grid-cols-2">
    
            <Form class="flex flex-col justify-center p-6 md:p-8 h-[410px]">
              <div class="flex flex-col gap-6">

                <div class="flex flex-col items-center text-center">
                  <h1 class="text-2xl font-bold">
                    Welcome back
                  </h1>
                  
                  <p class="text-muted-foreground text-balance">
                    Login to The Admin Panel
                  </p>
                </div>

                <div class="grid gap-3">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>  

                <div class="grid gap-3">
                  <Label for="password">Password</Label>
                  <div class="relative">
                    <Input 
                      id="password" 
                      :type="passwordTypeChange" 
                      placeholder="Password" 
                      required 
                    />
                    <span 
                    @click="toggleVisible"
                    class="material-symbols-outlined text-muted-foreground absolute end-1 inset-y-1.5 cursor-pointer"
                    style="font-variation-settings: 'wght' 300;">
                    {{ visible? "visibility" : "visibility_off"}}
                    </span>
                  </div>
                </div>
                
                <Button type="submit" @click="navigateToDashboard" class="w-full">
                  Login
                </Button>

              </div>
            </form>
    
            <div class="bg-muted relative hidden md:block">
              <img
                :src="placeholderImg"
                alt="Image"
                class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
              >
            </div>
    
          </CardContent>
        </Card>

        <div class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          2025 © All Rights Reserved by<a target="_blank" href="https://datascape-it-limited.vercel.app/"> Datascape IT Limited</a>.
        </div>
      </div>
    </div>
    <div class="absolute top-7 right-7">
      <ThemeToggle />
    </div>
  </div>
</section>

</template>
