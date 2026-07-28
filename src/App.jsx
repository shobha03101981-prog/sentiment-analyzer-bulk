import React, { useState, useMemo, useRef } from "react";
import { Sparkles, Database, GitBranch, BarChart3, PlayCircle, ArrowRight, Github, CheckCircle2, Target, Layers } from "lucide-react";

const MODEL_DATA = {"meta":{"dataset":"SST-2 (Stanford Sentiment Treebank, GLUE benchmark)","source":"Hugging Face Datasets (glue/sst2)","trainSize":6920,"testSize":1821,"trainPositive":3610,"trainNegative":3310,"vocabSize":2500,"ngramRange":[1,2],"model":"TF-IDF + Logistic Regression"},"metrics":{"accuracy":0.7847,"precision":0.773,"recall":0.8053,"f1":0.7888,"confusionMatrix":[[697,215],[177,732]]},"vectorizer":{"terms":["10","10 minutes","11","13","15","19","20","2002","50","51","70s","90","90 minute","90 minutes","abandon","ability","able","absolutely","absorbing","absurd","absurdity","academy","accents","accessible","accomplished","account","achievement","achieves","achingly","act","acted","acting","action","action comedy","action film","action flick","action movie","action sequences","actor","actors","actress","actresses","acts","actually","adam","adam sandler","adaptation","add","addition","adds","admirable","admire","admit","adolescent","adult","adults","advantage","adventure","adventures","affair","affecting","affection","affirming","afraid","african","age","aged","ages","ago","ahead","aimed","aims","air","alabama","alive","allen","allow","allows","alternately","alternative","amateurish","amazing","ambition","ambitious","america","american","americans","amounts","amused","amusing","analyze","angst","animal","animated","animation","annoying","answers","anti","antwone","antwone fisher","anybody","apart","apparent","apparently","appeal","appealing","appear","appears","appreciate","approach","arnold","arrives","art","art house","artifice","artificial","artist","artists","arts","aside","ask","asks","aspects","assassin","assured","astonishing","astonishingly","atmosphere","attempt","attempts","attention","attitude","attraction","attractive","audience","audiences","austin","austin powers","authentic","authority","auto","average","avoid","award","away","awe","awful","awkward","baby","background","bad","bad film","bad movie","badly","baffling","bag","balance","balanced","ballistic","ballot","banal","band","bang","bar","barbershop","bard","barely","barry","based","basic","battle","beach","bear","bears","beast","beat","beautiful","beautiful film","beautifully","beautifully shot","beauty","beginning","begins","behavior","behold","believable","believe","belly","belongs","belt","beneath","benigni","best","best film","best films","better","big","big fat","big screen","bigger","biggest","biopic","birthday","birthday girl","bit","bite","biting","bits","bitter","bittersweet","bizarre","black","black comedy","blade","blair","blair witch","bland","blast","blend","blood","blue","blue crush","boasts","bodies","body","bold","bond","book","bore","bored","boring","bother","bound","box","boy","boys","brain","break","breaks","breathtaking","breezy","bride","bright","brilliant","brilliantly","bring","bringing","brings","british","britney","broad","broken","broomfield","brosnan","brother","brothers","brought","brown","brown sugar","brutal","brutally","budget","build","built","bullets","bullock","bunch","buoyant","burns","business","busy","buy","ca","caine","called","came","camera","camp","candy","capable","capacity","caper","captivating","capture","captures","car","care","career","cares","carried","carries","carry","cartoon","carvey","case","cast","casting","cat","catch","category","caught","cause","cautionary","cautionary tale","celebrates","central","century","certain","certainly","chabrol","challenging","chan","chance","change","changes","changing","character","character development","character study","characterizations","characters","charisma","charm","charmer","charming","charms","chase","cheap","check","cheek","cheesy","chemistry","chicago","child","childhood","children","chilling","chilly","china","chinese","cho","choices","choppy","chris","christian","christmas","cinema","cinematic","cinematography","city","clarity","class","classic","clause","clear","clearly","clever","cleverly","clich","cliche","cliched","cliches","close","cloying","clumsily","clumsy","cold","collapses","collection","college","color","colorful","colors","com","combination","combined","combines","come","comedian","comedic","comedies","comedy","comedy drama","comes","comfort","comfortable","comic","coming","coming age","commentary","commercial","committed","common","community","company","comparison","compassion","compelling","complete","completely","complex","complexity","complicated","computer","concept","concerned","concert","conclusion","condition","confident","conflict","confusing","conscious","consider","considerable","considered","consistently","constant","constructed","contains","contemporary","content","context","continues","contrived","control","controversy","conventional","conversations","conviction","convince","convinced","convincing","cool","cop","copy","core","corny","count","country","country bears","couple","courage","course","crafted","crap","crass","crazy","create","created","creates","creating","creation","creative","creativity","credibility","credible","credit","credits","creepy","crime","crimes","crisp","cross","crowd","crude","cruel","crush","cult","cultural","culture","curiosity","curious","curiously","current","cut","cute","cutting","cynical","daily","damage","damn","damned","dance","dancing","dangerous","dark","dark comedy","date","david","davis","day","days","dazzling","dead","deadly","deadpan","deal","dealing","death","death smoochy","debut","decades","decent","deceptively","deeds","deep","deeper","deeply","deeply felt","definitely","deft","deftly","degree","delicate","delicately","delicious","delight","delightful","delightfully","delights","deliver","delivered","delivering","delivers","delivery","demanding","demands","demonstrates","depiction","depressing","depth","derivative","deserve","deserves","design","designed","desire","despair","desperate","desperately","desperation","despite","detailed","details","determination","determined","devastating","developed","development","devoid","dialogue","dickens","did","die","difference","different","difficult","digital","dignity","dimensional","direct","directed","directing","direction","director","director michael","director peter","directorial","directors","directs","dirty","disappointed","disappointing","disappointment","disaster","discovery","disguise","dish","disjointed","dismissed","disney","display","disposable","distance","diversion","diverting","divine","document","documentary","does","does make","does offer","does really","does work","dog","dogs","doing","domestic","dong","doses","double","doubt","downbeat","downright","drag","dragon","drags","drama","dramatic","dramatically","drawing","drawn","draws","dreadful","dream","dreams","dreary","drive","driven","drop","drug","drugs","dry","dud","duke","dull","dumb","duvall","dvd","dying","dysfunctional","early","earnest","earnestness","earth","easier","easily","eastwood","easy","eat","eccentric","eddie","eddie murphy","edge","edgy","edited","editing","effect","effective","effects","effort","efforts","elaborate","elegant","element","elements","eloquent","emerge","emerges","emotion","emotional","emotionally","emotions","empathy","empire","empowerment","encounter","end","endearing","endeavor","ending","endless","endlessly","ends","energetic","energy","engage","engaged","engaging","english","engrossing","enigma","enjoy","enjoyable","enjoyed","ensemble","ensemble cast","entertain","entertaining","entertainment","enthralling","enthusiasm","enthusiastic","entire","entirely","epic","episode","equally","equivalent","era","erotic","escape","escapism","especially","essence","essentially","esther","evans","evelyn","event","events","eventually","evil","evocative","evokes","exactly","examination","example","excellent","exceptional","exceptionally","excess","excitement","exciting","excuse","executed","execution","exercise","exhilarating","expect","expectation","expectations","expected","experience","experiences","exploitation","exploitative","exploration","exquisite","extended","extraordinary","extreme","extremely","eye","eyed","eyes","fable","face","faced","fact","fails","failure","fair","fairly","fairy","fairy tale","faith","faithful","fake","fall","falls","false","familiar","family","family film","famous","fan","fanciful","fans","fantasies","fantastic","fantasy","far","farce","fare","fascinating","fashion","fashioned","fast","faster","fat","fat greek","fatal","fatal attraction","fate","father","favor","favorite","fear","fears","feature","feature debut","feature film","feature length","features","featuring","feel","feel good","feel like","feeling","feeling like","feels","feels like","felt","female","festival","fi","fiction","fierce","fight","fighting","fights","figure","figures","filled","fills","film","film does","film feels","film just","film like","film makes","film noir","film really","film works","film year","filmed","filmmaker","filmmakers","filmmaking","films","films like","final","finale","finally","finding","finds","fine","finely","finish","fish","fisher","fit","flair","flash","flashy","flat","flawed","flaws","flick","flicks","focus","folks","follow","following","follows","food","footage","force","forced","forget","forgettable","forgive","forgotten","form","format","formula","formulaic","foster","foul","frailty","frame","france","franchise","frank","freaks","free","freeman","french","frequently","fresh","freshness","frida","friday","friend","friends","friendship","frightening","frontal","frustrating","frustration","fully","fun","funnier","funniest","funny","funny movie","funny touching","future","gags","game","games","gang","gangs","gangster","garbage","gay","gem","gender","general","generally","generate","generated","generates","generation","generic","generous","genial","genre","gentle","gently","genuine","genuinely","george","gets","gets skin","getting","ghetto","ghost","giant","giddy","gifted","girl","girls","given","gives","giving","glass","glimpse","glory","god","godard","goes","going","gone","good","good actors","good film","good intentions","good movie","good natured","good time","goofy","gorgeous","gosling","got","grace","grade","gradually","grand","grandeur","grant","graphic","great","greatest","greek","greek wedding","green","grief","gripping","gritty","gross","ground","group","grow","growing","grown","grows","guess","guilt","guilty","guilty pleasure","guns","gut","guy","guys","hackneyed","hair","half","half hour","halfway","hallmark","halloween","hand","handed","handled","hands","handsome","happen","happens","happy","hard","hard imagine","hardly","harrowing","hartley","harvard","hate","haunting","having","head","heard","heart","heartbreaking","hearted","heartfelt","hearts","heartwarming","heaven","heavy","heavy handed","hell","help","helps","henry","hero","herzog","hey","high","high school","highly","hilarious","hill","hip","hip hop","historical","history","hit","hits","hitting","hoffman","hold","holds","holes","holiday","hollywood","hollywood ending","holocaust","homage","home","honest","honestly","hong","hong kong","hop","hope","hopeful","hoping","hopkins","horrible","horrifying","horror","horror film","horror movie","hot","hour","hour half","hours","house","howard","huge","hugely","hugh","human","human nature","humanity","humor","humorless","humorous","humour","huppert","husband","hybrid","hype","ice","idea","ideas","identity","ii","ill","image","imagery","images","imagination","imaginative","imagine","imax","impact","important","impossible","impression","impressive","improbable","inane","including","incoherent","inconsequential","increasingly","incredibly","independent","indian","indie","indulgent","industry","inept","inevitable","infidelity","ingenious","inherent","inner","innocence","insanely","inside","insight","insightful","insights","inspiration","inspired","inspiring","instantly","instead","integrity","intellectual","intelligence","intelligent","intended","intense","intensity","intentions","interested","interesting","intimate","intoxicating","intricate","intrigue","intriguing","inventive","involved","involving","iranian","irony","irritating","issues","italian","jack","jackie","jackie chan","jackson","jaglom","james","japan","japanese","jason","job","john","joke","jokes","jones","journey","joy","joyous","junk","just","just does","just plain","justice","kapur","kaufman","keeping","keeps","kevin","key","kid","kiddie","kidman","kids","killer","kind","kind movie","king","kiss","kissinger","kline","knew","know","knowing","knowledge","known","knows","kong","kung","kung pow","lack","lacking","lacks","lady","lame","lan","land","lane","language","large","largely","larger","late","latest","laugh","laughable","laughing","laughs","laughter","lawrence","layers","lazy","lead","leaden","leads","leave","leaves","leaving","lee","left","legged","legged freaks","leigh","lends","length","lesson","let","lets","letting","level","levels","lies","life","life affirming","lifeless","light","lightweight","like","like bad","like movie","like ve","liked","likely","limited","limp","line","lines","lingering","lips","list","listless","literary","little","little film","little movie","live","lived","lively","lives","living","ll","locations","logic","loneliness","long","long time","longer","longing","look","look like","looked","looking","looks","looks like","lopez","loses","losing","loss","lost","lot","lots","loud","lousy","love","love story","loved","lovely","loves","loving","low","low budget","low key","lrb","lrb rrb","ludicrous","lyrical","machine","madonna","magic","magnificent","main","mainly","mainstream","maintains","major","make","makers","makes","making","male","man","manage","manages","manhattan","manipulative","mann","manner","mark","market","marks","marriage","martha","martial","martin","marvelous","master","master disguise","masterful","masterfully","masterpiece","match","material","matinee","matter","matters","mature","maudlin","maybe","mayhem","mean","meandering","meaning","means","measure","measured","mediocre","meditation","meets","melodrama","melodramatic","members","memorable","memory","men","mention","mere","merely","merit","mesmerizing","mess","message","messages","metaphor","michael","middle","mike","mild","mildly","mile","miller","mind","minded","mindless","minds","minor","minute","minutes","miss","missed","missing","mistake","mix","mixed","mixture","modern","modern day","modest","moment","moments","money","monster","monster movie","monsters","monty","mood","moore","moral","morality","morning","morvern","mother","motion","motion picture","mouth","movements","moves","movie","movie actually","movie comes","movie does","movie experience","movie going","movie just","movie like","movie makes","movie star","moviegoers","moviemaking","movies","movies like","movies year","moving","mr","ms","muddled","murder","murphy","music","musical","mystery","nair","narc","narrative","nasty","nation","national","natural","nature","natured","near","nearly","necessarily","necessary","need","needed","needs","neo","nerve","new","new film","new york","nice","nicely","nicholas","nicholas nickleby","nicholson","nickleby","night","nijinsky","niro","noir","nomination","non","nonetheless","nonsense","notch","note","notice","notion","notorious","novel","number","numbers","obnoxious","observations","obsession","obvious","obviously","occasional","occasionally","odd","oddly","odds","ode","offbeat","offensive","offer","offering","offers","office","oh","old","old fashioned","older","ones","onscreen","opaque","open","opening","openness","opera","opportunity","ordinary","oriented","original","originality","oscar","oscar nomination","outrageous","outside","outstanding","overall","overcome","overlong","overly","overwrought","pace","paced","pacing","pacino","pack","packed","paid","pain","painful","painfully","paint","paints","pair","pale","palma","pants","paper","parable","paradiso","parents","park","parker","parody","particular","particularly","partly","parts","party","pass","passion","passionate","past","pastiche","pat","path","pathetic","patience","paul","pay","peculiar","people","perfect","perfectly","performance","performances","performers","period","person","persona","personal","personality","perspective","perverse","peter","philosophical","photographed","pianist","pic","pick","picture","pictures","piece","piece work","pieces","pile","pitch","pity","place","places","plain","planet","play","played","players","playful","playing","plays","plays like","pleasant","pleasing","pleasure","pleasures","plenty","plodding","plot","plot twists","plotted","plotting","poem","poetic","poetry","poignancy","poignant","point","point view","pointless","points","pokemon","polanski","police","political","politics","ponderous","poor","poorly","pop","popcorn","portrait","portrayal","possible","possibly","post","potential","potentially","pow","power","powerful","powers","preachy","precious","predecessor","predecessors","predictable","predictably","premise","presence","present","presents","pretends","pretension","pretentious","pretty","previous","price","primarily","prison","private","probably","problem","problematic","problems","proceedings","process","produced","producer","product","production","production values","professional","profile","profound","project","promise","promises","promising","protagonist","prove","proves","provide","provides","provocative","provoking","pseudo","psychological","psychological thriller","psychology","public","pull","pulls","punch","pure","purpose","puts","putting","quality","queen","queen damned","quest","question","questions","quick","quickly","quiet","quietly","quirks","quirky","quite","race","racial","ramsay","rare","rarely","rate","raw","reach","read","read lips","reading","real","real life","realism","realistic","reality","realize","realized","really","reason","reasonably","recent","recent memory","recommend","record","recycled","red","redemption","references","refreshing","refreshingly","reign","relationship","relationships","relatively","release","released","relentlessly","relies","remain","remains","remake","remarkable","remarkably","remember","remembered","reminds","rendered","reno","rent","repetitive","replaced","report","represents","required","resist","resolutely","resonance","resonant","respect","rest","result","results","retread","return","returns","revealing","reveals","revelatory","revenge","revolution","rewarding","rewards","rhythm","rhythms","rich","richer","richly","ridden","ride","ridiculous","right","ring","rip","rise","rises","rising","ritchie","riveting","road","road movie","robert","rock","roger","rohmer","role","roles","roll","rollerball","roman","roman polanski","romance","romantic","romantic comedies","romantic comedy","romp","room","rooting","rote","routine","rowdy","rrb","rrb movie","run","running","running time","runs","rush","russell","russian","ryan","ryan gosling","saccharine","sad","sade","sadly","sadness","safe","said","sake","sand","sandler","santa","sappy","sara","satire","satisfying","saturday","save","saving","savvy","saw","say","scale","scary","scenario","scene","scenes","schmidt","schneider","school","sci","sci fi","science","science fiction","scooby","score","scorsese","scratch","screen","screenplay","screenwriter","screenwriters","screenwriting","script","sea","seagal","search","searching","season","seat","second","secret","secretary","secrets","seeing","seeking","seemingly","seen","sees","self","self conscious","self indulgent","sell","semi","send","sensational","sense","sense humor","sensitive","sensual","sentiment","sentimental","sentimentality","sequel","sequels","sequence","sequences","series","seriously","serve","served","serves","service","set","sets","setting","settles","sex","sexual","sexy","shake","shakespeare","shallow","shame","shanghai","share","sharp","sheer","shelf","shock","shocking","shocks","shoot","shooting","short","shot","shots","shoulders","shows","showtime","shyamalan","sick","sides","sight","sign","signs","silliness","silly","silver","similar","simple","simplistic","simply","simultaneously","singing","single","sink","sinks","sit","sitcom","sitting","situation","situations","sketchy","skill","skin","skip","slack","slap","slapstick","sleep","slice","slick","slight","slightly","slip","sloppy","slow","slowly","sluggish","sly","small","smart","smarter","smartly","smile","smith","smoochy","smug","snipes","snow","soap","soap opera","sobering","social","society","soderbergh","solaris","soldiers","solid","solidly","solondz","somber","somebody","somewhat","son","son bride","song","songs","soon","sophisticated","sophomoric","sorority","sorority boys","sorry","sort","sorvino","soul","soulful","soulless","souls","sound","sounds","soundtrack","sour","source","south","space","spare","spark","sparkling","speak","speaking","speaks","special","special effects","spectacle","spectacular","spend","spent","spider","spider man","spielberg","spin","spirit","spirited","spirits","spiritual","spite","splendid","spoof","spooky","sports","spot","spring","spy","spy kids","stage","staged","stale","stand","standard","standards","stands","star","starring","stars","start","start finish","started","startling","starts","state","stay","stays","stealing","stealing harvard","step","stereotypes","steven","steven soderbergh","stirring","stock","stomach","stone","stop","store","stories","story","story told","storyline","storytelling","straight","straightforward","strain","strange","strangely","street","strength","strictly","strike","strikes","striking","string","strong","structure","struggle","stuck","studio","study","stuff","stunning","stunt","stunts","stupid","style","stylish","sub","subculture","subject","subject matter","subjects","substance","subtle","subtlety","succeed","succeeds","success","successful","suffering","suffers","sugar","suited","sum","sum fears","summer","super","superb","superficial","superior","supporting","supposed","sure","surely","surface","surprise","surprises","surprising","surprisingly","surreal","suspect","suspense","suspenseful","sustain","swallow","sweeping","sweet","sweet home","sweetly","sympathetic","sympathy","taken","takes","taking","tale","talent","talented","talents","talk","talking","talky","tap","target","target audience","taste","tasteful","tasty","taylor","teacher","team","tear","tears","technical","tedious","teen","teenage","teenagers","teens","teeth","television","tell","telling","tells","tender","tends","tension","terms","terrible","terrific","terrifying","territory","testament","thanks","theater","theaters","theatre","theatrical","theme","themes","thing","things","think","thinking","thinks","thoroughly","thought","thought provoking","thoughtful","thrill","thriller","thrills","throws","thumbs","ticket","time","timely","times","timing","tiny","tired","tiresome","title","title character","today","told","tom","tone","tongue","total","totally","touch","touched","touches","touching","tough","tour","trademark","tradition","traditional","tragedies","tragedy","tragic","trailer","transcends","trapped","trappings","trash","travel","treasure","treat","treatment","tribute","trick","tries","tries hard","trifle","trip","trite","triumph","trouble","trouble day","true","truly","truth","try","trying","tsai","turn","turned","turning","turns","tuxedo","tv","twice","twist","twisted","twists","type","typical","ugly","ultimate","ultimately","uncanny","uncompromising","unconvincing","undeniable","undeniably","understand","understanding","understated","uneven","unexpected","unfaithful","unflinching","unfocused","unfolds","unforced","unfortunately","unfunny","unimaginative","uninspired","unintentionally","unique","universal","unless","unlikable","unlike","unlikely","unnecessary","unnerving","unoriginal","unpleasant","unpredictable","unsettling","unusual","unusually","uplifting","upper","ups","urban","urge","use","used","uses","using","usual","usually","utter","utterly","vague","value","values","vampire","vapid","variety","various","ve","ve got","ve seen","vehicle","verbal","version","verve","vibrant","victims","video","videos","vietnam","view","viewer","viewers","viewing","villain","vincent","vintage","violence","violent","virtually","visceral","vision","visual","visual style","visually","visuals","vital","vitality","vivid","vividly","voice","vs","vulgar","wait","waiting","walk","walked","wallace","wannabe","want","wanted","wants","war","war ii","warm","warmth","warning","wars","washington","waste","waste time","wasted","watch","watchable","watching","water","wave","way","ways","weak","wears","web","wedding","week","weeks","weight","weird","welcome","went","west","whimsical","white","wholly","wide","wife","wild","wilde","wildly","williams","willing","win","wind","window","winds","winner","winning","wise","wish","wit","witch","witless","witty","wo","woman","women","wonder","wonderful","wonderfully","wondering","woo","woody","woody allen","word","words","work","worked","working","works","world","world war","worse","worst","worth","worth look","worth seeing","worthwhile","worthy","wow","wrapped","wrenching","writer","writer director","writers","writing","written","wrong","wry","xxx","ya","ya ya","yarn","year","year best","year old","yearning","years","years ago","yes","york","young","young woman","younger","youth","yu","zone"],"idf":[6.9519,7.7629,7.7629,7.7629,7.8964,7.8964,7.5397,7.0091,8.0506,8.0506,7.5397,6.6643,7.8964,7.1343,7.8964,7.0697,6.7513,7.0091,7.2033,7.8964,7.8964,8.2329,8.0506,7.6451,7.6451,7.7629,7.5397,7.4444,7.8964,6.8466,6.6234,5.5519,5.0301,7.8964,7.8964,7.8964,7.4444,7.4444,6.475,5.6376,6.9519,7.5397,7.6451,6.0581,7.5397,7.7629,6.7978,6.9519,7.3574,7.7629,7.6451,7.7629,7.7629,7.6451,7.3574,6.7513,7.8964,6.4083,7.8964,7.2774,7.4444,7.3574,8.0506,7.7629,8.0506,6.1788,7.6451,7.1343,6.8979,7.7629,7.8964,7.7629,6.7978,7.7629,7.2774,6.8979,7.7629,7.1343,7.7629,7.7629,7.2774,7.2033,7.8964,6.8979,6.9519,5.6376,7.6451,7.6451,7.5397,6.2314,8.0506,7.2774,7.5397,6.7068,6.6234,7.3574,7.6451,7.5397,8.2329,8.2329,8.0506,6.9519,7.6451,7.4444,6.8466,6.8466,7.8964,7.3574,7.8964,6.9519,7.8964,7.8964,5.8533,7.7629,7.8964,7.6451,6.8979,7.8964,7.8964,7.3574,7.7629,7.5397,7.5397,7.7629,7.3574,7.7629,7.8964,7.3574,6.5101,7.2033,6.8466,7.8964,7.2033,7.7629,5.3537,6.4411,7.7629,7.7629,7.6451,8.0506,8.0506,7.2774,7.5397,8.0506,5.9711,7.6451,6.8466,7.7629,8.0506,7.8964,4.8795,7.7629,7.2033,7.2774,7.8964,7.7629,7.4444,8.0506,8.0506,8.0506,7.6451,7.4444,7.8964,8.0506,7.4444,7.8964,6.8979,7.6451,6.8466,7.7629,7.0697,8.0506,8.0506,7.1343,7.8964,7.2774,6.2047,7.8964,6.1046,8.0506,6.7978,7.6451,7.0091,7.4444,7.8964,7.1343,6.3458,7.5397,7.7629,7.7629,7.4444,7.7629,4.9595,7.7629,7.4444,5.151,5.3205,7.3574,6.8466,7.7629,7.5397,8.0506,7.7629,7.7629,5.9505,7.5397,7.7629,7.7629,7.7629,7.5397,7.4444,6.475,7.7629,7.2774,7.7629,7.8964,6.5842,7.8964,7.6451,7.1343,7.0091,7.3574,7.8964,7.8964,7.4444,7.6451,7.2774,6.4411,7.2774,7.8964,6.5101,7.6451,7.8964,7.7629,6.6234,7.1343,7.2774,7.2774,7.8964,7.7629,7.7629,7.7629,7.3574,6.6643,7.7629,6.7513,7.8964,6.8979,7.1343,7.8964,7.6451,7.6451,7.5397,7.8964,7.8964,7.5397,7.4444,7.2033,7.8964,7.8964,7.8964,6.8466,7.8964,7.8964,7.8964,7.2033,7.6451,7.7629,7.4444,7.3574,7.8964,7.4444,5.6679,7.8964,6.9519,7.7629,6.316,7.6451,7.6451,7.7629,8.0506,7.6451,7.5397,7.7629,6.7068,7.2033,6.0137,6.9519,7.7629,7.8964,7.4444,7.8964,7.2774,8.0506,6.7513,5.278,6.9519,7.6451,7.5397,7.8964,7.8964,7.5397,7.7629,7.8964,7.8964,7.2774,7.2033,7.2033,6.2588,7.8964,7.6451,6.9519,7.3574,6.7513,7.8964,7.3574,5.3425,7.8964,7.3574,7.7629,4.544,7.4444,6.1534,7.6451,6.2588,7.6451,7.6451,6.8466,7.5397,7.8964,7.4444,7.2033,7.8964,7.3574,7.8964,6.1534,7.2033,7.7629,7.7629,7.6451,7.5397,7.7629,7.6451,7.5397,7.7629,7.5397,5.748,6.0137,7.2033,6.7068,7.6451,6.7513,6.5465,7.8964,6.7513,7.1343,6.1046,7.8964,6.287,7.3574,7.6451,6.6643,6.7513,7.5397,7.8964,7.6451,6.475,7.8964,7.3574,7.0697,7.7629,7.0697,7.8964,7.8964,7.5397,7.8964,7.7629,5.6527,8.0506,7.4444,6.7068,4.4218,7.5397,5.5519,7.8964,7.8964,5.9505,6.1287,6.6234,7.6451,7.5397,7.7629,7.7629,7.2033,6.8979,7.8964,7.7629,5.7993,7.1343,6.3766,6.5101,7.8964,7.3574,7.4444,6.7068,7.5397,8.0506,7.2033,7.7629,7.8964,7.5397,7.4444,7.5397,7.7629,7.1343,7.7629,7.4444,7.8964,7.3574,7.7629,7.0091,7.4444,7.8964,7.7629,6.6234,7.6451,7.8964,7.1343,7.8964,7.3574,7.8964,7.7629,7.0091,6.7978,7.6451,8.2329,7.0091,7.8964,7.8964,6.7978,7.8964,7.0091,7.7629,7.4444,6.6234,7.8964,7.8964,7.2774,7.0697,7.1343,7.0091,7.4444,7.7629,6.9519,7.7629,7.7629,7.8964,7.0697,7.3574,6.7978,6.6643,7.8964,7.6451,7.2774,7.0697,7.7629,7.5397,6.9519,7.7629,6.8979,6.3458,7.8964,7.8964,7.7629,7.8964,6.8466,7.2774,7.7629,7.7629,7.8964,7.6451,7.7629,7.2033,7.8964,7.7629,7.7629,5.9922,7.8964,7.0697,6.9519,7.6451,6.0357,6.7513,7.4444,6.7068,7.6451,7.8964,7.2774,7.7629,6.4083,7.8964,6.3458,7.2774,6.8979,7.8964,7.8964,6.5842,7.5397,6.316,7.8964,6.7978,7.6451,7.4444,7.7629,7.2033,7.7629,7.8964,7.2033,6.7513,7.5397,7.8964,7.3574,7.6451,7.8964,6.5842,7.5397,7.8964,7.5397,7.7629,7.6451,7.1343,6.7978,7.1343,7.3574,7.0091,7.8964,7.4444,7.5397,7.5397,7.5397,7.6451,7.5397,5.7648,7.5397,7.5397,7.8964,7.6451,7.4444,7.7629,7.5397,7.2033,5.6834,7.7629,6.0137,7.4444,7.6451,6.6234,6.9519,7.4444,7.6451,7.4444,7.7629,6.316,7.8964,5.872,4.5796,8.0506,8.0506,7.3574,7.4444,7.8964,7.4444,7.7629,7.6451,8.0506,7.3574,7.5397,7.3574,8.0506,7.8964,8.0506,6.7068,7.7629,8.0506,7.7629,7.8964,7.7629,7.8964,7.2774,5.4603,4.3534,7.8964,7.8964,7.6451,8.0506,6.9519,8.0506,7.1343,7.8964,7.8964,8.0506,8.0506,7.0091,7.8964,7.4444,7.1343,7.5397,7.7629,4.952,6.3458,7.8964,7.8964,7.4444,8.0506,8.0506,7.0091,7.2774,7.3574,8.0506,7.8964,7.8964,8.0506,7.7629,6.9519,7.8964,8.0506,5.9505,6.7513,8.0506,7.6451,7.8964,7.7629,7.6451,6.6643,8.0506,7.3574,7.6451,6.5101,8.0506,6.3458,8.0506,8.0506,7.6451,7.7629,7.0697,8.0506,7.6451,7.3574,7.0697,7.1343,6.2588,6.1788,7.7629,7.8964,7.3574,7.7629,6.8979,7.7629,7.7629,7.2774,7.5397,5.9922,6.7068,6.9519,7.7629,7.8964,7.8964,7.8964,5.5383,7.1343,7.7629,6.2588,7.6451,7.8964,6.6643,7.4444,6.2314,7.8964,7.8964,6.1287,7.6451,6.6643,7.7629,6.316,6.1788,7.4444,6.9519,7.7629,7.8964,5.4603,6.0357,7.7629,7.7629,7.8964,6.8466,6.6643,6.9519,7.0091,7.1343,7.7629,7.2033,7.8964,7.3574,7.8964,6.316,7.8964,7.2774,8.0506,7.7629,7.8964,7.7629,6.6643,7.1343,7.0091,7.7629,7.8964,6.9519,6.8466,7.5397,6.7068,7.7629,7.8964,7.8964,7.2774,7.0091,7.3574,7.4444,6.9519,6.1287,7.3574,6.9519,7.7629,7.7629,7.4444,5.9105,7.6451,7.5397,7.6451,7.3574,7.7629,7.8964,7.2774,7.1343,7.2033,6.7513,7.2033,6.6643,7.8964,6.2314,7.6451,6.3766,6.3766,7.3574,7.5397,6.6643,7.6451,7.8964,7.3574,7.8964,7.6451,7.2033,6.7513,7.6451,6.0581,5.5383,7.6451,7.8964,7.2033,7.7629,6.0357,7.8964,7.6451,6.8466,5.5796,7.4444,7.1343,5.835,7.4444,6.6643,6.9519,7.8964,7.1343,7.7629,7.4444,7.8964,7.7629,7.6451,7.5397,8.0506,7.5397,7.1343,6.0357,7.8964,7.8964,7.7629,7.3574,7.8964,5.3315,7.2774,6.8466,6.2314,7.6451,5.4356,6.4083,6.8466,6.8466,7.2774,6.7978,7.0697,7.7629,7.6451,7.6451,7.8964,7.1343,7.8964,6.9519,7.8964,2.9986,6.9519,7.8964,7.8964,7.6451,7.8964,7.8964,7.6451,7.8964,7.7629,7.5397,6.4083,6.0357,6.1788,5.1695,7.7629,6.8466,7.6451,6.6643,7.5397,7.1343,6.3766,8.0506,7.3574,7.7629,7.8964,7.4444,7.6451,7.8964,7.5397,6.4083,7.1343,6.7978,6.0137,7.2033,7.7629,7.6451,7.5397,7.8964,7.8964,7.3574,7.4444,7.2774,7.2033,7.0697,7.2033,7.7629,7.5397,7.0697,8.0506,6.5101,7.1343,8.0506,8.0506,7.6451,6.8979,7.8964,7.2033,7.6451,7.7629,7.1343,8.0506,6.2588,7.0697,6.287,7.8964,7.8964,7.4444,7.7629,7.8964,7.4444,8.0506,7.8964,7.3574,7.8964,7.2033,5.3097,7.1343,7.4444,4.622,8.0506,7.8964,6.7978,6.7513,6.8466,7.5397,8.0506,8.0506,7.2774,8.0506,7.2774,7.4444,7.8964,7.2033,7.3574,8.0506,8.0506,8.0506,7.8964,6.9519,8.0506,7.8964,6.0137,6.7978,7.7629,6.9519,7.2033,7.1343,5.817,8.0506,6.8466,7.7629,7.6451,7.6451,8.0506,7.6451,6.3766,6.8979,6.6643,5.835,7.6451,7.6451,7.4444,7.7629,7.3574,7.5397,6.1046,5.7993,6.7513,4.4086,7.7629,7.8964,7.7629,7.5397,7.6451,6.9519,7.1343,6.8466,7.6451,6.475,7.2033,7.4444,7.5397,7.3574,7.8964,6.8979,7.6451,5.3097,7.2033,7.5397,7.7629,7.2774,7.2774,7.2774,7.6451,7.3574,7.4444,7.4444,7.7629,7.2774,7.7629,7.5397,7.7629,7.8964,7.2033,7.5397,7.5397,7.8964,6.8979,6.8979,7.3574,7.8964,5.872,7.7629,7.6451,7.8964,7.8964,6.8466,7.5397,7.8964,7.4444,7.8964,7.3574,7.4444,7.2033,5.299,7.6451,7.0091,7.8964,8.0506,7.6451,7.2774,7.3574,6.7068,6.5101,7.6451,5.4603,7.6451,7.2033,7.2033,7.6451,7.3574,7.2774,6.7068,7.7629,7.1343,6.7068,7.8964,7.8964,6.7068,7.8964,7.8964,5.872,7.7629,6.8466,6.475,7.7629,6.8466,7.2774,6.7068,5.9505,6.7513,7.4444,7.7629,7.2774,7.0697,7.3574,7.5397,7.4444,5.4479,7.8964,7.6451,7.6451,6.2314,6.6234,7.5397,7.8964,7.8964,7.2774,7.0091,7.7629,7.7629,7.6451,7.3574,7.7629,6.2047,7.7629,7.8964,7.2033,6.0357,7.6451,6.3458,7.0091,7.7629,7.0091,7.6451,7.8964,5.6834,7.7629,7.2033,5.2676,7.8964,7.4444,7.5397,7.8964,7.7629,7.7629,7.8964,7.5397,6.0811,6.4083,7.1343,6.7978,7.2033,7.7629,7.6451,6.6234,6.6234,7.4444,6.5465,7.2033,7.2033,6.7513,6.5465,7.7629,6.7513,7.8964,7.8964,7.4444,7.6451,7.8964,7.6451,7.2774,7.8964,7.7629,7.1343,7.2774,7.2033,7.4444,8.0506,8.0506,7.8964,7.8964,7.7629,7.7629,7.8964,6.6234,7.0091,7.0697,7.7629,7.8964,7.1343,7.2774,7.8964,6.1287,7.8964,7.7629,6.4083,6.316,7.3574,7.2774,7.5397,7.6451,7.1343,5.6228,7.1343,7.5397,7.8964,7.3574,6.5842,7.0697,7.2033,7.2033,7.7629,7.7629,7.5397,7.0091,7.5397,7.5397,7.7629,7.7629,6.9519,7.8964,7.5397,7.8964,7.3574,7.4444,6.6643,6.4083,7.1343,6.5842,7.5397,6.7068,7.3574,7.5397,7.7629,4.3534,7.6451,7.6451,7.2033,7.7629,7.7629,7.8964,6.9519,7.3574,6.9519,6.7978,7.8964,7.8964,5.835,7.5397,5.388,7.0697,7.2033,7.7629,7.6451,7.7629,7.8964,6.0581,7.4444,7.4444,7.6451,7.0091,7.8964,7.6451,7.7629,6.4411,6.8466,6.316,7.6451,7.2033,7.8964,7.4444,7.8964,7.6451,7.0697,7.3574,7.7629,7.0697,6.7978,6.6643,7.7629,7.7629,5.9922,7.4444,7.3574,7.8964,7.3574,6.7978,7.8964,7.0697,6.3766,6.5842,7.4444,7.2774,6.5101,7.8964,7.8964,7.8964,7.8964,7.0091,7.7629,7.2033,7.1343,7.8964,6.4083,7.5397,7.6451,4.8119,8.0506,7.7629,6.3458,7.7629,3.8262,7.7629,7.8964,8.0506,7.1343,6.316,7.8964,8.0506,6.475,7.3574,7.8964,7.8964,7.3574,7.5397,7.6451,4.6833,7.5397,8.0506,6.4411,7.4444,7.8964,6.4083,7.0697,5.6082,8.0506,7.6451,7.7629,5.2676,7.7629,7.4444,8.0506,5.2272,7.4444,7.7629,6.1287,6.2588,7.5397,7.8964,7.3574,7.8964,7.3574,6.5465,5.7993,7.0091,6.7513,7.5397,4.8725,6.7513,7.6451,6.9519,7.7629,7.7629,6.0581,7.4444,7.5397,4.2111,5.9105,7.4444,7.6451,7.7629,7.6451,6.8979,7.8964,7.4444,7.7629,7.2774,7.6451,6.8466,4.7797,7.6451,4.8451,5.7152,7.3574,5.5116,7.6451,6.0137,7.7629,7.0697,8.2329,7.1343,7.1343,7.7629,7.5397,7.7629,7.8964,7.8964,7.3574,7.7629,6.7978,7.8964,7.7629,7.8964,6.7978,7.1343,5.6992,7.8964,6.1788,7.8964,7.6451,7.5397,7.0697,7.5397,6.7978,7.4444,7.4444,7.2033,7.8964,7.8964,7.0697,7.2033,7.6451,6.5465,7.2774,7.3574,6.6643,7.0091,6.5101,7.4444,7.8964,7.0697,7.8964,7.5397,6.4083,6.5842,7.7629,7.4444,6.5842,6.4083,7.7629,7.7629,7.3574,7.7629,7.7629,6.2314,7.4444,7.2033,7.8964,7.2033,6.3766,5.4729,7.2774,7.6451,7.2774,7.7629,7.0697,7.3574,7.7629,6.1534,7.8964,7.5397,6.7513,5.6834,6.9519,7.0091,7.8964,7.8964,7.6451,6.6643,7.0697,6.8979,7.8964,8.0506,8.0506,7.2033,7.2033,7.6451,7.7629,7.8964,7.7629,3.1416,7.8964,8.0506,7.1343,8.0506,8.0506,7.8964,7.2774,7.7629,8.0506,7.5397,7.6451,4.9748,7.7629,7.8964,5.817,6.0811,7.0697,7.7629,6.9519,7.0697,5.835,7.6451,6.6643,7.8964,7.8964,6.0581,7.5397,7.7629,7.7629,7.4444,6.7513,7.5397,7.1343,6.1287,7.8964,7.3574,6.0811,7.1343,6.9519,7.8964,7.7629,4.9981,7.7629,6.8979,6.8466,7.2774,7.6451,7.8964,7.7629,7.7629,7.0091,7.7629,7.2774,7.4444,7.8964,7.2033,8.0506,7.7629,7.7629,7.8964,7.5397,7.8964,7.8964,6.9519,7.1343,7.2774,7.5397,7.5397,7.8964,6.4083,7.7629,7.8964,6.8466,6.7978,7.2033,7.8964,7.7629,7.6451,7.2774,6.8466,7.4444,5.872,7.4444,7.7629,5.2173,6.7068,7.4444,6.9519,7.7629,8.0506,7.2033,7.7629,8.0506,6.3766,7.2033,7.5397,8.0506,5.748,7.4444,6.7068,8.0506,7.7629,7.6451,8.0506,6.7513,7.1343,8.0506,7.3574,7.6451,7.0091,7.1343,7.0091,8.0506,7.5397,7.5397,7.5397,7.5397,7.0697,7.0697,8.0506,8.0506,7.6451,7.8964,8.0506,8.0506,7.3574,7.8964,8.0506,6.7513,7.6451,7.3574,7.5397,7.3574,6.5465,8.2329,7.8964,7.2033,7.4444,6.6643,7.7629,6.475,7.8964,7.7629,7.8964,7.5397,7.6451,7.6451,7.3574,7.8964,5.2173,6.316,6.9519,5.4115,5.1328,7.3574,6.7513,7.1343,7.6451,6.7513,7.5397,7.4444,7.8964,7.2033,7.4444,7.8964,7.6451,7.7629,7.5397,5.5796,6.8979,5.872,7.6451,6.8979,7.5397,7.7629,7.7629,6.1046,7.2033,7.2033,7.7629,6.5101,7.4444,7.8964,7.5397,6.8466,6.0811,6.5465,7.2033,7.5397,6.4411,7.5397,6.8979,7.6451,5.1328,7.8964,7.8964,7.6451,7.6451,7.4444,7.0697,7.7629,7.0091,5.9922,7.5397,7.1343,7.2033,7.8964,7.3574,7.7629,6.7513,7.2774,7.8964,7.2033,7.1343,6.8466,7.2774,6.2047,7.6451,6.8466,7.3574,7.4444,7.4444,7.7629,7.6451,6.2588,6.2047,7.2033,7.8964,7.6451,7.5397,7.8964,6.1046,7.7629,6.1788,7.5397,7.7629,7.2033,7.7629,7.7629,6.5842,6.1287,7.0091,7.4444,7.8964,7.8964,7.7629,6.1287,6.4083,7.8964,7.0697,7.6451,7.0091,7.4444,7.7629,7.3574,6.5101,7.8964,7.7629,7.8964,7.7629,6.5101,6.9519,7.7629,7.4444,7.5397,7.6451,6.3766,7.2774,6.9519,6.9519,7.2033,7.8964,6.6643,7.8964,7.6451,7.6451,7.5397,7.7629,7.6451,6.8979,7.2033,6.8466,7.8964,6.8979,7.3574,7.7629,7.7629,7.2774,7.2774,7.2774,7.1343,6.7978,7.2033,7.8964,6.2588,5.5938,7.8964,7.8964,7.7629,6.316,6.5465,7.2774,7.2774,7.4444,6.9519,7.8964,7.3574,5.278,7.2774,7.3574,7.3574,6.7978,7.5397,7.6451,5.1149,6.3766,7.8964,6.3766,7.8964,7.1343,7.7629,7.8964,7.2774,7.8964,7.6451,7.1343,7.4444,7.6451,7.4444,6.8466,7.6451,7.2774,7.8964,7.7629,7.6451,7.6451,6.6643,6.8466,6.5465,7.2033,7.2033,7.8964,7.6451,7.6451,8.0506,7.5397,7.5397,7.7629,7.5397,7.3574,7.8964,7.7629,7.8964,8.0506,7.5397,7.4444,6.9519,6.9519,7.3574,7.5397,7.5397,7.6451,7.4444,7.0697,7.6451,7.7629,7.6451,7.6451,7.8964,7.7629,7.6451,6.475,8.0506,7.8964,7.8964,6.4411,7.5397,5.7314,7.7629,7.3574,7.7629,7.4444,8.0506,7.8964,7.2774,6.6643,7.8964,6.7513,6.5465,7.4444,8.0506,6.6234,7.7629,7.5397,7.8964,7.7629,8.0506,6.2588,5.6228,7.8964,6.1534,7.8964,6.8466,8.0506,7.8964,7.2774,8.0506,4.2075,7.8964,6.5101,6.6234,6.8979,7.0697,7.7629,8.0506,7.6451,7.2774,8.0506,7.6451,6.4083,7.8964,7.5397,7.7629,7.7629,7.3574,7.8964,7.8964,7.2033,7.7629,7.2774,7.8964,6.5465,6.475,7.6451,7.4444,7.7629,7.7629,7.0697,5.9711,7.8964,6.7978,7.7629,6.6234,5.7648,7.8964,7.7629,6.5842,6.7978,6.7978,7.3574,7.6451,7.8964,7.2033,7.4444,7.8964,5.3997,5.9922,7.5397,7.6451,7.6451,5.3315,7.2774,7.3574,7.8964,7.7629,7.3574,7.0697,6.7978,7.6451,8.0506,7.5397,6.5842,7.5397,7.7629,5.6376,7.7629,5.4115,7.6451,7.7629,7.8964,8.0506,7.8964,8.0506,5.3097,7.2774,6.9519,7.8964,7.6451,6.8466,7.6451,6.5101,7.6451,7.3574,6.6643,6.1046,7.1343,7.8964,7.3574,7.6451,7.6451,6.1534,6.9519,7.2774,7.7629,6.5465,7.1343,6.9519,7.8964,7.8964,7.0091,7.2033,7.8964,7.2033,6.8466,7.4444,7.8964,7.8964,7.8964,7.7629,7.5397,7.7629,6.0137,6.3766,7.2774,7.8964,6.4411,7.4444,7.4444,7.4444,7.4444,7.5397,7.4444,7.4444,7.8964,6.2588,7.7629,7.8964,6.5842,7.4444,6.0581,7.8964,7.8964,6.7978,7.6451,7.8964,6.8466,7.6451,7.0697,7.1343,7.0091,7.8964,7.2033,7.2774,7.6451,7.8964,7.5397,7.2774,7.8964,7.5397,7.8964,7.0697,7.0697,7.6451,7.3574,6.5101,7.7629,7.8964,8.0506,6.2314,5.9711,7.3574,7.8964,7.3574,7.8964,7.7629,7.7629,7.8964,7.5397,6.6234,6.7068,8.0506,6.5465,7.5397,7.2033,8.0506,7.8964,6.2588,8.0506,7.1343,7.6451,8.2329,7.0091,7.3574,8.0506,7.8964,7.4444,7.3574,7.1343,7.8964,8.0506,8.0506,8.0506,6.4083,7.8964,6.9519,7.8964,7.7629,7.8964,7.2033,7.0697,7.3574,7.6451,7.4444,7.5397,7.2774,7.8964,7.5397,7.8964,7.8964,8.2329,8.0506,5.8533,6.7513,7.1343,7.5397,7.7629,7.7629,7.3574,7.6451,6.7513,8.0506,6.316,7.2774,7.7629,7.3574,7.8964,7.5397,7.6451,7.6451,7.2774,8.0506,7.8964,6.7513,7.6451,7.4444,7.7629,7.2033,6.9519,7.2033,7.4444,7.5397,5.9105,7.5397,7.0697,6.9519,7.8964,7.8964,7.7629,6.6643,7.7629,7.3574,7.7629,7.7629,7.7629,7.2033,7.6451,7.0091,7.8964,7.4444,7.2774,7.5397,7.8964,7.4444,7.7629,6.475,4.1759,7.8964,7.2774,6.287,6.6234,7.8964,7.7629,6.8466,7.2774,7.7629,7.5397,7.8964,7.7629,7.8964,7.3574,7.7629,6.2314,7.4444,7.4444,7.6451,7.3574,6.1287,6.4083,7.5397,7.8964,7.6451,6.7068,5.7993,6.9519,7.8964,7.8964,5.9105,6.9519,7.4444,7.5397,7.0091,7.6451,7.7629,7.0091,7.0091,7.0697,7.5397,6.8466,7.6451,7.8964,7.1343,7.6451,6.316,8.0506,7.4444,7.2033,7.6451,7.6451,7.0697,6.2314,7.5397,7.2033,6.8466,7.0697,6.7068,6.1046,7.8964,7.8964,6.4411,7.4444,6.9519,7.7629,7.8964,5.9105,7.7629,7.7629,7.8964,7.4444,7.2033,5.7993,7.1343,5.4115,6.7513,6.8466,7.6451,7.6451,7.4444,7.8964,8.456,7.1343,7.6451,6.9519,8.0506,7.7629,8.0506,7.7629,7.6451,7.6451,7.8964,7.8964,6.7978,6.5101,7.8964,7.7629,7.7629,7.8964,7.3574,6.8466,7.2033,7.2774,7.7629,7.7629,7.2033,7.1343,7.2033,6.475,7.8964,7.5397,7.6451,6.8466,6.3458,7.7629,7.5397,7.7629,7.4444,6.8466,5.4985,5.6527,5.9303,7.0091,7.5397,6.5465,6.3458,7.3574,6.6643,7.8964,5.4729,7.2774,7.7629,7.8964,7.7629,4.554,7.4444,5.8911,7.6451,7.8964,6.6643,7.2774,6.1046,7.5397,7.2774,6.5465,7.4444,6.316,7.7629,7.7629,7.4444,6.9519,7.8964,7.5397,6.475,7.4444,7.8964,7.8964,7.8964,7.6451,7.8964,6.7513,7.2033,7.7629,7.8964,7.8964,7.5397,7.6451,7.7629,7.7629,7.0697,7.1343,7.0697,7.6451,6.4411,7.7629,7.7629,6.9519,7.8964,7.2033,6.9519,7.8964,6.1046,6.4411,6.9519,6.7068,6.1788,7.8964,6.4411,7.3574,7.5397,6.316,7.7629,6.316,7.3574,7.5397,7.5397,7.1343,7.6451,7.1343,6.7978,7.1343,5.6228,7.8964,7.6451,7.7629,7.7629,7.4444,6.9519,7.6451,7.8964,6.9519,6.9519,7.4444,7.8964,7.6451,7.2033,7.8964,7.0091,6.9519,7.8964,7.6451,7.8964,7.1343,7.2033,7.7629,7.8964,7.3574,7.6451,7.5397,8.0506,7.7629,7.6451,7.7629,6.7978,7.6451,8.0506,7.7629,8.0506,7.6451,6.7978,8.0506,6.9519,7.2033,6.7513,7.4444,6.7068,7.1343,7.6451,6.9519,8.0506,7.2774,7.5397,7.7629,7.8964,7.8964,7.5397,5.5116,7.6451,6.3458,7.4444,8.0506,6.4083,8.0506,7.4444,8.0506,5.9922,8.0506,8.0506,6.8466,6.7068,6.475,7.0091,7.8964,7.8964,7.8964,6.7068,7.4444,7.2774,7.5397,6.7513,5.9922,7.8964,6.6234,7.4444,7.8964,8.0506,7.1343,7.4444,7.3574,7.5397,7.6451,7.4444,7.5397,7.5397,7.8964,7.8964,7.5397,5.9922,7.6451,7.0091,5.9303,7.8964,6.6643,6.9519,7.7629,7.6451,7.4444,7.0091,7.8964,7.2774,5.6992,6.8979,5.5796,6.8979,7.8964,4.7424,6.5842,7.3574,7.5397,7.8964,7.2033,7.2774,7.8964,7.4444,6.8466,6.7513,7.6451,7.8964,7.8964,6.9519,7.8964,7.8964,7.4444,6.6643,7.7629,7.2774,7.1343,7.6451,7.5397,7.5397,7.8964,7.6451,7.7629,6.8979,7.0091,7.2774,6.2588,7.7629,7.8964,6.8466,6.2588,6.4411,5.9922,7.2033,6.5465,7.3574,7.7629,7.7629,7.3574,7.5397,7.0091,6.8466,4.8384,7.7629,6.8466,5.6679,5.388,7.7629,6.9519,6.1534,5.7314,8.0506,7.3574,7.2033,6.8466,7.6451,8.0506,7.7629,5.7648,6.2588,7.8964,6.6643,6.3458,6.7068,7.6451,7.8964,7.5397,7.7629,7.3574,5.388,7.8964,6.9519,7.8964,5.748,7.3574,7.0091,6.8979,5.7993,7.6451,7.8964,8.0506,7.7629,7.3574],"ngramRange":[1,2],"stopWords":["a","about","above","across","after","afterwards","again","against","all","almost","alone","along","already","also","although","always","am","among","amongst","amoungst","amount","an","and","another","any","anyhow","anyone","anything","anyway","anywhere","are","around","as","at","back","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","below","beside","besides","between","beyond","bill","both","bottom","but","by","call","can","cannot","cant","co","con","could","couldnt","cry","de","describe","detail","do","done","down","due","during","each","eg","eight","either","eleven","else","elsewhere","empty","enough","etc","even","ever","every","everyone","everything","everywhere","except","few","fifteen","fifty","fill","find","fire","first","five","for","former","formerly","forty","found","four","from","front","full","further","get","give","go","had","has","hasnt","have","he","hence","her","here","hereafter","hereby","herein","hereupon","hers","herself","him","himself","his","how","however","hundred","i","ie","if","in","inc","indeed","interest","into","is","it","its","itself","keep","last","latter","latterly","least","less","ltd","made","many","may","me","meanwhile","might","mill","mine","more","moreover","most","mostly","move","much","must","my","myself","name","namely","neither","never","nevertheless","next","nine","no","nobody","none","noone","nor","not","nothing","now","nowhere","of","off","often","on","once","one","only","onto","or","other","others","otherwise","our","ours","ourselves","out","over","own","part","per","perhaps","please","put","rather","re","same","see","seem","seemed","seeming","seems","serious","several","she","should","show","side","since","sincere","six","sixty","so","some","somehow","someone","something","sometime","sometimes","somewhere","still","such","system","take","ten","than","that","the","their","them","themselves","then","thence","there","thereafter","thereby","therefore","therein","thereupon","these","they","thick","thin","third","this","those","though","three","through","throughout","thru","thus","to","together","too","top","toward","towards","twelve","twenty","two","un","under","until","up","upon","us","very","via","was","we","well","were","what","whatever","when","whence","whenever","where","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","whoever","whole","whom","whose","why","will","with","within","without","would","yet","you","your","yours","yourself","yourselves"]},"model":{"coef":[-0.9533,-0.3863,-1.3432,-0.2635,0.5693,0.0381,-1.1539,-0.5813,-2.5142,-1.5268,-0.4595,-0.7954,0.4329,0.4512,-0.5736,3.3396,-0.1786,0.2557,2.0906,-1.5927,-1.1147,0.0002,-0.3907,0.4074,1.9383,-1.2484,1.3631,-0.3884,0.4735,-1.0947,1.2988,-0.4061,-1.4694,-1.0705,-0.377,-0.8886,-0.3519,0.462,0.2931,1.2608,0.1933,0.5364,0.6854,-0.7852,-1.0122,0.088,1.022,-1.5696,0.6495,1.9162,1.3497,-0.4974,-0.8295,0.4542,1.5533,-0.0189,-0.545,1.1935,-1.7743,-0.9103,1.1248,3.0685,-0.0354,-0.9524,-0.0032,1.142,0.5624,1.8789,-1.9982,1.4134,0.3418,-1.9166,-0.7227,-1.462,0.4847,0.411,0.642,2.3782,0.775,0.2979,-1.7154,2.423,-1.7952,1.8254,1.9885,-0.7322,-0.7395,-1.4238,2.2106,0.6926,-0.0767,0.0738,-2.1824,1.5393,-0.1049,-1.9838,2.6439,-1.2774,0.3374,0.3374,0.5356,0.0691,-2.8281,-2.0211,0.5255,4.2082,1.3145,-2.3358,1.0601,-0.7175,1.184,-0.4324,1.8396,-0.9707,0.4938,-2.3031,1.4296,0.4984,-0.183,0.3224,0.5694,0.2605,0.4569,1.1908,3.4963,1.6582,0.2766,0.067,-1.6502,-1.9301,-0.8876,-0.2149,0.2035,-0.5202,-0.0675,0.3083,0.8274,0.8274,-0.0548,1.8748,-1.1619,0.1904,0.3282,0.2881,0.2634,0.314,-2.3806,-2.0894,1.9744,0.7191,-3.7724,0.5812,-1.5562,-3.2267,-2.1623,-1.8015,0.7555,0.1794,-1.9069,1.6667,-1.2765,1.3756,0.8634,-1.2844,0.8869,0.9378,-2.7713,1.6755,1.3132,-0.5161,0.8392,0.9082,-0.5969,-2.3741,1.3096,0.253,3.1525,1.2278,3.8684,-1.2174,2.8283,-0.5154,-0.5637,-1.4176,1.4816,1.3966,-0.285,-0.0474,1.3884,-0.9295,0.7415,-1.2214,4.0729,-0.5533,0.4461,-0.0768,1.0063,-0.8545,0.7488,-0.4756,-1.6655,0.8776,0.9935,0.9935,0.1411,0.1409,0.6576,1.8467,1.0817,2.0162,-0.492,0.343,0.7309,1.0647,-0.1071,-0.761,-3.3314,0.8045,2.0578,-0.4679,1.1097,-0.2845,0.7407,-2.1663,-0.5097,1.965,1.405,-0.6097,-2.7758,-1.2049,-2.8011,-2.2894,0.6363,0.1345,-0.0599,1.2681,-1.6039,-0.0405,0.0616,2.6431,0.7371,0.9128,-0.1166,3.5841,1.3129,1.8445,1.9132,2.6409,-0.3239,-1.5868,-0.598,-1.0958,0.7198,0.8674,0.6478,1.3611,-0.2592,0.2226,0.7817,0.9908,-1.6155,-0.5723,-0.4481,-1.8802,0.7619,0.1853,-1.3443,0.8469,0.6129,-1.4128,-3.2028,-1.9625,-0.8514,1.1134,-1.6986,-0.2605,1.3749,0.4571,0.0818,0.201,1.2398,0.4431,2.3501,0.6636,3.0333,-2.9069,-1.367,0.1095,-0.8296,0.3191,1.7297,1.3358,-1.1081,-1.5117,-1.1077,1.5893,1.2982,2.573,0.9877,-1.2126,0.3111,-1.7184,-0.0338,-0.2267,1.4546,-1.5421,1.6804,1.641,0.962,1.2907,0.1708,-1.8521,2.9288,-0.7432,-0.3738,3.2836,0.8765,-0.4587,-0.7267,-1.0451,-0.9326,-1.7349,1.5274,2.8331,3.8629,0.196,0.2051,-0.722,1.1664,2.0272,-0.4824,0.7593,-0.3094,2.2872,0.0738,1.7073,2.7344,0.2153,0.7353,1.6143,2.0801,-1.029,-2.6704,0.8858,1.6421,1.0955,2.036,-0.1171,0.6238,1.0471,1.6472,1.1556,-0.7388,0.1145,0.0656,-1.3471,1.1067,-0.4498,-3.8501,-1.5291,-1.5108,-1.7196,-0.2132,0.3267,-1.376,-2.6317,-1.8727,-1.9661,-0.7742,-2.0277,1.113,2.4565,-0.0659,-2.4287,-0.0479,0.3271,2.2476,0.0634,0.5539,0.4004,1.2646,-0.1679,-0.6584,-2.1058,0.1611,1.94,0.7879,-0.2244,0.3962,-1.0585,0.0506,0.6888,-0.1993,1.0326,0.9495,-1.9166,0.2337,1.866,-1.3229,-0.4109,1.5232,0.2821,1.6626,-0.3302,0.4515,0.1485,-0.8936,-0.6512,-1.222,2.1383,-0.0617,-0.7761,-0.1404,0.136,1.2927,-1.177,1.0822,1.7209,1.9475,-1.6249,0.8041,-1.3294,-1.5307,0.8579,-2.9364,-1.476,0.3168,-0.6593,1.2498,-0.0933,0.1133,-2.0544,1.063,1.7596,0.6907,-2.529,-1.5063,-1.4339,0.6657,-0.7949,-0.5873,1.4048,1.1105,0.5517,0.7632,-2.2634,-0.9059,-1.4337,0.6909,0.0978,2.1286,-0.573,-0.5457,1.7873,-0.8175,-0.0275,-0.6839,1.2449,-1.4529,0.8141,-1.1646,-1.1501,2.6245,-0.65,-0.1332,-1.97,-0.0949,-1.3782,1.4535,-0.1852,2.0354,-2.0137,0.6928,-0.682,0.6878,-0.1496,0.1515,-0.5854,-1.2981,0.9649,-2.1821,2.5296,1.7365,-0.0216,1.3178,-0.0876,1.372,-1.4575,0.6565,0.0306,-1.1841,0.8267,1.4458,2.2036,-1.2022,-1.8255,0.7901,-0.8168,-1.1342,-0.5231,-0.3343,1.3247,1.669,0.7262,1.0576,0.8974,0.8111,0.0814,3.4872,1.0347,3.7714,1.1835,1.1536,-1.0537,2.2621,1.6469,1.8248,2.399,3.3132,1.2602,1.461,0.7889,0.6936,2.3507,2.995,0.2375,-0.227,0.9141,1.0593,0.1704,-3.1095,-0.1419,-0.2075,-2.1262,1.6384,1.5589,-1.3419,0.1964,0.5581,-0.9495,-1.7769,-0.1969,-1.0927,1.6004,0.4523,0.674,0.7801,0.3199,-0.8302,-0.1122,-3.5594,-2.1645,1.4345,-1.4014,-0.2654,0.8209,2.3748,-1.0484,-0.2911,0.4848,-0.112,0.5394,1.2609,0.2649,-0.1823,0.507,-0.3132,0.2926,-0.5963,1.644,0.1219,0.7164,-0.1992,-2.0603,-2.6133,-2.6637,1.4766,-2.8398,-0.036,-1.3635,1.2727,0.2472,-0.2665,-1.6225,1.6738,2.0135,0.742,0.5684,1.2553,2.3736,-1.3175,-0.3798,-0.5251,-2.5552,-1.7919,-1.1237,-1.9925,-0.4988,0.8367,0.3481,-0.3311,2.0293,-0.7316,0.3938,-1.8092,-2.3859,1.0165,-0.0106,1.4741,-0.6542,-1.3554,0.1192,0.1185,0.9777,-0.2911,1.2042,0.2655,-2.1783,-0.2495,0.9509,0.4272,0.4092,-0.8308,-0.2855,-1.5055,1.0702,-3.7844,-1.304,2.2937,-0.1834,-0.4584,-1.3475,1.0434,0.1405,-0.3288,0.3173,-1.043,0.352,-1.0921,-0.1959,0.8098,0.5818,-0.7763,-0.6554,1.5371,-0.4531,0.1382,-1.0386,-2.0806,1.8279,1.1192,0.9943,-1.2854,-0.1861,2.5259,1.23,0.0746,0.5151,-0.1497,0.8318,0.138,0.3584,-1.139,0.2349,0.3525,1.0369,0.0517,0.7914,0.3562,1.3248,0.5958,-0.3009,-1.4294,0.1117,-2.3373,2.4405,0.8596,-0.8337,0.5363,1.7881,1.1037,3.1665,-0.9627,2.151,3.8792,3.3899,0.2822,1.4595,1.2383,2.8134,0.585,1.3356,1.5789,1.0372,-0.7183,0.5511,0.0645,-2.8316,-0.6441,-1.6597,1.2564,-1.9291,-1.5395,0.0722,2.0132,-0.9369,-0.9755,-1.4287,-0.2789,-0.0155,0.6181,0.6714,0.0529,0.0892,2.1344,0.7195,-0.7939,1.4278,0.3375,2.4617,1.1483,0.5435,1.0138,-0.2442,0.4931,-1.5397,2.0412,-1.9746,-2.4028,2.1349,1.3098,-0.3898,-0.1747,0.3285,1.1653,0.0229,-1.2173,0.803,1.134,0.8754,1.4673,2.6241,0.9854,0.6798,0.2837,0.2394,3.3296,0.0181,0.7913,-1.1027,-0.6896,-2.4453,-3.3555,0.3199,1.448,-0.5037,0.8994,1.5453,2.2757,-1.3202,-0.7599,-2.0366,-1.3579,1.1159,2.3403,1.1532,0.8275,0.2106,0.7138,0.7066,1.1578,2.1727,0.6002,-0.8309,-0.494,1.0229,3.4817,-0.7521,2.0721,2.5492,1.3086,0.4131,1.0677,-2.2744,-0.5563,1.5139,0.8774,-1.3667,-0.2652,-0.5881,0.6614,1.1285,1.017,0.1261,-0.8369,1.3143,-0.1588,-0.5941,2.0319,-0.2775,0.4843,1.3727,-3.1669,-0.1273,-0.0516,-0.3238,-1.2395,-0.1606,-0.9915,1.6383,0.5077,-0.2711,1.0259,-2.3704,-0.4407,-0.1958,1.3765,0.8077,0.5744,0.7951,-1.0958,-0.651,-0.0124,0.9514,-0.8497,1.7013,0.3816,1.0424,0.9431,-0.2447,1.5447,0.2332,-0.2399,-1.1886,0.7481,0.131,-1.5108,1.2749,1.3299,1.5999,1.1879,-1.8371,0.7217,-0.839,1.1029,-0.6961,0.1433,-3.4453,0.8282,0.9467,0.5566,-0.1358,-0.4844,0.184,2.6264,-0.7707,-1.5949,0.897,0.5927,1.7747,-1.8402,-0.1583,-2.2721,0.4405,-0.4903,1.6572,1.6312,-0.3533,-2.4062,2.5606,-0.5993,2.6946,-0.238,1.9993,-1.029,-0.2233,-0.6893,0.0717,0.9613,2.0287,0.2073,0.5492,2.1556,-0.444,-1.5727,-0.49,-0.5226,0.1862,0.0508,-2.4867,-1.2138,-0.0892,0.2987,3.9101,-0.7649,2.3337,2.3448,1.1561,0.8319,-1.0435,-0.8321,-0.3271,0.8487,-0.2743,1.4137,0.3085,-1.5372,-0.8091,2.6464,-0.5177,0.699,-0.2986,-1.3446,-0.7112,0.6572,-1.3577,-2.9548,0.6448,0.5518,2.2707,1.0904,1.4106,2.0458,0.9409,-1.447,0.138,-0.2307,-0.375,1.8338,-2.1826,0.0021,1.1983,0.6286,0.2714,0.04,-1.2354,2.3465,-0.4801,-0.0537,1.3288,-0.9358,-1.6214,0.3398,-0.7609,0.6505,-1.6863,1.6983,-1.234,0.0329,-0.5981,-1.7092,1.0495,3.1879,1.2253,1.0992,1.6274,0.2976,2.1562,-1.4228,1.0108,1.2412,-0.3409,0.9818,-0.5603,2.1631,0.2716,1.255,1.0677,-1.8691,0.9665,1.4872,1.3904,-0.9337,-1.2109,1.6478,0.3867,-2.0742,1.2689,-0.2182,-2.3178,-0.1504,0.0282,-1.1406,0.4859,0.6339,-1.9178,-0.5524,-0.7089,0.5191,-1.445,-1.128,-0.8946,-1.103,-1.0428,-1.1899,1.5182,0.4721,-1.8027,0.3124,0.7458,-0.3573,1.6438,-1.224,-0.2214,-1.1935,2.986,-1.9049,-1.0977,-1.072,2.4829,-0.5797,-1.1078,0.3656,3.9196,2.2822,1.5723,2.4062,2.1682,2.25,0.9336,-1.8696,-0.4464,-0.1328,2.3854,1.0952,-0.2995,-1.4275,-1.1642,0.6404,0.2823,-0.5699,1.4538,4.2132,0.3828,-1.9362,0.0755,-0.3734,1.8548,-0.0845,-0.3154,0.3558,0.06,1.762,1.4243,-1.2801,0.3125,0.1734,-2.1353,1.4915,-2.1188,0.8991,2.1725,-0.5438,0.5415,0.5415,0.0755,2.5078,2.2302,0.8241,-0.8836,-2.1368,2.2344,-0.2249,-0.9765,-0.6418,-0.7784,-1.0779,1.0358,-0.2065,-2.1115,-0.4143,1.436,0.4022,0.9265,3.0891,0.5294,2.0167,-0.2241,-2.7334,1.1283,0.6906,1.6375,-0.4445,1.3093,-0.3863,-1.4268,-2.8249,0.5795,0.8595,-0.9326,-3.2705,0.0527,2.4207,0.8812,-0.6155,0.4255,-0.8858,2.462,1.8812,0.6548,-0.3066,-0.661,2.6005,-0.5111,-0.795,1.052,-3.4039,-2.1475,0.443,-1.0478,-0.4306,2.5013,0.2575,-1.0328,0.8289,-2.6232,-1.7097,-0.4446,1.9837,-1.6136,1.2839,0.5299,0.1076,0.9709,-0.3388,1.562,-0.5695,-0.7339,0.1125,0.3288,-0.5913,-3.6492,1.7102,-1.1415,0.4946,2.6692,-0.8595,1.8857,-0.375,-1.2837,0.1896,-0.4604,1.9319,3.0753,0.6243,1.1383,2.3896,3.0982,-1.1461,-0.8235,0.9838,0.2581,-2.1825,-0.478,0.5324,0.3908,-0.623,-0.623,0.9581,-0.0003,0.7469,0.5073,1.336,0.0014,0.5056,1.2711,-2.9952,-2.0352,0.7543,1.3362,1.9848,1.9316,-2.667,-1.4104,-1.5963,0.0884,0.3889,-1.9402,-0.0798,1.3747,1.3195,-0.0746,-0.0516,0.3854,0.2221,1.7159,1.3479,0.423,-0.3998,-0.2975,-0.3043,0.0175,-0.2515,0.3784,0.0953,0.2001,0.0868,0.954,-0.2518,1.5867,0.5415,-0.5598,-0.4434,-3.2009,-3.9433,-2.3284,0.7955,-2.6129,-0.7209,0.5782,0.8452,-0.2043,0.7688,0.1119,0.38,0.2126,-0.7391,0.2441,-1.6148,0.8484,-0.719,2.3544,-3.2248,2.6154,-3.7555,-1.0498,-1.5569,-0.3356,0.1836,-0.1259,1.4374,1.0194,-2.6358,-0.4533,-0.4533,1.3339,1.6649,-3.0561,-1.478,0.3438,1.604,0.7026,-1.1096,0.5106,1.7575,0.9546,-0.0354,-1.634,1.433,-0.0294,-0.9196,-1.1482,2.4753,1.2042,1.8602,0.5613,-1.5183,-1.9493,-1.483,0.5542,0.8331,1.38,0.7342,-2.9479,1.4795,-1.2725,1.5329,2.0141,0.6886,0.7288,0.4743,1.0411,1.3718,0.7424,1.3677,-2.5862,1.7119,-1.294,0.713,0.4177,0.2496,2.9496,-2.3323,-1.5613,-0.8801,-0.1851,-1.3944,-0.0941,-2.801,-0.1123,-0.4416,-0.9975,0.6328,0.2986,-1.0996,-3.1238,2.6012,0.0564,1.9881,2.1649,1.1633,0.0679,-0.4389,-0.8642,1.7739,-0.2953,-0.627,-0.8264,0.5539,-0.9295,-0.1155,0.0194,0.0085,0.2857,-0.8808,0.4264,0.3707,-1.8024,-0.2677,0.3408,1.5976,-0.8146,-1.1194,2.2029,2.1434,3.4435,1.757,-2.5514,0.9702,-0.5364,1.2269,-0.3679,2.0514,1.9991,0.8907,0.431,0.717,0.6719,1.3085,-1.4006,1.7666,2.039,3.1694,-1.8446,-0.6937,0.0434,-0.8799,1.0681,-0.6576,-2.1213,-0.6576,-0.2032,-0.8952,-1.1043,-0.4292,2.5962,1.2884,2.1347,-2.6077,2.273,0.8902,-0.9396,-0.26,0.7873,2.1106,-0.036,0.9271,0.3411,0.4638,-1.1241,-1.5149,2.5246,-3.9141,0.0487,0.5329,0.6747,0.9879,-0.7615,0.3363,-1.1545,-1.7492,0.6023,1.8814,1.0188,-0.3819,-1.2973,1.4205,1.458,-0.3088,-2.2286,0.4282,-1.4752,-3.0288,-2.7484,1.0295,-0.6829,0.8047,1.325,-0.1873,2.1339,-1.0099,1.351,-2.3941,-1.0771,-1.3804,0.3033,-0.2119,1.1165,0.8107,1.5348,-0.0839,-1.8449,1.5849,-0.2921,0.7063,-1.3136,0.7941,-0.9986,-0.4799,-1.0207,2.2309,0.0868,-0.7352,-0.1675,1.32,0.6628,-1.9693,-0.8267,1.28,-1.5471,1.5164,1.1137,-0.8408,-1.1187,2.645,1.6994,-0.8408,-1.9795,0.5536,-0.1763,1.4556,2.5481,-0.7531,1.0706,1.0676,0.7328,-0.5656,1.2562,0.6819,0.2367,-0.9,0.4831,-0.9694,-1.1527,-1.8493,-0.8501,-0.6499,-0.3787,-2.7092,0.7325,1.7036,0.0351,-0.1136,0.3721,2.3011,0.6732,1.2248,0.8093,1.3252,0.1147,-2.0971,-0.0171,-1.3845,-0.0017,-0.0356,0.5254,2.2495,-1.6326,2.4827,-0.5227,-0.2391,-0.1101,0.5659,-1.7422,0.067,-2.117,-1.6164,0.2677,-0.1206,-2.4224,-0.5359,-0.8333,-0.0771,0.0215,1.5724,2.0146,0.1365,1.0668,-1.8581,0.0398,-0.7825,1.2702,1.5511,0.1833,-0.8142,2.0206,-0.3466,0.5399,-1.614,-0.3715,0.3881,-0.7033,2.6125,-0.9755,-1.8207,0.0715,0.7082,-0.3223,2.559,0.514,1.1178,0.4367,-0.3201,1.0078,0.7778,-1.0065,-1.2631,-1.0727,-0.8945,2.1744,1.0722,-0.8023,1.6045,-0.6466,1.6134,-0.6326,-0.4525,-1.0831,-1.2012,-0.2194,0.9499,0.525,-1.1829,-0.8459,0.6664,-1.5901,-0.0292,-0.8096,0.9225,0.1006,0.3847,-0.955,-1.4692,-0.3717,-0.4852,1.5175,-1.1159,-1.3164,-0.3024,1.5343,0.0957,-0.7968,-0.8021,-0.3787,-1.4701,0.7616,0.9096,-2.0476,-0.6323,-0.8221,1.6233,3.1599,2.4118,2.9016,-0.997,0.6642,-1.5557,0.5074,0.7033,-1.6753,1.4646,-1.0538,1.5786,1.0618,0.872,0.8516,-0.3647,0.1277,0.2849,0.0166,1.6514,1.5901,-0.1348,-1.8442,0.6419,-2.3284,-1.2588,2.0672,-1.623,0.3627,0.3709,1.7034,-0.9206,2.0166,-0.3299,-1.8601,-1.3539,1.5252,3.3614,1.7176,2.871,0.6579,-1.2447,-2.0999,0.3072,-2.0764,-2.2758,1.4772,0.7403,0.2883,1.0072,1.6286,-0.7182,0.7244,-2.7363,-0.9192,0.6724,1.8265,-0.4492,0.655,1.0527,-0.4514,-3.0716,-2.774,0.4242,0.9758,3.3888,0.8167,-0.3765,-0.179,0.5193,0.2611,0.0232,0.1135,0.6318,4.9911,0.2995,-1.668,0.8024,1.2153,0.5677,-0.1656,-1.1412,-1.1369,1.2267,-0.0281,1.2039,-2.3959,-0.7889,-3.2529,0.9344,-0.809,-0.6129,1.0019,0.0584,0.3312,-0.3151,-2.7584,0.1925,-0.1568,0.1596,0.0896,0.4878,0.1372,-3.3109,0.0006,0.8568,-1.2468,1.6959,-0.1758,-1.118,-1.4743,0.8907,-0.8494,1.2362,-0.7451,0.7811,-0.4357,2.9781,2.1034,0.6336,-0.8802,0.3456,-1.9616,-2.1326,0.6826,-0.2466,2.4367,0.2957,2.0619,-1.3446,1.0274,-2.122,0.6239,-2.8361,-1.6771,-1.2482,-1.1355,1.6238,-1.2481,-2.2922,1.7501,1.374,-0.2057,1.4951,0.0848,-1.0286,0.7723,1.9054,2.9793,1.5481,-0.1079,1.3221,-0.5274,0.003,1.38,0.1846,1.8815,-0.7042,1.4096,1.8816,-1.6976,0.2456,0.566,-1.3718,-2.0432,0.1867,0.7398,0.1671,0.7086,2.0824,-1.2835,1.7731,0.2811,0.215,3.7214,3.064,1.1445,1.5432,0.8818,-1.678,-0.2621,-0.5196,-1.4037,0.2908,-0.8955,0.4563,-2.1132,4.7269,2.5197,0.7735,-0.3625,1.406,0.5338,0.8398,-1.3966,-2.9601,-1.1993,-0.831,-0.2368,-0.4839,2.7672,-1.4464,0.0189,1.6294,2.3323,-1.0973,-0.8812,-0.6901,-1.8431,0.9699,1.3606,1.2257,1.2102,1.128,1.1457,0.6067,2.6541,0.8947,1.0653,1.5862,2.8534,1.6211,1.5224,-1.1345,2.3736,-1.4996,1.4137,-0.2536,-1.5179,0.5884,-1.7647,-1.0588,-1.0509,2.1161,1.1054,1.9624,1.9093,-0.0414,0.9321,1.1316,1.5691,2.0,1.9764,-1.1966,-0.1335,0.2906,-1.0145,1.7368,-0.0756,-1.1995,1.3005,0.1242,-0.8756,-1.3307,-1.4863,-2.3751,-0.7473,0.5043,-1.9339,-1.7364,-0.0969,1.3589,-0.3917,-0.4477,2.264,-0.4033,1.0387,0.1056,0.9355,-0.182,-2.1848,2.7896,0.1065,0.0312,-1.5932,0.4844,-2.2554,-1.1665,-2.0334,-1.4665,-0.7378,2.3,1.2799,-2.1154,0.283,2.1836,-0.3071,-0.7556,1.1358,-1.3495,0.292,-2.4147,-0.5159,1.2234,-0.3464,0.508,-0.1606,-0.1606,-0.2957,0.4419,0.2221,1.1151,1.154,1.0156,0.2378,-0.708,-1.2792,-1.044,-0.7696,-1.8411,0.0716,-2.8283,-0.5876,-1.2804,0.0482,0.4851,-0.1285,0.8411,2.5032,-0.1295,1.6815,-2.1356,-0.7347,0.4147,-0.0447,-0.6727,0.1821,0.5025,-0.5585,-1.6289,-0.8648,1.2591,0.385,-1.3942,0.898,1.5093,-2.4086,0.3301,-0.5263,-0.488,-0.3173,0.703,-1.2977,-0.3461,-1.2349,-2.316,-0.1689,0.0469,1.0102,-0.243,0.9161,-1.4388,-1.8772,0.9446,1.5647,0.5579,-0.3949,1.002,-2.6408,-0.7018,1.8198,1.3312,3.3593,0.6829,-1.2694,0.167,2.0627,1.9431,-1.6691,-1.0337,-1.0263,-0.25,-0.4967,0.1871,1.2018,0.6829,1.4408,-0.6006,1.6436,0.1753,-1.3714,-0.7134,0.359,-1.4794,1.0022,-0.8895,1.2473,-1.483,-1.191,-0.6141,1.1409,-0.76,-1.6934,-1.8255,-1.6248,-0.5147,-1.4515,-1.6006,0.2474,-1.1968,1.227,1.4693,-0.9954,-0.3526,-2.1479,0.1821,-2.2021,0.5618,-0.1056,1.2356,1.6965,-1.8605,-0.5732,-0.7169,0.4865,-2.0289,1.7188,0.4333,2.6266,3.1399,1.9599,1.5942,1.9295,-1.2501,-0.8443,-0.8467,-1.1173,-0.9771,-1.3567,2.0266,-0.3517,0.3073,0.7482,-0.0745,-0.3959,5.1641,1.328,-0.187,0.0846,-0.4241,2.9994,1.5878,0.7076,-0.0007,1.0834,-0.2241,1.413,-0.468,-1.0151,-1.0151,-1.3967,-0.0505,0.833,0.5595,2.8741,-1.377,2.5813,0.2883,-0.4216,-0.5836,-1.4382,-1.0583,-1.6286,1.2795,1.311,-1.3037,2.3312,0.1467,-1.4005,2.1523,0.1405,-0.2887,0.5702,2.7519,0.2879,-0.7177,-0.0657,0.9976,2.7624,1.0434,2.0033,2.5055,1.7416,0.4758,0.4539,1.5034,0.7617,0.7229,0.4277,1.2149,-0.4459,-0.3823,1.2216,0.7984,-0.4089,-2.4517,1.217,0.7715,1.0456,-0.3159,0.3861,-0.4029,-0.3262,-0.0348,-0.5229,1.001,1.6396,-3.5137,-1.1194,-0.5692,1.6334,-1.176,-1.176,0.4215,-0.7877,-0.5067,-0.4292,2.1392,-0.2021,-0.6697,1.0312,-1.9372,-0.5005,-0.4071,0.296,0.8255,0.2778,0.6359,-1.3194,1.4828,-0.4237,2.0967,2.2017,-1.4398,2.7239,-0.4516,-0.3842,1.6402,0.987,-0.3434,2.3647,-1.0774,0.9405,-0.185,-2.0223,1.4245,0.859,1.6573,-1.1984,1.1737,-4.3438,0.9922,0.8948,-0.6918,-0.0901,0.398,1.8114,0.789,-0.5585,1.9332,-0.2443,-0.409,1.9358,0.8725,1.6595,-0.2463,-4.1034,-0.0312,-2.1228,-1.8322,-0.8187,2.8698,0.7966,0.6505,-1.4329,-0.1483,-0.9548,-2.6628,0.1933,-0.8845,0.5587,-0.4763,-0.2147,1.3052,1.857,2.2611,-1.803,0.7655,0.992,-2.0693,0.1365,0.653,1.9117,-2.2901,2.038,2.4621,-0.1573,-2.3998,0.5316,2.6342,0.6134,0.8824,-0.202,-0.022,1.7594,0.7175,-1.1137,-0.2619,-0.7535,-0.5705,-1.3346,0.6066,1.3364,-1.0457,-0.1253,-1.5681,-0.4582,2.4909,-0.1086,-2.2495,-0.7654,0.2382,-1.931,-1.0724,-1.4234,-1.6366,0.6536,0.1847,0.8824,2.0735,-2.4449,1.1371,-0.6704,-2.211,3.8244,1.1558,-1.0156,1.5734,0.9663,-1.204,-0.0449,0.1232,-0.7782,1.435,0.9552,-1.5905,-0.9129,-1.2633,-1.2361,-3.7825,-0.4305,1.6381,2.0726,3.1396,1.8698,0.7755,-1.2906,0.7736,0.1328,-0.2396,-0.8757,2.4162,-0.1104,0.6441,0.9711,-3.0143,-3.2858,-2.1934,1.0801,0.0174,1.1036,-0.8804,-0.2937,0.9934,-1.4766,0.0179,2.12,1.8001,0.5924,2.83,0.4334,1.5541,-0.8451,0.6744,0.8675,-1.171,2.5634,1.259,0.9282,1.4809,0.139,-2.4009,-2.1183,0.0532,1.502,3.4262,0.1951,-0.0169,0.4046,-2.3809,-0.7049,-1.7511,-1.4533,-1.921,0.2619,0.5167,-1.8918,1.8908,0.1278,0.7171,-0.6564,-2.3952,1.61,-0.3008,-0.3941,-0.5731,0.4708,-1.2998,-3.0288,0.1359,0.4206,1.1123,1.6727,0.1651,-0.6895,-2.386,0.5497,-2.3687,0.9895,1.3142,-2.0739,0.9921,2.7399,-1.0537,-0.3107,1.2467,-2.3355,3.5691,-0.6351,1.05,-2.0759,1.8819,2.069,-3.5147,-3.3469,-1.9457,-1.6965,-1.9682,2.6726,1.6201,-3.4408,-1.9431,1.7273,0.2833,-2.213,1.6962,-0.2154,-2.6282,1.175,0.4365,1.3421,0.653,1.8614,0.2359,-0.3602,1.3039,-1.1901,0.494,-0.6019,1.712,0.8071,2.1243,1.3128,-0.4609,0.1001,-1.3837,-0.4831,0.669,-1.5789,-1.5779,1.1212,-1.2191,-0.0871,1.3728,0.1897,-1.0689,1.9085,0.3853,1.1316,1.6631,-0.4899,-1.0268,-0.7979,1.3906,0.9351,-1.013,-1.5655,2.1796,1.1054,0.3947,1.8821,-2.8378,-1.1414,-2.0402,2.5603,0.2034,-0.9153,-0.1451,1.1614,2.5554,0.4374,2.0598,1.1764,2.0465,-1.2933,-1.47,-2.2579,-1.0047,0.4487,0.8362,-1.4194,0.012,-3.5638,0.0599,0.6419,-2.8617,0.8844,0.7529,2.3645,1.9092,-1.6315,0.1463,2.0069,-1.5654,1.1642,-2.775,-0.2462,1.8554,-0.0982,0.3278,0.1844,0.4585,2.183,-2.5013,-2.6321,0.8858,0.6824,-2.0466,1.8158,-2.192,-0.9607,0.4771,-1.4311,-1.0063,1.8002,1.0319,-0.3203,2.351,0.3321,0.7292,-0.0246,0.0057,0.485,0.7424,1.4953,-0.3389,-0.4517,-1.6713,-0.4429,1.1305,0.8558,-0.2143,1.2714,-1.2579,-0.9686,2.2828,0.5324,1.4306,-0.9168,1.3719,4.0405,3.31,-1.3561,-0.6999,-0.8467,0.5878,-0.5692,-0.3322,0.8974,0.3606,-0.6391,3.1567,2.501,-0.4103,-2.4106,-4.4569,2.9053,0.883,0.508,1.7532,-0.0848,0.6601,-0.5093,1.6426,0.1021,0.2601,-1.3178,-2.0565,0.8033,-1.979,2.2516,0.3115,0.6407,-0.3402,1.105,2.4766,0.6883,-1.2127,0.6214,3.0848,-2.0137,1.2045,0.3721,0.1654,1.4277,-0.031,0.2479,-0.4335,0.3619],"intercept":-0.2617}}
;

