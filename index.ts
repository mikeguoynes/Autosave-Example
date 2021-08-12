import './style.css';

import { of, map, fromEvent, debounceTime } from 'rxjs';

const searchField = document.getElementById('search');
const typing$ = fromEvent(searchField, 'keyup');
let noDebounceRequests = 0;
let withDebounceRequests = 0;
typing$.subscribe(res => {
  noDebounceRequests++;
  document.getElementById('result-1').textContent = noDebounceRequests;
});

// Delay 300 ms from after the events complete w/ debounceTime
typing$.pipe(debounceTime(300)).subscribe(res => {
  console.log('Sent Request to autosave WITH debouncing'); // Open the console in the bottom right to see results.
  withDebounceRequests++;
  document.getElementById('result-2').textContent = withDebounceRequests;
});
