# MovieBox
Site to find movies - school project


Þetta verkefni inniheldur 4 síður, forsíðu, upplýsingasíðu, leitarsíðu og leitarniðurstöður. 
Header og footer er hlaðið sér inní allar síðurnar úr footer.html og header.html.

Síðurnar eru hver með sér javascript skjal

index.html      => scripts.js

about-page.html => about.js

search.html     => search.js

results.html    => results.js

## Vendor library 

jquery - Almennar tengingar við DOM-ið eða html-ið.
bootstrap - Aðalega CSS útlitið
slickslider - Myndaslider á forsíðu
nouislider - Tölusliderinn á leitarsíðu
wnumb - Formattar tölur, notað með nouislider til að taka kommur fyrir aftan seinustu upptalninguna.

## API

Þessi síða notar themovidedb.org fyrir upplýsingar.

## Klasar

Inn í about.js eru tveir klasar. Annar, MovieSource, heldur utan um slóð á API endapunkt sem við köllum í fyrir details upplýsingar.
Hinn klasinn, dataHandler, tekur inn gögn frá API-num og formattar gögnin fyrir html-ið, eins og t.d. býr til html fyrir leikara.
