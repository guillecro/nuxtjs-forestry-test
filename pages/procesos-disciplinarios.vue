<template>
  <section>
    <section class="section">
      <div class="my-3 py-6" />
      <div class="container">
        <div class="columns is-centered my-6">
          <div class="column is-8">
            <div class="has-text-centered">
              <h1 class="title is-2 is-700">
                Procesos disciplinarios a jueces y juezas
              </h1>
              <br>
              <p class="is-size-5">
                ¡Te vamos a mostrar cómo funcionan los procesos de denuncias a jueces de la Nación!
              </p>
              <br>
              <br>
              <p class="is-size-5">
                <i class="far fa-calendar fa-2x mb-3" />
              </p>
              <p class="is-size-3 is-800">
                23 AÑOS
              </p>
              <br>
              <br>
            </div>
            <hr class="has-background-black">
            <div class="is-clearfix">
              <p class="is-pulled-left is-size-5">
                1998
              </p>
              <p class="is-pulled-right is-size-5">
                2020
              </p>
            </div>
            <div class="columns mt-3 is-centered">
              <div class="column is-narrow">
                <div class="px-2">
                  <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                  <span class="is-700 is-size-2">3370</span><br><span class="is-400">DESESTIMADAS<br></span>
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                  <span class="is-700 is-size-2">245</span><br><span class="is-400">CADUCADAS<br></span>
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                  <span class="is-700 is-size-2">42</span><br><span class="is-400">SANCIONES<br></span>
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                  <span class="is-700 is-size-2">36</span><br><span class="is-400">JUICIOS<br>PÓLITICOS<br></span>
                </div>
              </div>
            </div>
            <div class="buttons is-centered mt-6">
              <a href="#graphs" class="button is-primary"><i class="fas fa-chart-area fa-fw" />&nbsp;GRÁFICOS</a>
              <a href="#lexico" class="button is-light">Léxico para no especialistas</a>
              <a href="#fuente" class="button is-light">Fuentes y notas</a>
              <a href="#creditos" class="button is-light">Créditos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="overlay-graphs container">
      <!-- <a href="#graphs" class="go-fullscreen button is-dark is-outlined"><i class="fas fa-expand" />&nbsp;&nbsp;Centrar</a> -->
      <!-- <div class="the-buttons buttons is-centered">
        <a href="#lexico" class="button is-primary">Léxico para no abogades</a>
        <a href="#fuente" class="button is-light">Fuentes y notas</a>
        <a href="#creditos" class="button is-light">Créditos</a>
      </div> -->
      <!-- <a href="#graphs" class="go-fullscreen-bottom"><i class="fas fa-arrow-up fa-2x" /></a> -->
      <iframe id="graphs" src="https://democraciaenred.github.io/obsjusticia-graphs/" class="the-graphs" loading="lazy" />
      <!-- <iframe id="graphs" src="http://localhost:8000" class="the-graphs" loading="lazy" /> -->
    </div>
    <div id="lexico" class="section">
      <!-- <img id="lexico" src="~/assets/img/001.png" class="image is-centered"> -->
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <h1 class="title is-2 has-text-centered">
              Léxico para no especialistas
            </h1>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Desestimada
                  </h5>
                  <h5 class="subtitle is-5">
                    🗑️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>La mayoría de las causas fueron desestimadas. Un alto número se desestiman <b><i>inlimines</i></b>, esto significa que no cumplen con los requisitos mínimos establecidos por el consejo de la Magistratura</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Causas caducadas
                  </h5>
                  <h5 class="subtitle is-5">
                    📖
                  </h5>
                </div>
                <div class="column is-8">
                  <p>(Prescribieron) por la falta de voluntad o impericia del Consejo de la Magistratura: la ley establece que tiene <b>3 años</b> para investigar y determinar un veredicto, caso contrario se cierra por la falta de eficiencia del Consejo. En definitiva, todos esos casos son casos de injusticias.</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Juicio Político
                  </h5>
                  <h5 class="subtitle is-5">
                    ⚖️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    Algunas denuncias por su nivel de gravedad llegan a un Jurado de Enjuiciamiento
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Sanción
                  </h5>
                  <h5 class="subtitle is-5">
                    👩‍⚖️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    Estas son las causas que tuvieron una sanción, puede ser una sanción firme, sanción disciplinaria y por esto reciben una advertencia, un apercibimiento o una multa
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Renuncia
                  </h5>
                  <h5 class="subtitle is-5">
                    👻
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    En muchos casos el juez renuncia antes de que la denuncia termine
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Consejo de la Magistratura
                  </h5>
                  <h5 class="subtitle is-5">
                    🏛️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    El Consejo de la Magistratura es el órgano creado por la Constitución para seleccionar jueces y juezas, tramitar procesos disciplinarios o de remoción y administrar los recursos del Poder Judicial de la Nación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fuente" class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Fuente y notas
        </h1>
        <br>
        <h6 class="subtitle is-5">
          Última actualización
        </h6>
        <h6 class="title is-5 is-800">
          {{ $config.dataDateUpdated }}
        </h6>
        <div class="content">
          <p class="is-300">
            Las visualizaciones de esta web se basan en los datos oficiales publicados en el consejo de la magistratura
          </p>
          <p class="is-300">
            Data set original de expedientes en trámite de denuncias a magistrados — <a href="http://consejoabierto.pjn.gov.ar/dataset/expedientesentramite" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p class="is-300">
            Data set original de expedientes culminados de denuncias a magistrados — <a href="http://consejoabierto.pjn.gov.ar/dataset/expedientesculminados" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p class="is-300">
            Data set original de juicios políticos — <a href="http://consejoabierto.pjn.gov.ar/dataset/juiciospoliticos" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p>Los datos publicados por el Consejo de la Magistratura están incompletos y en muchos casos no podemos certificar su rigurosidad. No hay datos publicados con perspectiva de género</p>
        </div>
      </div>
    </div>
    <div id="creditos" class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Créditos
        </h1>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Idea general
        </h6>
        <a href="https://acij.org.ar" target="_blank"><img src="~/assets/img/acij-logo-black.png" width="150" class="image is-centered"></a>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Desarrollado por
        </h6>
        <a href="https://democraciaenred.org" target="_blank"><img src="~/assets/img/logo-der-black.svg" width="150" class="image is-centered"></a>
        <br>
        <br>
        <h6 class="subtitle is-5">
          Visualización de datos
        </h6>
        <h6 class="title is-5">
          Javier Lujan<br><a href=" http://javierlujan.com.ar/" target="_blank">http://javierlujan.com.ar/</a>
        </h6>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.line {
display:inline-block;
width: 100px;
height: 6px;
margin: 1em 0em 2em 0em;
background-color: #00B1AF;
}
.count-number{
  line-height: normal;
}
.the-graphs{
  width: 100%;
  // width: 100vw;
  height: 100vh;
  max-height: 1080px;
  overflow-y: hidden;
}
.specialbg{
  background-color: #ebebeb;
}
.overlay-graphs{
  // min-height: 100vh;
  // width: 100vw;
  .the-buttons{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .column{
    position: relative
  }
}
.go-fullscreen{
  position: absolute;
  top: 20px;
  right: 27px;
}
.go-fullscreen-bottom{
  position: absolute;
  bottom: 20px;
  right: 40px;
  color: #6b6b6b;
}
</style>
