<template>
    <div class="list">
        <flash-message></flash-message>
        <FullTasklist />
    </div>
</template>

<script>
// @ is an alias to /src
import FullTasklist from '@/components/FullTasklist'
import Tasklists from '@/components/Tasklists'
export default {
  name: 'list',
  components: {
      FullTasklist, 
      Tasklists
  }
}
</script>
