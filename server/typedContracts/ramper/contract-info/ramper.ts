export const ContractAbi = `{"source":{"hash":"0x332e57f88096153b0b2abb76fac4c2318894608ebf0e37b30598105d69d8e5d0","language":"ink! 4.3.0","compiler":"rustc 1.69.0","build_info":{"build_mode":"Debug","cargo_contract_version":"2.2.1","rust_toolchain":"stable-aarch64-apple-darwin","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"ramper","version":"0.1.0","authors":["Carlos Rodríguez <juminstock@gmail.com>"]},"spec":{"constructors":[{"args":[{"label":"new_var","type":{"displayName":["bool"],"type":0}}],"default":false,"docs":[],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0x9bae9d5e"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":5},"balance":{"displayName":["Balance"],"type":8},"blockNumber":{"displayName":["BlockNumber"],"type":11},"chainExtension":{"displayName":["ChainExtension"],"type":12},"hash":{"displayName":["Hash"],"type":9},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":10}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":3},"messages":[{"args":[],"default":false,"docs":[],"label":"flip","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":1},"selector":"0x633aa551"},{"args":[],"default":false,"docs":[],"label":"get","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x2f865bd9"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"var"}],"name":"RamperVariables"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"primitive":"bool"}}},{"id":1,"type":{"def":{"variant":{"variants":[{"fields":[{"type":2}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":2},{"name":"E","type":3}],"path":["Result"]}},{"id":2,"type":{"def":{"tuple":[]}}},{"id":3,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":3}],"path":["Result"]}},{"id":5,"type":{"def":{"composite":{"fields":[{"type":6,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":6,"type":{"def":{"array":{"len":32,"type":7}}}},{"id":7,"type":{"def":{"primitive":"u8"}}},{"id":8,"type":{"def":{"primitive":"u128"}}},{"id":9,"type":{"def":{"composite":{"fields":[{"type":6,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":10,"type":{"def":{"primitive":"u64"}}},{"id":11,"type":{"def":{"primitive":"u32"}}},{"id":12,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;
export const ContractFile = `{"source":{"hash":"0x332e57f88096153b0b2abb76fac4c2318894608ebf0e37b30598105d69d8e5d0","language":"ink! 4.3.0","compiler":"rustc 1.69.0","wasm":"0x0061736d0100000001450c60027f7f017f60037f7f7f017f60027f7f0060037f7f7f0060017f0060047f7f7f7f017f60000060047f7f7f7f0060017f017f60017f017e60057f7f7f7f7f006000017f028a0107057365616c310b6765745f73746f726167650005057365616c301176616c75655f7472616e736665727265640002057365616c3005696e7075740002057365616c300d64656275675f6d6573736167650000057365616c320b7365745f73746f726167650005057365616c300b7365616c5f72657475726e000303656e76066d656d6f7279020102100335340102030b080304000208010204030202060600010103000300070204060202000400040900000a0507050000030a01000000000704050170010f0f0608017f01418080040b0711020463616c6c0016066465706c6f7900170914010041010b0e0d30253827313637261a1c1e35290a9b43342b01017f037f2002200346047f200005200020036a200120036a2d00003a0000200341016a21030c010b0b0b2601017f230041106b22022400200220003a000f20012002410f6a41011008200241106a24000b5c01037f02402000280208220420026a220320044f04402003200028020422054b0d01200028020020046a200320046b2001200241a098041033200020033602080f0b41c09604411c41809804101d000b2003200541909804100b000b5502027f027e230041206b22002400200041106a22014200370300200042003703082000411036021c200041086a2000411c6a10012001290300210220002903082103200041206a2400410541042002200384501b0b1b002000418180014f044020004180800141e88104100b000b20000b7501017f230041306b220324002003200136020420032000360200200341146a41023602002003411c6a41023602002003412c6a4103360200200341d08f0436021020034100360208200341033602242003200341206a3602182003200341046a36022820032003360220200341086a2002100e000b5201017f230041206b220124002001410c6a4101360200200141146a4101360200200141b49504360208200141003602002001410136021c200120003602182001200141186a360210200141fc8204100e000b910101017f230041306b22022400200241146a41013602002002411c6a4101360200200241b495043602102002410036020820024102360224200220002d0000410274220041f89a046a28020036022c20022000418c9b046a280200360228200141046a28020021002002200241206a3602182002200241286a36022020012802002000200241086a1034200241306a24000b3c01017f230041206b22022400200241013a00182002200136021420022000360210200241908b0436020c200241b49604360208200241086a1028000b4001017f230041106b22012400200141003a000f20002001410f6a41011010047f4102054101410220012d000f22004101461b410020001b0b200141106a24000b6001047f230041106b22032400200028020422042002492205450440200341086a41002002200028020022061039200120022003280208200328020c41e89a04103320032002200420061039200020032903003702000b200341106a240020050b3f01017f230041106b22022400200242808001370204200241a89b0436020020022001047f20024101101541010541000b101520002002280208100a1014000bae0102057f017e230041306b2201240020014100360218200142808001370224200141a89b043602202001410036021c200141206a22022001411c6a4104100820012001290320370310200141086a200141106a220320012802281013200128020c2104200128020820012903102106200141003602282001200637032020002002100720012001290320370310200120032001280228101320042001280200200128020410041a200141306a24000b4501017f2002200128020422034b044041dc9604412341c09804101d000b2001200320026b36020420012001280200220120026a36020020002002360204200020013602000b0d00200041a89b0420011005000ba10101027f20002802082202200028020422034904402000200241016a360208200028020020026a20013a00000f0b230041306b220024002000200336020420002002360200200041146a41023602002000411c6a41023602002000412c6a4103360200200041e48a0436021020004100360208200041033602242000200041206a360218200020003602282000200041046a360220200041086a41b09804100e000baf0501077f230041406a22002400024002400240024002400240100941ff0171410546044020004180800136022041a89b04200041206a100220002802202201418180014f0d0120002001360224200041a89b0436022020004100360210200041206a200041106a410410100d0520002802102201411876210220014110762104200141087621030240200141ff01712201412f470440200141e30047200341ff0171413a4772200441ff017141a50147720d0741012101200241d100460d010c070b200341ff017141860147200441ff017141db0047720d0641002101200241d901470d060b20004100360218200042808001370224200041a89b043602202000410036023c200041206a22032000413c6a4104100820002000290320370310200041086a200041106a20002802281013200028020c210520002802082000280210210220002000280214220436022020052002200310002103200420002802202205490d02024002400240410c20032003410c4f1b0e0402000001000b2000412c6a4101360200200041346a4100360200200041948204360228200041b4960436023020004100360220200041206a419c8204100e000b2000412c6a4101360200200041346a4100360200200041d483043602280c070b2000200536022420002002360220200041206a100f41ff017122024102460d042001450d032002451012410041001011000b200041043a0020200041206a100c000b20014180800141ec8004100b000b2005200441ec8004100b000b230041106b22002400200042808001370204200041a89b0436020020004100101520024100472000100741002000280208100a1014000b2000412c6a4101360200200041346a4100360200200041b483043602280c010b410141011011000b200041b4960436023020004100360220200041206a41fc8204100e000bdb0101027f230041106b2200240002400240100941ff01712201410546044020004180800136020041a89b042000100220002802002201418180014f0d0120002001360204200041a89b043602002000410036020802402000200041086a410410100d002000280208419bddf6f405470d002000100f41ff017122004102470d030b410141011011000b200020013a00002000100c000b20014180800141ec8004100b000b20001012230041106b22002400200042808001370204200041a89b0436020020004100101520004100101541002000280208100a1014000b5501017f230041206b2202240020022000360204200241186a200141106a290200370300200241106a200141086a29020037030020022001290200370308200241046a41dc8304200241086a1019200241206a24000bee0301057f230041406a22032400200341033a003820034280808080800437033020034100360228200341003602202003200136021c20032000360218027f0240024020022802002201450440200241146a28020022004103742105200041ffffffff017121072002280210210441002101034020012005460d02200228020820016a220041046a28020022060440200328021820002802002006200328021c28020c1101000d040b200141086a2101200428020020042802042106200441086a2104200341186a2006110000450d000b0c020b200228020422074105742100200741ffffff3f71210703402000450d01200228020820046a220541046a28020022060440200328021820052802002006200328021c28020c1101000d030b20032001411c6a2d00003a00382003200141146a290200370330200341106a200228021022052001410c6a103220032003290310370320200341086a2005200141046a103220032003290308370328200441086a2104200041206b210020012802002106200141206a2101200520064103746a2205280200200341186a2005280204110000450d000b0c010b2002410c6a28020020074b04402003280218200228020820074103746a22002802002000280204200328021c28020c1101000d010b41000c010b41010b200341406b24000b0f00200028020020012002101b41000b7701027f230041106b2204240020022000280200200028020822036b4b0440200441086a200020032002101f2004280208200428020c1020200028020821030b200028020420036a2001200210061a2003200220036a22014b044041808404411c41e08904101d000b20002001360208200441106a24000bdd0201037f230041106b220224000240024002400240200028020022002002410c6a027f0240024020014180014f04402002410036020c2001418010490d012001418080044f0d0220022001413f71418001723a000e20022001410c7641e001723a000c20022001410676413f71418001723a000d41030c030b200028020822032000280200460d030c040b20022001413f71418001723a000d2002200141067641c001723a000c41020c010b20022001413f71418001723a000f20022001410676413f71418001723a000e20022001410c76413f71418001723a000d2002200141127641077141f001723a000c41040b101b0c020b230041106b22042400200441086a200020034101101f2004280208200428020c1020200441106a2400200028020821030b200028020420036a20013a0000200341016a2201450d01200020013602080b200241106a240041000f0b41808404411c41d08904101d000b5001017f230041206b220324002003410c6a4101360200200341146a4100360200200341b49604360210200341003602002003200136021c200320003602182003200341186a36020820032002100e000b4a01017f230041206b220224002000280200200241186a200141106a290200370300200241106a200141086a29020037030020022001290200370308200241086a1018200241206a24000bac0401067f230041206b2204240002402000027f4100200220036a22032002490d001a2001280200220220026a22062002490d0141082006200320032006491b2203200341084d1b2203417f73411f7621050240200204402004410136021820042002360214200420012802043602100c010b200441003602180b200441106a2107230041106b220624002004027f0240027f0240200504400240200341004e044020072802080d012006200310232006280204210220062802000c040b0c040b20072802042209450440200641086a20031023200628020c210220062802080c030b20032102410041a09b04280200220520036a22082005490d021a2007280200210741a49b042802002008490440200341ffff036a220841107640002202417f46200241ffff0371200247720d022002411074220520084180807c716a22022005490d0241a49b042002360200200321024100200320056a22082005490d031a0b41a09b04200836020041002005450d021a20052007200910060c020b200420033602040c020b2003210241000b2205044020042005360204200441086a200236020041000c020b20042003360204200441086a410136020041010c010b200441086a410036020041010b360200200641106a240020042802004504402004280204210220012003360200200120023602044181808080780c010b20042802042103200441086a2802000b36020420002003360200200441206a24000f0b41a08404412141c48504101d000b1f00024020014181808080784704402001450d0120001021000b0f0b1022000b900101017f230041306b220124002001200036020c2001411c6a4102360200200141246a4101360200200141908704360218200141003602102001410336022c2001200141286a36022020012001410c6a360228230041206b22002400200041003a0018200041a087043602142000200141106a360210200041908b0436020c200041b49604360208200041086a1028000b4601017f230041206b22002400200041146a41013602002000411c6a4100360200200041e88504360210200041b4960436021820004100360208200041086a41f08504100e000ba10101027f027f410041a09b04280200220220016a22032002490d001a024041a49b042802002003490440200141ffff036a22032001490d01200341107640002202417f46200241ffff0371200247720d012002411074220220034180807c716a22032002490d0141a49b0420033602004100200120026a22032002490d021a0b41a09b04200336020020020c010b41000b210320002001360204200020033602000b5301027f230041106b2202240002402001450440410121030c010b200141004e0440200241086a20011023200228020822030d0120011021000b1022000b2000200336020420002001360200200241106a24000bd806020b7f027e230041406a2203240020002802002202ad210d0240024002400240024002400240024020024190ce004f044041272100200d210e0240034020004104490d01200341196a20006a220241046b200e200e4290ce0080220d4290ce007e7da7220441ffff037141e4006e220641017441c38c046a2f00003b0000200241026b2004200641e4006c6b41ffff037141017441c38c046a2f00003b0000200041046b2100200e42ffc1d72f56200d210e0d000b200da7220241e3004d0d0320004102490d090c020b0c080b41272100200241e3004b0d002002410a490d040c020b200041026b2200200341196a6a200da72202200241ffff037141e4006e220241e4006c6b41ffff037141017441c38c046a2f00003b00000b2002410a490d01200041024f0d000c050b200041026b2200200341196a6a200241017441c38c046a2f00003b00000c020b2000450d030b200041016b2200200341196a6a200241306a3a00000b200041274b0d01412820006b412720006b22062001280218220541017122071b2102410021042005410471044041b496042104200241b4960441b49604102a20026a22024b0d010b412b418080c40020071b2107200341196a20006a2108024020012802084504404101210020012802002202200141046a280200220120072004102d0d01200220082006200128020c11010021000c010b024020022001410c6a28020022094904402005410871450d01200128021c210b2001413036021c20012d0020210c41012100200141013a002020012802002205200141046a280200220a20072004102d0d02200341106a2001200920026b4101102e20032802142202418080c400460d022003280210200520082006200a28020c1101000d0220022005200a102f0d022001200c3a00202001200b36021c410021000c020b4101210020012802002202200141046a280200220120072004102d0d01200220082006200128020c11010021000c010b41012100200341086a2001200920026b4101102e200328020c2205418080c400460d00200328020820012802002202200141046a280200220120072004102d0d00200220082006200128020c1101000d00200520022001102f21000b200341406b240020000f0b41f08904411c41fc8e04101d000b41908a044121419c9504101d000b0300010b0e0020002802001a03400c000b000baa05020a7f017e230041406a220124002001200036020c2001412c6a4102360200200141346a4101360200200141809704360228200141003602202001410436023c2001200141386a36023020012001410c6a360238200141106a210641002100230041306b22022400200141206a220441146a2802002107200428020821050240024002400240200241086a027f024002400240200241106a027f024002402004410c6a28020022080e020001040b20070d0241b49604210341000c010b20070d022005280200210320052802040b22001024200228021021042006200228021422053602042006200436020020052003200010061a200620003602080c040b200428021021090c010b200541046a21032008410374210a2004280210210903402000200020032802006a22004b0d04200341086a2103200a41086b220a0d000b20002007450d011a2000410f4b0d0041002005280204450d011a0b200020006a22034100200020034d1b0b10242002290308210b200641003602082006200b3702002002200736022c200220093602282002200836022420022005360220200220042902003703182006200241186a10180d020b200241306a24000c020b41808404411c418c9504101d000b230041406a220024002000413336020c200041b08704360208200041c484043602142000200241186a360210200041246a41023602002000412c6a41023602002000413c6a4106360200200041c48b0436022020004100360218200041023602342000200041306a3602282000200041106a3602382000200041086a360230200041186a41d08804100e000b2001280214210020012802182101024041a89b052d000045044041a99b052d00004101710d010b410c20002001100322002000410c4f1b410947044041a89b0541013a00000b41a99b0541013a00000b000b0d0042c1ae9c85fb8cfea0aa7f0ba704010a7f230041106b2203240002400240200020016b22024110490d002002200141036a417c7120016b220049200041044b720d00200220006b22044104490d0020012000102b2206200020016a22082004417c716a2004410371102b6a220220064f0440200441027621050240024003402005450d0520032008200541c0012005200541c0014f1b41d49004102c200328020c21052003280208210820032003280200200328020422002000417c7141c09204102c200328020c210920032802082107024020032802042200450440410021010c010b2003280200220420004102746a210a4100210103402004220641106a2104410021000240034020012001200020066a280200220b417f73410776200b410676724181828408716a22014d0440200041046a22004110470d010c020b0b41f08904411c41d09204101d000b2004200a470d000b0b20022002200141087641ff81fc0771200141ff81fc07716a418180046c4110766a22024b0d012009450d000b200941027421004100210103402001200120072802002204417f734107762004410676724181828408716a22014b0d02200741046a2107200041046b22000d000b20022002200141087641ff81fc0771200141ff81fc07716a418180046c4110766a22024d0d0441f08904411c41809304101d000b41f08904411c41e09204101d000b41f08904411c41f09204101d000b41f08904411c41b09204101d000b20012002102b21020b200341106a240020020b4601017f200145044041000f0b024003402002200220002c000041bf7f4a6a22024b0d01200041016a2100200141016b22010d000b20020f0b41f08904411c418c9504101d000b3e00200220034f044020002003360204200020013602002000410c6a200220036b3602002000200120034102746a3602080f0b41dc960441232004101d000b39000240027f2002418080c40047044041012000200220012802101100000d011a0b20030d0141000b0f0b200020034100200128020c1101000bae0101027f20022104024002400240200320012d0020220320034103461b41ff0171220341016b0e03010001020b200241016a2203044020034101762104200241017621030c020b41f08904411c418c8f04101d000b41002104200221030b200341016a2102200128021c2103200128020421052001280200210102400340200241016b2202450d01200120032005280210110000450d000b418080c40021030b20002003360204200020043602000b3201017f027f0340200020002004460d011a200441016a2104200220012003280210110000450d000b200441016b0b2000490bea04010b7f230041106b2209240020002802042104200028020021030240024002402001280208220b410147200128021022024101477145044020024101470d02200320046a210c200141146a28020041016a210a410021022003210003402000200c460d03027f024020002c0000220641004e0440200041016a2105200641ff017121070c010b20002d0001413f7121052006411f7121072006415f4d044020074106742005722107200041026a21050c010b20002d0002413f7120054106747221082006417049044020082007410c74722107200041036a21050c010b200041046a210520022106418080c4002007411274418080f0007120002d0003413f71200841067472722207418080c400460d011a0b2002200520006b6a22062002490d0320070b2108200a41016b220a044020052100200621022008418080c400470d010c040b0b2008418080c400460d02024002402002450d00200220044f04404100210020022004460d010c020b41002100200220036a2c00004140480d010b200321000b2002200420001b21042000200320001b21030c020b200128020020032004200128020428020c11010021000c020b41f08904411c41809404101d000b200b450440200128020020032004200128020428020c11010021000c010b2001410c6a2802002200200320046a2003102a22024b0440200941086a2001200020026b4100102e41012100200928020c2202418080c400460d0120092802082001280200220520032004200141046a280200220128020c1101000d01200220052001102f21000c010b200128020020032004200128020428020c11010021000b200941106a240020000b140020002802002001200028020428020c1100000b5501027f0240027f02400240200228020041016b0e020103000b200241046a0c010b200120022802044103746a22012802044105470d0120012802000b2802002104410121030b20002004360204200020033602000b8501002001200346044020002002200110061a0f0b230041306b220024002000200336020420002001360200200041146a41033602002000411c6a41023602002000412c6a4103360200200041a4910436021020004100360208200041033602242000200041206a360218200020003602282000200041046a360220200041086a2004100e000b4901017f230041206b22032400200341186a200241106a290200370300200341106a200241086a2902003703002003200229020037030820002001200341086a1019200341206a24000b1800200128020041ac95044105200128020428020c1101000b5801027f230041206b22022400200128020421032001280200200241186a2000280200220041106a290200370300200241106a200041086a290200370300200220002902003703082003200241086a1019200241206a24000b0b002000280200200110300b990301037f230041406a22022400200028020021034101210002402001280200220441a08b04410c200141046a280200220128020c1101000d0002402003280208220004402002200036020c200241346a4102360200410121002002413c6a4101360200200241b08b0436023020024100360228200241073602142002200241106a36023820022002410c6a36021020042001200241286a1034450d010c020b20032802002200200328020428020c11090042c8b5e0cfca86dbd3897f520d002002200036020c200241346a4102360200410121002002413c6a4101360200200241b08b0436023020024100360228200241083602142002200241106a36023820022002410c6a36021020042001200241286a10340d010b200328020c21002002411c6a4103360200200241246a41033602002002413c6a4103360200200241346a4103360200200241f88a043602182002410036021020022000410c6a3602382002200041086a3602302002410236022c200220003602282002200241286a36022020042001200241106a103421000b200241406b240020000b2c00200120024d04402000200220016b3602042000200120036a3602000f0b41e09904412141c49904101d000b0b961b0400418080040bf1032f55736572732f6a756d696e73746f636b2f2e636172676f2f72656769737472792f7372632f6769746875622e636f6d2d316563633632393964623965633832332f696e6b5f656e762d342e332e302f7372632f656e67696e652f6f6e5f636861696e2f6578742e72730000000001006a000000e4000000140000002f55736572732f6a756d696e73746f636b2f2e636172676f2f72656769737472792f7372632f6769746875622e636f6d2d316563633632393964623965633832332f696e6b5f656e762d342e332e302f7372632f656e67696e652f6f6e5f636861696e2f696d706c732e72737c0001006c0000002401000023000000656e636f756e746572656420756e6578706563746564206572726f72f80001001c0000007c0001006c000000ed000000170000002f55736572732f6a756d696e73746f636b2f446f63756d656e74732f70726f6a656374732f696e6b2d7061792f7365727665722f636f6e7472616374732f72616d7065722f7372632f6c69622e7273002c0101004f0000000600000005000000636f756c64206e6f742070726f7065726c79206465636f64652073746f7261676520656e747279008c0101002700000073746f7261676520656e7472792077617320656d70747900bc010100170000000900000004000000040000000a0000000b0000000c00418084040bb412617474656d707420746f206164642077697468206f766572666c6f7700000000617474656d707420746f206d756c7469706c792077697468206f766572666c6f770000000900000000000000010000000d0000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f616c6c6f632f7372632f7261775f7665632e727354020100700000008f0100001c0000006361706163697479206f766572666c6f77000000d40201001100000054020100700000000d020000050000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f616c6c6f632f7372632f616c6c6f632e72736d656d6f727920616c6c6f636174696f6e206f6620206279746573206661696c65646e03010015000000830301000d000000000301006e0000009f0100000d0000006120666f726d617474696e6720747261697420696d706c656d656e746174696f6e2072657475726e656420616e206572726f722f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f616c6c6f632f7372632f666d742e727300e30301006c00000064020000200000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f616c6c6f632f7372632f7665632f6d6f642e72736004010070000000350700000d0000006004010070000000a307000009000000617474656d707420746f206164642077697468206f766572666c6f7700000000617474656d707420746f2073756274726163742077697468206f766572666c6f7729696e646578206f7574206f6620626f756e64733a20746865206c656e20697320206275742074686520696e64657820697320320501002000000052050100120000003a000000340b010000000000740501000100000074050100010000000900000000000000010000000e00000070616e69636b65642061742027272c20ac05010001000000ad050100030000003a200000340b010000000000c0050100020000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f666d742f6e756d2e727330303031303230333034303530363037303830393130313131323133313431353136313731383139323032313232323332343235323632373238323933303331333233333334333533363337333833393430343134323433343434353436343734383439353035313532353335343535353635373538353936303631363236333634363536363637363836393730373137323733373437353736373737383739383038313832383338343835383638373838383939303931393239333934393539363937393839392f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f666d742f6d6f642e727300000b0701006f000000750500000d0000000b0701006f0000000506000038000000206f7574206f662072616e676520666f7220736c696365206f66206c656e6774682072616e676520656e6420696e646578200000be070100100000009c070100220000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f736c6963652f697465722e72730000e007010072000000c005000025000000736f7572636520736c696365206c656e67746820282920646f6573206e6f74206d617463682064657374696e6174696f6e20736c696365206c656e67746820286408010015000000790801002b00000031050100010000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f7374722f636f756e742e7273000000bc080100710000004700000015000000bc080100710000004f00000032000000bc080100710000005400000011000000bc080100710000005a00000009000000bc080100710000006400000011000000bc08010071000000660000000d0000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f7374722f697465722e7273900901007000000091000000110000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f697465722f7472616974732f616363756d2e7273000000100a0100790000009500000001000000d40501006f000000cd010000050000004572726f72000000340b0100000000007061696420616e20756e70617961626c65206d657373616765636f756c64206e6f74207265616420696e707574756e61626c6520746f206465636f646520696e707574656e636f756e746572656420756e6b6e6f776e2073656c6563746f72756e61626c6520746f206465636f64652073656c6563746f720041c096040b9103617474656d707420746f206164642077697468206f766572666c6f77617373657274696f6e206661696c65643a206d6964203c3d2073656c662e6c656e28290a340b0100000000007f0b0100010000002f55736572732f6a756d696e73746f636b2f2e636172676f2f72656769737472792f7372632f6769746875622e636f6d2d316563633632393964623965633832332f696e6b5f656e762d342e332e302f7372632f656e67696e652f6f6e5f636861696e2f6275666665722e7273000000900b01006d0000005a0000001c000000900b01006d0000005a00000009000000900b01006d0000005a00000031000000900b01006d0000006500000009000000900b01006d0000008d000000210000002f55736572732f6a756d696e73746f636b2f2e7275737475702f746f6f6c636861696e732f312e36392d616172636836342d6170706c652d64617277696e2f6c69622f727573746c69622f7372632f727573742f6c6962726172792f636f72652f7372632f736c6963652f696e6465782e727300500c01007300000082010000470041e099040bbf01617474656d707420746f2073756274726163742077697468206f766572666c6f772f55736572732f6a756d696e73746f636b2f2e636172676f2f72656769737472792f7372632f6769746875622e636f6d2d316563633632393964623965633832332f7061726974792d7363616c652d636f6465632d332e362e392f7372632f636f6465632e7273010d010067000000770000000e000000190000001c0000001600000014000000190000001b0b0100ff0a0100e90a0100d50a0100bc0a01","build_info":{"build_mode":"Debug","cargo_contract_version":"2.2.1","rust_toolchain":"stable-aarch64-apple-darwin","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"ramper","version":"0.1.0","authors":["Carlos Rodríguez <juminstock@gmail.com>"]},"spec":{"constructors":[{"args":[{"label":"new_var","type":{"displayName":["bool"],"type":0}}],"default":false,"docs":[],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0x9bae9d5e"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":5},"balance":{"displayName":["Balance"],"type":8},"blockNumber":{"displayName":["BlockNumber"],"type":11},"chainExtension":{"displayName":["ChainExtension"],"type":12},"hash":{"displayName":["Hash"],"type":9},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":10}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":3},"messages":[{"args":[],"default":false,"docs":[],"label":"flip","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":1},"selector":"0x633aa551"},{"args":[],"default":false,"docs":[],"label":"get","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x2f865bd9"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"var"}],"name":"RamperVariables"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"primitive":"bool"}}},{"id":1,"type":{"def":{"variant":{"variants":[{"fields":[{"type":2}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":2},{"name":"E","type":3}],"path":["Result"]}},{"id":2,"type":{"def":{"tuple":[]}}},{"id":3,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":3}],"path":["Result"]}},{"id":5,"type":{"def":{"composite":{"fields":[{"type":6,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":6,"type":{"def":{"array":{"len":32,"type":7}}}},{"id":7,"type":{"def":{"primitive":"u8"}}},{"id":8,"type":{"def":{"primitive":"u128"}}},{"id":9,"type":{"def":{"composite":{"fields":[{"type":6,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":10,"type":{"def":{"primitive":"u64"}}},{"id":11,"type":{"def":{"primitive":"u32"}}},{"id":12,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;