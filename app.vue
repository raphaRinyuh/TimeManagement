<script lang="ts">
import { useState } from 'nuxt/app';
const userId = useState('userId', () => 1)
</script>

<template>
  <div class="w-screen h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
