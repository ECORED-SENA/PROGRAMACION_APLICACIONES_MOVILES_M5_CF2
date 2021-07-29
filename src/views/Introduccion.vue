<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-7
        p.mb-4  Las aplicaciones móviles están divididas en tres grandes grupos: nativas, web e híbridas. Dentro de estas categorías, también se encuentra una subdivisión más específica que permite identificar su uso. Asimismo, se pueden categorizar según el modelo de negocio con el cual fue desarrollada.  En este documento, se puede encontrar una descripción de las principales herramientas y frameworks que se utilizan para el diseño y desarrollo de aplicaciones híbridas, para lo que se hará un recorrido y explicación de cada una de las etapas de desarrollo.
        .cajon.color-acento-contenido.p-4(data-aos="fade-up", data-aos-delay='0')
          p Para la elaboración de este componente, <b>se abordaron varios autores conocidos en aplicaciones móviles híbridas,</b> de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la programación de aplicaciones para dispositivos móviles.
      .col-lg-5
        figure(data-aos="fade-left", data-aos-delay='50')
          img(src="@/assets/curso/i-i1.jpg", alt="logo de MySQL")





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
