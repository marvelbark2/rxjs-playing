import { interval, Observable } from "rxjs";
import { print } from "../Utils";

const obs = () => {
  const observable = new Observable(o => o.next(Math.random()));

  observable.subscribe(print);
  observable.subscribe(print);
  observable.subscribe(print);
}
obs();