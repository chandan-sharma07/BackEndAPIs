/* const cat = require('cat-me')
console.log(cat()) */

// 1. ES Module (Modern way)
// If your project uses ESM (Vite / React / modern Node):
/* import cat from 'cat-me';
console.log(cat()); */

// 2. Using dynamic import (async)
/* const cat = await import('cat-me');
console.log(cat.default()); */

// 3. One-line version
// console.log(require('cat-me')());

// 4. Using arrow function wrapper
/* const getCat = () => require('cat-me')(); 
console.log(getCat()); */