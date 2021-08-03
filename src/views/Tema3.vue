<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 La monetización de las apps    

    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3 Existen dos tipos de apps: <b>gratuitas y de pago.</b>  Pero existen varias subdivisiones según los contenidos y la manera de generar recursos económicos. Hay formas de monetizar apps gratuitas, transformándolas en ideas de negocio muy rentables, capaces de generar un mayor recaudo que las apps de pago. Los modelos de monetización son los caminos que se pueden utilizar para obtener dinero a través del uso de las aplicaciones. Suele depender de si la app es gratuita, paga o freemium; también de la categoría de la aplicación, por ejemplo, <b>compras dentro de la app (in-app purchase).</b> Algunas apps, por ejemplo, permiten pagar pequeñas cantidades de dinero por ítems (subproductos) separados, que mejoran las prestaciones básicas o generales del producto principal a comprar.
        p En la siguiente imagen se muestran ejemplos de modelos de monetización:
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i1.jpg', alt='Tipos de aplicaciones móviles según funcionalidad')

    .row.mb-5.justify-content-center
      .col-lg-7
        figcaption.customCaption.mb-2  <b>Figura</b> Tipos de aplicaciones móviles según sistema operativo
        figure 
          img.nW(src='@/assets/curso/t3-i2.svg', alt='tipos de contenidos móviles')

    p.mb-5  A continuación, se describen algunos conceptos involucrados en la monetización de apps:

    .row.justifuy-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="Apps gratuitas")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic3.png', alt='Texto que describa la imagen')
            .col-md-8
              p Uno de los mayores beneficios que se logra con una aplicación gratuita es el alcance o cantidad de usuarios a los que puede llegar, debido a que no existen barreras para su descarga y uso.

          .row.justify-content-center.align-items-center(titulo="Apps de pago")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic4.png', alt='Texto que describa la imagen')
            .col-md-8
              p El éxito de una aplicación que debe ser comprada para usarse es difícil de medir; poner un precio a una aplicación es una barrera difícil de superar para un usuario, quien en ocasiones no se arriesga a pagar por algo que aún no conoce.  Habitualmente, se requiere de un número importante de descargas y comentarios positivos sobre su funcionalidad para ser confiables y rentables, lo que genera una buena reputación que atrae a nuevos usuarios.

          .row.justify-content-center.align-items-center(titulo="El modelo freemium")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic6.png', alt='Texto que describa la imagen')
            .col-md-8
              p Es una combinación de los tipos descritos previamente. Su nombre es una mezcla de las palabras inglesas free y premium. Son aplicaciones de descarga gratuita, que permiten un uso básico y limitado de sus funcionalidades, y que requieren de un pago para poder usar funcionalidades avanzadas.

          .row.justify-content-center.align-items-center(titulo="Free trial")       
            .col-md-2
              figure
                img(src='@/assets/curso/t3-ic1.png', alt='Texto que describa la imagen')
            .col-md-8
              p Pueden ser utilizadas de manera gratuita durante un tiempo limitado; después de finalizar el tiempo estipulado, se debe pagar para seguir utilizándola.


          .row.justify-content-center.align-items-center(titulo="Pagar por la versión completa")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic2.png', alt='Texto que describa la imagen')
            .col-md-8
              p Son aplicaciones que se desarrollan para diferentes perfiles de usuario; por ejemplo, incluyen una versión gratuita que permite usar funcionalidades básicas con algunas limitaciones o publicidad, y otra versión paga que incluye otras funcionalidades o que elimina la publicidad.


          .row.justify-content-center.align-items-center(titulo="Publicidad")       
            .col-md-2
              figure
                img(src='@/assets/curso/t2-ic3.png', alt='Texto que describa la imagen')
            .col-md-8
              p La publicidad puede usarse en cualquier tipo de aplicaciones como mecanismo para obtener un beneficio económico. Consiste en la inclusión de avisos con información publicitaria a los que pueden ingresar los usuarios para acceder a otras apps, descargar otras aplicaciones, comprar productos, entre otros. El modelo de ganancia está relacionado con la cantidad de anuncios visualizados y al acceso a la información que promueve cada publicación. Algunos de sus inconvenientes son la arbitrariedad y aleatoriedad con la que se invade la privacidad del usuario al mostrar dicha publicidad, aunque no sea de temáticas de interés para quien usa la app. Cada sistema operativo tiene sus propias condiciones y sistema de publicidad.

          .row.justify-content-center.align-items-center(titulo="Funcionalidad")       
            .col-md-2
              figure
                img(src='@/assets/curso/t3-ic3.png', alt='Texto que describa la imagen')
            .col-md-8
              p Acceso a servicios básicos que permiten conocer la interfaz y funcionalidad de la app; dentro de la app se debe pagar para ampliar el acceso a los servicios o tener privilegios que no se tienen con el servicio básico. Este modelo es popular en servicios de streaming de video o música, como Spotify, en los cuales con una cuenta gratuita se escuchan anuncios entre canciones y con una cuenta de pago mensual (premium en este caso) se usa el servicio sin ningún tipo de publicidad.







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
