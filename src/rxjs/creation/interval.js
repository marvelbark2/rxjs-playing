import { interval } from "rxjs";
import { print } from "../Utils";

const periodic = interval(1000);

periodic.subscribe(print);