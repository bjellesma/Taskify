<template>
    <div class="list">
        <flash-message></flash-message>
        <Tasklist />
    </div>
</template>

<script>
// @ is an alias to /src
import Tasklist from '@/components/Tasklist'
import Tasklists from '@/components/Tasklists'
export default {
  name: 'list',
  components: {
      Tasklist, 
      Tasklists
  }
}
</script>
