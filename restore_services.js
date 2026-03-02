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
18:     <title>Services | Complete Fashion Brand Infrastructure Solutions</title>
19:     <meta name="description"
20:         content="Discover three distinct ways to build with Genixovate. From comprehensive brand launches to continuous growth, we provide complete fashion infrastructure.">
21:     <link rel="preconnect" href="https://fonts.googleapis.com">
22:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
23:     <link
24:         href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap"
25:         rel="stylesheet">
26:     <script src="https://unpkg.com/@phosphor-icons/web"></script>
27:     <link rel="stylesheet" href="style.css?v=2.0">
28:     <style>
29:         /* Services hero */
30:         
31: 
32:         /* Service Detail Cards */
33:         .service-detail {
34:             padding: 100px 0;
35:             border-bottom: 1px solid rgba(0, 0, 0, .08);
36:         }
37: 
38:         .service-detail:last-child {
39:             border-bottom: none;
40:         }
41: 
42:         .sd-inner {
43:             display: grid;
44:             grid-template-columns: 350px 1fr;
45:             gap: 100px;
46:             align-items: start;
47:         }
48: 
49:         .sd-inner.reverse {
50:             grid-template-columns: 1fr 350px;
51:         }
52: 
53:         .sd-inner.reverse .sd-right {
54:             order: -1;
55:         }
56: 
57:         .sd-label {
58:             font-size: .7rem;
59:             letter-spacing: .2em;
60:             text-transform: uppercase;
61:             font-weight: 700;
62:             color: var(--text-muted);
63:             margin-bottom: 14px;
64:             display: block;
65:         }
66: 
67:         .sd-left h2 {
68:             font-family: 'Playfair Display', serif;
69:             font-size: 2.4rem;
70:             margin-bottom: 20px;
71:             line-height: 1.2;
72:         }
73: 
74:         .sd-left>p {
75:             font-size: .95rem;
76:             color: var(--text-muted);
77:             line-height: 1.8;
78:             margin-bottom: 30px;
79:         }
80: 
81:         .sd-left .price-block {
82:             padding: 25px 30px;
83:             border: 1px solid var(--text-primary, #111);
84:             margin-bottom: 25px;
85:         }
86: 
87:         .sd-left .price-block.dark {
88:             background: var(--text-primary, #111);
89:         }
90: 
91:         .price-amount {
92:             font-family: 'Playfair Display', serif;
93:             font-size: 2rem;
94:             display: block;
95:             margin-bottom: 5px;
96:         }
97: 
98:         .sd-left .price-block.dark .price-amount {
99:             color: #fff;
100:         }
101: 
102:         .price-meta {
103:             font-size: .82rem;
104:             color: var(--text-muted);
105:         }
106: 
107:         .sd-left .price-block.dark .price-meta {
108:             color: rgba(255, 255, 255, .5);
109:         }
110: 
111:         .sd-cta {
112:             display: inline-block;
113:             padding: 15px 30px;
114:             font-size: .85rem;
115:             font-weight: 600;
116:             letter-spacing: .04em;
117:             text-decoration: none;
118:             border: 1px solid var(--text-primary);
119:             color: var(--text-primary);
120:             transition: all .2s;
121:         }
122: 
123:         .sd-cta:hover {
124:             background: var(--text-primary);
125:             color: #fff;
126:         }
127: 
128:         .sd-right {
129:             display: flex;
130:             flex-direction: column;
131:             gap: 0;
132:         }
133: 
134:         .included-section {
135:             border: 1px solid rgba(0, 0, 0, .08);
136:             background: #fff;
137:             padding: 35px;
138:         }
139: 
140:         .included-section+.included-section {
141:             border-top: none;
142:         }
143: 
144:         .included-section h5 {
145:             font-size: .68rem;
146:             letter-spacing: .15em;
147:             text-transform: uppercase;
148:             font-weight: 700;
149:             color: var(--text-muted);
150:             margin-bottom: 18px;
151:         }
152: 
153:         .included-section ul {
154:             list-style: none;
155:         }
156: 
157:         .included-section ul li {
158:             font-size: .85rem;
159:             color: var(--text-secondary, #444);
160:             padding: 5px 0;
161:             border-bottom: 1px solid rgba(0, 0, 0, .04);
162:         }
163: 
164:         .included-section ul li:last-child {
165:             border-bottom: none;
166:         }
167: 
168:         .included-section ul li::before {
169:             content: "✓ ";
170:             color: var(--text-primary, #111);
171:             font-weight: 700;
172:         }
173: 
174:         .timeline-strip {
175:             display: flex;
176:             align-items: center;
177:             gap: 0;
178:             margin: 30px 0;
179:             border: 1px solid rgba(0, 0, 0, .1);
180:         }
181: 
182:         .ts-item {
183:             padding: 20px 25px;
184:             flex: 1;
185:             border-right: 1px solid rgba(0, 0, 0, .1);
186:             text-align: center;
187:         }
188: 
189:         .ts-item:last-child {
190:             border-right: none;
191:         }
192: 
193:         .ts-item h6 {
194:             font-size: .65rem;
195:             letter-spacing: .15em;
196:             text-transform: uppercase;
197:             font-weight: 700;
198:             color: var(--text-muted);
199:             margin-bottom: 6px;
200:         }
201: 
202:         .ts-item p {
203:             font-size: .9rem;
204:             font-weight: 600;
205:             margin-bottom: 0;
206:             color: var(--text-primary);
207:         }
208: 
209:         /* For whom section */
210:         .for-whom {
211:             background: #faf9f7;
212:             padding: 10px 30px 20px;
213:             margin-top: 0;
214:             border: 1px solid rgba(0, 0, 0, .08);
215:             border-top: none;
216:         }
217: 
218:         .for-whom p {
219:             font-size: .85rem;
220:             color: var(--text-muted);
221:             font-style: italic;
222:             margin-bottom: 0;
223:         }
224: 
225:         .for-whom span {
226:             font-size: .65rem;
227:             letter-spacing: .12em;
228:             text-transform: uppercase;
229:             font-weight: 700;
230:             color: var(--text-muted);
231:             display: block;
232:             margin-bottom: 5px;
233:             margin-top: 10px;
234:         }
235: 
236:         /* CTA */
237:         .cta-dark {
238:             background: #111;
239:             padding: 100px 0;
240:             text-align: center;
241:         }
242: 
243:         /* Footer */
244:         .footer-new {
245:             background: #0a0a0a;
246:             padding: 80px 0 0
247:         }
248: 
249:         .footer-new-grid {
250:             display: grid;
251:             grid-template-columns: 1.5fr 1fr 1fr 1fr;
252:             gap: 60px;
253:             margin-bottom: 60px
254:         }
255: 
256:         .footer-brand p {
257:             color: rgba(255, 255, 255, .45);
258:             font-size: .88rem;
259:             margin-bottom: 25px;
260:             margin-top: 12px
261:         }
262: 
263:         .footer-brand .logo {
264:             font-family: 'Playfair Display', serif;
265:             font-size: 1.6rem;
266:             color: #fff;
267:             font-style: italic
268:         }
269: 
270:         .footer-col h4, .footer-col h3 {
271:             color: rgba(255, 255, 255, .4);
272:             font-size: .68rem;
273:             font-weight: 700;
274:             letter-spacing: .2em;
275:             text-transform: uppercase;
276:             margin-bottom: 25px
277:         }
278: 
279:         .footer-col ul {
280:             list-style: none
281:         }
282: 
283:         .footer-col ul li {
284:             margin-bottom: 12px
285:         }
286: 
287:         .footer-col ul li a {
288:             color: rgba(255, 255, 255, .65);
289:             text-decoration: none;
290:             font-size: .88rem
291:         }
292: 
293:         .footer-bottom {
294:             border-top: 1px solid rgba(255, 255, 255, .07);
295:             padding: 28px 0;
296:             display: flex;
297:             justify-content: space-between;
298:             align-items: center
299:         }
300: 
301:         .footer-bottom p {
302:             color: rgba(255, 255, 255, .3);
303:             font-size: .8rem
304:         }
305: 
306:         @media(max-width:900px) {
307: 
308:             .sd-inner,
309:             .sd-inner.reverse {
310:                 grid-template-columns: 1fr;
311:                 gap: 40px
312:             }
313: 
314:             .sd-inner.reverse .sd-right {
315:                 order: 0
316:             }
317:         }
318:     </style>
319:     <link rel="icon" type="image/png" href="assets/g-favicon.png">
320: </head>
321: 
322: <body>
323:     <nav class="navbar">
324:         <div class="container nav-container">
325:             <a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 64px; width: auto; mix-blend-mode: multiply; margin-left: -15px;"></a>
326:             <button class="mobile-menu-btn" aria-label="Toggle menu"><i class="ph ph-list"></i></button>
327:             <ul class="nav-links">
328:                 <li><a href="index.html">Home</a></li>
329:                 <li><a href="services.html" class="active">Services</a></li>
330:                 <li><a href="pricing.html">Pricing</a></li>
331:                 <li><a href="how-we-build.html">How We Build</a></li>
332:                 <li><a href="about.html">About</a></li>
333:                 <li><a href="contact.html" class="btn btn-primary">Start a Project</a></li>
334:             </ul>
335:         </div>
336:     </nav>
337: 
338:     <!-- Hero -->
339:     <header class="hero" style="min-height:50vh;">
340:         <div class="hero-video-wrapper">
341:             <img src="assets/hero_bg_1772274963937.png" class="hero-bg" alt="Services">
342:             <div class="hero-overlay"></div>
343:         </div>
344:         <div class="container hero-content fade-up-element" style="text-align:center;">
345:             <h1 class="hero-title" style="font-size:3.5rem;">Comprehensive Fashion Growth Services: Branding, Digital Marketing & AI Tech</h1>
346:             <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Integrated solutions for fashion brands—brand incubation, digital dominance, and AI automation tailored to modern fashion workflows.</p>
347:         </div>
348:     </header>
349: 
350:     <div style="background:#faf9f7;">
351: 
352:         <!-- Brand Launch -->
353:         <div class="service-detail">
354:             <div class="container fade-up-element">
355:                 <div class="sd-inner">
356:                     <div class="sd-left">
357:                         <span class="sd-label">Service One</span>
358:                         <h2>Brand Architecture & Incubation</h2>
359:                         <p>Fashion brand identity systems, strategic positioning, and cultural storytelling. We provide full incubation for new fashion brands connecting with modern audiences.</p>
360:                         <div class="price-block dark">
361:                             <span class="price-amount">$28,000</span>
362:                             <span class="price-meta">One-time investment · 8–12 weeks</span>
363:                         </div>
364:                         <a href="https://calendly.com/mishitamaggo23/30min" class="sd-cta">Start Your Brand</a>
365:                     </div>
366:                     <div class="sd-right">
367:                         <div class="included-section">
368:                             <h3>Brand Foundation</h3>
369:                             <ul>
370:                                 <li>Brand strategy &amp; market positioning</li>
371:                                 <li>Visual identity system (logo, colors, typography)</li>
372:                                 <li>Brand voice &amp; messaging framework</li>
373:                                 <li>Customer archetype profiles</li>
374:                                 <li>Differentiation strategy</li>
375:                                 <li>100+ page brand guidelines</li>
376:                             </ul>
377:                         </div>
378:                         <div class="included-section">
379:                             <h3>Product Development</h3>
380:                             <ul>
381:                                 <li>Tech packs for first collection</li>
382:                                 <li>Complete size grading system</li>
383:                                 <li>Material specifications &amp; sourcing strategy</li>
384:                                 <li>Manufacturing documentation</li>
385:                                 <li>Quality control checklists</li>
386:                             </ul>
387:                         </div>
388:                         <div class="included-section">
389:                             <h3>Market Infrastructure</h3>
390:                             <ul>
391:                                 <li>Content production system</li>
392:                                 <li>Website &amp; sales channel setup</li>
393:                                 <li>Customer journey automation</li>
394:                                 <li>Operations framework</li>
395:                                 <li>Launch campaign execution</li>
396:                             </ul>
397:                         </div>
398:                         <div class="for-whom">
399:                             <span>Best For</span>
400:                             <p>Designers with vision and sketches who need a complete, market-ready brand with systems
401:                                 that scale.</p>
402:                         </div>
403:                     </div>
404:                 </div>
405:                 <div class="timeline-strip">
406:                     <div class="ts-item">
407:                         <h4>Phase 1</h4>
408:                         <p>Brand Architecture</p>
409:                     </div>
410:                     <div class="ts-item">
411:                         <h4>Phase 2</h4>
412:                         <p>Product Foundation</p>
413:                     </div>
414:                     <div class="ts-item">
415:                         <h4>Phase 3</h4>
416:                         <p>Infrastructure Build</p>
417:                     </div>
418:                     <div class="ts-item">
419:                         <h4>Total</h4>
420:                         <p>8–12 Weeks</p>
421:                     </div>
422:                 </div>
423:             </div>
424:         </div>
425: 
426:         <!-- Brand Growth -->
427:         <div class="service-detail" style="background:#fff;">
428:             <div class="container fade-up-element">
429:                 <div class="sd-inner reverse">
430:                     <div class="sd-left">
431:                         <span class="sd-label">Service Two</span>
432:                         <h2>Digital Dominance for Fashion Brands</h2>
433:                         <p>Full-funnel digital marketing tailored for brand growth. We leverage Meta, TikTok, Google paid ads, organic strategy, and trendjacking to explode your revenue velocity.</p>
434:                         <div class="price-block">
435:                             <span class="price-amount">$4,500–$6,500/mo</span>
436:                             <span class="price-meta">Ongoing partnership · 3-month minimum</span>
437:                         </div>
438:                         <a href="https://calendly.com/mishitamaggo23/30min" class="sd-cta">Build Growth Systems</a>
439:                     </div>
440:                     <div class="sd-right">
441:                         <div class="included-section">
442:                             <h3>Collection Development</h3>
443:                             <ul>
444:                                 <li>Ongoing tech pack development</li>
445:                                 <li>Size system management</li>
446:                                 <li>Collection planning frameworks</li>
447:                                 <li>Material strategy updates</li>
448:                                 <li>Manufacturing documentation</li>
449:                             </ul>
450:                         </div>
451:                         <div class="included-section">
452:                             <h3>Multi-Channel Growth</h3>
453:                             <ul>
454:                                 <li>Channel expansion frameworks</li>
455:                                 <li>Customer experience automation</li>
456:                                 <li>Content production workflows</li>
457:                                 <li>Performance optimization</li>
458:                                 <li>International capability planning</li>
459:                             </ul>
460:                         </div>
461:                         <div class="included-section">
462:                             <h3>Strategic Partnership</h3>
463:                             <ul>
464:                                 <li>Monthly strategy sessions</li>
465:                                 <li>Performance reporting &amp; analysis</li>
466:                                 <li>Team scaling support</li>
467:                                 <li>Process documentation updates</li>
468:                             </ul>
469:                         </div>
470:                         <div class="for-whom">
471:                             <span>Best For</span>
472:                             <p>Established brands with proven concept, ready to build the systematic infrastructure for
473:                                 serious scale.</p>
474:                         </div>
475:                     </div>
476:                 </div>
477:             </div>
478:         </div>
479: 
480:         <!-- Brand Excellence -->
481:         <div class="service-detail">
482:             <div class="container fade-up-element">
483:                 <div class="sd-inner">
484:                     <div class="sd-left">
485:                         <span class="sd-label">Service Three</span>
486:                         <h2>Intelligent Fashion Tech & AI Automation</h2>
487:                         <p>Unlock breakthroughs with custom AI marketing agents, automated tech pack generation, and intelligent workflow integrations. Bespoke tools for fashion supply chain efficiency.</p>
488:                         <div class="price-block dark">
489:                             <span class="price-amount">$9,000+/mo</span>
490:                             <span class="price-meta">Comprehensive partnership · Custom scope</span>
491:                         </div>
492:                         <a href="https://calendly.com/mishitamaggo23/30min" class="sd-cta">Partner with Us</a>
493:                     </div>
494:                     <div class="sd-right">
495:                         <div class="included-section">
496:                             <h3>Everything in Brand Growth, plus:</h3>
497:                             <ul>
498:                                 <li>Unlimited product development</li>
499:                                 <li>Complete content systems</li>
500:                                 <li>Multi-channel infrastructure (full management)</li>
501:                                 <li>Custom AI automation development</li>
502:                                 <li>Dedicated senior strategy team</li>
503:                             </ul>
504:                         </div>
505:                         <div class="included-section">
506:                             <h3>Enterprise Operations</h3>
507:                             <ul>
508:                                 <li>Weekly strategy &amp; review sessions</li>
509:                                 <li>Custom reporting &amp; analytics dashboards</li>
510:                                 <li>International market expansion support</li>
511:                                 <li>Team training &amp; upskilling</li>
512:                                 <li>Priority support (4-hour response)</li>
513:                             </ul>
514:                         </div>
515:                         <div class="for-whom">
516:                             <span>Best For</span>
517:                             <p>Brands ready to operate at enterprise level who want a complete brand operations
518:                                 capability embedded in their business.</p>
519:                         </div>
520:                     </div>
521:                 </div>
522:             </div>
523:         </div>
524: 
525:     </div>
526: 
527:     <!-- Compare CTA -->
528:     <div class="cta-dark">
529:         <div class="container fade-up-element">
530:             <h2 style="font-family:'Playfair Display',serif;font-size:2.8rem;color:#fff;margin-bottom:15px;">Not Sure
531:                 Which to Choose?</h2>
532:             <p style="color:rgba(255,255,255,.6);margin-bottom:35px;">See full pricing breakdown or book a discovery
533:                 call — we'll recommend the right fit.</p>
534:             <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;">
535:                 <a href="pricing.html"
536:                     style="display:inline-block;padding:15px 32px;background:#fff;color:#111;font-weight:600;font-size:.88rem;text-decoration:none;">View
537:                     Pricing</a>
538:                 <a href="https://calendly.com/mishitamaggo23/30min"
539:                     style="display:inline-block;padding:15px 32px;border:1px solid rgba(255,255,255,.3);color:#fff;font-size:.88rem;text-decoration:none;">Book
540:                     Discovery Call</a>
541:             </div>
542:         </div>
543:     </div>
544: 
545:     
546:     <script src="script.js"></script>
547:                     <!-- FOOTER -->
548:     <footer class="footer-new">
549:         <div class="container">
550:             <div class="footer-new-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; max-width: 1000px;">
551:                 <div class="footer-brand">
552:                     <img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 80px; width: auto; margin-bottom: 20px; display: block; filter: invert(1); mix-blend-mode: screen; margin-left: -20px;">
553:                     <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Building brand infrastructure<br>for modern fashion.</p>
554:                 </div>
555:                 <div class="footer-col" style="margin-left: auto;">
556:                     <h3 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Company</h3>
557:                     <ul style="list-style: none; padding: 0;">
558:                         <li><a href="about.html">About Us</a></li>
559:                         <li><a href="faq.html">FAQs</a></li>
560:                         <li><a href="tel:+919871543232">9871543232</a></li>
561:                     </ul>
562:                 </div>
563:                 <div class="footer-col" style="margin-left: auto;">
564:                     <h3 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Explore</h3>
565:                     <ul style="list-style: none; padding: 0;">
566:                         <li><a href="services.html">Services</a></li>
567:                         <li><a href="pricing.html">Pricing</a></li>
568:                         <li><a href="agents.html">Agents</a></li>
569:                         <li><a href="blogs.html">Blogs</a></li>
570:                     </ul>
571:                 </div>
572:             </div>
573:             <div class="footer-bottom" style="margin-top: 60px;">
574:                 <p>&copy; 2026 Genixovate. Built for fashion founders who value systems as much as creativity.</p>
575:             </div>
576:         </div>
577:     </footer>
578: </body>
579: 
580: </html>`;
const content = contentWithLineNums.split('\n').map(line => line.replace(/^\d+:\s?/, '')).join('\n');
fs.writeFileSync('c:/Users/lenovo/OneDrive/Documents/Genixovate/services.html', content, 'utf8');
console.log('Restored services.html.');
