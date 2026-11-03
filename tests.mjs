import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('100 unique selectable designs with 20 layouts and five typography systems',()=>{
 const data=JSON.parse(fs.readFileSync('docs/designs.json'));
 assert.equal(data.length,100);assert.equal(new Set(data.map(d=>d.id)).size,100);
 assert.equal(new Set(data.map(d=>d.layout)).size,20);assert.equal(new Set(data.map(d=>d.style)).size,5);
 for(const d of data){assert.ok(fs.existsSync(`docs/designs/${d.id}.html`));assert.ok(d.fonts.length===2);}
});
test('all pages carry viewport, accessible title, and three usable preview destinations',()=>{
 const data=JSON.parse(fs.readFileSync('docs/designs.json'));
 for(const d of data){const html=fs.readFileSync(`docs/designs/${d.id}.html`,'utf8');assert.match(html,/name="viewport"/);assert.match(html,/<title>.+<\/title>/);for(const mode of ['home','blog','prompts'])assert.ok(html.includes(`data-mode="${mode}"`));assert.match(html,/prefers-reduced-motion/);}
});
test('gallery exposes filtering, comparison and saved selections',()=>{
 const html=fs.readFileSync('docs/index.html','utf8');for(const id of ['search','layout','style','favorites','compare','export','grid','pagination'])assert.ok(html.includes(`id="${id}"`));
});
