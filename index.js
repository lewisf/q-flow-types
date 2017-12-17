// @flow
import Q from 'q' ;

// Test Q's "resolves"
Q(true)
  .then(y => {
    (y: boolean)
  })

// Test Q's "resolves": with another Q promise
Q(Q(true))
  .then(y => {
    (y: string)
  })

// Test Q then returns a Promise
Q(Q(true))
  .then(y => {
    return 'asdf';
  })
  .then(y => {
    (y: string)
  });

// Test Q then returns a Promise
Q(Q(true))
  .then(y => {
    return Q('asdf');
  })
  .then(y => {
    (y: boolean)
  });
