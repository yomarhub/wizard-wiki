<template>
  <div class="flex items-center gap-4 text-secondary bg-primary rounded-lg p-3">
    <template v-if="authStore.isAuthenticated">
      <UAvatar :alt="authStore.user?.username" />
      <UDropdownMenu :items="userMenuItems">
        <UButton variant="ghost" color="neutral" trailing-icon="i-lucide-chevron-down">
          {{ authStore.user?.username }}
        </UButton>
      </UDropdownMenu>
    </template>
    <template v-else>
      <UAvatar />
      <NuxtLink to="/login" class="hover:text-primary transition-colors">
        {{ $t('sidebar.buttons.login') }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const authStore = useAuthStore()

const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}

const userMenuItems = computed((): DropdownMenuItem[][] => [
  [{
    label: authStore.user?.email || '',
    slot: 'account',
    disabled: true
  }],
  [{
    label: 'Settings',
    icon: 'i-lucide-settings',
    to: '/settings'
  }],
  [{
    label: 'Logout',
    icon: 'i-lucide-log-out',
    onSelect: handleLogout
  }]
])
</script>
