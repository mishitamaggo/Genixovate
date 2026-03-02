const fs = require('fs');
const contentWithLineNums = `1: <!DOCTYPE html>
2: <html lang="en">
3: 
4: <head>
5: <!-- Google tag (gtag.js) -->
6: <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVGYVD58B3"></script>
7: <script>
8:   window.dataLayer = window.dataLayer || [];
9:   function gtag(){dataLayer.push(arguments);}
10:   gtag('js', new Date());
11: 
12:   gtag('config', 'G-LVGYVD58B3');
13: </script>
14: 
15:     <meta charset="UTF-8">
16:     <meta name="robots" content="index, follow" />
17:     <meta name="viewport" content="width=device-width, initial-scale=1.0">
18:     <title>AI Tech Packs | Fast Generation for Fashion Brands    </title>
19:     <meta name="description"
20:         content="Experience AI Tech Pack Generation for Fashion Brands. Upload your design sketches and receive manufacturing-ready tech packs within twenty-four hours.">
21:     <link rel="preconnect" href="https://fonts.googleapis.com">
22:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
23:     <link
24:         href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
25:         rel="stylesheet">
26:     <script src="https://unpkg.com/@phosphor-icons/web"></script>
27:     <link rel="stylesheet" href="style.css?v=1.3">
28:     <style>
29:         .includes-grid {
30:             display: grid;
31:             grid-template-columns: 1fr 1fr;
32:             gap: 15px;
33:             margin-top: 40px
34:         }
35: 
36:         .include-item {
37:             display: flex;
38:             gap: 12px;
39:             align-items: flex-start;
40:             font-size: .88rem;
41:             color: var(--text-secondary);
42:             padding: 10px 0;
43:             border-bottom: 1px solid rgba(0, 0, 0, .05)
44:         }
45: 
46:         .include-item::before {
47:             content: "✓";
48:             color: var(--text-primary);
49:             font-weight: 600;
50:             flex-shrink: 0;
51:             margin-top: 1px
52:         }
53: 
54:         .how-steps {
55:             display: grid;
56:             gap: 0
57:         }
58: 
59:         .how-item {
60:             display: flex;
61:             gap: 25px;
62:             padding: 30px 0;
63:             border-bottom: 1px solid rgba(0, 0, 0, .07)
64:         }
65: 
66:         .how-item:last-child {
67:             border-bottom: none
68:         }
69: 
70:         .how-num {
71:             font-family: 'Playfair Display', serif;
72:             font-size: 2rem;
73:             color: rgba(0, 0, 0, .12);
74:             min-width: 50px;
75:             line-height: 1.2
76:         }
77: 
78:         .how-content h4 {
79:             font-size: .95rem;
80:             font-weight: 600;
81:             margin-bottom: 6px;
82:             color: var(--text-primary)
83:         }
84: 
85:         .how-content p {
86:             font-size: .85rem;
87:             color: var(--text-secondary);
88:             line-height: 1.7
89:         }
90: 
91:         .two-path-how {
92:             display: grid;
93:             grid-template-columns: 1fr 1fr;
94:             gap: 60px;
95:             margin-top: 60px
96:         }
97: 
98:         .path-heading {
99:             font-size: .75rem;
100:             letter-spacing: .2em;
101:             text-transform: uppercase;
102:             font-weight: 600;
103:             padding: 8px 16px;
104:             border: 1px solid var(--text-primary);
105:             display: inline-block;
106:             margin-bottom: 30px
107:         }
108: 
109:         .path-cost {
110:             padding: 20px;
111:             background: var(--text-primary);
112:             color: #fff;
113:             margin-top: 20px;
114:             font-size: .9rem
115:         }
116: 
117:         .path-cost strong {
118:             color: #fff
119:         }
120: 
121:         .comparison-table {
122:             width: 100%;
123:             border-collapse: collapse;
124:             margin-top: 40px
125:         }
126: 
127:         .comparison-table th {
128:             padding: 15px 20px;
129:             font-size: .75rem;
130:             letter-spacing: .1em;
131:             text-transform: uppercase;
132:             font-weight: 600;
133:             border-bottom: 2px solid var(--text-primary);
134:             text-align: left
135:         }
136: 
137:         .comparison-table td {
138:             padding: 15px 20px;
139:             font-size: .88rem;
140:             color: var(--text-secondary);
141:             border-bottom: 1px solid rgba(0, 0, 0, .06)
142:         }
143: 
144:         .comparison-table td:first-child {
145:             color: var(--text-primary);
146:             font-weight: 500
147:         }
148: 
149:         .comparison-table td.genixovate-col {
150:             color: var(--text-primary);
151:             font-weight: 600
152:         }
153: 
154:         .savings-row {
155:             display: flex;
156:             gap: 30px;
157:             margin-top: 40px;
158:             flex-wrap: wrap
159:         }
160: 
161:         .savings-item {
162:             flex: 1;
163:             min-width: 200px;
164:             padding: 25px;
165:             border: 1px solid rgba(0, 0, 0, .1)
166:         }
167: 
168:         .savings-item h4 {
169:             font-size: .8rem;
170:             letter-spacing: .1em;
171:             text-transform: uppercase;
172:             font-weight: 600;
173:             margin-bottom: 10px;
174:             color: var(--text-muted)
175:         }
176: 
177:         .savings-item p {
178:             font-size: .9rem;
179:             color: var(--text-secondary)
180:         }
181: 
182:         .footer-new {
183:             background: #0a0a0a;
184:             padding: 80px 0 0
185:         }
186: 
187:         .footer-new-grid {
188:             display: grid;
189:             grid-template-columns: 1.5fr 1fr 1fr 1fr;
190:             gap: 60px;
191:             margin-bottom: 60px
192:         }
193: 
194:         .footer-new-brand .logo {
195:             font-family: 'Playfair Display', serif;
196:             font-size: 1.5rem;
197:             color: #fff;
198:             margin-bottom: 10px;
199:             display: block
200:         }
201: 
202:         .footer-new-brand p {
203:             color: rgba(255, 255, 255, .45);
204:             font-size: .85rem;
205:             margin-bottom: 25px
206:         }
207: 
208:         .footer-social {
209:             display: flex;
210:             gap: 15px
211:         }
212: 
213:         .footer-social a {
214:             color: rgba(255, 255, 255, .5);
215:             text-decoration: none;
216:             font-size: .8rem;
217:             border: 1px solid rgba(255, 255, 255, .2);
218:             padding: 6px 12px
219:         }
220: 
221:         .footer-col h4, .footer-col h3 {
222:             color: rgba(255, 255, 255, .5);
223:             font-size: .7rem;
224:             font-weight: 600;
225:             letter-spacing: .2em;
226:             text-transform: uppercase;
227:             margin-bottom: 25px
228:         }
229: 
230:         .footer-col ul {
231:             list-style: none
232:         }
233: 
234:         .footer-col ul li {
235:             margin-bottom: 12px
236:         }
237: 
238:         .footer-col ul li a {
239:             color: rgba(255, 255, 255, .65);
240:             text-decoration: none;
241:             font-size: .88rem
242:         }
243: 
244:         .footer-new-bottom {
245:             border-top: 1px solid rgba(255, 255, 255, .08);
246:             padding: 25px 0;
247:             display: flex;
248:             justify-content: space-between;
249:             align-items: center
250:         }
251: 
252:         .footer-new-bottom p {
253:             color: rgba(255, 255, 255, .35);
254:             font-size: .8rem
255:         }
256:     </style>
257:     <link rel="icon" type="image/png" href="assets/g-favicon.png">
258: </head>
259: 
260: <body>
261:     <nav class="navbar">
262:         <div class="container nav-container">
263:             <a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 64px; width: auto; mix-blend-mode: multiply; margin-left: -15px;"></a>
264:             <button class="mobile-menu-btn" aria-label="Toggle menu"><i class="ph ph-list"></i></button>
265:             <ul class="nav-links">
266:                 <li><a href="index.html">Home</a></li>
267:                 <li><a href="services.html">Services</a></li>
268:                 <li><a href="pricing.html">Pricing</a></li>
269:                 <li><a href="how-we-build.html">How We Build</a></li>
270:                 <li><a href="about.html">About</a></li>
271:                 <li><a href="contact.html" class="btn btn-primary">Start a Project</a></li>
272:             </ul>
273:         </div>
274:     </nav>
275: 
276:     <!-- Hero -->
277:     <header class="hero" style="min-height:55vh;">
278:         <div class="hero-video-wrapper">
279:             <img src="assets/hero_bg_1772274963937.png" class="hero-bg" alt="AI Tech Pack Generation">
280:             <div class="hero-overlay"></div>
281:         </div>
282:         <div class="container hero-content fade-up-element">
283:             <h1 class="hero-title">AI Tech Pack Generation<br>for Fashion Brands</h1>
284:             <p class="hero-subtitle">Upload design sketches. Get manufacturing-ready tech packs in 24 hours.<br>₹8,000
285:                 per pack vs ₹20–40K traditional cost.</p>
286:             <div class="hero-cta">
287:                 <a href="contact.html" class="btn btn-primary">Try Demo</a>
288:                 <a href="pricing.html" class="btn btn-secondary">Buy Now</a>
289:                 <a href="contact.html" class="btn btn-secondary">Add to Service Package</a>
290:             </div>
291:         </div>
292:     </header>
293: 
294:     <!-- What You Get -->
295:     <section class="section relative-z">
296:         <div class="container fade-up-element" style="max-width:900px;">
297:             <div class="section-header">
298:                 <span class="section-kicker">Deliverables</span>
299:                 <h2 class="section-title">Complete Manufacturing Specifications</h2>
300:                 <p class="section-desc">Every tech pack includes everything your manufacturer needs to produce
301:                     accurately.</p>
302:             </div>
303: 
304:             <div class="includes-grid">
305:                 <div class="include-item">Technical drawings (front, back, side, detail views)</div>
306:                 <div class="include-item">Size grading (XS–3XL with precise measurements in cm/inches)</div>
307:                 <div class="include-item">Material specifications (fabric type, weight, composition)</div>
308:                 <div class="include-item">Construction details (stitch types, seam finishes)</div>
309:                 <div class="include-item">Trim and accessory specifications (buttons, zippers, labels)</div>
310:                 <div class="include-item">Color references (Pantone codes where applicable)</div>
311:                 <div class="include-item">Bill of materials (BOM)</div>
312:                 <div class="include-item">Manufacturing cost estimates</div>
313:                 <div class="include-item">Production timeline recommendations</div>
314:                 <div class="include-item">High-resolution PDF (print-ready for manufacturers)</div>
315:             </div>
316: 
317:             <div
318:                 style="margin-top:30px;padding:20px;background:rgba(0,0,0,.03);border-left:3px solid var(--text-primary);">
319:                 <strong>Format:</strong> High-resolution PDF (print-ready for manufacturers) &nbsp;|&nbsp;
320:                 <strong>Turnaround:</strong> 24 hours from sketch upload
321:             </div>
322:         </div>
323:     </section>
324: 
325:     <!-- How It Works -->
326:     <section class="section relative-z" style="background:#faf9f7;">
327:         <div class="container fade-up-element">
328:             <div class="section-header" style="text-align:center;">
329:                 <span class="section-kicker">Process</span>
330:                 <h2 class="section-title">How It Works</h2>
331:             </div>
332: 
333:             <div class="two-path-how">
334:                 <!-- Self-Serve -->
335:                 <div>
336:                     <span class="path-heading">Self-Serve Process</span>
337:                     <div class="how-steps">
338:                         <div class="how-item">
339:                             <div class="how-num">01</div>
340:                             <div class="how-content">
341:                                 <h3>Upload Design Sketch</h3>
342:                                 <p>Photo of hand-drawn sketch or digital design file. Add basic specs (garment type,
343:                                     approximate measurements).</p>
344:                             </div>
345:                         </div>
346:                         <div class="how-item">
347:                             <div class="how-num">02</div>
348:                             <div class="how-content">
349:                                 <h3>AI Generates Tech Pack</h3>
350:                                 <p>Our AI analyzes your design and creates complete specifications. Includes all
351:                                     technical details manufacturers need.</p>
352:                             </div>
353:                         </div>
354:                         <div class="how-item">
355:                             <div class="how-num">03</div>
356:                             <div class="how-content">
357:                                 <h3>Review & Download</h3>
358:                                 <p>You receive draft tech pack within 24 hours. Review, request adjustments (1 free
359:                                     revision). Download final PDF.</p>
360:                             </div>
361:                         </div>
362:                         <div class="how-item">
363:                             <div class="how-num">04</div>
364:                             <div class="how-content">
365:                                 <h3>Send to Manufacturer</h3>
366:                                 <p>Tech pack is ready to send directly to your manufacturer. No additional work needed.
367:                                 </p>
368:                             </div>
369:                         </div>
370:                     </div>
371:                     <div class="path-cost">
372:                         <strong>Cost:</strong> ₹8,000 per tech pack<br>
373:                         or ₹30,000/month (5 tech packs)
374:                     </div>
375:                     <div style="margin-top:20px;">
376:                         <a href="contact.html" class="btn btn-primary">Start Now</a>
377:                     </div>
378:                 </div>
379: 
380:                 <!-- With Human Oversight -->
381:                 <div>
382:                     <span class="path-heading">With Human Oversight</span>
383:                     <div style="padding:30px;border:1px solid rgba(0,0,0,.1);background:#fff;margin-bottom:20px;">
384:                         <p style="font-size:.9rem;color:var(--text-muted);margin-bottom:20px;font-style:italic;">
385:                             Everything in self-serve, PLUS:</p>
386:                         <div class="how-steps">
387:                             <div class="how-item" style="padding:15px 0;">
388:                                 <div class="how-content">
389:                                     <p>Fashion technician reviews AI output for accuracy</p>
390:                                 </div>
391:                             </div>
392:                             <div class="how-item" style="padding:15px 0;">
393:                                 <div class="how-content">
394:                                     <p>Material sourcing recommendations</p>
395:                                 </div>
396:                             </div>
397:                             <div class="how-item" style="padding:15px 0;">
398:                                 <div class="how-content">
399:                                     <p>Manufacturer introductions (if needed)</p>
400:                                 </div>
401:                             </div>
402:                             <div class="how-item" style="padding:15px 0;">
403:                                 <div class="how-content">
404:                                     <p>Unlimited revisions until perfect</p>
405:                                 </div>
406:                             </div>
407:                             <div class="how-item" style="padding:15px 0;border-bottom:none;">
408:                                 <div class="how-content">
409:                                     <p>Priority 12-hour turnaround</p>
410:                                 </div>
411:                             </div>
412:                         </div>
413:                     </div>
414:                     <div class="path-cost">
415:                         <strong>Cost:</strong> ₹15,000 per tech pack<br>
416:                         or Included in Full-Service packages
417:                     </div>
418:                     <div style="margin-top:20px;">
419:                         <a href="contact.html" class="btn btn-secondary">Add to Service Package</a>
420:                     </div>
421:                 </div>
422:             </div>
423:         </div>
424:     </section>
425: 
426:     <!-- Pricing Comparison -->
427:     <section class="section relative-z">
428:         <div class="container fade-up-element">
429:             <div class="section-header" style="text-align:center;">
430:                 <span class="section-kicker">Cost Comparison</span>
431:                 <h2 class="section-title">Tech Pack Cost Comparison</h2>
432:             </div>
433: 
434:             <table class="comparison-table">
435:                 <thead>
436:                     <tr>
437:                         <th></th>
438:                         <th>Traditional Designer</th>
439:                         <th class="genixovate-col">Genixovate Self-Serve</th>
440:                         <th class="genixovate-col">Genixovate Managed</th>
441:                     </tr>
442:                 </thead>
443:                 <tbody>
444:                     <tr>
445:                         <td>Cost per tech pack</td>
446:                         <td>₹20–40K</td>
447:                         <td class="genixovate-col">₹8K</td>
448:                         <td class="genixovate-col">₹15K</td>
449:                     </tr>
450:                     <tr>
451:                         <td>Turnaround time</td>
452:                         <td>7–14 days</td>
453:                         <td class="genixovate-col">24 hours</td>
454:                         <td class="genixovate-col">12–24 hours</td>
455:                     </tr>
456:                     <tr>
457:                         <td>Revisions included</td>
458:                         <td>1–2</td>
459:                         <td class="genixovate-col">1</td>
460:                         <td class="genixovate-col">Unlimited</td>
461:                     </tr>
462:                     <tr>
463:                         <td>Quality consistency</td>
464:                         <td>Varies</td>
465:                         <td class="genixovate-col">High</td>
466:                         <td class="genixovate-col">Very High</td>
467:                     </tr>
468:                     <tr>
469:                         <td>Manufacturer-ready</td>
470:                         <td>Sometimes</td>
471:                         <td class="genixovate-col">Yes</td>
472:                         <td class="genixovate-col">Yes</td>
473:                     </tr>
474:                     <tr>
475:                         <td>Cost estimates</td>
476:                         <td>Extra ₹5K</td>
477:                         <td class="genixovate-col">Included</td>
478:                         <td class="genixovate-col">Included</td>
479:                     </tr>
480:                 </tbody>
481:             </table>
482: 
483:             <h3 class="playfair" style="font-size:1.4rem;margin-top:50px;margin-bottom:20px;">Annual Savings (12 tech
484:                 packs)</h3>
485:             <div class="savings-row">
486:                 <div class="savings-item">
487:                     <h4>Traditional</h4>
488:                     <p>₹2.4–4.8L per year</p>
489:                 </div>
490:                 <div class="savings-item" style="border-color:var(--text-primary);">
491:                     <h4>Genixovate Self-Serve</h4>
492:                     <p>₹96K per year<br><strong>Save ₹1.44–3.84L per year</strong></p>
493:                 </div>
494:                 <div class="savings-item" style="border-color:var(--text-primary);">
495:                     <h4>Genixovate Managed</h4>
496:                     <p>₹1.8L per year<br><strong>Save ₹60K–3L per year</strong></p>
497:                 </div>
498:             </div>
499:         </div>
500:     </section>
501: 
502:     <!-- Footer -->
503:     
504: 
505:     <script src="script.js"></script>
506:                     <!-- FOOTER -->
507:     <footer class="footer-new">
508:         <div class="container">
509:             <div class="footer-new-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; max-width: 1000px;">
510:                 <div class="footer-brand">
511:                     <img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 80px; width: auto; margin-bottom: 20px; display: block; filter: invert(1); mix-blend-mode: screen; margin-left: -20px;">
512:                     <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Building brand infrastructure<br>for modern fashion.</p>
513:                 </div>
514:                 <div class="footer-col" style="margin-left: auto;">
515:                     <h4 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Company</h4>
516:                     <ul style="list-style: none; padding: 0;">
517:                         <li><a href="about.html">About Us</a></li>
518:                         <li><a href="faq.html">FAQs</a></li>
519:                         <li><a href="tel:+919871543232">9871543232</a></li>
520:                     </ul>
521:                 </div>
522:                 <div class="footer-col" style="margin-left: auto;">
523:                     <h4 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Explore</h4>
524:                     <ul style="list-style: none; padding: 0;">
525:                         <li><a href="services.html">Services</a></li>
526:                         <li><a href="pricing.html">Pricing</a></li>
527:                         <li><a href="agents.html">Agents</a></li>
528:                         <li><a href="blogs.html">Blogs</a></li>
529:                     </ul>
530:                 </div>
531:             </div>
532:             <div class="footer-bottom" style="margin-top: 60px;">
533:                 <p>&copy; 2026 Genixovate. Built for fashion founders who value systems as much as creativity.</p>
534:             </div>
535:         </div>
536:     </footer>
537: </body>
538: 
539: </html>`
const content = contentWithLineNums.split('\n').map(line => line.replace(/^\d+:\s?/, '')).join('\n');
fs.writeFileSync('c:/Users/lenovo/OneDrive/Documents/Genixovate/tech-packs.html', content, 'utf8');
console.log('Restored tech-packs.html.');
