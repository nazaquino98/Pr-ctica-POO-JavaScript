# 5. Análisis final (teórico)

1. **Funciones constructoras con prototype vs class**  
   - **Similitudes:** Ambas permiten crear objetos y reutilizar métodos.  
   - **Diferencias:** `class` es más moderna y clara; la función constructora es más antigua y requiere manipular `prototype` manualmente.  
   - **Ventajas class:** Sintaxis más limpia y legible.  
   - **Ventajas constructoras:** Más flexibles para ciertos patrones antiguos.  
   - **Desventajas:** Las constructoras son más propensas a errores de sintaxis y menos intuitivas.  

2. **Ventajas de getters y setters**  
   - Permiten controlar la lectura y escritura de propiedades.  
   - Facilitan validaciones y transformaciones sin cambiar la forma en que se accede a los datos.  
   - Mejoran el encapsulamiento y la seguridad.  

3. **Problemas al modificar prototipos nativos como String**  
   - Puede romper código existente o librerías que dependan del comportamiento original.  
   - Puede generar incompatibilidades con otros desarrolladores o entornos.  
   - Es difícil mantener y depurar.  

4. **Asignar método al prototype vs usar Object.assign**  
   - **Directo al prototype:** Añade un solo método de forma específica y clara.  
   - **Object.assign:** Permite copiar varios métodos de un objeto a otro prototype en una sola operación, pero puede sobreescribir métodos existentes sin querer. 
