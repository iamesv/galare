``/*
	*	Original script by: Shafiul Azam
	*	ishafiul@gmail.com
	*	Version 3.0
	*	Modified by: Luigi Balzano

	*	Description:
	*	Inserts Countries and/or States as Dropdown List
	*	How to Use:

		In Head section:
		<script type= "text/javascript" src = "countries.js"></script>
		In Body Section:
		Select Country:   <select onchange="print_state('state',this.selectedIndex);" id="country" name ="country"></select>
		<br />
		City/District/State: <select name ="state" id ="state"></select>
		<script language="javascript">print_country("country");</script>	

	*
	*	License: OpenSource, Permission for modificatin Granted, KEEP AUTHOR INFORMATION INTACT
	*	Aurthor's Website: http://shafiul.progmaatic.com
	*
*/
''
var country_arr = new Array("Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Benguet" , "Biliran" , "Bohol" , "Bukidnon" ,"Bulacan" , "Cagayan" , "Camarines Norte" , "Camarines Sur" , "Camiguin" , "Capiz" , "Catanduanes" , "Cavite" , "Cebu" , "Compostela Valley" , "Cotobato" , "Davao del Norte" , "Davao del Sur" , "Davao Oriental" , "Dinagat Islands" , "Eastern Samar" , "Guimaras" , "Ifugao" , "Ilocos Norte" , "Ilocos Sur" , "Iloilo" , "Isabela" , "Kalinga" , "La Union" , "Laguna" , "Lanao del Norte" , "Lanao del Sur" , "Leyte" , "Maguindanao" , "Marinduque" , "Masbate" , "Metro Manila" , "Misamis Occidental" , "Misamis Oriental" , "Mountain Province" , "Negros Occidental" , "Negros Oriental" , "Northern Samar" , "Nueva Ecija" , "Nueva Vizcaya" , "Occidental Mindoro" , "Oriental Mindoro" , "Palawan" , "Pampanga" , "Pangasinan", "Quezon" , "Quirino" , "Rizal" , "Romblon" , "Samar" , "Sarangani" , "Shariff Kabunsuan" , "Siquijor" , "Sorsogon" , "South Cotobato", "Southern Leyte" , "Sultan Kudarat" , "Sulu" , "Surigao del Norte" , "Surigao del Sur" , "Tarlac" , "Tawitawi" , "Zambales" ,"Zamboanga del Norte" , "Zamboanga del Sur" , "Zamboanga Sibugay");
var s_a = new Array();
s_a[0]="";
s_a[1]="Abra|Bangued|Boliney|Bucay|Bucloc|Daguioman|Danglas|Dolores|La Paz|Lacub|Lagangilang|Lagayan|Langiden|Licuan-Baay|Luba|Malibcong|Manabo|Penarrubia|Pidigan|Pilar|Sallapadan|San Isidro|San Juan|San Quintin|Tayum|Tineg|Tubo|Villaviciosa";
s_a[2]="Agusan del Norte|Buenavista|Butuan City|Cabadbaran City|Carmen|Jabonga|Kitcharao|Las Nieves|Magallanes|Nasipit|Remedios T. Romualdez|Santiago|Tubay";
s_a[3]="Agusan del Sur|Bayugan|Esperanza|La Paz|Loreto|Prosperidad|Rosario|San Francisco|San Luis|Santa Josefa|Sibagat|Talacogon|Trento|Veruela";
s_a[4]="Aklan|Altavas|Balete|Banga|Batan|Buruanga|Ibajay|Kalibo|Lezo|Libacao|Madalag|Makato|Malay|Malinao|Nabas|New Washington|Numancia|Tangalan";
s_a[5]="Albay|Bacacay|Camalig|Daraga|Guinobatan|Jovellar|Libon|Ligao City|Malilipot|Malinao|Manito|Oas|Pio Duran|Polangui|Rapu-Rapu|Santo Domingo|Tabaco City|Tiwi";
s_a[6]="Antique|Anini-y|Barbaza|Belison|Bugasong|Caluya|Culasi|Hamtic|Laua-an|Libertad|Pandan|Patnongon|San Jose|San Remigio|Sebaste|Sibalom|Tibiao|Tobias Fornier|Valderrama";
s_a[7]="Apayao|Calanasan|Conner|Flora|Kabugao|Luna|Pudtol|Santa Marcela";
s_a[8]="Aurora|Baler|Casiguran|Dilasag|Dinalungan|Dingalan|Dipaculao|Maria Aurora|San Luis";
s_a[9]="Basilan|Akbar|Al-Barka|Hadji Mohammad Aju|Isabela City|Lamitan City|Lantawan|Maluso|Sumisip|Tipo-Tipo|Tuburan|Ungkaya Pukan";
s_a[10]="Bataan|Abucay|Bagac|Balanga City|Dinalupihan|Hermosa|Limay|Mariveles|Morong|Orani|Orion|Pilar|Samal";
s_a[11]="Batanes|Basco|Itbayat|Ivana|Mahalao|Sabtang|Uyugan";
s_a[12]="Batangas|Agoncillo|Alitagtag|Balayan|Balete|Batangas City|Bauan|Calaca|Calatagan|Cuenca|Ibaan|Laurel|Lemery|Lian|Lipa City|Lobo|Mabini|Malvar|Mataas na Kahoy|Nasugbu|Padre Garcia|Rosario|San Jose|San Juan|San Luis|San Nicolas|San Pascual|Santa Teresita|Santo Tomas|Taal|Talisay|Tanauan City|Taysan|Tingloy|Tuy";
s_a[13]="Benguet|Atok|Baguio City|Bakun|Bokod|Buguias|Itogon|Kabayan|Kapangan|Kibungan|La Trinidad|Mankayan|Sablan|Tuba|Tublay";
s_a[14]="Biliran|Almeria|Biliran|Cabucgayan|Caibiran|Culaba|Kawayan|Maripipi|Naval";
s_a[15]="Bohol|Alburquerque|Alicia|Anda|Antequera|Baclayon|Balilihan|Batuan|Bien Unido|Bilar|Buenavista|Calape|Candijay|Carmen|Catigbian|Clarin|Corella|Cortes|Dagohoy|Danao|Dauis|Dimiao|Duero|Garcia Hernandez|Guindulman|Inabanga|Jagna|Jetafe|Lila|Loay|Loboc|Loon|Mabini|Maribojoc|Panglao|Pilar|Pres.Carlos P. Garcia|Sagbayan|San Isidro|San Miguel|Sevilla|Sierra Bullones|Sikatuna|Tagbiliran City|Talibon|Trinidad|Tubigon|Ubay|Valencia";
s_a[16]="Bukidnon|Baungon|Cabanglasan|Damulog|Dangcagan|Don Carlos|Impasug-Ong|Kadingilan|Kalilangan|Kibawe|Kitaotao|Lantapan|Libona|Malaybalay City|Malitbog|Manolo Fortich|Maramag|Pangantucan|Quezon|San Fernando|Sumilao|Talakag|Valencia City";
s_a[17]="Bulacan|Angat|Balagtas|Baliuag|Bocaue|Bulacan|Bustos|Calumpit|Dona Remedios Trinidad|Guiguinto|Hagonoy|Malolos|Marilao City|Meycauayan City|Norzagaray|Obando|Pandi|Paombong|Plaridel|Pulilan|San Ildefonso|San Jose del Monte City|San Miguel|San Rafael|Santa Maria";
s_a[18]="Cagayan|Abulug|Alcala|Allacapan|Amulung|Aparri|Baggao|Ballesteros|Buguey|Calayan|Camalaniugan|Claveria|Enrile|Gattaran|Gonzaga|Iguig|Lal-Lo|Lasam|Pamplona|Peñablanca|Piat|Rizal|Sanchez-Mira|Santa Ana|Santa Praxedes|Santa Teresita|Santo Niño|Solana|Tuao|Tuguegarao City";
s_a[19]="Camarines Norte|Basud|Capalonga|Daet|Jose Panganiban|Labo|Mercedes|Paracale|San Lorenzo Ruiz|San Vicente|Santa Elena|Talisay|Vinzons";
s_a[20]="Camarines Sur|Baao|Balatan|Bato|Bombon|Buhi|Bula|Cabusao|Calabanga|Camaligan|Canaman|Caramoan|Del Gallego|Gainza|Garchitorena|Goa|Iriga City|Lagonoy|Libmanan|Lupi|Magarao|Milaor|Minalabac|Nabua|Naga Cit|Ocampo|Pamplona|Pasacao|Pili|Presentacion|Ragay|Sagñay|San Fernando|San Jose|Sipocot|Siruma|Tigaon|Tinambac";
s_a[21]="Camiguin|Catarman|Guinsiliban|Mahinog|Mambajao|Sagay";
s_a[22]="Capiz|Cuartero|Dao|Dumalag|Dumarao|Ivisan|Jamindan|Ma-ayon|Mambusao|Panay|Panitan|Pilar|Pontevedra|President Roxas|Roxas City|Sapi-an|Sigma|Tapaz";
s_a[23]="Catanduanes|Bagamanoc|Baras|Bato|Caramoran|Gigmoto|Pandan|Panganiban|San Andres|San Miguel|Viga|Virac";
s_a[24]="Cavite|Alfonso|Amadeo|Bacoor City|Carmona|Cavite City|Dasmariñas City|General Mariano Alvarez|General Emilio Aguinaldo|General Trias|Imus|Indang|Kawit|Magallanes|Maragondon|Mendez|Naic|Noveleta|Rosario|Silang|Tanza|Tagaytay City|Ternate|Trece Martires City";
s_a[25]="Cebu|Alcantara|Alcoy|Alegria|Aloguinsan|Argao|Argao City|Asturias|Badian|Balamban|Bantayan|Barili|Bogo City|Boljoon|Borbon|Carcar City|Carmen|Catmon|Cebu City|Compostela|Consolacion|Cordoba|Daanbantayan|Dalaguete|Danao City|Dumanjug|Ginatilan|Lapu-lapu City|Liloan|Madridejos|Malabuyoc|Mandau City|Medellin|Minglanilla|Moalboal|Naga City|Oslob|Pilar|Pinamungahan|Poro|Ronda|Samboan|San Fernando|San Francisco|San Remigio|Santa Fe|Santander|Sibonga|Sogod|Tabogon|Tabuelan|Talisay City|Toledo City|Tuburan|Tudela";
s_a[26]="Compostela Valley|Compostela|Laak|Mabini|Maco|Maragusan|Mawab|Monkayo|Montevista|Nabunturan|New Bataan|Pantukan";
s_a[27]="Cotabato City|Alamada|Aleosan|Antipas|Arakan|Banisilan|Carmen|Kabacan|Kidapawan City|Libungan|M'Lang|Magpet|Makilala|Matalam|Midsayap|Pigkawayan|Pikit|President Roxas|Tulunan";
s_a[28]="Davao del Norte|Asuncion|Braulio E. Dujali|Carmen|Island Garden City of Samal|Kapalong|New Corella|Panabo City|San Isidro|Santo Tomas|Tagum City|Talaingod";
s_a[29]="Davao del Sur|Bansalan|Davao City|Digos City|Don Marcelino|Hagonoy|Jose Abad Santos|Kiblawan|Magsaysay|Malalag|Malita|Matanao|Padada|Santa Cruz|Santa Maria|Saranga";
s_a[30]="Davao Oriental|Baganga|Banaybanay|Boston|Caraga|Cateel|Governor Generoso|Lupon|Manay|Mati City|San Isidro|Tarragona";
s_a[31]="Dinagat Islands|Basilisia (Rizal)|Cagdianao|Dinagat|Libjo (Albor)|Loreto|San Jose|Tubajon";
s_a[32]="Eastern Samar|Arteche|Balangiga|Balangkayan|Borongan City|Can-avid|Dolores|General MacArthur|Giporlos|Guiuan|Hernani|Jipapad|Lawaan|Llorente|Maslog|Maydolong|Mercedes|Oras|Quinapondan|Salcedo|San Julian|San Policarpo|Sulat|Taft";
s_a[33]="Guimaras|Buenavista|Jordan|Nueva Valencia|San Lorenzo|Sibunag";
// 
s_a[34]="Ifugao|Aguinaldo|Alfonso Lista|Asipulo|Banaue|Hingyon|Hungduan|Kiangan|Lagawe|Lamut|Mayoyao|Tinoc";
s_a[35]="Ilocos Norte|Adams|Bacarra|Badoc|Bangul|Banna|Batac City|Burgos|Carasi|Currimao|Dingras|Dumalneg|Laoag City|Marcos|Nueva Era|Pagudpud|Paoay|Pasuquin|Piddig|Pinili|San Nicolas|Sarrat|Solsona|Vintar";
s_a[36]="Ilocos Sur|Alilem|Banayoyo|Bantay|Burgos|Cabugao|Candon City|Caoayan|Cervantes|Galimuyod|Gregorio Del Pilar|Lidlidda|Magsingal|Nagbukel|Narvacan|Quirino|Salcedo|San Emilio|San Esteban|San Ildefonso|San Juan|San Vicente|Santa|Santa Catalina|Santa Cruz|Santa Lucia|Santa Maria|Santiago|Santo Domingo|Sigay|Sinait|Sugpon|Suyo|Tagudin|Vigan City";
s_a[37]="Iloilo|Ajuy|Alimodian|Anilao|Badiangan|Balasan|Banate|Barotac Nuevo|Barotac Viejo|Batad|Bingawan|Cabatuan|Calinog|Carles|Concepcion|Dingle|Dueñas|Dumangas|Estancia|Guimbal|Igbaras|Iloilo City|Janiuay|Lambunao|Leganes|Lemery|Leon|Maasin|Miagao|Mina|New Lucena|Oton|Passi City|Pavia|Pototan|San Dionisio|San Enrique|San Joaquin|San Miguel|San Rafael|Santa Barbara|Sara|Tigbauan|Tubungan|Zarraga";
s_a[38]="Isabela|Alicia|Angadanan|Aurora|Benito Soliven|Burgos|Cabagan|Cabatuan|Cauayan City|Cordon|Delfin Albano|Dinapigue|Divilacan|Echague|Gamu|Ilagan|Jones|Luna|Maconacon|Mallig|Naguilian|Palanan|Quezon|Quirino|Ramon|Reina Mercedes|Roxas|San Agustin|San Guillermo|San Isidro|San Manuel|San Mariano|San Mateo|San Pablo|Santa Maria|Santiago City|Santo Tomas|Tumauini";
s_a[39]="Kalinga|Balbalan|Lubuagan|Pasil|Pinukpuk|Rizal|Tabuk City|Tanudan|Tinglayan";
s_a[40]="La Union|Agoo|Aringay|Bacnotan|Bagulin|Balaoan|Bangar|Bauang|Burgos|Caba|Luna|Naguilian|Pugo|Rosario|San Fernando City|San Gabriel|San Juan|Santo Tomas|Santol|Sudipen|Tubao";
s_a[41]="Laguna|Alaminos|Bay|Biñan|Cabuyao|Calamba City|Calauan|Cavinti|Famy|Kalayaan|Liliw|Los Baños|Luisiana|Lumban|Mabitac|Magdalena|Majayjay|Nagcarlan|Paete|Pagsanjan|Pakil|Pangil|Pila|Rizal|San Pablo City|San Pedro|Santa Cruz|Santa Maria|Santa Rosa City|Siniloan|Victoria";
s_a[42]="Lanao del Norte|Bacolod|Balol|Baroy|Iligan City|Kapatagan|Kauswagan|Kolambugan|Lala|Linamon|Magsaysay|Maigo|Matungao|Munai|Nunungan|Pantao Ragat|Pantar|Poona Piagapo|Salvador|Sapad|Sultan Naga Dimaporo|Tagoloan|Tangcal|Tubod";
s_a[43]="Lanao del Sur|Bacolod-Kalawi|Balabagan|Balindong|Bayang|Binidayan|Buadiposo-Buntong|Bubong|Bumbaran|Butig|Calanogas|Ditsaan-Ramain|Ganassi|Kapai|Kapatagan|Lumba-Bayabao|Lumbaca-Unayan|Lumbatan|Lumbayanague}Madalum|Madamba|Maguing|Malabang|Marantao|Marawi City|Marogong|Masiu|Mulondo|Pagayawan|Piagapo|Poona Bayabao|Pualas|Saguiaran|Sultan Dumalondong|Picong|Tagoloan li|Tamparan|Taraka|Tubaran|Tugaya|Wao";
s_a[44]="Leyte|Abuyog|Alangalang|Albuera|Babatngon|Barugo|Bato|Baybay City|Burauen|Calubian|Capoocan|Carigara|Dagami|Dulag|Hilongos|Hindang|Inopacan|Isabel|Jaro|Javier|Julita|Kananga|La Paz|Leyte|Macarthur|Mahaplag|Matag-ob|Matalom|Mayorga|Merida|Ormoc City|Palo|Palompon|Pastrana|San Isidro|San Miguel|Santa Fe|Tabango|Tabontabon|Tacloban|Tanauan|Tolosa|Tunga|Villaba";
s_a[45]="Maguindanao|Ampatuan|Buluan|Cotobato City|Datu Abdullah Sangki|Datu Anggal Midtimbang|Datu Paglas|Datu Piang|Datu Saudi-Ampatuan|Datu Unsay|Gen. S. K. Pendatun|Guindulungan|Mamasapano|Mangudadatu|Pagagawan|Pagalungan|Paglat|Pandag|Rajah Buayan|Shariff Aguak|South Upi|Sultan sa Barongis|Talayan|Talitay";
s_a[46]="Marinduque|Boac|Buenavista|Gasan|Mogpog|Santa Cruz|Torrijos";
s_a[47]="Masbate|Aroroy|Baleno|Balud|Batuan|Cataingan|Cawayan|Claveria|Dimasalang|Esperanza|Mandaon|Masbate City|Milagros|Mobo| Monreal|Palanas|Pio V. Corpuz|Placer|San Fernando|San Jacinto|San Pascual|Uson";
s_a[48]="Metro Manila|Caloocan|Las Piñas|Makati|Malabon|Mandaluyong|Manila|Marikina|Muntinlupa|Navotas|Parañaque|Pasay|Pasig|Pateros|Quezon City|San Juan|Taguig|Valenzuela";
// <!-- -->
s_a[49]="Misamis Occidental|Aloran|Baliangao|Bonifacio|Calamba|Clarin|Concepcion|Don Victoriano Chiongbian|Jimenez|Lopez Jaena|Oroquieta City|Ozamis City|Panaon|Plaridel|Sapang Dalaga|Sinacaban|Tangub|Tudela";
s_a[50]="Misamis Oriental|Alubijid|Balingasag|Balingoan|Binuangan|Cagayan De Oro|Claveria|El Salvador|El Salvador City|Gingoog City|Gitagum|Initao|Jasaan|Kinoguitan|Lagonglong|Laguindingan|Libertad|Lugait|Magsaysay|Manticao|Medina|Naawan|Opol|Salay|Sugbongcogon|Tagoloan|Talisayan|Villanueva";
s_a[51]="Mountain Province|Barlig|Bauko|Besao|Bontoc|Natonin|Paracelis|Sabangan|Sadanga|Sagada|Tadian";
s_a[52]="Negros Occidental|Bacolod City|Bago City|Binalbagan|Cadiz City|Calatrava|Candoni|Cauayan|Enrique B. Magalona|Escalante City|Himamaylan City|Hinigaran|Hinoba-an|Ilog|Isabela|Kabankalan City|La Carlota City|La Castellana|Manapla|Moises Padilla|Murcia|Pontevedra|Pulupandan|Sagay City|Salvador Benedicto|San Carlos City|San Enrique|Silay City|Sipalay City|Talisay City|Toboso|Valladolid|Victorias City";
s_a[53]="Negros Oriental|Amlan|Ayungon|Bacong|Bais|Basay|Bayawan|Bindoy|Canlaon|Dauin|Dumaguete|Guihulngan|Jimalalud|La Libertad|Mabinay|Manjuyod|Pamplona|San Jose|Santa Catalina|Siaton|Sibulan|Tanjay|Tayasan|Valencia|Vallehermoso|Zamboanguita";
s_a[54]="Northern Samar|Allen|Biri|Bobon|Capul|Catarman|Catubig|Gamay|Laoang|Lapinig|Las Navas|Lavezares|Lope de Vega|Mapanas|Mondragon|Palapag|Pambujan|Rosario|San Antonio|San Isidro|San Jose|San Roque|San Vicente|Silvino Lobos|Victoria";
s_a[55]="Nueva Ecija|Aliaga|Bongabon|Cabiao|Cabanatuan City|Carranglan|Cuyapo|Gabaldon|Gapan City|General Mamerto Natividad|General Tinio|Guimba|Jaen|Laur|Licab|Llanera|Lupao|Nampicuan|Palayan City|Pantabangan|Peñaranda|Quezon|Rizal|San Antonio|San Isidro|San Jose City|San Leonardo|Santa Rosa|Santo Domingo|Science City of Muñoz|Talavera|Talugtug|Zaragoza";
s_a[56]="Nueva Vizcaya|Alfonso Castaneda|Ambaguio|Aritao|Bagabag|Bambang|Bayombong|Diadi|Dupax del Norte|Dupax del Sur|Kasibu|Kayapa|Quezon|Santa Fe|Solano|Villaverde";
s_a[57]="Occidental Mindoro|Abra de Ilog|Calintaan|Looc|Lubang|Magsaysay|Mamburao|Paluan|Rizal|Sablayan|San Jose|Santa Cruz";
s_a[58]="Oriental Mindoro|Baco|Bansud|Bongabong|Bulalacao|Calapan City|Gloria|Mansalay|Naujan|Pinamalayan|Pola|Puerto Galera|Roxas|San Teodoro|Socorro|Victoria";
s_a[59]="Palawan|Aborlan|Agutaya|Araceli|Balabac|Bataraza|Brooke's Point|Busuanga|Cagayancillo|Coron|Culion|Cuyo|Dumaran|El Nido|Kalayaan|Linapacan|Magsaysay|Narra|Puerto Princesa City|Quezon|Rizal|Roxas|San Vicente|Sofronio Española|Taytay";
s_a[60]="Pampanga|Angeles City|Apalit|Arayat|Bacolor|Candaba|Floridablanca|Guagua|Lubao|Mabalacat|Macabebe|Magalang|Masantol|Mexico|Minalin|Porac|San Fernado City|San Luis|San Simon|Santa Ana|Santa Rita|Santo Tomas|Sasmuan";
s_a[61]="Pangasinan|Agno|Aguilar|Alaminos City|Alcala|Anda|Asingan|Balungao|Bani|Basista|Bautista|Bayambang|Binalonan|Binmaley|Bolinao|Bugallon|Burgos|Calasiao|Dagupan City|Dasol|Infanta|Labrador|Laoac|Lingayen|Mabini|Malasiqui|Manaoag|Mangaldan|Mangatarem|Mapandan|Natividad|Pozzorubio|Rosales|San Carlos City|San Fabian|San Jacinto|San Manuel|San Nicolas|San Quintin|Santa Barbara|Santa Maria|Santo Tomas|Sison|Sual|Tayug|Umingan|Urbiztondo|Urdaneta City|Villasis";
s_a[62]="Quezon|Agdangan|Alabat|Atimonan|Buenavista|Burdeos|Calauag|Candelaria|Catanauan|Dolores|General Luna|General Nakar|Guinayangan|Gumaca|Infanta|Jomalig|Lopez|Lucban|Lucena City|Macalelon|Mauban|Mulanay|Padre Burgos|Pagbilao|Panukulan|Patnanungan|Perez|Pitogo|Plaridel|Polillo|Quezon|Real|Sampaloc|San Andres|San Antonio|San Francisco|San Narciso|Sariaya|Tagkawayan|Tayabas City|Tiaong|Unisan";
// <!-- -->
s_a[63]="Quirino|Aglipay|Cabarroguis|Diffun|Maddela|Nagtipunan|Saguday";
s_a[64]="Rizal|Angono|Antipolo City|Baras|Binangonan|Cainta|Cardona|Jalajala|Morong|Pililla|Rodriguez|San Mateo|Tanay|Taytay|Teresa";
s_a[65]="Romblon|Alcantara|Banton|Cajidiocan|Calatrava|Concepcion|Corcuera|Ferrol|Looc|Magdiwang|Odiongan|Romblon|San Agustin|San Andres|San Fernando|San Jose|Santa Fe|Santa Maria";
s_a[66]="Samar|Almagro|Basey|Calbayog City|Calbiga|Catbalogan City|Daram|Gandara|Hinabangan|Jiabong|Marabut|Matuguinao|Motiong|Pagsanghan|Paranas|Pinabacdao|San Jorge|San Jose De Buan|San Sebastian|Santa Margarita|Santa Rita|Santo Niño|Tagapul-an|Talalora|Tarangnan|Villareal|Zumarraga";
s_a[67]="Sarangani|Alabel|Glan|Kiamba|Maasim|Maitum|Malapatan|Malungon";
s_a[68]="Shariff Kabunsuan|Barira|Buldon|Datu Blah T. Sinsuat|Datu Odin Sinsuat|Kabuntalan|Matanog|Northern Kabuntalan|Parang|Sultan Kudarat|Sultan Mastura|Upi";
s_a[69]="Siquijor|Enrique Villanueva|Larena|Lazi|Maria|San Juan|Siquijor";
s_a[70]="Sorsogon|Barcelona|Bulan|Bulusan|Casiguran|Castilla|Donsol|Gubat|Irosin|Juban|Magallanes|Matnog|Pilar|Prieto Diaz|Santa Magdalena|Sorsogon City";
s_a[71]="South Cotobato|Banga|General Santos City|Koronadal City|Lake Sebu|Norala|Polomolok|Santo Niño|Surallah|T'Boli|Tampakan|Tantangan|Tupi"
s_a[72]="Southern Leyte|Anahawan|Bontoc|Hinunangan|Hinundayan|Libagon|Liloan|Limasawa|Maasin City|Macrohon|Malitbog|Padre Burgos|Pintuyan|Saint Bernard|San Francisco|San Juan|San Ricardo|Silago|Sogod|Tomas Oppus";
s_a[73]="Sultan Kudarat|Bagumbayan|Columbio|Esperanza|Isulan|Kalamansig|Lambayong|Lebak|Lutayan|Palimbang|President Quirino|Sen. Ninoy Aquino|Tacurong City";
s_a[74]="Sulu|Hadji Panglima Tahil|Indanan|Jolo|Kalingalan Caluang|Lugus|Luuk|Maimbung|Old Panamao|Omar|Pandami|Panglima Estino|Pangutaran|Parang|Pata|Patikul|Siasi|Talipao|Tapul|Tongkil";
s_a[75]="Surigao del Norte|Alegria|Bacuag|Burgos|Claver|Dapa|Del Carmen|General Luna|Gigaquit|Mainit|Malimono|Pilar|Placer|San Benito|San Francisco|San Isidro|Santa Monica|Sison|Socorro|Surigao City|Tagana-an|Tubod";
s_a[76]="Surigao del Sur|Barobo|Bayabas|Bislig City|Cagwait|Cantilan|Carmen|Carrascal|Cortes|Hinatuan|Lanuza|Lianga|Lingig|Madrid|Marihatag|San Agustin|San Miguel|Tagbina|Tago|Tandag City";
s_a[77]="Tarlac|Anao|Bamban|Camiling|Capas|Concepcion|Gerona|La Paz|Mayantoc|Moncada|Paniqui|Pura|Ramos|San Clemente|San Jose|San Manuel|Santa Ignacia|Tarlac City|Victoria";
s_a[78]="Tawitawi|Bongao|Languyan|Mapun|Panglima Sugala|Sapa-Sapa|Sibutu|Simunul|Sitangkai|South Ubian|Tandubas|Turtle Islands";
s_a[79]="Zambales|Botolan|Cabangan|Candelaria|Castillejos|Iba|Masinloc|Olongapo City|Palauig|San Antonio|San Felipe|San Marcelino|San Narciso|Santa Cruz|Subic";
s_a[80]="Zamboanga del Norte|Bacungan|Baliguian|Dapitan City|Dipolog City|Godod|Gutalac|Jose Dalman|Kalawit|Katipunan|La Libertad|Labason|Liloy|Manukan|Mutia|Piñan|Polanco|Pres. Manuel A. Roxas|Rizal|Salug|Sergio Osmeña Sr.|Siayan|Sibuco|Sibutad|Sindangan|Siocon|Sirawai|Tampilisan";
s_a[81]="Zamboanga del Sur|Aurora|Bayog|Dimataling|Dinas|Dumalinao|Dumingag|Guipos|Josefina|Kumalarang|Labangan|Lakewood|Lapuyan|Mahayag|Margosatubig|Midsalip|Molave|Pagadian City|Pitogo|Ramon Magsaysay|San Miguel|San Pablo|Sominot|Tabina|Tambulig|Tigbao|Tukuran|Vincenzo A. Sagun|Zamboanga City";
s_a[82]="Zamboanga Sibugay|Alicia|Buug|Diplahan|Imelda|Ipil|Kabasalan|Mabuhay|Malangas|Naga|Olutanga|Payao|Roseller Lim|Siay|Talusan|Titay|Tungawan";
<!--END -->
// s_a[83]="Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen";
// s_a[84]="Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western";
// s_a[85]="Gibraltar";
// s_a[86]="Ile du Lys|Ile Glorieuse";
// s_a[87]="Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos";
// s_a[88]="Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)"
// s_a[89]="Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick";
// s_a[90]="Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante";
// s_a[91]="Guam";
// s_a[92]="Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa";
// s_a[93]="Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale";
// s_a[94]="Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou";
// s_a[95]="Bafata|Biombo|Bissau|Bolama-Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali";
// s_a[96]="Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
// s_a[97]="Artibonite|Centre|Grand'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est";
// s_a[98]="Heard Island and McDonald Islands";
// s_a[99]="Holy See (Vatican City)"
// s_a[100]="Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
// s_a[101]="Hong Kong";
// s_a[102]="Howland Island";
// s_a[103]="Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Budapest|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg";
// s_a[104]="Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla";
// s_a[105]="Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
// s_a[106]="Aceh|Bali|Banten|Bengkulu|East Timor|Gorontalo|Irian Jaya|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta";
// s_a[107]="Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohgiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Tehran|Yazd|Zanjan";
// s_a[108]="Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
// s_a[109]="Carlow|Cavan|Clare|Cork|Donegal|Dublin|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow";
// s_a[110]="Antrim|Ards|Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Derry|Down|Dungannon|Fermanagh|Larne|Limavady|Lisburn|Magherafelt|Moyle|Newry and Mourne|Newtownabbey|North Down|Omagh|Strabane";
// s_a[111]="Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv";
// s_a[112]="Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto";
// s_a[113]="Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
// s_a[114]="Jan Mayen";
// s_a[115]="Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
// s_a[116]="Jarvis Island";
// s_a[117]="Jersey";
// s_a[118]="Johnston Atoll";
// s_a[119]="'Amman|Ajlun|Al 'Aqabah|Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa'|Irbid|Jarash|Ma'an|Madaba";
// s_a[120]="Juan de Nova Island";
// s_a[121]="Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl";
// s_a[122]="Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western";
// s_a[123]="Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands|Kanton|Kiritimati|Kuria|Line Islands|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina";
// s_a[124]="Chagang-do (Chagang Province)|Hamgyong-bukto (North Hamgyong Province)|Hamgyong-namdo (South Hamgyong Province)|Hwanghae-bukto (North Hwanghae Province)|Hwanghae-namdo (South Hwanghae Province)|Kaesong-si (Kaesong City)|Kangwon-do (Kangwon Province)|Namp'o-si (Namp'o City)|P'yongan-bukto (North P'yongan Province)|P'yongan-namdo (South P'yongan Province)|P'yongyang-si (P'yongyang City)|Yanggang-do (Yanggang Province)"
// s_a[125]="Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Cheju-do|Cholla-bukto|Cholla-namdo|Inch'on-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi";
// s_a[126]="Al 'Asimah|Al Ahmadi|Al Farwaniyah|Al Jahra'|Hawalli";
// s_a[127]="Batken Oblasty|Bishkek Shaary|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)"
// s_a[128]="Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang";
// s_a[129]="Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons";
// s_a[130]="Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane";
// s_a[131]="Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohales Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka";
// s_a[132]="Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|Sinoe";
// s_a[133]="Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan";
// s_a[134]="Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz";
// s_a[135]="Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas";
// s_a[136]="Diekirch|Grevenmacher|Luxembourg";
// s_a[137]="Macau";
// s_a[138]="Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (Skopje)|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)|Drugovo|Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (Skopje)|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci";
// s_a[139]="Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
// s_a[140]="Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Lilongwe|Machinga (Kasupe)|Mangochi|Mchinji|Mulanje|Mwanza|Mzimba|Nkhata Bay|Nkhotakota|Nsanje|Ntcheu|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba";
// s_a[141]="Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan";
// s_a[142]="Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Maale|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
// s_a[143]="Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou";
// s_a[144]="Valletta";
// s_a[145]="Man, Isle of";
// s_a[146]="Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejit|Mili|Namorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje";
// s_a[147]="Martinique";
// s_a[148]="Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza";
// s_a[149]="Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Riviere du Rempart|Rodrigues|Savanne";
// s_a[150]="Mayotte";
// s_a[151]="Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mexico|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas";
// s_a[152]="Chuuk (Truk)|Kosrae|Pohnpei|Yap";
// s_a[153]="Midway Islands";
// s_a[154]="Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni";
// s_a[155]="Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo";
// s_a[156]="Arhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan|Dornod|Dornogovi|Dundgovi|Dzavhan|Erdenet|Govi-Altay|Hentiy|Hovd|Hovsgol|Omnogovi|Ovorhangay|Selenge|Suhbaatar|Tov|Ulaanbaatar|Uvs";
// s_a[157]="Saint Anthony|Saint Georges|Saint Peter's";
// s_a[158]="Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Rachidia|Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-Sale|Safi|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit";
// s_a[159]="Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia";
// s_a[160]="Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
// s_a[161]="Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren";
// s_a[162]="Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti";
// s_a[163]="Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
// s_a[164]="Netherlands Antilles";
// s_a[165]="Iles Loyaute|Nord|Sud";
// s_a[166]="Akaroa|Amuri|Ashburton|Bay of Islands|Bruce|Buller|Chatham Islands|Cheviot|Clifton|Clutha|Cook|Dannevirke|Egmont|Eketahuna|Ellesmere|Eltham|Eyre|Featherston|Franklin|Golden Bay|Great Barrier Island|Grey|Hauraki Plains|Hawera|Hawke's Bay|Heathcote|Hikurangi|Hobson|Hokianga|Horowhenua|Hurunui|Hutt|Inangahua|Inglewood|Kaikoura|Kairanga|Kiwitea|Lake|Mackenzie|Malvern|Manaia|Manawatu|Mangonui|Maniototo|Marlborough|Masterton|Matamata|Mount Herbert|Ohinemuri|Opotiki|Oroua|Otamatea|Otorohanga|Oxford|Pahiatua|Paparua|Patea|Piako|Pohangina|Raglan|Rangiora|Rangitikei|Rodney|Rotorua|Runanga|Saint Kilda|Silverpeaks|Southland|Stewart Island|Stratford|Strathallan|Taranaki|Taumarunui|Taupo|Tauranga|Thames-Coromandel|Tuapeka|Vincent|Waiapu|Waiheke|Waihemo|Waikato|Waikohu|Waimairi|Waimarino|Waimate|Waimate West|Waimea|Waipa|Waipawa|Waipukurau|Wairarapa South|Wairewa|Wairoa|Waitaki|Waitomo|Waitotara|Wallace|Wanganui|Waverley|Westland|Whakatane|Whangarei|Whangaroa|Woodville";
// s_a[167]="Atlantico Norte|Atlantico Sur|Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas";
// s_a[168]="Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillaberi|Zinder";
// s_a[169]="Abia|Abuja Federal Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
// s_a[170]="Niue";
// s_a[171]="Norfolk Island";
// s_a[172]="Northern Islands|Rota|Saipan|Tinian";
// s_a[173]="Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nord-Trondelag|Nordland|Oppland|Oslo|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold";
// s_a[174]="Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Masqat|Musandam|Zufar";
// s_a[175]="Balochistan|Federally Administered Tribal Areas|Islamabad Capital Territory|North-West Frontier Province|Punjab|Sindh";
// s_a[176]="Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Palau Island|Peleliu|Sonsoral|Tobi";
// s_a[177]="Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|Panama|San Blas|Veraguas";
// s_a[178]="Bougainville|Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New Ireland|Northern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands";
// s_a[179]="Alto Paraguay|Alto Parana|Amambay|Asuncion (city)|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro";
// s_a[180]="Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Lima|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali";
// s_a[181]="Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan City|Bataan|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines Norte|Camarines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Oriental|Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La Carlota|La Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro Occidental|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur";
// s_a[182]="Pitcaim Islands";
// s_a[183]="Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie";
// s_a[184]="Acores (Azores)|Aveiro|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu";
// s_a[185]="Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco";
// s_a[186]="Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
// s_a[187]="Reunion";
// s_a[188]="Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Bucuresti|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Giurgiu|Gorj|Harghita|Hunedoara|Ialomita|Iasi|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea";
// s_a[189]="Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangel'skaya|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr')|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran')|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nal'chik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Komi-Permyatskiy (Kudymkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Moskva (Moscow)|Murmanskaya|Nenetskiy (Nar'yan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Penzenskaya|Permskaya|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutsk)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropol'skiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan')|Taymyrskiy (Dudinka)|Tomskaya|Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya|Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya";
// s_a[190]="Butare|Byumba|Cyangugu|Gikongoro|Gisenyi|Gitarama|Kibungo|Kibuye|Kigali Rurale|Kigali-ville|Ruhengeri|Umutara";
// s_a[191]="Ascension|Saint Helena|Tristan da Cunha";
// s_a[192]="Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint John Figtree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Palmetto Point";
// s_a[193]="Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros Islet|Laborie|Micoud|Praslin|Soufriere|Vieux Fort";
// s_a[194]="Miquelon|Saint Pierre";
// s_a[195]="Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
// s_a[196]="A'ana|Aiga-i-le-Tai|Atua|Fa'asaleleaga|Gaga'emauga|Gagaifomauga|Palauli|Satupa'itea|Tuamasaga|Va'a-o-Fonoti|Vaisigano";
// s_a[197]="Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|San Marino|Serravalle";
// s_a[198]="Principe|Sao Tome";
// s_a[199]="'Asir|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Ha'il|Jizan|Makkah|Najran|Tabuk";
// s_a[200]="Aberdeen City|Aberdeenshire|Angus|Argyll and Bute|City of Edinburgh|Clackmannanshire|Dumfries and Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|Eilean Siar (Western Isles)|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth and Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|The Scottish Borders|West Dunbartonshire|West Lothian";
// s_a[201]="Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Saint-Louis|Tambacounda|Thies|Ziguinchor";
// s_a[202]="Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand' Anse (on Mahe)|Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka";
// s_a[203]="Eastern|Northern|Southern|Western";
// s_a[204]="Singapore";
// s_a[205]="Banskobystricky|Bratislavsky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky";
// s_a[206]="Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubljana|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece";
// s_a[207]="Bellona|Central|Choiseul (Lauru)|Guadalcanal|Honiara|Isabel|Makira|Malaita|Rennell|Temotu|Western";
// s_a[208]="Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
// s_a[209]="Eastern Cape|Free State|Gauteng|KwaZulu-Natal|Mpumalanga|North-West|Northern Cape|Northern Province|Western Cape";
// s_a[210]="Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands";
// s_a[211]="Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Canarias (Canary Islands)|Cantabria|Castilla y Leon|Castilla-La Mancha|Cataluna|Ceuta|Communidad Valencian|Extremadura|Galicia|Islas Chafarinas|La Rioja|Madrid|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)|Penon de Alhucemas|Penon de Velez de la Gomera";
// s_a[212]="Spratly Islands";
// s_a[213]="Central|Eastern|North Central|North Eastern|North Western|Northern|Sabaragamuwa|Southern|Uva|Western";
// s_a[214]="A'ali an Nil|Al Bahr al Ahmar|Al Buhayrat|Al Jazirah|Al Khartum|Al Qadarif|Al Wahdah|An Nil al Abyad|An Nil al Azraq|Ash Shamaliyah|Bahr al Jabal|Gharb al Istiwa'iyah|Gharb Bahr al Ghazal|Gharb Darfur|Gharb Kurdufan|Janub Darfur|Janub Kurdufan|Junqali|Kassala|Nahr an Nil|Shamal Bahr al Ghazal|Shamal Darfur|Shamal Kurdufan|Sharq al Istiwa'iyah|Sinnar|Warab";
// s_a[215]="Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica";
// s_a[216]="Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen";
// s_a[217]="Hhohho|Lubombo|Manzini|Shiselweni";
// s_a[218]="Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Stockholms|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands";
// s_a[219]="Aargau|Ausser-Rhoden|Basel-Landschaft|Basel-Stadt|Bern|Fribourg|Geneve|Glarus|Graubunden|Inner-Rhoden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich";
// s_a[220]="Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda'|Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus";
// s_a[221]="Chang-hua|Chi-lung|Chia-i|Chia-i|Chung-hsing-hsin-ts'un|Hsin-chu|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Kao-hsiung|Miao-li|Nan-t'ou|P'eng-hu|P'ing-tung|T'ai-chung|T'ai-chung|T'ai-nan|T'ai-nan|T'ai-pei|T'ai-pei|T'ai-tung|T'ao-yuan|Yun-lin";
// s_a[222]="Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon";
// s_a[223]="Arusha|Dar es Salaam|Dodoma|Iringa|Kagera|Kigoma|Kilimanjaro|Lindi|Mara|Mbeya|Morogoro|Mtwara|Mwanza|Pemba North|Pemba South|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga|Zanzibar Central/South|Zanzibar North|Zanzibar Urban/West";
// s_a[224]="Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Krung Thep Mahanakhon (Bangkok)|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
// s_a[225]="Tobago";
// s_a[226]="De La Kara|Des Plateaux|Des Savanes|Du Centre|Maritime";
// s_a[227]="Atafu|Fakaofo|Nukunonu";
// s_a[228]="Ha'apai|Tongatapu|Vava'u";
// s_a[229]="Arima|Caroni|Mayaro|Nariva|Port-of-Spain|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Victoria";
// s_a[230]="Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou Zid|Siliana|Sousse|Tataouine|Tozeur|Tunis|Zaghouan";
// s_a[231]="Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak";
// s_a[232]="Ahal Welayaty|Balkan Welayaty|Dashhowuz Welayaty|Lebap Welayaty|Mary Welayaty";
// s_a[233]="Tuvalu";
// s_a[234]="Adjumani|Apac|Arua|Bugiri|Bundibugyo|Bushenyi|Busia|Gulu|Hoima|Iganga|Jinja|Kabale|Kabarole|Kalangala|Kampala|Kamuli|Kapchorwa|Kasese|Katakwi|Kibale|Kiboga|Kisoro|Kitgum|Kotido|Kumi|Lira|Luwero|Masaka|Masindi|Mbale|Mbarara|Moroto|Moyo|Mpigi|Mubende|Mukono|Nakasongola|Nebbi|Ntungamo|Pallisa|Rakai|Rukungiri|Sembabule|Soroti|Tororo";
// s_a[235]="Avtonomna Respublika Krym (Simferopol')|Cherkas'ka (Cherkasy)|Chernihivs'ka (Chernihiv)|Chernivets'ka (Chernivtsi)|Dnipropetrovs'ka (Dnipropetrovs'k)|Donets'ka (Donets'k)|Ivano-Frankivs'ka (Ivano-Frankivs'k)|Kharkivs'ka (Kharkiv)|Khersons'ka (Kherson)|Khmel'nyts'ka (Khmel'nyts'kyy)|Kirovohrads'ka (Kirovohrad)|Kyyiv|Kyyivs'ka (Kiev)|L'vivs'ka (L'viv)|Luhans'ka (Luhans'k)|Mykolayivs'ka (Mykolayiv)|Odes'ka (Odesa)|Poltavs'ka (Poltava)|Rivnens'ka (Rivne)|Sevastopol'|Sums'ka (Sumy)|Ternopil's'ka (Ternopil')|Vinnyts'ka (Vinnytsya)|Volyns'ka (Luts'k)|Zakarpats'ka (Uzhhorod)|Zaporiz'ka (Zaporizhzhya)|Zhytomyrs'ka (Zhytomyr)"
// s_a[236]="'Ajman|Abu Zaby (Abu Dhabi)|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra's al Khaymah|Umm al Qaywayn";
// s_a[237]="Barking and Dagenham|Barnet|Barnsley|Bath and North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton and Hove|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|City of Bristol|City of Kingston upon Hull|City of London|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith and Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington and Chelsea|Kent|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|North Yorkshire|Northamptonshire|Northumberland|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar and Cleveland|Richmond upon Thames|Rochdale|Rotherham|Rutland|Salford|Sandwell|Sefton|Sheffield|Shropshire|Slough|Solihull|Somerset|South Gloucestershire|South Tyneside|Southampton|Southend-on-Sea|Southwark|St. Helens|Staffordshire|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderland|Surrey|Sutton|Swindon|Tameside|Telford and Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|Wandsworth|Warrington|Warwickshire|West Berkshire|West Sussex|Westminster|Wigan|Wiltshire|Windsor and Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York";
// s_a[238]="Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Montevideo|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres";
// s_a[239]="Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
// s_a[240]="Andijon Wiloyati|Bukhoro Wiloyati|Farghona Wiloyati|Jizzakh Wiloyati|Khorazm Wiloyati (Urganch)|Namangan Wiloyati|Nawoiy Wiloyati|Qashqadaryo Wiloyati (Qarshi)|Qoraqalpoghiston (Nukus)|Samarqand Wiloyati|Sirdaryo Wiloyati (Guliston)|Surkhondaryo Wiloyati (Termiz)|Toshkent Shahri|Toshkent Wiloyati";
// s_a[241]="Malampa|Penama|Sanma|Shefa|Tafea|Torba";
// s_a[242]="Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";
// s_a[243]="An Giang|Ba Ria-Vung Tau|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Da Nang|Dac Lak|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hai Duong|Hai Phong|Ho Chi Minh|Hoa Binh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai";
// s_a[244]="Saint Croix|Saint John|Saint Thomas";
// s_a[245]="Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Carmarthenshire|Ceredigion|Conwy|Denbighshire|Flintshire|Gwynedd|Isle of Anglesey|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|The Vale of Glamorgan|Torfaen|Wrexham";
// s_a[246]="Alo|Sigave|Wallis";
// s_a[247]="West Bank";
// s_a[248]="Western Sahara";
// s_a[249]="'Adan|'Ataq|Abyan|Al Bayda'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadhramawt|Hajjah|Ibb|Lahij|Ma'rib|Sa'dah|San'a'|Ta'izz";
// s_a[250]="Kosovo|Montenegro|Serbia|Vojvodina";
// s_a[251]="Central|Copperbelt|Eastern|Luapula|Lusaka|North-Western|Northern|Southern|Western";
// s_a[252]="Bulawayo|Harare|ManicalandMashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands";

function print_country(country_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(country_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select Country','');
	option_str.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		option_str.options[option_str.length] = new Option(country_arr[i],country_arr[i]);
	}
}

function print_state(state_id, state_index){
	var option_str = document.getElementById(state_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	var state_arr = s_a[state_index].split("|");
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}
