// @flow
import Q from 'q' ;

Q.reject(new Error('asdf'));

// Test Q's "resolves": with another Q promise
const z = new Q(true);

z.then((yasdfasf) => {
  (yasdfasf: string);
  return 'asdf';
}).fail(e => {
  return 'asdf';
})

// Test Q then returns a Promise
Q(true)
  .then((ybcd) => {
    return ybcd;
  })
  .then(yasdf => {
  });


const y = Q.all([
  1,
  true
]).spread((a, b) => {
  return 'asdf'
}).then((caca) => {

});
