'use strict';

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
    require('raf').polyfill(global);
}

require('core-js/fn/object/assign');
// require('core-js/fn/object/keys'); // even your grandma supports Object.keys()...
require('core-js/fn/object/values');
require('core-js/fn/object/entries');
// require('core-js/fn/object/freeze');
// require('core-js/fn/object/seal');
// require('core-js/fn/object/is-frozen');
// require('core-js/fn/object/is-sealed');
// require('core-js/fn/symbol');
require('core-js/fn/promise');
// require('core-js/fn/map');
// require('core-js/fn/weak-map');
// require('core-js/fn/set');
// require('core-js/fn/weak-set');
