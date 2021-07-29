<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Introducción aplicaciones móviles híbridas
    .row.justify-content-center.mb-5.slideInUp
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Existen varios tipos de aplicaciones móviles, que se pueden clasificar según la manera en la que se utilizan e integran con el sistema operativo: nativas, web e híbridas. <b>A continuación, se exponen sus principales características, algunas de las cuales se evidencian en la siguiente figura.</b>

    .row.justify-content-center.mb-5
      .col-lg-8
        figcaption.customCaption.mb-2  <b>Figura</b> Tipos de aplicaciones móviles según sistema operativo
        figure 
          img.nW(src='@/assets/curso/t1-ig1.png', alt='Tabla de tipos de contenidos móviles')
    br
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-light-blue.p-4(titulo="Qué es una app")
        h4 Qué es una app o aplicación móvil
        .row
          .col-lg-8
            p <b>Una app es una aplicación desarrollada para ser instalada y utilizada sobre un dispositivo con sistema operativo móvil.</b>  Permite al usuario personalizar su dispositivo integrando nuevas utilidades y funciones. Por lo general, son pequeñas unidades de software con funciones aisladas y limitadas, que se desarrollan para suplir una necesidad específica. Se enfoca, por ejemplo, <b>en prestar servicios de comunicación, entretenimiento, educación, ocio, trabajo, comercio, entre muchos otros.</b>
          .col-lg-4
            figure 
              img.nW(src='@/assets/curso/t1-i2.jpg', alt='Tabla de tipos de contenidos móviles')


      .tarjeta.color-light-blue.p-4(titulo="Aplicaciones nativas")
        h4 Aplicaciones nativas
        .row.mb-3
          .col-lg-8
            p <b>Estas aplicaciones están diseñadas para ejecutarse únicamente sobre un dispositivo con un sistema operativo móvil específico.</b> Para su desarrollo se utiliza el lenguaje de programación propio de cada dispositivo, por lo que únicamente puede ser utilizada en dicha plataforma (se puede acceder a todas las características del hardware del móvil: cámara, GPS, agenda, dispositivos de almacenamiento, entre otras). <b>Los beneficios de estas aplicaciones son su alto rendimiento y la experiencia óptima de la interfaz gráfica,</b> que permite mejorar la experiencia de usuario a través del acceso directo a las API del sistema operativo, lo que, de alguna manera, facilita el trabajo del desarrollador, sin generar demasiadas limitantes para el uso del hardware de los diferentes dispositivos móviles.
          .col-lg-4
            figure 
              img.nW(src='@/assets/curso/t1-i3.jpg', alt='Tabla de tipos de contenidos móviles')
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-contenido.p-4
              p <b>El costo en términos monetarios de desarrollar este tipo de aplicaciones es alto.</b> Según la complejidad de la app a desarrollar, para su creación y mantenimiento, a veces es necesario contar con dos o más equipos de desarrollo especializados en cada uno de los sistemas operativos sobre los que se busca desplegar la aplicación.

      .tarjeta.color-light-blue.p-4(titulo="Aplicaciones web")
        h4 Aplicaciones web
        .row.mb-3
          .col-lg-8
            p.mb-3 <b>Las aplicaciones web utilizan navegadores para ejecutarse; se desarrollan utilizando CSS, HTML5, JavaScript.</b> Estas aplicaciones redirigen al usuario a una URL y luego ofrecen la opción de instalar la aplicación o trabajar sobre un navegador web del dispositivo.
            p En este tipo de aplicaciones, <b>toda la información se almacena en bases de datos en un servidor remoto; para su uso, los usuarios deben tener conexión a Internet.</b> Una aplicación web se puede acceder sin instalaciones, usando Internet y un navegador; sin embargo, la experiencia de usuario no siempre es la mejor. Las aplicaciones web se trabajan bajo el concepto “web responsivas”, buscando la mejor adaptación de los elementos de la interfaz de usuario a todos los tamaños de pantalla existentes, mostrando la información según sea necesario.
          .col-lg-4
            figure 
              img.nW(src='@/assets/curso/t1-i4.jpg', alt='usuario navegando en un sitio web')

      .tarjeta.color-light-blue.p-4(titulo="Aplicaciones híbridas")
        h4 Aplicaciones híbridas
        .row.mb-3
          .col-lg-8
            p.mb-3 <b>Se crean utilizando tecnologías web como JavaScript, CSS y HTML5, son un poco más sencillas y rápidas de desarrollar gracias a los frameworks de desarrollo,</b> que proporcionan herramientas que facilitan de alguna manera las actividades de los diseñadores y desarrolladores. Una de sus características más representativas es que trabajan con una sola base de código para todas las plataformas, lo que permite reducir el costo de desarrollo, mantenimiento y actualización. <b>Los desarrolladores pueden aprovechar muchas de las API nativas para utilizar el hardware,</b> accediendo a las funciones básicas y complejas de los dispositivos de manera directa.
            p <b>Su rendimiento y velocidad no son los óptimos, se ven disminuidos frente a las aplicaciones realizadas de manera nativa.</b>  En algunos casos, se pueden experimentar problemas de diseño, por lo que es posible que la aplicación no tenga el mismo aspecto visual en dos o más plataformas. Estas características se están mejorando, en el mercado se encuentran varios frameworks que permiten alcanzar un muy buen rendimiento y no están lejos de presentar los mismos beneficios de las aplicaciones nativas.
          .col-lg-4
            figure 
              img.nW(src='@/assets/curso/t1-i5.jpg', alt='usuario navegando en un sitio web')
        .row
          .col-lg-12
            .cajon.color-acento-contenido.p-4
              p El desarrollo de aplicaciones híbridas ha crecido enormemente en los últimos años. Los equipos de desarrolladores optan por el desarrollo de este tipo de aplicaciones, en lugar de las aplicaciones nativas, <b>porque proporcionan un proceso más rápido, prototipos más fáciles y un mejor retorno de inversión.</b> El desarrollo de una aplicación híbrida permite que la creación de <b>aplicaciones para la web y escritorio sea más fácil, como una forma de llegar a más clientes.</b> 




  
</template>

<script>
export default {
  name: 'Tema1',
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
