import { of, asyncScheduler } from "rxjs";
import { print } from "./Utils";

const sync = () => {
  const ofHello = of("hello");
  ofHello.subscribe(print);

  print("world");
}

const async = () => {
  const ofHello = of("hello", asyncScheduler);
  ofHello.subscribe(print);

  print("world");
}

//sync();
async();