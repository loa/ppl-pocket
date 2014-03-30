
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


061 01 03 00 - Tid
------------------

Både när man hanterar bågavstånd och tid så är det vanligt att man använder decimaler istället för minuter och sekunder.

Exempel på om mvandling från minuter till decimal:

.. code-block:: c

    59° 00' N = 59.0 N
    59° 15' N = 59.25 N
    59° 30' N = 59.5 N
    59° 45' N = 59.75 N

    1015 = 10.25
    1030 = 10.5
    1045 = 10.75

061 01 03 02 - UTC
------------------

Universal Time Coordinated är tiden som vanligtvis används inom luftfarten. Tex anges all tid i ATS-färdplaner i UTC.

UTC är baserad på International Atomic Time IAT.

Svensk standardtid är UTC+1 vilket är vintertid. Svensk sommartid blir således ``svensk standardtid + 1 = UTC + 2``.

061010303 - LMT
-----------------------

Local Mean Time är per definition när solenskivans mittpunkt passerar radialen 180° vid nuvarande position. Detta medför att LMT är väldigt lokalt. GMT är LMT vid noll-meridianen.

061010304 - Standardtid
-----------------------

Standardtid är en politisk tid för ett visst geografiskt område. Tex så har det tagits ett beslut att svensk standardtid ska vara UTC+1. Oftast så skiljer det hela timmar mellan olika områden men det finns undantag.

061 01 03 05 - Datumlinjen
--------------------------

Datumlinjen följer ungefär 180° meridianen men avviker på södra halvklotet för att bara passera över vatten.

Om man passerar från 180° E (UTC+12h) till 180° W (UTC-12h) så får man dra tillbaka klockan ett helt dygn (12 + 12). Samma effekt oberoend vilket håll runt jorden man tar.

061 01 03 06 - Soluppgång, solnedgång och gryning/skymmning
-----------------------------------------------------------

Inom luftfart så används ofta definitionerna av solens faser för att gå mellan olika regelverk t.e.x. när regler för nattflygning träder i kraft.

Soluppgång och solnedgång är när solskivans mitt passerar horizonten.

Det finns 3 olika gryningar/skymningar vars start/slut definieras av när solskivans mitt passerar en viss grad under horizontlinjen.

====================  =============================
 Gryning/skymning
====================  =============================
 Borgelig              6 grader under horizonten 
 Nautisk               12 grader under horizonten 
 Astronomisk           18 grader under horizonten 
====================  =============================


061 01 04 00 - Riktningar
-------------------------

Vid navigation så används den geografiska nordpolen som referenspunkt med den klassiska 360 grader uppdelningen av horizonten. Norr benäms med antingen 0° eller 360°. Den geografiska nordpolen benäms som `True North TN`.

Norr anses vara den viktigaste kardinalriktning som senare öster, söder och väster brukar definieras efter. Interkardinalriktingarna är riktningarna i mellan tex syd-öst, nord-väst etc.

061 01 04 01 - True north
-------------------------

True north är den geografiska nordpolen där alla meridianer sammanstrålar.

Track linjer är en plannerad färd linje på en karta. När denna är plannerad med vinkel mot TN så kallas denna True Track TT. 

Bearing är vinkeln från flygplanets längdaxel och en kurslinje mot något. Tex om man ser en sjö rakt till höger så har den en ungefär bearing av 90°.

True Bearing TB är när vinkeln är baserad på true north istället för flyplanets riktning. En TB 45° från en mast säger då att man är geografiskt direkt till öster om masten.

061 01 04 02 - Magnetic North
-----------------------------

Magnetic North är den magnetiska nordpolen där inklinationen är 90°. Den ligger just nu i norra Kanada men rör på sig konstant. Från Sveriges perspektiv ungefär 1/2° var tionde år västerut på horisonten.

Skillnaden mellan MN och TN kallas variation och kan som mest vara 180°. I Sverige är den runt 4°E, men förändras beroende på vart man är geografiskt. På kartor så markeras skillnader i variation med isogon linjer.

I fysiska sammanhang så är jordens nordpol den magnetiska sydpolen, dock kallas den nordpol då kompassernas magnetiska nordpoler pekar på denna.

Magnetic Heading är flygplanets rikting relativt till magnetiska nord.

Magnetic Bearing är en bäring relativt till magnetiska nord.

En agonisk linje är där inklinationen är 0°, tex vid ekvatorn.

061 01 04 03 - Deviation, Compass North
---------------------------------------

Deviation är missvisning på kompassen p.g.a. störande magnetfält i flygplanet. Deviationen är olika beronde på vilken kurs flyplanet håller då flygplanets magnetfältet inte är jämnt.

Därför har man Compass Track, Compass Bearing och Compass Heading som alla är relativa compassen indikeringen.

Vid inställning av kursgyrat ska MH ställas in då man inte vill få med deviationsfelet.

061 01 04 04 - Jordens magnetfält
----------------------------------

Jordens magnetfält går från sydpolen till nordpolen. Rent fysiskt så ligger den magnetiska nordpolen på sydpolen. Då magnetfältet böjer sig runt jorden som en klassisk magnet så får vi en effekt kallad inklination eller dipvinkel. Detta innebär att det magnetiska fältet har en viss lutning gentemot marken vilket skapar sväng- och accelerationsfel.

todo: magnetfältets utbredning och de jordmagnetiska krafterna
todo: innebörden av isogon och inklination
todo: TN, MN, CN, TH, MH, CH samt TB, MB, CB och relativ bäring
todo: relationen mellan True och Magnetic beroende på geografisk plats
