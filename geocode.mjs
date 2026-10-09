/* AIDI, one-off geocoder (development tool).

   Looks up a coordinate for every dealer in data.js via OpenStreetMap's
   Nominatim service and writes the results to assets/geo.json. Run it again
   only when dealers are added; the cache means existing entries are not
   re-queried, and Nominatim's usage policy (max 1 request per second, a real
   User-Agent) is respected.

   Run:  node geocode.mjs
*/

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';

const ctx = createContext({});
const { DEALERS } = runInContext(
  readFileSync('data.js', 'utf8') + '\n({ DEALERS })', ctx
);

const COUNTRY = {
  be: 'Belgium', nl: 'Netherlands', de: 'Germany', fr: 'France',
  gb: 'United Kingdom', it: 'Italy', hu: 'Hungary', hr: 'Croatia',
  us: 'United States', cz: 'Czechia', pl: 'Poland'
};

const CACHE = 'assets/geo.json';
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};

const UA = 'AIDI-website-build/1.0 (+https://www.aidi.be; info@aidi.be)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function lookup(params) {
  const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&' +
    new URLSearchParams(params).toString();
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return null;
  const json = await res.json();
  if (!json.length) return null;
  return { lat: +(+json[0].lat).toFixed(5), lon: +(+json[0].lon).toFixed(5) };
}

let done = 0, hit = 0, miss = [];

for (const d of DEALERS) {
  const key = d.name;
  if (cache[key]) { done++; continue; }
  if (!d.city) { miss.push(d.name + ' (no city)'); continue; }

  const country = COUNTRY[d.c];
  /* Postcode plus town is far more reliable than a full street string. */
  let point = await lookup({ country, postalcode: d.zip || '', city: d.city });
  await sleep(1100);
  if (!point) {
    point = await lookup({ country, city: d.city });
    await sleep(1100);
  }
  if (point) {
    cache[key] = point;
    hit++;
    console.log('ok  ', d.city.padEnd(26), point.lat, point.lon);
  } else {
    miss.push(d.name + ' / ' + d.city);
    console.log('MISS', d.city);
  }
  done++;
  writeFileSync(CACHE, JSON.stringify(cache, null, 1));
}

writeFileSync(CACHE, JSON.stringify(cache, null, 1));
console.log('\n%d dealers, %d newly geocoded, %d cached total', DEALERS.length, hit, Object.keys(cache).length);
if (miss.length) {
  console.log('not located (%d):', miss.length);
  miss.forEach((m) => console.log('   ', m));
}