const STOP_WORDS = new Set(MODEL_DATA.vectorizer.stopWords);
const TERM_INDEX = {};
MODEL_DATA.vectorizer.terms.forEach((t, i) => { TERM_INDEX[t] = i; });
const IDF = MODEL_DATA.vectorizer.idf;
const COEF = MODEL_DATA.model.coef;
const INTERCEPT = MODEL_DATA.model.intercept;

function classify(text) {
  const tokens = (text.toLowerCase().match(/\b\w\w+\b/g) || []);
  const filtered = tokens.filter((t) => !STOP_WORDS.has(t));
  const bigrams = [];
  for (let i = 0; i < filtered.length - 1; i++) bigrams.push(filtered[i] + " " + filtered[i + 1]);
  const combined = filtered.concat(bigrams);

  const counts = {};
  const matchedTerms = [];
  combined.forEach((t) => {
    if (Object.prototype.hasOwnProperty.call(TERM_INDEX, t)) {
      if (!counts[t]) matchedTerms.push(t);
      counts[t] = (counts[t] || 0) + 1;
    }
  });

  const vec = {};
  Object.keys(counts).forEach((t) => {
    const idx = TERM_INDEX[t];
    const tf = 1 + Math.log(counts[t]);
    vec[idx] = tf * IDF[idx];
  });

  let norm = 0;
  Object.values(vec).forEach((v) => { norm += v * v; });
  norm = Math.sqrt(norm);

  let logit = INTERCEPT;
  const contributions = [];
  if (norm > 0) {
    Object.keys(vec).forEach((idx) => {
      const weight = (vec[idx] / norm) * COEF[idx];
      logit += weight;
      contributions.push({ term: MODEL_DATA.vectorizer.terms[idx], weight });
    });
  }

  const prob = 1 / (1 + Math.exp(-logit));
  contributions.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));

  return {
    label: prob >= 0.5 ? "Positive" : "Negative",
    probability: prob,
    matchedTerms: matchedTerms.length,
    topFeatures: contributions.slice(0, 5),
    hasSignal: matchedTerms.length > 0,
  };
}

