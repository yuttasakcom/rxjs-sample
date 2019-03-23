const { Observable } = require("rxjs");

const ob = Observable.create(o => {
  o.next(1);
  // o.error("error");
  o.next(2);
  o.complete();

  return () => {
    console.log("unsubscribe");
  };
});

ob.subscribe(
  x => {
    console.log("next:", x);
  },
  () => {
    console.log("error");
  },
  () => {
    console.log("complete");
  }
);
