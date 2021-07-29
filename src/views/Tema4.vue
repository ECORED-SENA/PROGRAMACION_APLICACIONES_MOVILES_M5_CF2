<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  4
      h1 Frameworks para el desarrollo de aplicaciones móviles híbridas  
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t4-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Usar un framework para el desarrollo de aplicaciones móviles híbridas facilita el trabajo de los desarrolladores, permiten que las apps móviles se ejecuten en las principales plataformas (iOS y Android). El código se puede reutilizar para el desarrollo de aplicaciones web progresivas y en aplicaciones de escritorio.

    p.mb-5  En la siguiente imagen se muestran algunos de los frameworks disponibles para el desarrollo de apps móviles híbridas:

    .row
      .col-lg-3
      .col-lg-3
      .col-lg-3
      .col-lg-3












</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