const SAMPLE_TEXTS = [
  "A stunning, emotionally resonant film that lingers long after the credits roll.",
  "Painfully slow, poorly acted, and a complete waste of two hours.",
  "One of the most delightful and inventive comedies of the year.",
  "The visuals are impressive but the plot never comes together.",
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "dataset", label: "Dataset" },
  { id: "model", label: "Model" },
  { id: "results", label: "Results" },
  { id: "demo", label: "Live Demo" },
  { id: "bulk", label: "Bulk Analysis" },
];

function parseBulkInput(raw) {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return [];
  // Detect a simple CSV with a header containing "text"/"review"/"comment"
  const headerLine = lines[0].toLowerCase();
  const looksLikeCsv = lines[0].includes(",") && /text|review|comment|body/.test(headerLine);
  if (looksLikeCsv) {
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    let col = headers.findIndex((h) => /text|review|comment|body/.test(h));
    if (col === -1) col = 0;
    return lines.slice(1).map((l) => {
      const parts = l.split(",");
      return (parts[col] || "").replace(/^"|"$/g, "").trim();
    }).filter(Boolean);
  }
  return lines;
}

function Footer({ go }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <div className="footer-brand">SentimentSense</div>
          <p className="footer-tag">A B.Tech AI/ML project — GNIT, Kolkata</p>
        </div>
        <div className="footer-links">
          {NAV_ITEMS.map((n) => (
            <span key={n.id} onClick={() => go(n.id)}>{n.label}</span>
          ))}
        </div>
      </div>
      <div className="wrap footer-bottom">Built with TF-IDF · Logistic Regression · SST-2 (Hugging Face Datasets) · React</div>
    </footer>
  );
}

