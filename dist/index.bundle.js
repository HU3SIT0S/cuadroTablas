"use strict";
(self["webpackChunkcuadrotablas"] = self["webpackChunkcuadrotablas"] || []).push([["index"],{

/***/ "./src/js/modules/registro.js":
/*!************************************!*\
  !*** ./src/js/modules/registro.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ manejarRegistro)
/* harmony export */ });
function manejarRegistro() {
  const formulario = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensaje');

  if (!formulario || !mensaje) {
    console.error('❌ Error: No se encontró el formulario o el mensaje.');
    return;
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (!nombre || !documento || !ciudad || !telefono || !correo) {
      mensaje.textContent = '⚠️ Todos los campos son obligatorios.';
      mensaje.style.color = 'red';
    } else {
      mensaje.textContent = `✅ Registro exitoso para ${nombre}.`;
      mensaje.style.color = 'green';
    }
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/registro.js */ "./src/js/modules/registro.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDMUJ1RDs7QUFFdkQ7QUFDQSxFQUFFLG1FQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdWFkcm90YWJsYXMvLi9zcmMvanMvbW9kdWxlcy9yZWdpc3Ryby5qcyIsIndlYnBhY2s6Ly9jdWFkcm90YWJsYXMvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYW5lamFyUmVnaXN0cm8oKSB7XG4gIGNvbnN0IGZvcm11bGFyaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0cm9Gb3JtJyk7XG4gIGNvbnN0IG1lbnNhamUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVuc2FqZScpO1xuXG4gIGlmICghZm9ybXVsYXJpbyB8fCAhbWVuc2FqZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvcjogTm8gc2UgZW5jb250csOzIGVsIGZvcm11bGFyaW8gbyBlbCBtZW5zYWplLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvcm11bGFyaW8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5vbWJyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21icmUnKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZG9jdW1lbnRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50bycpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjaXVkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l1ZGFkJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHRlbGVmb25vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbGVmb25vJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGNvcnJlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JyZW8nKS52YWx1ZS50cmltKCk7XG5cbiAgICBpZiAoIW5vbWJyZSB8fCAhZG9jdW1lbnRvIHx8ICFjaXVkYWQgfHwgIXRlbGVmb25vIHx8ICFjb3JyZW8pIHtcbiAgICAgIG1lbnNhamUudGV4dENvbnRlbnQgPSAn4pqg77iPIFRvZG9zIGxvcyBjYW1wb3Mgc29uIG9ibGlnYXRvcmlvcy4nO1xuICAgICAgbWVuc2FqZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW5zYWplLnRleHRDb250ZW50ID0gYOKchSBSZWdpc3RybyBleGl0b3NvIHBhcmEgJHtub21icmV9LmA7XG4gICAgICBtZW5zYWplLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1hbmVqYXJSZWdpc3RybyBmcm9tICcuL2pzL21vZHVsZXMvcmVnaXN0cm8uanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBtYW5lamFyUmVnaXN0cm8oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9