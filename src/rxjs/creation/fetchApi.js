
import { from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { print } from "../Utils";


const url = "http://localhost:3000/employees";

const _fetch = fromFetch(url, {
  selector: res => res.json()
})


_fetch.subscribe(observer => from(observer).subscribe(e => print(e.email)));

// or use pipe in fromFetch !