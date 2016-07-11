export default class Config {
  static port = 8000;
  static subDomains = ['api'];
  static pages = ['', 'home', 'tracks', 'social', 'about'];


  static errors = ['404','301','500','300'];
  
  static scripts = {
    polyfills: [
      'vendor/jquery/dist/jquery.min.js',
      'vendor/es6-shim/es6-shim.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.src.js',
      'vendor/zone.js/dist/zone.js'
    ]
  };
};