<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Tipos de aplicaciones móviles
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Se puede encontrar gran cantidad de aplicaciones móviles, que están divididas en categorías según su uso y funcionalidad.  <b>En la siguiente figura, se muestran algunos de los tipos de aplicaciones existentes.</b>
    .row.justify-content-center.mb-5
      .col-lg-8    
        figcaption.customCaption.mb-2  <b>Figura</b> Tipos de aplicaciones móviles según sistema operativo
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2-i2.svg', alt='Tipos de aplicaciones móviles según funcionalidad')

          .tarjeta.color-acento-botones.p-3(x="17%" y="33%")
            .h5.mb-2 Productividad

          .tarjeta.color-acento-botones.p-3(x="59%" y="33%")
            .h5.mb-2 Utilitarias

          .tarjeta.color-acento-botones.p-3(x="73%" y="33%")
            .h5.mb-2 Entretenimiento

          .tarjeta.color-acento-botones.p-3(x="17%" y="60%")
            .h5.mb-2 Empresariales

          .tarjeta.color-acento-botones.p-3(x="31%" y="60%")
            .h5.mb-2 Comercio

          .tarjeta.color-acento-botones.p-3(x="45%" y="60%")
            .h5.mb-2  Viaje

          .tarjeta.color-acento-botones.p-3(x="59%" y="60%")
            .h5.mb-2  Estilo de vida
          .tarjeta.color-acento-botones.p-3(x="87%" y="60%")
            .h5.mb-2  Educativas
            
          .tarjeta.color-acento-botones.p-3(x="45%" y="87%")
            .h5.mb-2  Juegos
          .tarjeta.color-acento-botones.p-3(x="59%" y="87%")
            .h5.mb-2  Sociales            

    .row.justifuy-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="Comercio móvil")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic1.png', alt='Texto que describa la imagen')
            .col-md-8
              p Aplicaciones como Amazon, eBay, o Mercadolibre ofrecen la posibilidad de comercializar productos, permiten a los clientes un acceso sencillo y rápido a miles de productos, utilizando confiables métodos de pago y brindando una óptima experiencia de compra.

          .row.justify-content-center.align-items-center(titulo="Diseño")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic2.png', alt='Texto que describa la imagen')
            .col-md-8
              p Se utilizan como herramientas creativas que permiten, de manera rápida y sencilla, tanto el diseño, creación y edición de videos y fotografías, como la producción de audio. Aunque en su mayoría son de pago, se encuentran algunas versiones gratuitas.

          .row.justify-content-center.align-items-center(titulo="Empresariales o de productividad")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic3.png', alt='Texto que describa la imagen')
            .col-md-8
              p Ocupan la mayor parte del mercado actual. La migración del trabajo de oficina al teletrabajo y trabajo en casa ha generado que una persona incremente el uso de su smartphone y tableta para realizar actividades laborales. Permiten reservar pasajes, enviar correos electrónicos, registrar el seguimiento del progreso laboral, generar documentos, presentaciones, compra de insumos, contratación y evaluación de personal, entre otros.  Algunos de sus objetivos son aumentar la productividad y reducir gastos, ya que permiten realizar un amplio número de tareas.


          .row.justify-content-center.align-items-center(titulo="Entretenimiento")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic4.png', alt='Texto que describa la imagen')
            .col-md-8
              p Permiten la transmisión de video, búsqueda de eventos, mensajería instantánea (chats), ver contenido en línea.  Netflix, Amazon Prime Video, Disney Plus son ejemplos claros de su funcionamiento y utilidad.

          .row.justify-content-center.align-items-center(titulo="Estilo de vida")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic5.png', alt='Texto que describa la imagen')
            .col-md-8
              p En esta categoría se pueden incluir compras, entrenamiento, citas, moda, dieta, estilos de vida saludable, entre otras. Se centran básicamente en diferentes aspectos relacionados con el estilo de vida personal.

          .row.justify-content-center.align-items-center(titulo="Juegos")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic6.png', alt='Texto que describa la imagen')
            .col-md-8
              p Es una de las categorías que en la actualidad tiene más cantidad de usuarios y descargas, se incrementa a medida que los dispositivos presentan mejor rendimiento para el tratamiento de imágenes. Las grandes empresas desarrolladoras de videojuegos invierten una gran cantidad de tiempo y recursos en su creación, debido a su buena rentabilidad. Existen diferentes categorías, por ejemplo, los juegos educativos son muy utilizados por niños. Algunas aplicaciones educativas incluyen características de gamificación y son utilizadas por profesores y estudiantes.

          .row.justify-content-center.align-items-center(titulo="Sociales")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic7.png', alt='Texto que describa la imagen')
            .col-md-8
              p Se orientan a la comunicación entre personas con gustos o tendencias afines, también permiten la generación de redes de contactos. Son una de las categorías más populares, son las aplicaciones a las que, por lo general, los usuarios dedican mucho más tiempo de uso; entre ellas se encuentran: Facebook, Instagram, Twitter y muchas más.

          .row.justify-content-center.align-items-center(titulo="Utilitarias")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic8.png', alt='Texto que describa la imagen')
            .col-md-8
              p Tienen los tiempos de uso más cortos. Algunas de las más populares son lectores de códigos QR, atención médica, entre otras.

          .row.justify-content-center.align-items-center(titulo="Viaje")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic9.png', alt='Texto que describa la imagen')
            .col-md-8
              p Se utilizan para planear y viajar o desplazarse de un lugar a otro más fácilmente, permiten descubrir todo lo que se necesita saber sobre un sitio específico, facilitando la toma de decisiones y una experiencia de viaje más satisfactoria. Ejemplos de ellas son: Waze, Google Maps, Airbnb, Uber.










</template>

<script>
export default {
  name: 'Tema2',
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
