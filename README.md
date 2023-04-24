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
-------
## **Explicación de la Directiva @layer en Tailwind**

En Tailwind, existen tres categorías principales de estilos:

- **@tailwind base**: maneja los elementos HTML (div, span, ul, p, h1, etc).
- **@tailwind components**: maneja las clases.
- **@tailwind utilities**: maneja las utilidades, que son todas aquellas propiedades referentes a los atributos CSS (por ejemplo, filter: grayscale(100%)).

Cuando hablamos de la directiva @layer, lo que hacemos es sobrescribir o definir nuestros propios estilos, componentes o configuraciones para cualquiera de estas tres categorías.

### **Modificación de clases predefinidas**

Tailwind ya tiene estilos predefinidos en sus clases, por ejemplo, text-small puede hacer que un texto sea de tamaño 12px. Pero ¿qué sucede si quieres que ese texto sea de 11px y no de 12px? Para lograr esto, puedes usar @layer components y modificar ese valor en una clase específica.

### **Creación de tus propias clases**

También puedes crear tus propias clases y definir un conjunto de propiedades. Por ejemplo, puedes crear una clase .card y definir sus propiedades en @layer components:

```css
@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
}
```

Después, dentro de tu HTML, solo llamas a la clase .card y listo.

**[Breakpoints:](https://tailwindcss.com/docs/responsive-design)**

- sm -> 640px
- md -> 768px
- lg -> 1024px
- xl -> 1280px
- 2xl -> 1536px