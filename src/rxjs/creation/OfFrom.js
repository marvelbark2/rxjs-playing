import { of, from, fromEvent } from "rxjs";
import { print } from "./Utils";

const hello = from("hello");

hello.subscribe(print)

const world = of("world");

world.subscribe(print);

const event = fromEvent(document, "click");
event.subscribe(print);