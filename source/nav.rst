
-----------------
Navigation
-----------------

061 01 01 01 - Jordens rörelse i solsystemet
--------------------------------------------

Dygnsvariationer
................

Jordens rotation leder till dygnsrytmen där solen uppfattas gå upp i öst och ner i väst. Jorden roterar runt axeln som går igenom geografiska nord och syd (true north, true south). Denna axel lutar ungefär 23.5° från jordens bana runt solen.

Årstider
..........

Då jorden snurrar ett varv under 1 år i en elliptisk bana runt solen medför detta årstiderna då olika delar av klotet får olika mängd direkt solljus på grund av jordens lutning. Detta medför speciellt att allt över polcirkeln 66.5° (90° - 23.5°) har sol dygnet runt en period under sommaren och konstant mörker under en period under vintern.

061 01 02 01 - Storcirkel, småcirkel, loxodrom
----------------------------------------------

Parallellcirkel
...............

En cirkel på jorden som är parallel med ekvatorn.

Småcirkel
.....................

Småcirklar är cirklar på en svär som inte uppfyller kraven på en storcirkel, tex polcirkeln.

Storcirkel (GC, great circle)
.............................

Storcirkel (GC, great circle) är alltid kortaste sträckan mellan två punkter på en sfär. Storcirkel är ett snitt genom sfären där man skär mitten och arean av snittet har samma radie som sfären, tex ekvatorn. Mellan två punkter finns det alltid minst en storcirkel. Dock mellan två punkter som är exakt på motsatta sidor av sfären finns det oändligt antal storcirklar, tex mellan jordens poler.

Loxodrom
........

Loxodrom eller en loxodromisk linje är en linje som skär alla meridianer med en konstant vinkel. En lokodrom blir då en spiral som går mellan sfärens poler.

Meredian
........

Meredianerna går mellan polerna och är i praktiken en halv storcirkel. Så en meridian och dess kontra-meridian bildar en storcirkel.

Nollmeridianen är meridianen som går genom Greenwich i sydvästra London.

061 01 02 03 - Latitud, skillnad i latitud
------------------------------------------

Latitud
..............

Latituder är dom horizontella cirklarna på jorden. Dessa liggande och "lata" cirklar markerar ett specifikt bågavstånd från ekvatorn.

Latitud bågavståndet går mellan 0° - 90° och är 0° ekvatorn medans båda polerna ligger på 90°. För att ange sida av ekvatorn så läggs antingen N eller S till efter bågavståndet för att markera om det är södra eller norra halvklotet.

=========================================  ===============
 Jordens fem stora latituder
----------------------------------------------------------
 Namn                                         Latitude
=========================================  ===============
 Norra polcirkeln (Arctic Circle)           66° 33′ 39″ N
 Norra vändkretsen (Tropic of Cancer)       23° 26′ 21″ N
 Ekvatorn                                   0° N/S
 Södra vändkretsen (Tropic of Capricorn)    23° 26′ 21″ S
 Södra polcirkeln (Antarctic Circle)        66° 33′ 39" S
=========================================  ===============

Skillnad i latitud
..................

todo

.. _nav-latitude-avstand:

Skillnad i latitud översatt till avstånd
........................................

I latitude är en bågminut samma som en nautisk mil *(Nm)* eller 1852 meter.

M.h.a. detta kan man enkelt beräkna avstånd mellan platser som är på samma meridian. 

Avståndet mellan ekvatorn och nordpolen
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

.. code-block:: c

   90° x 60Nm = 5400Nm

Avståndet mellan ekvatorn och norra polcirkeln *(66°)*
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

.. code-block:: c

   66° x 60Nm = 3960Nm


Avståndet mellan ``66° 33′ N 045° 14' E`` och ``43° 11′ N 045° 14' E``
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

Vi kan se att båda positionerna är på samma meridian och kan då beräkna avståndet på latituden.

.. code-block:: c

   (66° 33' N) - (43° 11' N) => 23° 22'
   Avstånd 23° 22' = 23 x 60 + 22 = 1402 Nm

Avståndet mellan ``66° 33′ N 045° 14' E`` och ``43° 11′ S 045° 14' E``
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

Vi kan se att båda positionerna är på samma meridian och kan då beräkna avståndet på latituden. Dock ligger den andra positionen på södra halvklotet.

.. code-block:: c

   (66° 33' N) + (43° 11' N) => 109° 44'
   Avstånd 109° 44' = 109 x 60 + 44 = 6540 + 44 = 6584 Nm

Bågavstånd
..........

Läs vidare: :ref:`nav-bagavstand`

061 01 02 04 - Longitud, skillnad i longitud
--------------------------------------------

Longitud
........

Longitud är bågavståndet från noll-meridianen som går igenom Greenwich i syd-östra London. Så longitud kan gå från ``180° W`` till ``180° E``.

Skillnad i longitud
...................

Vid ekvatorn är en longitud ``1°`` samma distans som på on latitude, dvs 60Nm per 1°. Dock när man går mot polerna så går meridianerna närmare varandra och blir således kortare.

Bågavstånd
..........

Läs vidare: :ref:`nav-bagavstand`


061 01 02 05 - Användning av latitud och longitud i koordinatsystemet
---------------------------------------------------------------------

.. _nav-bagavstand:

Bågavstånd
..........

Bågavstånd är avståndet utmed en sfär mellan två punkter och anges i grader, minuter och sekunder. Det går 60 minuter på en grad och 60 sekunder på en minut.

I PPL krävs ej att man kan beräkna avståndet mellan två punkter förutom i fallet då dom ligger på samma meridian, :ref:`nav-latitude-avstand`.

.. code-block:: c

    1° = 60' (mins)
    1' = 60'' (seks)

Jordens koordinatsystem
.......................

I jordens koordinatsystem så anges en position som bågavståndet från ekvatorn och noll-meridianen i latitude och longitude. Grader i longitud kan gå mellan `0°` - `180°` medans i latitud endast mellan `0°` - `90°`. 

.. code-block:: c

    Latitude = 90°N - 90°S
    Longitude = 180°W - 180°E

Exempel 

====================  =============  ==============
 Stora städer i världen
---------------------------------------------------
 Stad, land            Latitud        Longitud
====================  =============  ==============
 Beijing, China        `39° 55' N`    `116° 25' E`
 Frankfurt, Germany    `50° 07' N`    `008° 41' E`
 Nairobi, Kenya        `01° 25' S`    `036° 55' E`
 Stockholm, Sweden     `59° 17' N`    `018° 03' E`
 Perth, Australia      `31° 57' S`    `115° 52' E`
 Ottawa, Canada        `45° 24' N`    `075° 43' W`
====================  =============  ==============