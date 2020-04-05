<template>
  <div>
    <SideBar :config="config.sideBar"/>
    <ToolBar :config="config.sideBar"/>
    <v-content>
      <slot/>
    </v-content>
    <FooterBar :config="config.footerBar"/>
  </div>
</template>

<script>
import SideBar from '@/components/bars/sidebar/SideBar'
import ToolBar from '@/components/bars/ToolBar'
import FooterBar from '@/components/bars/FooterBar'

export default {
  components: {
    SideBar,
    ToolBar,
    FooterBar
  },
  computed: {
    config: {
      get () {
        return this.$store.getters.layout
      }
    }
  },
  data: () => ({
  })
}

</script>