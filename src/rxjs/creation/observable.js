import { Observable } from "rxjs";
import { print } from "./Utils";

const observable = new Observable(observer => {
  observer.next("A");
  observer.next("B");
  observer.next("C");
});
observable.subscribe(print);