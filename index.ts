import './style.css';
import { of, map, fromEvent, debounceTime } from 'rxjs';

const searchField = document.getElementById('search');
const typing$ = fromEvent(searchField, 'keyup');
let noDebounceRequests = 0;
let withDebounceRequests = 0;

typing$.subscribe(() => {
  noDebounceRequests++;
  document.getElementById('result-1').textContent = noDebounceRequests;
});

// Delay 300 ms from after the events complete w/ debounceTime
typing$.pipe(debounceTime(300)).subscribe(() => {
  withDebounceRequests++;
  document.getElementById('result-2').textContent = withDebounceRequests;
});

document.getElementById('result-1').textContent = noDebounceRequests;
document.getElementById('result-2').textContent = withDebounceRequests;
