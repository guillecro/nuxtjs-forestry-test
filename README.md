# obsjusticia-web

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

#### Notes from Guille

Hola,

En /assets/_app.scss podes agregar clases GLOBALES.

Sino, en los componentes `.vue` podes agregar un `<style lang="scss" scoped>  </style>` con tus clases exclusivas para ese componente.

```vue
<style lang="scss" scoped>
.my-class{
  //font-size: 10px;
}
</style>
```



Luego te voy a dejar escrito mas detalles del repositorio. Pero para que te des una idea: Tecnologias a usar

* VueJS
* NuxtJS, que es un framework para crear VueJS SSR Applications
* Bulma CSS Framework
* Buefy, que es una libreria de componentes VueJS con el estilo de BulmaCSS

Una playlist muy interesante para ver conceptos basicos de VueJS: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa

Esto si es importante que lo veas: La sintaxis de los `.vue` es un Single File Component: https://vuejs.org/v2/guide/single-file-components.html

Si necesitas agregar plugins, avisame.