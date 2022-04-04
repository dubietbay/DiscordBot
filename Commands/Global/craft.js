const Recipe = [
    { From: `Armor Smith`,Category: `Jingasa`, NameCall: `tetsujingasa`, Name: `Tetsu Jingasa`, Materials: [`Flax`,`Hagane Steel Bar`,`Copper Bar`], MaterialQuantity: [5,4,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Jingasa`, NameCall: `bajojingasa`, Name: `Bajo Jingasa`, Materials: [`Flax`,`Hagane Steel Bar`,`Copper Bar`], MaterialQuantity: [5,5,2], Quantity:1 },
    { From: `Armor Smith`,Category: `Kusari`, NameCall: `kusarigusoku`, Name: `Kusari Gusoku`, Materials: [`Silk`,`Shigane Steel Bar`,`Iron Bar`,`Kawagne Steel Bar`,`Cloth`], MaterialQuantity: [2,3,3,2,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `hotokedou`, Name: `Hotoke Dou`, Materials: [`Flax`,`Hagane Steel Bar`], MaterialQuantity: [15,8], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `tatamidou`, Name: `Tatami Dou`, Materials: [`Nettle Weave`,`Hagane Steel Bar`,`Bronze Bar`,`Linen`], MaterialQuantity: [2,8,4,2], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `kikkodou`, Name: `Kikko Dou`, Materials: [`Nettle Weave`,`Hagane Steel Bar`,`Iron Bar`,`Brass Bar`], MaterialQuantity: [3,6,6,4], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `mogamidou`, Name: `Mogami Dou`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [3,3,3,5,2], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `do-maru`, Name: `Do-maru`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [3,3,3,5,2], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `gyorindou`, Name: `Gyorin Dou`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [4,5,2,3,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `okegawadou`, Name: `Okegawa Dou`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [4,5,2,3,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Dou`, NameCall: `o-yoroi`, Name: `O-yoroi`, Materials: [`Silk`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Gold Bar`], MaterialQuantity: [4,2,3,5,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `kosode`, Name: `Ko Sode`, Materials: [`Nettle Weave`,`Hagane Steel Bar`,`Bronze Bar`,`Linen`], MaterialQuantity: [1,2,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `mogamisode`, Name: `Mogami Sode`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `do-marusode`, Name: `Do-maru Sode`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `gyorinsode`, Name: `Gyorin Sode`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `tsubosode`, Name: `Tsubo Sode`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Sode`, NameCall: `o-sode`, Name: `O-Sode`, Materials: [`Silk`,`Kawagne Steel Bar`,`Shigane Steel Bar`,`Iron Bar`,`Gold Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kote`, NameCall: `tsutsukote`, Name: `Tsutsu Kote`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kote`, NameCall: `shinokote`, Name: `Shino Kote`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kote`, NameCall: `omoikote`, Name: `Omoi Kote`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Haidate`, NameCall: `tatamihaidate`, Name: `Tatami Haidate`, Materials: [`Nettle Weave`,`Hagane Steel Bar`,`Bronze Bar`,`Linen`], MaterialQuantity: [1,2,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Haidate`, NameCall: `iyohaidate`, Name: `Iyo Haidate`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Haidate`, NameCall: `do-maruhaidate`, Name: `Do-maru Haidate`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Haidate`, NameCall: `gyorinhaidate`, Name: `Gyorin Haidate`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Haidate`, NameCall: `karutahaidate`, Name: `Karuta Haidate`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Suneate`, NameCall: `tsutsusuneate`, Name: `Tsutsu Suneate`, Materials: [`Cloth`,`Kawagne Steel Bar`,`Iron Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Suneate`, NameCall: `shinosuneate`, Name: `Shino Suneate`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Suneate`, NameCall: `omoisuneate`, Name: `Omoi Suneate`, Materials: [`Cloth`,`Shigane Steel Bar`,`Silver Bar`,`Kawagne Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [1,1,1,1,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `tatamikabuto`, Name: `Tatami Kabuto`, Materials: [`Linen`,`Bronze Bar`,`Hagane Steel Bar`], MaterialQuantity: [2,4,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `zunarikabuto`, Name: `Zunari Kabuto`, Materials: [`Cloth`,`Iron Bar`,`Kawagne Steel Bar`,`Shigane Steel Bar`], MaterialQuantity: [2,2,1,2], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `samekabuto`, Name: `Same Kabuto`, Materials: [`Cloth`,`Iron Bar`,`Kawagne Steel Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [2,3,2,3,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `hishiodoshikabuto`, Name: `Hishiodoshi Kabuto`, Materials: [`Cloth`,`Iron Bar`,`Kawagne Steel Bar`,`Shigane Steel Bar`,`Higashi Steel Bar`], MaterialQuantity: [2,3,2,3,1], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `genpeikabuto`, Name: `Genpei Kabuto`, Materials: [`Silk`,`Gold Bar`,`Kawagne Steel Bar`,`Shigane Steel Bar`,`Iron Bar`], MaterialQuantity: [2,3,2,3,3], Quantity:1 },
    { From: `Armor Smith`,Category: `Kabuto`, NameCall: `sujibachikabuto`, Name: `Sujibachi Kabuto`, Materials: [`Cloth`,`Iron Bar`,`Kawagne Steel Bar`,`Shigane Steel Bar`,`Silk`], MaterialQuantity: [2,2,1,2,1], Quantity:1 },
    { From: `Clan Artisan`,Category: `Fittings`, NameCall: `clanfittings`, Name: `Clan Fittings`, Materials: [`Red Dye`,`Blue Dye`,`Yellow Dye`,`Hagane Steel Bar`,`Pine Log`,`Flax`], MaterialQuantity: [1,1,1,1,1,2], Quantity:1 },
    { From: `Clan Artisan`,Category: `Fittings`, NameCall: `factionfittings`, Name: `Faction Fittings`, Materials: [`Red Dye`,`Blue Dye`,`Yellow Dye`,`Hagane Steel Bar`,`Pine Log`,`Flax`], MaterialQuantity: [1,1,1,1,1,2], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Fabrics`, NameCall: `nettleweave`, Name: `Nettle Weave`, Materials: [`Ramie`], MaterialQuantity: [3], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Fabrics`, NameCall: `cloth`, Name: `Cloth`, Materials: [`Cotton`], MaterialQuantity: [5], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Boshi`, NameCall: `hachimaki`, Name: `Hachimaki`, Materials: [`Linen`,`Cloth`,`Standard Fittings`], MaterialQuantity: [3,5,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Boshi`, NameCall: `eboshi`, Name: `Eboshi`, Materials: [`Linen`,`Cloth`,`Standard Fittings`], MaterialQuantity: [4,8,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Boshi`, NameCall: `zukin`, Name: `Zukin`, Materials: [`Cloth`,`Nettle Weave`,`Silk`], MaterialQuantity: [5,2,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `whiteshirt`, Name: `White Shirt`, Materials: [`Cloth`], MaterialQuantity: [3], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `blackshirt`, Name: `Black Shirt`, Materials: [`Cloth`,`Black Dye`], MaterialQuantity: [3,2], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `greyshirt`, Name: `Grey Shirt`, Materials: [`Cloth`,`Black Dye`,`White Dye`], MaterialQuantity: [8,1,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `brownshirt`, Name: `Brown Shirt`, Materials: [`Linen`], MaterialQuantity: [4], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `tanshirt`, Name: `Tan Shirt`, Materials: [`Linen`], MaterialQuantity: [4], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Shirts`, NameCall: `clanshirt`, Name: `Clan Shirt`, Materials: [`Cloth`,`Clan Fittings`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `whitepants`, Name: `White Pants`, Materials: [`Cloth`], MaterialQuantity: [3], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `blackpants`, Name: `Black Pants`, Materials: [`Cloth`,`Black Dye`], MaterialQuantity: [3,2], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `greypants`, Name: `Grey Pants`, Materials: [`Cloth`,`Black Dye`,`White Dye`], MaterialQuantity: [8,1,1], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `brownpants`, Name: `Brown Pants`, Materials: [`Linen`], MaterialQuantity: [4], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `tanpants`, Name: `Tan Pants`, Materials: [`Linen`], MaterialQuantity: [4], Quantity:1 },
    { From: `Fabric Weaver`,Category: `Pants`, NameCall: `clanpants`, Name: `Clan Pants`, Materials: [`Cloth`,`Clan Fittings`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Fishing Poles`, NameCall: `apprenticefishingpole`, Name: `Apprentice Fishing Pole`, Materials: [`Oak Log`,`Linen`], MaterialQuantity: [5,1], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Fishing Poles`, NameCall: `journeymanfishingpole`, Name: `Journeyman Fishing Pole`, Materials: [`Birch Log`,`Linen`,`Bronze Bar`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Fishing Poles`, NameCall: `masterfishingpole`, Name: `Master Fishing Pole`, Materials: [`Maple Log`,`Cloth`,`Brass Bar`,`Tin Bar`], MaterialQuantity: [5,1,2,2], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Nets`, NameCall: `apprenticenet`, Name: `Apprentice Net`, Materials: [`Oak Log`,`Linen`], MaterialQuantity: [5,1], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Nets`, NameCall: `journeymannet`, Name: `Journeyman Net`, Materials: [`Birch Log`,`Bronze Bar`,`Linen`], MaterialQuantity: [5,2,1], Quantity:1 },
    { From: `Fishing Lodge`,Category: `Nets`, NameCall: `masternet`, Name: `Master Net`, Materials: [`Maple Log`,`Cloth`,`Brass Bar`,`Tin Bar`], MaterialQuantity: [5,1,2,2], Quantity:1 },
    { From: `Fletcher`,Category: `Hankyu`, NameCall: `sanmaiuchihankyu`, Name: `Sanmaiuchi Hankyu`, Materials: [`Pine Log`,`Oak Log`,`Flax`], MaterialQuantity: [10,5,10], Quantity:1 },
    { From: `Fletcher`,Category: `Hankyu`, NameCall: `shihodakehankyu`, Name: `Shihodake Hankyu`, Materials: [`Birch Log`,`Bronze Bar`,`Nettle Weave`,`Pine Log`], MaterialQuantity: [10,5,1,5], Quantity:1 },
    { From: `Fletcher`,Category: `Hankyu`, NameCall: `sanbonhigohankyu`, Name: `Sanbonhigo Hankyu`, Materials: [`Maple Log`,`Brass Bar`,`Nettle Weave`,`Tin Bar`,`Cherry Log`], MaterialQuantity: [10,5,2,5,5], Quantity:1 },
    { From: `Fletcher`,Category: `Daikyu`, NameCall: `sanmaiuchidaikyu`, Name: `Sanmaiuchi Daikyu`, Materials: [`Pine Log`,`Flax`,`Oak Log`], MaterialQuantity: [5,10,12], Quantity:1 },
    { From: `Fletcher`,Category: `Daikyu`, NameCall: `shihodakedaikyu`, Name: `Shihodake Daikyu`, Materials: [`Willow Log`,`Brass Bar`,`Nettle Weave`,`Oak Log`], MaterialQuantity: [12,5,2,5], Quantity:1 },
    { From: `Fletcher`,Category: `Daikyu`, NameCall: `sanbonhigodaikyu`, Name: `Sanbonhigo Daikyu`, Materials: [`Cherry Log`,`Brass Bar`,`Nettle Weave`,`Tin Bar`,`Maple Log`], MaterialQuantity: [12,5,3,5,5], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `copperbar`, Name: `Copper Bar`, Materials: [`Coal`,`Copper Ore`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `haganesteelbar`, Name: `Hagane Steel Bar`, Materials: [`Coal`,`Iron Ore`,`Clay`], MaterialQuantity: [1,1,1], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `tinbar`, Name: `Tin Bar`, Materials: [`Tin Ore`,`Coal`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `leadbar`, Name: `Lead Bar`, Materials: [`Lead Ore`,`Coal`], MaterialQuantity: [4,3], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `brassbar`, Name: `Brass Bar`, Materials: [`Coal`,`Copper Ore`,`Zinc Ore`], MaterialQuantity: [3,2,2], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `ironbar`, Name: `Iron Bar`, Materials: [`Coal`,`Iron Ore`,`Zinc Ore`], MaterialQuantity: [2,4,2], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `shiganesteelbar`, Name: `Shigane Steel Bar`, Materials: [`Coal`,`Clay`,`Iron Ore`,`Zinc Ore`], MaterialQuantity: [2,2,4,5], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `silverbar`, Name: `Silver Bar`, Materials: [`Coal`,`Silver Ore`], MaterialQuantity: [8,4], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `kawagnesteelbar`, Name: `Kawagne Steel Bar`, Materials: [`Coal`,`Clay`,`Iron Ore`,`Zinc Ore`,`Nickel Ore`], MaterialQuantity: [5,4,5,2,5], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `goldbar`, Name: `Gold Bar`, Materials: [`Coal`,`Gold Ore`], MaterialQuantity: [16,8], Quantity:1 },
    { From: `Forge`,Category: `Smelted Bars`, NameCall: `bronzebar`, Name: `Bronze Bar`, Materials: [`Copper Ore`,`Tin Ore`,`Coal`], MaterialQuantity: [2,3,3], Quantity:1 },
    { From: `Gunsmith`,Category: `Teppo`, NameCall: `hazamatutu`, Name: `Hazamatutu`, Materials: [`Cherry Log`,`Shigane Steel Bar`,`Brass Bar`,`Tin Bar`,`Maple Log`,`Tsutsu`], MaterialQuantity: [12,3,3,3,5,1], Quantity:1 },
    { From: `Gunsmith`,Category: `Teppo`, NameCall: `bajoututu`, Name: `Bajoututu`, Materials: [`Maple Log`,`Shigane Steel Bar`,`Brass Bar`,`Tin Bar`,`Tsutsu`], MaterialQuantity: [12,3,3,3,1], Quantity:1 },
    { From: `Gunsmith`,Category: `Teppo`, NameCall: `hinawaju`, Name: `Hinawaju`, Materials: [`Maple Log`,`Shigane Steel Bar`,`Brass Bar`,`Tin Bar`,`Cherry Log`,`Tsutsu`], MaterialQuantity: [10,3,3,3,5,1], Quantity:1 },
    { From: `Kiln`,Category: `Donabe`, NameCall: `smalldonabe`, Name: `Small Donabe`, Materials: [`Coal`,`Charcoal`,`Clay`], MaterialQuantity: [5,2,10], Quantity:1 },
    { From: `Kiln`,Category: `Donabe`, NameCall: `mediumdonabe`, Name: `Medium Donabe`, Materials: [`Coal`,`Charcoal`,`Clay`], MaterialQuantity: [7,4,15], Quantity:1 },
    { From: `Kiln`,Category: `Clay Containers`, NameCall: `grenadecasing`, Name: `Grenade Casing`, Materials: [`Coal`,`Charcoal`,`Clay`], MaterialQuantity: [2,3,5], Quantity:1 },
    { From: `Kiln`,Category: `Clay Containers`, NameCall: `smallvessel`, Name: `Small Vessel`, Materials: [`Coal`,`Charcoal`,`Clay`], MaterialQuantity: [4,6,10], Quantity:1 },
    { From: `Kiln`,Category: `Kyusu`, NameCall: `claykyusu`, Name: `Clay Kyusu`, Materials: [`Coal`,`Charcoal`,`Clay`], MaterialQuantity: [5,2,10], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `silvertrimmedcopperfittings`, Name: `Silver Trimmed Copper Fittings`, Materials: [`Copper Bar`,`Pine Log`,`Flax`,`Silver Bar`], MaterialQuantity: [8,1,2,1], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `silvertrimmedtinfittings`, Name: `Silver Trimmed Tin Fittings`, Materials: [`Tin Bar`,`Silver Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `silvertrimmedbronzefittings`, Name: `Silver Trimmed Bronze Fittings`, Materials: [`Bronze Bar`,`Silver Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `silvertrimmedironfittings`, Name: `Silver Trimmed Iron Fittings`, Materials: [`Iron Bar`,`Silver Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `goldtrimmedcopperfittings`, Name: `Gold Trimmed Copper Fittings`, Materials: [`Copper Bar`,`Pine Log`,`Flax`,`Gold Bar`], MaterialQuantity: [8,1,2,1], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `goldtrimmedtinfittings`, Name: `Gold Trimmed Tin Fittings`, Materials: [`Tin Bar`,`Gold Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `goldtrimmedbronzefittings`, Name: `Gold Trimmed Bronze Fittings`, Materials: [`Bronze Bar`,`Gold Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Trimmed Fittings`, NameCall: `goldtrimmedironfittings`, Name: `Gold Trimmed Iron Fittings`, Materials: [`Iron Bar`,`Gold Bar`,`Pine Log`,`Flax`], MaterialQuantity: [8,1,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Masks`, NameCall: `happuri`, Name: `Happuri`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Linen`], MaterialQuantity: [1,2,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Masks`, NameCall: `hanbo`, Name: `Hanbo`, Materials: [`Linen`,`Iron Bar`,`Shigane Steel Bar`], MaterialQuantity: [2,1,2], Quantity:1 },
    { From: `Metal Worker`,Category: `Masks`, NameCall: `menpo`, Name: `Menpo`, Materials: [`Cloth`,`Iron Bar`,`Shigane Steel Bar`], MaterialQuantity: [2,2,3], Quantity:1 },
    { From: `Metal Worker`,Category: `Masks`, NameCall: `ureshiimenpo`, Name: `Ureshii Menpo`, Materials: [`Cloth`,`Iron Bar`,`Shigane Steel Bar`], MaterialQuantity: [2,2,3], Quantity:1 },
    { From: `Metal Worker`,Category: `Masks`, NameCall: `kanashiimenpo`, Name: `Kanashii Menpo`, Materials: [`Cloth`,`Iron Bar`,`Shigane Steel Bar`], MaterialQuantity: [2,2,3], Quantity:1 },
    { From: `Metal Worker`,Category: `Shinobi Equipment`, NameCall: `makibishi`, Name: `Makibishi`, Materials: [`Iron Bar`], MaterialQuantity: [2], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `marukatana`, Name: `Maru Katana`, Materials: [`Hagane Steel Bar`,`Pine Log`], MaterialQuantity: [5,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `honsanmaikatana`, Name: `Honsanmai Katana`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Pine Log`], MaterialQuantity: [5,3,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `soshukatana`, Name: `Soshu Katana`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Silver Bar`,`Nishi Steel Bar`,`Pine Log`], MaterialQuantity: [3,3,3,1,1,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `tachi`, Name: `Tachi`, Materials: [`Brass Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Silver Bar`,`Nishi Steel Bar`,`Pine Log`], MaterialQuantity: [2,4,4,2,2,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `wakizashi`, Name: `Wakizashi`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Silver Bar`,`Pine Log`], MaterialQuantity: [3,2,2,1,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Nihonto`, NameCall: `kodachi`, Name: `Kodachi`, Materials: [`Nishi Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Gold Bar`,`Pine Log`], MaterialQuantity: [2,3,3,2,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Tanto`, NameCall: `marutanto`, Name: `Maru Tanto`, Materials: [`Hagane Steel Bar`,`Pine Log`], MaterialQuantity: [3,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Tanto`, NameCall: `honsanmaitanto`, Name: `Honsanmai Tanto`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Pine Log`], MaterialQuantity: [3,1,5], Quantity:1 },
    { From: `Sword Smith`,Category: `Tanto`, NameCall: `soshutanto`, Name: `Soshu Tanto`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Pine Log`], MaterialQuantity: [2,2,2,5], Quantity:1 },
    { From: `Workshop`,Category: `Axes`, NameCall: `copperaxe`, Name: `Copper Axe`, Materials: [`Copper Bar`,`Pine Handle`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Workshop`,Category: `Axes`, NameCall: `bronzeaxe`, Name: `Bronze Axe`, Materials: [`Bronze Bar`,`Pine Handle`], MaterialQuantity: [5,1], Quantity:1 },
    { From: `Workshop`,Category: `Axes`, NameCall: `ironaxe`, Name: `Iron Axe`, Materials: [`Iron Bar`,`Pine Handle`], MaterialQuantity: [7,1], Quantity:1 },
    { From: `Workshop`,Category: `Axes`, NameCall: `steelaxe`, Name: `Steel Axe`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Pine Handle`], MaterialQuantity: [5,3,2,1], Quantity:1 },
    { From: `Workshop`,Category: `Picks`, NameCall: `copperpick`, Name: `Copper Pick`, Materials: [`Copper Bar`,`Pine Handle`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Workshop`,Category: `Picks`, NameCall: `bronzepick`, Name: `Bronze Pick`, Materials: [`Bronze Bar`,`Pine Handle`], MaterialQuantity: [5,1], Quantity:1 },
    { From: `Workshop`,Category: `Picks`, NameCall: `ironpick`, Name: `Iron Pick`, Materials: [`Iron Bar`,`Pine Handle`], MaterialQuantity: [7,1], Quantity:1 },
    { From: `Workshop`,Category: `Picks`, NameCall: `steelpick`, Name: `Steel Pick`, Materials: [`Hagane Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Pine Handle`], MaterialQuantity: [5,3,2,1], Quantity:1 },
    { From: `Yari Smith`,Category: `Yari`, NameCall: `marusuyari`, Name: `Maru Su Yari`, Materials: [`Hagane Steel Bar`,`Pine Log`], MaterialQuantity: [2,10], Quantity:1 },
    { From: `Yari Smith`,Category: `Yari`, NameCall: `honsanmaisuyari`, Name: `Honsanmai Su Yari`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Shigane Steel Bar`,`Birch Log`], MaterialQuantity: [2,5,1,5], Quantity:1 },
    { From: `Yari Smith`,Category: `Yari`, NameCall: `soshusuyari`, Name: `Soshu Su Yari`, Materials: [`Hagane Steel Bar`,`Maple Log`,`Shigane Steel Bar`,`Kawagne Steel Bar`], MaterialQuantity: [2,10,2,1], Quantity:1 },
    { From: `Yari Smith`,Category: `Yari`, NameCall: `jumonjiyari`, Name: `Jumonji Yari`, Materials: [`Cherry Log`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Nishi Steel Bar`], MaterialQuantity: [10,5,3,2], Quantity:1 },
    { From: `Backpack`,Category: `Dye`, NameCall: `bluedye`, Name: `Blue Dye`, Materials: [`Clay`,`Charcoal`,`Blueberry`], MaterialQuantity: [1,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Dye`, NameCall: `whitedye`, Name: `White Dye`, Materials: [`Clay`,`Charcoal`,`Saltpeter`], MaterialQuantity: [1,1,5], Quantity:1 },
    { From: `Backpack`,Category: `Dye`, NameCall: `reddye`, Name: `Red Dye`, Materials: [`Clay`,`Charcoal`,`Raspberry`], MaterialQuantity: [1,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Dye`, NameCall: `yellowdye`, Name: `Yellow Dye`, Materials: [`Clay`,`Charcoal`,`Negi Onion`], MaterialQuantity: [1,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Dye`, NameCall: `blackdye`, Name: `Black Dye`, Materials: [`Clay`,`Charcoal`,`Lead Ore`], MaterialQuantity: [1,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Explosives`, NameCall: `gunpowder`, Name: `Gunpowder`, Materials: [`Saltpeter`,`Charcoal`,`Sulfur`], MaterialQuantity: [3,2,1], Quantity:1 },
    { From: `Backpack`,Category: `Explosives`, NameCall: `smokepowder`, Name: `Smokepowder`, Materials: [`Gunpowder`,`Sulfur`,`Flax`], MaterialQuantity: [1,3,10], Quantity:3 },
    { From: `Backpack`,Category: `Oils`, NameCall: `soyoil`, Name: `Soy Oil`, Materials: [`Soy Pods`], MaterialQuantity: [3], Quantity:1 },
    { From: `Backpack`,Category: `Oils`, NameCall: `tetrodotoxin`, Name: `Tetrodotoxin`, Materials: [`Fugu`], MaterialQuantity: [1], Quantity:3 },
    { From: `Backpack`,Category: `Bombs`, NameCall: `smokebomb`, Name: `Smoke Bomb`, Materials: [`Smokepowder`,`Grenade Casing`,`Nettle Weave`], MaterialQuantity: [1,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Bombs`, NameCall: `firebomb`, Name: `Fire Bomb`, Materials: [`Soy Oil`,`Grenade Casing`,`Nettle Weave`], MaterialQuantity: [3,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Potions`, NameCall: `amaterasu'sdefense`, Name: `Amaterasu's Defense`, Materials: [`Small Vessel`,`Alisma`,`Blueberry`], MaterialQuantity: [1,3,5], Quantity:1 },
    { From: `Backpack`,Category: `Wheat Products`, NameCall: `dough`, Name: `Dough`, Materials: [`Wheat`], MaterialQuantity: [3], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedmullet`, Name: `Prepared Mullet`, Materials: [`Mullet`,`Saltpeter`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedtrout`, Name: `Prepared Trout`, Materials: [`Trout`,`Saltpeter`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedsalmon`, Name: `Prepared Salmon`, Materials: [`Salmon`,`Saltpeter`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedsturgeon`, Name: `Prepared Sturgeon`, Materials: [`Sturgeon`,`Saltpeter`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedclams`, Name: `Prepared Clams`, Materials: [`Asari Clam`,`Saltpeter`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Backpack`,Category: `Prepared Protein`, NameCall: `preparedfugu`, Name: `Prepared Fugu`, Materials: [`Fugu`,`Saltpeter`], MaterialQuantity: [1,1], Quantity:1 },
    { From: `Backpack`,Category: `Soy Products`, NameCall: `soybeans`, Name: `Soybeans`, Materials: [`Soy Pods`], MaterialQuantity: [3], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `smallbed`, Name: `Small Bed`, Materials: [`Linen`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudetorch`, Name: `Crude Torch`, Materials: [`Flax`,`Pine Log`,`Coal`], MaterialQuantity: [2,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudepot`, Name: `Crude Pot`, Materials: [`Copper Bar`,`Pine Log`], MaterialQuantity: [3,2], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `mealbox`, Name: `Meal Box`, Materials: [`Pine Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudefishingpole`, Name: `Crude Fishing Pole`, Materials: [`Pine Log`,`Flax`], MaterialQuantity: [4,10], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `sashimono`, Name: `Sashimono`, Materials: [`Pine Log`,`Linen`,`Tin Bar`,`Clan Fittings`], MaterialQuantity: [2,2,1,1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudenet`, Name: `Crude Net`, Materials: [`Pine Log`,`Flax`], MaterialQuantity: [4,10], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudebowl`, Name: `Crude Bowl`, Materials: [`Pine Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `stonepick`, Name: `Stone Pick`, Materials: [`Flax`,`Bamboo`,`Stone`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `stoneaxe`, Name: `Stone Axe`, Materials: [`Flax`,`Bamboo`,`Stone`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Basic Equipment`, NameCall: `crudecup`, Name: `Crude Cup`, Materials: [`Pine Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Weapons`, NameCall: `crudeyari`, Name: `Crude Yari`, Materials: [`Bamboo`], MaterialQuantity: [3], Quantity:1 },
    { From: `Backpack`,Category: `Basic Weapons`, NameCall: `fusetakeyumi`, Name: `Fusetake Yumi`, Materials: [`Pine Log`,`Flax`], MaterialQuantity: [8,5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `oakhandle`, Name: `Oak Handle`, Materials: [`Oak Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `birchhandle`, Name: `Birch Handle`, Materials: [`Birch Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `willowhandle`, Name: `Willow Handle`, Materials: [`Willow Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `maplehandle`, Name: `Maple Handle`, Materials: [`Maple Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `pinehandle`, Name: `Pine Handle`, Materials: [`Pine Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `cherryhandle`, Name: `Cherry Handle`, Materials: [`Cherry Log`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `linen`, Name: `Linen`, Materials: [`Flax`], MaterialQuantity: [10], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `pinefittings`, Name: `Pine Fittings`, Materials: [`Pine Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `oakfittings`, Name: `Oak Fittings`, Materials: [`Oak Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `birchfittings`, Name: `Birch Fittings`, Materials: [`Birch Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `willowfittings`, Name: `Willow Fittings`, Materials: [`Willow Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `maplefittings`, Name: `Maple Fittings`, Materials: [`Maple Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Basic Items`, NameCall: `cherryfittings`, Name: `Cherry Fittings`, Materials: [`Cherry Log`], MaterialQuantity: [5], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `standardcopperfittings`, Name: `Standard Copper Fittings`, Materials: [`Copper Bar`,`Pine Log`,`Flax`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `standardtinfittings`, Name: `Standard Tin Fittings`, Materials: [`Tin Bar`,`Pine Log`,`Flax`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `standardbronzefittings`, Name: `Standard Bronze Fittings`, Materials: [`Bronze Bar`,`Pine Log`,`Flax`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `standardfittings`, Name: `Standard Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`], MaterialQuantity: [1,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `standardironfittings`, Name: `Standard Iron Fittings`, Materials: [`Iron Bar`,`Pine Log`,`Flax`], MaterialQuantity: [5,1,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `redfittings`, Name: `Red Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`,`Red Dye`], MaterialQuantity: [1,1,2,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `blackfittings`, Name: `Black Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`,`Black Dye`], MaterialQuantity: [1,1,2,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `bluefittings`, Name: `Blue Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`,`Blue Dye`], MaterialQuantity: [1,1,2,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `yellowfittings`, Name: `Yellow Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`,`Yellow Dye`], MaterialQuantity: [1,1,2,2], Quantity:1 },
    { From: `Backpack`,Category: `Metal Fittings`, NameCall: `whitefittings`, Name: `White Fittings`, Materials: [`Hagane Steel Bar`,`Pine Log`,`Flax`,`White Dye`], MaterialQuantity: [1,1,2,2], Quantity:1 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `copperarrow`, Name: `Copper Arrow`, Materials: [`Oak Log`,`Copper Arrowheads`], MaterialQuantity: [1,1], Quantity:5 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `bronzearrow`, Name: `Bronze Arrow`, Materials: [`Oak Log`,`Bronze Arrowheads`], MaterialQuantity: [1,1], Quantity:5 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `ironarrow`, Name: `Iron Arrow`, Materials: [`Oak Log`,`Iron Arrowheads`], MaterialQuantity: [1,1], Quantity:5 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `steelarrow`, Name: `Steel Arrow`, Materials: [`Oak Log`,`Steel Arrowheads`], MaterialQuantity: [1,1], Quantity:5 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `kaburaarrow`, Name: `Kabura Arrow`, Materials: [`Maple Log`,`Iron Bar`,`Red Dye`,`Black Dye`], MaterialQuantity: [1,1,1,1], Quantity:10 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `stonearrow`, Name: `Stone Arrow`, Materials: [`Bamboo`,`Stone Arrowheads`], MaterialQuantity: [1,1], Quantity:5 },
    { From: `Backpack`,Category: `Arrows`, NameCall: `stonearrowheads`, Name: `Stone Arrowheads`, Materials: [`Stone`], MaterialQuantity: [1], Quantity:1 },
    { From: `Backpack`,Category: `Hats`, NameCall: `strawkasa`, Name: `Straw Kasa`, Materials: [`Flax`,`Pine Log`], MaterialQuantity: [15,3], Quantity:1 },
    { From: `Backpack`,Category: `Hats`, NameCall: `strawgasa`, Name: `Straw Gasa`, Materials: [`Flax`,`Birch Log`], MaterialQuantity: [15,3], Quantity:1 },
    { From: `Backpack`,Category: `Arrowheads`, NameCall: `copperarrowheads`, Name: `Copper Arrowheads`, Materials: [`Copper Bar`], MaterialQuantity: [1], Quantity:3 },
    { From: `Backpack`,Category: `Arrowheads`, NameCall: `bronzearrowheads`, Name: `Bronze Arrowheads`, Materials: [`Bronze Bar`], MaterialQuantity: [1], Quantity:3 },
    { From: `Backpack`,Category: `Arrowheads`, NameCall: `ironarrowheads`, Name: `Iron Arrowheads`, Materials: [`Iron Bar`], MaterialQuantity: [1], Quantity:3 },
    { From: `Backpack`,Category: `Arrowheads`, NameCall: `steelarrowheads`, Name: `Steel Arrowheads`, Materials: [`Shigane Steel Bar`], MaterialQuantity: [1], Quantity:3 },
    { From: `Backpack`,Category: `Rounds`, NameCall: `5monmeround`, Name: `5 Monme Round`, Materials: [`Lead Bar`,`Gunpowder`], MaterialQuantity: [1,2], Quantity:7 },
    { From: `Backpack`,Category: `Rounds`, NameCall: `7monmeround`, Name: `7 Monme Round`, Materials: [`Lead Bar`,`Gunpowder`], MaterialQuantity: [1,2], Quantity:5 },
    { From: `Backpack`,Category: `Tsuba`, NameCall: `enkeitsuba`, Name: `Enkei Tsuba`, Materials: [`Hagane Steel Bar`,`Linen`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Backpack`,Category: `Tsuba`, NameCall: `kakutsuba`, Name: `Kaku Tsuba`, Materials: [`Hagane Steel Bar`,`Linen`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Backpack`,Category: `Tsuba`, NameCall: `otafukutsuba`, Name: `Otafuku Tsuba`, Materials: [`Hagane Steel Bar`,`Linen`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Backpack`,Category: `Tsuba`, NameCall: `mokkotsuba`, Name: `Mokko Tsuba`, Materials: [`Hagane Steel Bar`,`Linen`], MaterialQuantity: [3,1], Quantity:1 },
    { From: `Special Weapon Smith`,Category: `Weapons`, NameCall: `naginata`, Name: `Naginata`, Materials: [`Shigane Steel Bar`,`Kawagne Steel Bar`,`Silver Bar`,`Blessed Redwood`,`Cherry Log`], MaterialQuantity: [4,4,2,3,10], Quantity:1 },
    { From: `Special Weapon Smith`,Category: `Weapons`, NameCall: `kanabo`, Name: `Kanabo`, Materials: [`Shigane Steel Bar`,`Kawagne Steel Bar`,`Iron Bar`,`Cherry Log`,`Blessed Redwood`], MaterialQuantity: [2,4,8,10,4], Quantity:1 },
    { From: `Special Weapon Smith`,Category: `Weapons`, NameCall: `kama`, Name: `Kama`, Materials: [`Nishi Steel Bar`,`Shigane Steel Bar`,`Kawagne Steel Bar`,`Gold Bar`,`Cherry Log`], MaterialQuantity: [2,3,3,2,8], Quantity:1 }
]
const { MessageEmbed, CommandInteraction, Client, ThreadChannel } = require("discord.js");

function autoComplete(value) {
    var tags = []
    var result = []
    var output = {result: false, object: result}
    Recipe.forEach((item) => {
        tags.push(item.Name)
    })
    var n = tags.length;
    l = value.length;
    for (var i = 0; i < n; i++) {
        if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            result.push(tags[i])
        }
    }
    if (result.length === 1) {
        Recipe.find((item) => {
            if (item.Name === result[0]) {
                output = {result: true, object: item}
            }
        })
    }
    return output
}

function checkItemExist(item) {
    var itemlowercase = item.replace(/\s/g, '').toLowerCase()
    var output = {result: false, item: ""}
    Recipe.find(element => {
        if (itemlowercase == element.NameCall) {
            output = {result: true, object: element}
        }
    })
    return output
}

function getRecipe(item, amount) {
    var output = ""
    for (let i = 0; i < item.Materials.length; i++) {
        output = output + item.Materials[i] + ": "+ (item.MaterialQuantity[i]*amount).toString() + "\n"
    }
    return output
}

function buildRecipe(object, amount) {
    amount = Math.ceil(amount/object.Quantity)*object.Quantity
    var raw = []
    var itemQueue = [{Amount: amount, Object: object}]
    var outputRecipe = []
    const embed = new MessageEmbed();
    embed.setTitle('Item: ' + object.Name + ` || Amount: ${amount}`);
    embed.setColor('#f4c871');
    embed.setAuthor({ name: 'made by Dub', iconURL: 'https://i.imgur.com/Rn9muMO.png', url: 'https://www.roblox.com/users/93839005/profile' });
    embed.setThumbnail('https://tr.rbxcdn.com/b70af9a2cc32a6fa307f7dd046c5b4f7/150/150/Image/Png');
    embed.addField("----------------------------------", "Main-recipe: ",false)
    while (itemQueue.length>0) {
        var temp = []
        itemQueue.forEach(element => {
            if (object.Name === element.Object.Name) {
                outputRecipe.push({name: element.Object.Name+": "+Math.ceil(element.Amount/element.Object.Quantity)*element.Object.Quantity.toString(), value: getRecipe(element.Object, element.Amount), inline: false})
                outputRecipe.push({name: "----------------------------------", value: "Sub-recipe(s): ",inline: false})
            } else {
                outputRecipe.push({name: element.Object.Name+": "+Math.ceil(element.Amount/element.Object.Quantity)*element.Object.Quantity.toString(), value: getRecipe(element.Object, element.Amount), inline: true})
            }
            for (let i = 0; i < element.Object.Materials.length; i++) {
                var found = false
                Recipe.find(e => {
                    if (e.Name === element.Object.Materials[i]) {
                        found = true
                        temp.push({Amount: Math.ceil(element.Amount*element.Object.MaterialQuantity[i]/element.Object.Quantity)*element.Object.Quantity, Object: e})
                    }
                })
                if (!found) { 
                    raw.push({Amount: element.Amount*element.Object.MaterialQuantity[i], Name: element.Object.Materials[i]})
                }
            }
        }); 
        itemQueue = temp
    }
    embed.addFields(outputRecipe)
    embed.addField("----------------------------------", "---------------------------------",false)
    var rawoutput = ""
    const totals = [];
    raw.forEach(x => {
    const obj = totals.find(o => o.Name === x.Name);
    if (obj) {
        obj.Amount = obj.Amount + x.Amount;
    } else {
        totals.push(x);
    }
    });
    totals.forEach(el => {
        rawoutput = rawoutput + el.Name + ": " + el.Amount + "\n"
    })
    embed.addField("Total raw material needed:", rawoutput,false)
    return embed
}

module.exports = {
    name: "craft",
    description: "Show recipe.",
    options: [
        {
            name: "item",
            description: "Item's name",
            type: "STRING",
            required: true
        },
        {
            name: "amount",
            description: "Amount in number",
            type: "INTEGER",
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const {options} = interaction;
        const item = options.getString("item")
        const amount = options.getInteger("amount")
        var {result,object} = checkItemExist(item)
        if (result === true) {
            interaction.reply({embeds: [buildRecipe(object, amount)]})
        }else{
            var {result,object} = autoComplete(item)
            if (result) {
                interaction.reply({embeds: [buildRecipe(object, amount)]})
            } else {
                if (object.length === 0) {
                    interaction.reply({content: "I dont know that item (ꐦ ´͈ ᗨ `͈ ) (try short name of the item maybe)", ephemeral: true})
                } else {
                    var reply = 'Do you mean:\n'
                    object.forEach((name) => {
                        reply = reply + name + '\n'
                    })
                    interaction.reply({content: reply, ephemeral: true})
                }
            }
        }
    }
}