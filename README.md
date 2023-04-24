# Apuntes a tener en cuenta con Tailwindcss
----
**Proceso de instalacion e inicializacion de tailwindcss**
- Instalar Tailwind como un plugin de PostCSS: 
  `npm install -D tailwindcss postcss autoprefixer`
- para crear el archivo de plantillas: `tailwind.config.js` uzamos el comando: `npx tailwindcss init` y en el archivo que se nos crea colocamos la siguiente configuracion: 
```
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
- Incluir Tailwind en el CSS agregando las directivas a `src/css/tailwind.css`:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Para correr los estilos de Tailwind se necesita ejecutar el siguiente comando:
  
  `npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch`

donde estamos indicando que nuestro archivo tailwind.css que proviene de src haga un build en la carpeta de ``public`` al archivo `tailwind.css`.

**Hay dos principios para trabajar con Tailwind:**

- Mobile First → Pensado principalmente para mejorar la experiencia de usuario. Permite identificar las partes más importantes de nuestro proyecto. En otras palabras, prioriza el desarrollo pensando en los dispositivos móviles.

- Utility First → Basado en utilidades el cual permite tener una estructura más limpia de nuestros estilos, el desarrollo es más rápido ya que todo se trabaja dentro del mismo archivo. En otras palabras, es la forma en que se nombran y se crean las clases de estilos, es decir, son clases descriptivas de la utilidad que nos dan. Se trata de construir componentes a partir de clases con nombres descriptivos.