export default function SentimentWebsite() {
  const [page, setPage] = useState("home");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const [bulkText, setBulkText] = useState("");
  const [bulkFileName, setBulkFileName] = useState("");
  const [bulkProcessing, setBulkProcessing] = useState(false);
  const [bulkProgress, setBulkProgress] = useState(0);
  const [bulkTotal, setBulkTotal] = useState(0);
  const [bulkResults, setBulkResults] = useState(null);
  const bulkCancelRef = useRef(false);

  const cm = MODEL_DATA.metrics.confusionMatrix;
  const cmTotal = cm[0][0] + cm[0][1] + cm[1][0] + cm[1][1];

  const classBalance = useMemo(() => {
    const pos = MODEL_DATA.meta.trainPositive;
    const neg = MODEL_DATA.meta.trainNegative;
    const total = pos + neg;
    return { pos, neg, posPct: (pos / total) * 100, negPct: (neg / total) * 100 };
  }, []);

  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const runAnalysis = (inputText) => {
    const t = (inputText ?? text).trim();
    if (!t) return;
    setAnalyzing(true);
    setTimeout(() => {
      setResult(classify(t));
      setAnalyzing(false);
    }, 300);
  };
  const useSample = (s) => { setText(s); runAnalysis(s); };

  const handleBulkFile = (file) => {
    if (!file) return;
    setBulkFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => setBulkText(String(e.target.result || ""));
    reader.readAsText(file);
  };

  const runBulkAnalysis = () => {
    const items = parseBulkInput(bulkText);
    if (items.length === 0) return;
    setBulkResults(null);
    setBulkProcessing(true);
    setBulkTotal(items.length);
    setBulkProgress(0);
    bulkCancelRef.current = false;

    const CHUNK = 400;
    let i = 0;
    const processed = [];
    let posCount = 0;
    let negCount = 0;
    let probSum = 0;

    const step = () => {
      if (bulkCancelRef.current) { setBulkProcessing(false); return; }
      const end = Math.min(i + CHUNK, items.length);
      for (; i < end; i++) {
        const r = classify(items[i]);
        if (r.label === "Positive") posCount++; else negCount++;
        probSum += r.probability;
        processed.push({ text: items[i], label: r.label, probability: r.probability });
      }
      setBulkProgress(i);
      if (i < items.length) {
        setTimeout(step, 0);
      } else {
        const sorted = [...processed].sort((a, b) => b.probability - a.probability);
        setBulkResults({
          total: items.length,
          positive: posCount,
          negative: negCount,
          avgProbability: probSum / items.length,
          topPositive: sorted.slice(0, 8),
          topNegative: sorted.slice(-8).reverse(),
          all: processed,
        });
        setBulkProcessing(false);
      }
    };
    setTimeout(step, 0);
  };

  const cancelBulk = () => { bulkCancelRef.current = true; setBulkProcessing(false); };

  const downloadBulkCsv = () => {
    if (!bulkResults) return;
    const header = "text,label,probability_positive\n";
    const rows = bulkResults.all.map((r) => {
      const safeText = '"' + r.text.replace(/"/g, '""') + '"';
      return `${safeText},${r.label},${r.probability.toFixed(4)}`;
    }).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sentiment_bulk_results.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }
        html, body { margin: 0; }
        .site { background: #FAF8F3; color: #1B2439; font-family: 'Inter', sans-serif; min-height: 100vh; }
        .wrap { max-width: 1040px; margin: 0 auto; padding: 0 28px; }

        /* Navbar */
        .navbar {
          position: sticky; top: 0; z-index: 50;
          background: rgba(250,248,243,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #E4DECB;
        }
        .navbar-inner { display: flex; align-items: center; justify-content: space-between; height: 62px; }
        .brand { display: flex; align-items: center; gap: 8px; font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 18px; cursor: pointer; }
        .brand-dot { width: 8px; height: 8px; border-radius: 50%; background: #B98900; }
        .nav-links { display: flex; gap: 4px; }
        .nav-link {
          font-size: 13.5px; font-weight: 500; color: #6B7280;
          padding: 8px 14px; border-radius: 999px; cursor: pointer; transition: all 0.15s ease;
        }
        .nav-link:hover { color: #1B2439; }
        .nav-link.active { background: #1B2439; color: #FFFFFF; }
        @media (max-width: 720px) { .nav-links { display: none; } }
        .nav-mobile-select { display: none; }
        @media (max-width: 720px) {
          .nav-mobile-select { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 12px; padding: 6px 10px; border-radius: 8px; border: 1px solid #E4DECB; background: #fff; }
        }

        /* Hero shared */
        .hero {
          padding: 64px 0 56px;
          border-bottom: 1px solid #E4DECB;
          position: relative;
          overflow: hidden;
        }
        .hero-blob {
          position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.35; z-index: 0;
        }
        .hero-content { position: relative; z-index: 1; }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #1F6F78; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
        }
        h1.page-title {
          font-family: 'Source Serif 4', serif; font-weight: 700; font-size: clamp(30px, 5vw, 48px);
          line-height: 1.1; margin: 0 0 18px; letter-spacing: -0.01em; max-width: 700px;
        }
        p.lede { font-size: 16px; line-height: 1.7; color: #4B5563; max-width: 600px; margin: 0 0 28px; }

        .btn-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary, .btn-secondary {
          display: inline-flex; align-items: center; gap: 7px;
          font-weight: 600; font-size: 14px; padding: 12px 22px; border-radius: 10px; cursor: pointer; border: none;
        }
        .btn-primary { background: #1B2439; color: #fff; }
        .btn-primary:hover { background: #26314D; }
        .btn-secondary { background: #fff; color: #1B2439; border: 1px solid #D9D2BE; }
        .btn-secondary:hover { border-color: #1B2439; }

        section.page-section { padding: 56px 0; }
        section.page-section.tight { padding: 40px 0; }
        h2.section-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 26px; margin: 0 0 10px; }
        p.section-lede { font-size: 14.5px; color: #6B7280; max-width: 620px; line-height: 1.65; margin-bottom: 28px; }

        /* Home page specific */
        .stat-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 40px; }
        @media (max-width: 700px) { .stat-strip { grid-template-columns: repeat(2, 1fr); } }
        .stat-box { background: #FFFFFF; border: 1px solid #E4DECB; border-radius: 12px; padding: 20px 18px; }
        .stat-num { font-family: 'IBM Plex Mono', monospace; font-size: 26px; font-weight: 600; color: #1F6F78; }
        .stat-label { font-size: 12px; color: #6B7280; margin-top: 6px; }

        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 8px; }
        @media (max-width: 800px) { .feature-grid { grid-template-columns: 1fr; } }
        .feature-card {
          background: #FFFFFF; border: 1px solid #E4DECB; border-radius: 14px; padding: 24px;
          cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .feature-card:hover { transform: translateY(-3px); border-color: #1F6F78; }
        .feature-icon {
          width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
          background: #1B2439; color: #7FBFC2; margin-bottom: 14px;
        }
        .feature-title { font-weight: 600; font-size: 15.5px; margin-bottom: 6px; }
        .feature-desc { font-size: 13px; color: #6B7280; line-height: 1.55; }
        .feature-link { font-size: 12.5px; color: #1F6F78; font-weight: 600; margin-top: 12px; display: flex; align-items: center; gap: 4px; }

        /* About page */
        .about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 800px) { .about-grid { grid-template-columns: 1fr; } }
        ul.obj-list { margin: 0; padding: 0; list-style: none; }
        ul.obj-list li { display: flex; gap: 14px; padding: 14px 0; border-top: 1px solid #E4DECB; font-size: 14.5px; line-height: 1.55; color: #2A3148; }
        ul.obj-list li:first-child { border-top: none; }
        .obj-num { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: #B98900; font-weight: 600; flex-shrink: 0; width: 22px; }
        .side-card { background: #1B2439; color: #F4F1E8; border-radius: 14px; padding: 24px; }
        .side-card-title { font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 600; margin-bottom: 12px; }
        .side-card p { font-size: 13px; color: #C9CEDD; line-height: 1.6; margin: 0 0 14px; }
        .badge-row { display: flex; flex-wrap: wrap; gap: 7px; }
        .tech-badge { font-family: 'IBM Plex Mono', monospace; font-size: 11px; border: 1px solid #3A4463; padding: 5px 11px; border-radius: 999px; color: #C9CEDD; }

        /* Dataset page */
        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 22px 0; }
        @media (max-width: 700px) { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
        .balance-bar { display: flex; height: 16px; border-radius: 8px; overflow: hidden; margin: 18px 0 10px; }
        .balance-legend { display: flex; gap: 24px; font-size: 13.5px; color: #4B5563; }
        .legend-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
        .sample-quote { background: #FFFFFF; border: 1px solid #E4DECB; border-left: 3px solid #1F6F78; border-radius: 8px; padding: 14px 18px; font-size: 13.5px; color: #3A4256; margin-top: 12px; font-style: italic; }

        /* Model page pipeline */
        .pipeline { margin-top: 24px; }
        .pipe-step { display: flex; gap: 20px; padding: 22px 0; border-top: 1px solid #E4DECB; }
        .pipe-step:first-child { border-top: none; }
        .pipe-num { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 700; color: #E4DECB; width: 44px; flex-shrink: 0; }
        .pipe-title { font-weight: 600; font-size: 16px; margin-bottom: 5px; color: #1B2439; }
        .pipe-desc { font-size: 13.5px; color: #6B7280; line-height: 1.6; max-width: 560px; }
        .pipe-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; background: #EEF2F0; color: #1F6F78; padding: 3px 9px; border-radius: 999px; margin-top: 8px; }

        /* Results page */
        .metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 24px 0 36px; }
        @media (max-width: 700px) { .metric-grid { grid-template-columns: repeat(2, 1fr); } }
        .metric-card { background: #1B2439; border-radius: 12px; padding: 20px 16px; text-align: center; }
        .metric-value { font-family: 'IBM Plex Mono', monospace; font-size: 26px; font-weight: 600; }
        .metric-label { font-size: 11.5px; color: #9AA3BD; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
        .cm-wrap { display: flex; gap: 36px; align-items: center; flex-wrap: wrap; margin-top: 12px; }
        .cm-grid { display: grid; grid-template-columns: auto repeat(2, 100px); grid-template-rows: auto repeat(2, 100px); gap: 3px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }
        .cm-cell { display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: 600; font-size: 18px; }
        .cm-label { font-size: 11.5px; color: #6B7280; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4px; }
        .cm-note { font-size: 13.5px; color: #6B7280; max-width: 280px; line-height: 1.65; }
        .limits-box { background: #FFF9EC; border: 1px solid #EAD9A0; border-radius: 10px; padding: 16px 18px; margin-top: 24px; font-size: 13px; color: #6B5A22; line-height: 1.6; }

        /* Live demo page */
        .demo-shell { background: #FFFFFF; border: 1px solid #E4DECB; border-radius: 16px; padding: 28px; margin-top: 24px; }
        textarea {
          width: 100%; min-height: 120px; border: 1px solid #E4DECB; border-radius: 10px; padding: 14px 16px;
          font-family: 'Inter', sans-serif; font-size: 15px; color: #1B2439; resize: vertical; outline: none;
        }
        textarea:focus { border-color: #1F6F78; }
        .demo-toolbar { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; flex-wrap: wrap; gap: 12px; }
        .sample-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .sample-chip { font-family: 'IBM Plex Mono', monospace; font-size: 11px; background: #F1EFE6; border: 1px solid #E4DECB; color: #4B5563; padding: 6px 11px; border-radius: 999px; cursor: pointer; }
        .sample-chip:hover { border-color: #1F6F78; color: #1F6F78; }
        button.run-btn { background: #1B2439; color: #fff; border: none; font-weight: 600; font-size: 14px; padding: 12px 26px; border-radius: 10px; cursor: pointer; }
        button.run-btn:disabled { opacity: 0.5; }
        .result-box { margin-top: 24px; border-top: 1px solid #E4DECB; padding-top: 22px; }
        .result-top { display: flex; align-items: baseline; gap: 14px; margin-bottom: 12px; }
        .result-label { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 700; }
        .result-prob { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #6B7280; }
        .prob-bar { height: 9px; background: #EEECE1; border-radius: 5px; overflow: hidden; margin-bottom: 18px; max-width: 360px; }
        .prob-fill { height: 100%; border-radius: 5px; transition: width 0.4s ease; }
        .feature-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .feature-chip { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; padding: 5px 11px; border-radius: 999px; color: #fff; }
        .no-signal { font-size: 13px; color: #9CA3AF; font-style: italic; }
        .demo-note { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #6B7280; margin-top: 20px; }

        /* Bulk analysis page */
        .bulk-shell { background: #FFFFFF; border: 1px solid #E4DECB; border-radius: 16px; padding: 28px; margin-top: 24px; }
        .bulk-input-row { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 14px; align-items: center; }
        .file-btn {
          display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600;
          background: #F1EFE6; border: 1px solid #E4DECB; color: #1B2439; padding: 10px 18px;
          border-radius: 10px; cursor: pointer;
        }
        .file-btn input { display: none; }
        .file-name { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #6B7280; }
        textarea.bulk-textarea { min-height: 180px; font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; }
        .bulk-hint { font-size: 12px; color: #9CA3AF; margin-top: 8px; line-height: 1.6; }
        .bulk-toolbar { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; flex-wrap: wrap; gap: 12px; }
        .bulk-count { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: #6B7280; }
        .progress-track { height: 8px; background: #EEECE1; border-radius: 5px; overflow: hidden; margin: 18px 0 8px; }
        .progress-fill { height: 100%; background: #1F6F78; border-radius: 5px; transition: width 0.15s ease; }
        .progress-label { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: #6B7280; }
        .btn-cancel { background: #FFFFFF; border: 1px solid #E4DECB; color: #8B2635; font-size: 12.5px; font-weight: 600; padding: 7px 14px; border-radius: 8px; cursor: pointer; }

        .bulk-summary { margin-top: 26px; border-top: 1px solid #E4DECB; padding-top: 22px; }
        .bulk-metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0 24px; }
        @media (max-width: 700px) { .bulk-metric-grid { grid-template-columns: repeat(2, 1fr); } }
        .bulk-metric { background: #1B2439; border-radius: 10px; padding: 16px; text-align: center; }
        .bulk-metric-value { font-family: 'IBM Plex Mono', monospace; font-size: 22px; font-weight: 600; }
        .bulk-metric-label { font-size: 10.5px; color: #9AA3BD; margin-top: 5px; text-transform: uppercase; letter-spacing: 0.04em; }
        .bulk-dist-bar { display: flex; height: 14px; border-radius: 7px; overflow: hidden; margin-bottom: 10px; }

        .example-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
        @media (max-width: 750px) { .example-cols { grid-template-columns: 1fr; } }
        .example-col-title { font-weight: 600; font-size: 13.5px; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .example-item {
          font-size: 12.5px; color: #3A4256; padding: 10px 12px; border-radius: 8px; background: #FAFBFC;
          border: 1px solid #E4DECB; margin-bottom: 8px; line-height: 1.5;
        }
        .example-prob { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: #6B7280; margin-top: 4px; display: block; }
        .btn-export { margin-top: 22px; }

        /* Footer */
        .site-footer { background: #1B2439; color: #C9CEDD; padding: 40px 0 0; margin-top: 20px; }
        .footer-inner { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px; padding-bottom: 28px; }
        .footer-brand { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 17px; color: #F4F1E8; }
        .footer-tag { font-size: 12.5px; color: #8891AC; margin-top: 4px; }
        .footer-links { display: flex; gap: 18px; flex-wrap: wrap; }
        .footer-links span { font-size: 13px; color: #C9CEDD; cursor: pointer; }
        .footer-links span:hover { color: #7FBFC2; }
        .footer-bottom { border-top: 1px solid #2E3A5C; padding: 16px 0; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #6E7797; }
      `}</style>

      <nav className="navbar">
        <div className="wrap navbar-inner">
          <div className="brand" onClick={() => go("home")}>
            <span className="brand-dot" />SentimentSense
          </div>
          <div className="nav-links">
            {NAV_ITEMS.map((n) => (
              <span key={n.id} className={`nav-link ${page === n.id ? "active" : ""}`} onClick={() => go(n.id)}>
                {n.label}
              </span>
            ))}
          </div>
          <select className="nav-mobile-select" value={page} onChange={(e) => go(e.target.value)}>
            {NAV_ITEMS.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
          </select>
        </div>
      </nav>

      {page === "home" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 340, height: 340, background: "#7FBFC2", top: -100, right: -80 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><Sparkles size={13} /> B.Tech AI/ML Project · GNIT Kolkata</div>
              <h1 className="page-title">Sentiment analysis, trained from real data and running live in your browser.</h1>
              <p className="lede">
                A TF-IDF + Logistic Regression classifier trained on the SST-2 movie review dataset
                (Hugging Face Datasets), evaluated end-to-end, and deployed for instant, offline predictions.
              </p>
              <div className="btn-row">
                <button className="btn-primary" onClick={() => go("demo")}><PlayCircle size={16} /> Try Live Demo</button>
                <button className="btn-secondary" onClick={() => go("dataset")}>Explore the Dataset</button>
              </div>
              <div className="stat-strip">
                <div className="stat-box"><div className="stat-num">{(MODEL_DATA.metrics.accuracy * 100).toFixed(1)}%</div><div className="stat-label">Test Accuracy</div></div>
                <div className="stat-box"><div className="stat-num">{MODEL_DATA.meta.trainSize.toLocaleString()}</div><div className="stat-label">Training Sentences</div></div>
                <div className="stat-box"><div className="stat-num">{MODEL_DATA.meta.vocabSize.toLocaleString()}</div><div className="stat-label">Vocabulary Features</div></div>
                <div className="stat-box"><div className="stat-num">0</div><div className="stat-label">Server Calls Needed</div></div>
              </div>
            </div>
          </div>

          <section className="page-section">
            <div className="wrap">
              <div className="eyebrow">Explore</div>
              <h2 className="section-title">Everything behind the model</h2>
              <p className="section-lede">From raw dataset to deployed prediction — walk through each stage of the pipeline.</p>
              <div className="feature-grid">
                <div className="feature-card" onClick={() => go("dataset")}>
                  <div className="feature-icon"><Database size={19} /></div>
                  <div className="feature-title">The Dataset</div>
                  <div className="feature-desc">SST-2 movie reviews, class balance, and preprocessing details.</div>
                  <div className="feature-link">View dataset <ArrowRight size={13} /></div>
                </div>
                <div className="feature-card" onClick={() => go("model")}>
                  <div className="feature-icon"><GitBranch size={19} /></div>
                  <div className="feature-title">Model Pipeline</div>
                  <div className="feature-desc">TF-IDF vectorization and Logistic Regression, step by step.</div>
                  <div className="feature-link">View pipeline <ArrowRight size={13} /></div>
                </div>
                <div className="feature-card" onClick={() => go("results")}>
                  <div className="feature-icon"><BarChart3 size={19} /></div>
                  <div className="feature-title">Results</div>
                  <div className="feature-desc">Accuracy, precision, recall, F1, and the confusion matrix.</div>
                  <div className="feature-link">View results <ArrowRight size={13} /></div>
                </div>
                <div className="feature-card" onClick={() => go("bulk")}>
                  <div className="feature-icon"><Layers size={19} /></div>
                  <div className="feature-title">Bulk Analysis</div>
                  <div className="feature-desc">Upload or paste thousands of comments at once and get an aggregate report — up to 30,000 rows.</div>
                  <div className="feature-link">Analyze in bulk <ArrowRight size={13} /></div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#B98900", top: -80, left: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><Target size={13} /> About the Project</div>
              <h1 className="page-title">Why this project exists</h1>
              <p className="lede">
                Manually reading through thousands of reviews doesn't scale. This project automates sentiment
                classification end-to-end, from a labeled benchmark dataset to a working, interactive application.
              </p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap about-grid">
              <div>
                <h2 className="section-title">Objectives</h2>
                <ul className="obj-list">
                  <li><span className="obj-num">01</span>Acquire and preprocess a labeled benchmark dataset for binary sentiment classification.</li>
                  <li><span className="obj-num">02</span>Engineer text features using TF-IDF over unigrams and bigrams.</li>
                  <li><span className="obj-num">03</span>Train and evaluate a Logistic Regression classifier using standard metrics.</li>
                  <li><span className="obj-num">04</span>Deploy the trained model in an accessible, interactive web interface.</li>
                  <li><span className="obj-num">05</span>Demonstrate the full ML workflow: data → features → model → evaluation → deployment.</li>
                </ul>
              </div>
              <div className="side-card">
                <div className="side-card-title">Institution</div>
                <p>Gurunanak Institute of Technology (GNIT), Kolkata — Department of Computer Science &amp; Engineering (AI/ML).</p>
                <div className="side-card-title">Tech Stack</div>
                <div className="badge-row">
                  <span className="tech-badge">Python 3</span>
                  <span className="tech-badge">Hugging Face Datasets</span>
                  <span className="tech-badge">scikit-learn</span>
                  <span className="tech-badge">TF-IDF</span>
                  <span className="tech-badge">Logistic Regression</span>
                  <span className="tech-badge">React</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "dataset" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#2F7A4F", top: -80, right: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><Database size={13} /> Dataset</div>
              <h1 className="page-title">SST-2 — Stanford Sentiment Treebank</h1>
              <p className="lede">
                A binary sentiment classification benchmark of single sentences extracted from movie reviews,
                part of the GLUE benchmark and available via Hugging Face Datasets as <code>glue / sst2</code>.
              </p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap">
              <div className="stat-grid">
                <div className="stat-box"><div className="stat-num">{MODEL_DATA.meta.trainSize.toLocaleString()}</div><div className="stat-label">Training sentences</div></div>
                <div className="stat-box"><div className="stat-num">{MODEL_DATA.meta.testSize.toLocaleString()}</div><div className="stat-label">Test sentences</div></div>
                <div className="stat-box"><div className="stat-num">{MODEL_DATA.meta.vocabSize.toLocaleString()}</div><div className="stat-label">Vocabulary size</div></div>
                <div className="stat-box"><div className="stat-num">1–2</div><div className="stat-label">N-gram range</div></div>
              </div>
              <h2 className="section-title" style={{ marginTop: 32 }}>Class Balance</h2>
              <div className="balance-bar">
                <div style={{ width: `${classBalance.posPct}%`, background: "#2F7A4F" }} />
                <div style={{ width: `${classBalance.negPct}%`, background: "#8B2635" }} />
              </div>
              <div className="balance-legend">
                <span><span className="legend-dot" style={{ background: "#2F7A4F" }} />Positive: {classBalance.pos.toLocaleString()} ({classBalance.posPct.toFixed(1)}%)</span>
                <span><span className="legend-dot" style={{ background: "#8B2635" }} />Negative: {classBalance.neg.toLocaleString()} ({classBalance.negPct.toFixed(1)}%)</span>
              </div>
              <h2 className="section-title" style={{ marginTop: 32 }}>Sample Sentences</h2>
              <div className="sample-quote">"A stunning, emotionally resonant film that lingers long after the credits roll." — Positive</div>
              <div className="sample-quote">"Painfully slow, poorly acted, and a complete waste of two hours." — Negative</div>
            </div>
          </section>
        </>
      )}

      {page === "model" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#7FBFC2", top: -80, left: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><GitBranch size={13} /> Methodology</div>
              <h1 className="page-title">How the model works</h1>
              <p className="lede">A five-stage pipeline turning raw text into a probability of positive sentiment.</p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap">
              <div className="pipeline">
                <div className="pipe-step">
                  <span className="pipe-num">01</span>
                  <div>
                    <div className="pipe-title">Text Preprocessing</div>
                    <div className="pipe-desc">Lowercasing, word-boundary tokenization, and removal of standard English stop words to reduce noise in the feature space.</div>
                    <span className="pipe-tag">regex tokenizer</span>
                  </div>
                </div>
                <div className="pipe-step">
                  <span className="pipe-num">02</span>
                  <div>
                    <div className="pipe-title">Feature Extraction — TF-IDF</div>
                    <div className="pipe-desc">Sentences are converted into sparse numeric vectors using Term Frequency–Inverse Document Frequency weighting over unigrams and bigrams, capped at 2,500 features with sublinear TF scaling and L2 normalization.</div>
                    <span className="pipe-tag">scikit-learn TfidfVectorizer</span>
                  </div>
                </div>
                <div className="pipe-step">
                  <span className="pipe-num">03</span>
                  <div>
                    <div className="pipe-title">Classification — Logistic Regression</div>
                    <div className="pipe-desc">A linear Logistic Regression model is trained on the TF-IDF vectors to predict the probability that a review expresses positive sentiment.</div>
                    <span className="pipe-tag">scikit-learn LogisticRegression</span>
                  </div>
                </div>
                <div className="pipe-step">
                  <span className="pipe-num">04</span>
                  <div>
                    <div className="pipe-title">Evaluation</div>
                    <div className="pipe-desc">The trained model is evaluated on the held-out SST-2 test split using accuracy, precision, recall, F1-score, and a confusion matrix.</div>
                    <span className="pipe-tag">sklearn.metrics</span>
                  </div>
                </div>
                <div className="pipe-step">
                  <span className="pipe-num">05</span>
                  <div>
                    <div className="pipe-title">Deployment</div>
                    <div className="pipe-desc">The learned vocabulary, IDF weights, and model coefficients are exported and re-implemented in JavaScript, so the trained model runs entirely client-side for instant, offline predictions.</div>
                    <span className="pipe-tag">in-browser inference</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "results" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#E8A0AE", top: -80, right: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><BarChart3 size={13} /> Results</div>
              <h1 className="page-title">Model performance</h1>
              <p className="lede">Metrics computed on the SST-2 test split ({MODEL_DATA.meta.testSize.toLocaleString()} sentences), unseen during training.</p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap">
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-value" style={{ color: "#7FBFC2" }}>{(MODEL_DATA.metrics.accuracy * 100).toFixed(1)}%</div><div className="metric-label">Accuracy</div></div>
                <div className="metric-card"><div className="metric-value" style={{ color: "#F2C879" }}>{(MODEL_DATA.metrics.precision * 100).toFixed(1)}%</div><div className="metric-label">Precision</div></div>
                <div className="metric-card"><div className="metric-value" style={{ color: "#9BD6A4" }}>{(MODEL_DATA.metrics.recall * 100).toFixed(1)}%</div><div className="metric-label">Recall</div></div>
                <div className="metric-card"><div className="metric-value" style={{ color: "#E8A0AE" }}>{(MODEL_DATA.metrics.f1 * 100).toFixed(1)}%</div><div className="metric-label">F1-Score</div></div>
              </div>
              <h2 className="section-title">Confusion Matrix</h2>
              <div className="cm-wrap">
                <div className="cm-grid">
                  <div />
                  <div className="cm-label">Pred. Negative</div>
                  <div className="cm-label">Pred. Positive</div>
                  <div className="cm-label">Actual Negative</div>
                  <div className="cm-cell" style={{ background: "#D7ECE1", color: "#1E5B3A" }}>{cm[0][0]}</div>
                  <div className="cm-cell" style={{ background: "#F7E4E4", color: "#8B2635" }}>{cm[0][1]}</div>
                  <div className="cm-label">Actual Positive</div>
                  <div className="cm-cell" style={{ background: "#F7E4E4", color: "#8B2635" }}>{cm[1][0]}</div>
                  <div className="cm-cell" style={{ background: "#D7ECE1", color: "#1E5B3A" }}>{cm[1][1]}</div>
                </div>
                <p className="cm-note">The diagonal cells (green) show correct predictions — {cm[0][0] + cm[1][1]} out of {cmTotal} test sentences were classified correctly.</p>
              </div>
              <div className="limits-box">
                <strong>Limitations:</strong> As a linear bag-of-words model, this classifier does not capture sarcasm or long-range negation. Future work could compare this baseline against a fine-tuned transformer such as DistilBERT trained on the same dataset.
              </div>
            </div>
          </section>
        </>
      )}

      {page === "demo" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#B98900", top: -80, left: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><PlayCircle size={13} /> Live Demo</div>
              <h1 className="page-title">Try the classifier</h1>
              <p className="lede">This runs the actual trained model — the same TF-IDF weights and Logistic Regression coefficients learned from SST-2 — directly in your browser. No server or API call involved.</p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap">
              <div className="demo-shell">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type a sentence to classify, e.g. a movie review or product opinion..."
                />
                <div className="demo-toolbar">
                  <div className="sample-chips">
                    {SAMPLE_TEXTS.map((s, i) => (
                      <span key={i} className="sample-chip" onClick={() => useSample(s)}>Sample {i + 1}</span>
                    ))}
                  </div>
                  <button className="run-btn" onClick={() => runAnalysis()} disabled={analyzing || !text.trim()}>
                    {analyzing ? "Classifying..." : "Classify Sentiment"}
                  </button>
                </div>

                {result && (
                  <div className="result-box">
                    <div className="result-top">
                      <span className="result-label" style={{ color: result.label === "Positive" ? "#2F7A4F" : "#8B2635" }}>{result.label}</span>
                      <span className="result-prob">{(result.probability * 100).toFixed(1)}% probability positive</span>
                    </div>
                    <div className="prob-bar">
                      <div className="prob-fill" style={{ width: `${result.probability * 100}%`, background: result.label === "Positive" ? "#2F7A4F" : "#8B2635" }} />
                    </div>
                    {result.hasSignal ? (
                      <div className="feature-list">
                        {result.topFeatures.map((f, i) => (
                          <span key={i} className="feature-chip" style={{ background: f.weight > 0 ? "#2F7A4F" : "#8B2635" }}>
                            {f.term} {f.weight > 0 ? "+" : ""}{f.weight.toFixed(2)}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="no-signal">No vocabulary terms from the training set were matched in this input; prediction defaults to the model's base rate.</span>
                    )}
                  </div>
                )}
                <div className="demo-note"><CheckCircle2 size={14} /> Runs entirely on-device — works offline, no data leaves your browser.</div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "bulk" && (
        <>
          <div className="hero">
            <div className="hero-blob" style={{ width: 300, height: 300, background: "#9BD6A4", top: -80, right: -60 }} />
            <div className="wrap hero-content">
              <div className="eyebrow"><Layers size={13} /> Bulk Analysis</div>
              <h1 className="page-title">Analyze thousands of comments at once</h1>
              <p className="lede">
                Paste or upload every comment from a post or product page in one go — reviews, tweets, or a Hugging Face
                dataset export — and get an aggregate sentiment report in seconds. Processing happens entirely on-device.
              </p>
            </div>
          </div>
          <section className="page-section">
            <div className="wrap">
              <div className="bulk-shell">
                <div className="bulk-input-row">
                  <label className="file-btn">
                    <input
                      type="file"
                      accept=".txt,.csv"
                      onChange={(e) => handleBulkFile(e.target.files?.[0])}
                    />
                    Upload .txt / .csv
                  </label>
                  {bulkFileName && <span className="file-name">{bulkFileName}</span>}
                </div>
                <textarea
                  className="bulk-textarea"
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder={"Paste one comment per line, or a CSV with a text/review/comment column...\n\ne.g.\nThis product completely changed how I work, love it.\nBroke after two days, very disappointed.\nDecent for the price, does the job."}
                />
                <div className="bulk-hint">
                  Accepts plain text (one comment per line) or CSV with a header containing "text", "review", or "comment".
                  Works with exports from Hugging Face datasets, Kaggle, or scraped review data. Tested up to 30,000 rows.
                </div>

                <div className="bulk-toolbar">
                  <span className="bulk-count">
                    {parseBulkInput(bulkText).length.toLocaleString()} comments detected
                  </span>
                  {!bulkProcessing ? (
                    <button className="run-btn" onClick={runBulkAnalysis} disabled={parseBulkInput(bulkText).length === 0}>
                      Run Bulk Analysis
                    </button>
                  ) : (
                    <button className="btn-cancel" onClick={cancelBulk}>Cancel</button>
                  )}
                </div>

                {bulkProcessing && (
                  <>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${(bulkProgress / bulkTotal) * 100}%` }} />
                    </div>
                    <span className="progress-label">Processing {bulkProgress.toLocaleString()} / {bulkTotal.toLocaleString()}</span>
                  </>
                )}

                {bulkResults && (
                  <div className="bulk-summary">
                    <h2 className="section-title">Aggregate Result</h2>
                    <div className="bulk-metric-grid">
                      <div className="bulk-metric"><div className="bulk-metric-value" style={{ color: "#7FBFC2" }}>{bulkResults.total.toLocaleString()}</div><div className="bulk-metric-label">Total Comments</div></div>
                      <div className="bulk-metric"><div className="bulk-metric-value" style={{ color: "#9BD6A4" }}>{((bulkResults.positive / bulkResults.total) * 100).toFixed(1)}%</div><div className="bulk-metric-label">Positive</div></div>
                      <div className="bulk-metric"><div className="bulk-metric-value" style={{ color: "#E8A0AE" }}>{((bulkResults.negative / bulkResults.total) * 100).toFixed(1)}%</div><div className="bulk-metric-label">Negative</div></div>
                      <div className="bulk-metric"><div className="bulk-metric-value" style={{ color: "#F2C879" }}>{(bulkResults.avgProbability * 100).toFixed(1)}%</div><div className="bulk-metric-label">Avg. Positivity</div></div>
                    </div>
                    <div className="bulk-dist-bar">
                      <div style={{ width: `${(bulkResults.positive / bulkResults.total) * 100}%`, background: "#2F7A4F" }} />
                      <div style={{ width: `${(bulkResults.negative / bulkResults.total) * 100}%`, background: "#8B2635" }} />
                    </div>
                    <div className="balance-legend">
                      <span><span className="legend-dot" style={{ background: "#2F7A4F" }} />Positive: {bulkResults.positive.toLocaleString()}</span>
                      <span><span className="legend-dot" style={{ background: "#8B2635" }} />Negative: {bulkResults.negative.toLocaleString()}</span>
                    </div>

                    <div className="example-cols">
                      <div>
                        <div className="example-col-title">Most Positive</div>
                        {bulkResults.topPositive.map((r, i) => (
                          <div className="example-item" key={i}>
                            {r.text.length > 140 ? r.text.slice(0, 140) + "…" : r.text}
                            <span className="example-prob">{(r.probability * 100).toFixed(1)}% positive</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="example-col-title">Most Negative</div>
                        {bulkResults.topNegative.map((r, i) => (
                          <div className="example-item" key={i}>
                            {r.text.length > 140 ? r.text.slice(0, 140) + "…" : r.text}
                            <span className="example-prob">{(r.probability * 100).toFixed(1)}% positive</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="btn-secondary btn-export" onClick={downloadBulkCsv}>Download Full Results (CSV)</button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer go={go} />
    </div>
  );
}
