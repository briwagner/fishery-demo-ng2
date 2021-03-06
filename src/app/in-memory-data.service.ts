import { InMemoryDbService, createErrorResponse, createObservableResponse, HttpMethodInterceptorArgs, ParsedUrl, STATUS } from 'angular-in-memory-web-api';

import { ResponseOptions, URLSearchParams } from '@angular/http';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let slides = {"hits": {"hits": [
  { "_source": {
      id: "1",
      title: 'Right Whales Off the Coast of Florida',
      description: 'Right whales off the coast of Florida. Right whales are large baleen whales, and the second largest creature in the world - second only to the blue whale. Females are larger than males. Distinguishing features for right whales include a stocky body, generally black coloration (although some individuals have white patches on their undersides), lack of a dorsal fin, a large head (about 1/4 of the body length), strongly bowed margin of the lower lip, and callosities (raised patches of roughened skin) on the head region. Two rows of long (up to eight feet in length) dark baleen plates hang from the upper jaw, with about 225 plates on each side. The tail is broad, deeply notched, and all black with a smooth trailing edge.',
      pic: 'rightwhale.jpg',
      date: 'February 25th, 2008',
      credit: 'Florida Fish and Wildlife Conservation Commission'
    } },
    {"_source": {
      id: "2",
      title:'School of Bluefin Tuna',
      description: 'Atlantic bluefin tuna are highly migratory and are fished by many nations. The bluefin tuna fishery in the United States is managed domestically by the NOAA Fisheries Service Highly Migratory Species Management Division and internationally by the International Commission for the Conservation of Atlantic Tunas (ICCAT).',
      pic: 'tuna.jpg',
      date: 'March 27th, 2011',
    } },
    { "_source": {
      id: "3",
      title: 'Whale Shark',
      description: 'A whale shark was tagged at West Flower Garden Bank. The whale shark is a slow-moving filter feeding shark and the largest known extant fish species.',
      pic: 'shark.jpg',
      date: 'August 21st, 2011',
      credit: 'FGBNMS/Eckert'
    } },
    {"_source": {
      id: "4",
      title: 'Newly-Hatched Kemp\'s Ridley Turtles with Biologist',
      description: 'NOAA Fisheries scientists work with local partners to count Kemp\'s ridley sea turtle hatchlings on their way to the ocean. This photo was taken under a NOAA Fisheries scientific research permit. Admire wildlife from a distance, for your safety and their protection. Please do not handle sea turtles.',
      pic: 'turtles.jpg',
      date: 'June 6th, 2005',
      credit: 'NOAA Fisheries Protected Resoureces'
    } },
    {"_source": {
      id: "5",
      title: 'Stellar Sea Lions on the Move',
      description: 'Fisheries scientists approach stellar sea lions\' resting spot to collect scat for diet studies.',
      pic: 'sealions.jpg',
      date: 'July 15th, 2007',
      credit: 'Vladimir Burkanov'
    } }
    ] } };

    let articles = {"hits": { "hits": [
    {"_source": {
        id: "1",
        title: "Bycatch Reduction Engineering Program - 2016 Awards",
        date: "August 33, 2016",
        pic: "bycatch.jpg",
        topic: "Sustainable Fisheries",
        body: "NOAA Fisheries has awarded more than $2.4 million to partners around the country to support innovative bycatch reduction research projects through its Bycatch Reduction Engineering Program. Bycatch of various species--fish, marine mammals, or turtles--can have significant biological, economic, and social impacts. Preventing and reducing bycatch is a shared goal of fisheries managers, the fishing industry, and the environmental community. Working side-by-side with fishermen on their boats, NOAA Fisheries has developed solutions to some of the top bycatch challenges facing our nation's fisheries. Ongoing regional projects include: Creation of an enhanced communication network and real-time maps to allow longfin squid fishermen to avoid butterfish \"hot spots\" and reduce bycatch by 54 percent in the Northeast. Development of a modified gill-net in the Mid-Atlantic that reduced sturgeon interactions by 64 percent in Virginia's striped bass fishery. Use of LED lights on the West Coast to reduce endangered Columbia River smelt bycatch in the ocean shrimp trawl fishery by 91 percent. 2016 Award Recipients The newly-awarded projects support bycatch reduction research around the country and address a variety of species, including Chinook salmon, Pacific rockfish, shrimp, swordfish, halibut, coastal sharks, skates, sea turtles, whales, and other marine mammals."
    } },
    {"_source": {
        id: "2",
        title: "Enhancing Protections for Hawaiian Spinner Dolphins to Prevent Disturbance",
        date: "August 23, 2016",
        pic: "spinners.jpg",
        topic: "Protected Resources",
        body: "Resident populations of Hawaiian spinner dolphins feed offshore throughout the night and return to Hawaii's coasts to rest during the day. Because Hawaiian spinner dolphins rest in Hawaii's sheltered bays and along its coastlines and are one of the most easily encountered cetaceans in the waters of the Main Hawaiian Islands, they are vulnerable to disturbance and harassment. Dolphin-directed activities have grown dramatically in recent years, and the easily accessible Hawaiian spinner dolphins face heavy and increasing pressures from people seeking a dolphin experience. Chronic disturbance to resting activities can negatively affect the health and fitness of dolphins. NOAA Fisheries is proposing to enhance protections for Hawaiian spinner dolphins to prevent disturbance and harassment from dolphin-directed human activities. The proposed rule would prohibit swimming with and approaching a Hawaiian spinner dolphin within 50 yards by any means (vessel, person, or other object) and would be implemented within two nautical miles from shore of the Main Hawaiian Islands and in designated waters between Maui, Lanai, and Kahoolawe where spinner dolphins are found throughout the day. The proposed rule is based on the preferred alternative (Alternative 3A) in the Draft Environmental Impact Statement. Other alternatives considered include the following:"
    } },
    {"_source": {
        id: "3",
        title: "Sustaining Fisheries through Healthy Habitats in Southern California",
        date: "August 12, 2016",
        pic: "conservation.jpg",
        topic: "Habitat Conservation",
        body: `Based between Los Angeles and San Diego, Eric Chavez works to conserve fish habitat in Southern California. In this Q&A, he discusses his role as a Marine Habitat Resource Specialist with NOAA Fisheries’ West Coast Regional Office in Long Beach, California.

This year is the 20th anniversary of Essential Fish Habitat. Why should we be excited?
It’s exciting to look at where we were, where we are, and where we’re going. These types of anniversaries are a good time to take stock of what you’ve done and evaluate whether or not we’ve made progress. And we certainly have.

Although we have plenty of challenges ahead, including effects from climate change and invasive species, we’re gaining new information and technology to tackle them. We also have motivated, informed stakeholders involved, and essential fish habitat (EFH) is a great tool to bring those people together and work towards solutions.

What is your role as a marine habitat resource specialist?
One of my primary roles is conducting EFH consultations. During the EFH consultation process, NOAA Fisheries staff works with federal agencies to help them reduce the adverse effects of their actions on habitat for federally managed fisheries. We consult on a wide spectrum of coastal and marine activities, ranging from large military projects and port development projects down to individual dock construction.

For instance, I’ve consulted with the Navy on large scale military exercises, where their actions might have a number of different impacts on EFH. The Navy agreed to map the habitat within the area ahead of time to identify sensitive habitats and then incorporate those data into their procedures to avoid impacts. The Navy also agreed to identify specific zones for their exercises and mitigate for impacts within those zones.

I’m also engaged in various groups that further habitat conservation efforts outside the EFH consultation process. For instance, I’m a long-time member of the Port of San Diego Environmental Advisory Committee, a diverse group committed to protecting and improving the environmental conditions of the San Diego Bay by enacting a number of efforts, including fishery inventories, research projects, and environmentally preferable hull paint alternatives development.
`
    } },
    {"_source": {
        id: "4",
        title: "Action Plan for Fish Release Mortality Science",
        date: "Autumn 2016",
        pic: "sandt.png",
        topic: "Science and Technology",
        body: `
        NOAA Fisheries recently finalized the Action Plan for Fish Release Mortality Science. This plan identifies the best practices for estimating and reducing discard and release mortality for fish in commercial and recreational fisheries.

Discard and release mortality occurs when fish or other animals are caught alive and then die after release. Severe injury or predation, such as being eaten at the water's surface after release, can cause immediate death. Stress or injury during capture or handling can leave a fish unable to find or digest food effectively, resulting in death at a later time. 

The Action Plan is part of NOAA Fisheries’ proactive approach to addressing bycatch in U.S. fisheries. Bycatch occurs when fishing operations discard fish, cause unobserved mortality, or interact with living marine resources such as marine mammals, seabirds, corals, sponges, sea turtles, or protected fish. Although U.S. fisheries are among the world’s most sustainable, bycatch is a complex, global issue that threatens the sustainability and resiliency of our fishing communities, economies, and ocean ecosystems.  

The U.S. is a leader in responsibly managed fisheries. We are committed to minimizing bycatch in our fisheries to ensure that they remain sustainable. Forty years of management under the Magnuson-Steven Act (MSA) has been successful and has demonstrated that a dynamic, science-based management process is fundamental for maintaining sustainable fisheries. As part of our efforts to address bycatch, NOAA Fisheries and its partners created this Action Plan as well as a simple multi-attribute rating technique (SMART) tool. Together, the Action Plan and SMART tool: 

SMART tool

Help identify fish that would benefit most from improved mortality rate estimates.
Support the development of improved mortality rate estimates.
Encourage effective research that leads to reduced release mortality.
Help ensure that improved mortality rate estimates are helpful to managers.
        `
    } },
    {"_source": {
        id: "5",
        title: "From farm to your table, oysters offer a sustainable choice",
        date: "Summer 2016",
        pic: "aqua.jpg",
        topic: "Aquaculture",
        body: `
        Kari Eckdahl is currently spending a year as a California Sea Grant Fellow working in NOAA Fisheries’ California Aquaculture Program Office. The California Sea Grant State Fellows Program matches highly qualified graduate students with host agencies in the state. She shares her observations in this column.

My time as a Sea Grant Fellow with NOAA Fisheries’ California Aquaculture Program Office has opened my eyes to the role that marine aquaculture can play in providing a healthy, sustainable source of food, and what NOAA Fisheries is doing to promote it.

You may have heard of “Farm to Table” in terms of vegetables, but there’s a similar concept in shellfish aquaculture. Oyster farms deliver fresh, healthy, protein-packed oysters to your table, and the popularity of their products is growing. The value of oyster production in Washington, Oregon and California has doubled in the last 15 years, hitting a record high of almost $63 million in 2014, the last year with data available.

That makes oysters one of the most valuable shellfish on the West Coast, important both to the economy and to the people who love to eat them.

Oyster farms receive tiny "seed" oysters from hatcheries. Photo courtesy Ed Anderson Photography

As part of my NOAA fellowship, I learned a lot that surprised me. Did you know that more than 95% of oysters consumed worldwide are farmed? That is a good thing when it comes to local oysters. NOAA Fisheries’ FishWatch rates oysters a smart seafood choice because they are sustainably farmed and harvested under U.S. and state regulations.

I saw this for myself during a tour of Hog Island Oyster Farm, owned and operated by John Finger and Terry Sawyer, in Tomales Bay in Northern California. They explained that farms usually get “seed” oysters from hatcheries when they are about 2 millimeters in size and then place them in a bay either in floating mesh bags or an apparatus called a FLUPSY (FLoating UPwelling SYstem).

A FLUPSY looks like a barge, and is up to about 100 feet long with walkways down the center and sides. Between the walkways a row of bins hangs down into the water and holds the oysters. A large paddlewheel at each end of the bins forces nutrient-rich water towards the oysters.

Once the oysters reach about ¼-inch in size, the farm moves them into larger cages or bags where they continue to grow. Depending on the species, an oyster can take one to three years to reach harvest size.

The tour showed me what makes oyster farming so sustainable. Oysters do not require feed or fresh water. Oysters are filter feeders so they eat the microscopic algae and nutrients already suspended in seawater. An oyster can filter up to 50 gallons of water in a day and actually help improve water quality of bays by filtering out excess nutrients and sediments.

Since oysters continually filter water within the bay, farmers are particularly concerned about water quality. Oysters cannot be harvested and sold from bays that contain harmful chemicals, bacteria, or phytoplankton species that cause Harmful Algal Blooms (HABs).

This is one area where NOAA Fisheries provides support for oyster farmers. For example, NOAA Fisheries scientists are developing an early warning system for HABs using an Environmental Sample Processor (ESP). An ESP, also called a “lab in a can,” can collect and analyze water samples in a bay in real-time. The ESP uses DNA technology to detect harmful algae and bacteria in the water. It can then relay the data to farmers via radio, satellite, or even their cell phone.

Scientists are hoping to couple the ESP with weather forecasts to provide farmers advance warning of red tides in the future. The idea is that with enough notice, farmers can pull their oysters out of the water before a bloom occurs, preventing a substantial economic loss.

As a fellow in the NOAA Fisheries Aquaculture Program located in the Sacramento office, I have a hand in helping guide shellfish farmers who are navigating the regulatory permitting process, and in providing them access to science resources such as the ESP.

The Hog Island tour ended fittingly with shucking and eating oysters while gazing out on Tomales Bay. Prior to starting this fellowship I had probably only eaten about a handful of oysters in my life. Since February, I have eaten dozens of oysters. It makes me feel good to know I am eating something healthy, sustainable, local, and delicious!
`
    } },
    {"_source": {
        id: "6",
        title: "Third Annual Sustainable Seafood Expo",
        date: "September 12, 2016",
        pic: "seafood.jpg",
        topic: "Seafood Inspection",
        body: `NOAA Fisheries West Coast Region and the Office of International Affairs and Seafood Inspection participated in the 3rd Annual Sustainable Seafood Expo in San Pedro, CA held at the Cabrillo Marine Aquarium on October 2, 2016. The event focuses its effort to educate consumers on the right fish to choose for nutritional needs as well as purchasing product that has been fished thorough environmentally sound practices.

NOAA personnel: Amber Rhodes, WCR NOAA Fisheries, Fisheries Policy Analyst, Amanda Rosenblum, WCR NOAA Fisheries, Tuna Tracking and Verification Program, Elieen del Rosario, WCR NOAA Fisheries, Pathways Intern, Laurice Churchill, Chief, USDC NOAA SW Region Seafood Inspection, Alicia Davis, CSO, USDC NOAA SW Region Seafood Inspection

Visit the Cabrillo Marine Aquarium's and Friends website
`
    } }
]
}};

let salmon = {"table":{"columnNames":[{"name":"common_name"},{"name":"season_year"},{"name":"pacfin_code"},{"name":"report_category"},{"name":"wcgop_discard_count_est"},{"name":"wcgop_discard_pounds_est"},{"name":"wcgop_species_updated_date"},{"name":"scientific_name"}],"columnTypes":[],"columnUnits":[],"rows":[{"common_name":"King (Chinook) Salmon","season_year":2015,"pacfin_code":"CHNK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"765","wcgop_discard_pounds_est":"3739","wcgop_species_updated_date":"SAT, 27 FEB 2016 06:58:11 UTC","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2015,"pacfin_code":"CHUM","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2015,"pacfin_code":"COHO","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"34","wcgop_discard_pounds_est":"137","wcgop_species_updated_date":"FRI, 12 FEB 2016 06:57:01 UTC","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2015,"pacfin_code":"PINK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2015,"pacfin_code":"SOCK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2015,"pacfin_code":"STLH","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2015,"pacfin_code":null,"report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"1","wcgop_discard_pounds_est":"3","wcgop_species_updated_date":"WED, 09 MAR 2016 06:58:19 UTC","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2015,"pacfin_code":"CHNK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2015,"pacfin_code":"CHUM","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2015,"pacfin_code":"COHO","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2015,"pacfin_code":"PINK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2015,"pacfin_code":"SOCK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2015,"pacfin_code":"STLH","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2015,"pacfin_code":null,"report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2015,"pacfin_code":"CHNK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"47","wcgop_discard_pounds_est":"473","wcgop_species_updated_date":"TUE, 22 DEC 2015 16:44:14 UTC","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2015,"pacfin_code":"CHUM","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2015,"pacfin_code":"COHO","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2015,"pacfin_code":"PINK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2015,"pacfin_code":"SOCK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2015,"pacfin_code":"STLH","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2015,"pacfin_code":null,"report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2015,"pacfin_code":"CHNK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"1","wcgop_discard_pounds_est":"16","wcgop_species_updated_date":"TUE, 22 DEC 2015 16:39:03 UTC","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2015,"pacfin_code":"CHUM","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2015,"pacfin_code":"COHO","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2015,"pacfin_code":"PINK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2015,"pacfin_code":"SOCK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2015,"pacfin_code":"STLH","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2015,"pacfin_code":null,"report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2016,"pacfin_code":"CHNK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"123","wcgop_discard_pounds_est":"801","wcgop_species_updated_date":"THU, 15 SEP 2016 07:03:46 UTC","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2016,"pacfin_code":"CHUM","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2016,"pacfin_code":"COHO","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"8","wcgop_discard_pounds_est":"25","wcgop_species_updated_date":"FRI, 22 JUL 2016 07:00:53 UTC","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2016,"pacfin_code":"PINK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2016,"pacfin_code":"SOCK","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2016,"pacfin_code":"STLH","report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"1","wcgop_discard_pounds_est":"5","wcgop_species_updated_date":"SUN, 31 JUL 2016 07:07:11 UTC","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2016,"pacfin_code":null,"report_category":"IFQ Bottom Trawl","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2016,"pacfin_code":"CHNK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2016,"pacfin_code":"CHUM","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2016,"pacfin_code":"COHO","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2016,"pacfin_code":"PINK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2016,"pacfin_code":"SOCK","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2016,"pacfin_code":"STLH","report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2016,"pacfin_code":null,"report_category":"IFQ Fixed Gear","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2016,"pacfin_code":"CHNK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2016,"pacfin_code":"CHUM","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2016,"pacfin_code":"COHO","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2016,"pacfin_code":"PINK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2016,"pacfin_code":"SOCK","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2016,"pacfin_code":"STLH","report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2016,"pacfin_code":null,"report_category":"IFQ Midwater non-whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"},{"common_name":"King (Chinook) Salmon","season_year":2016,"pacfin_code":"CHNK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus tshawytscha"},{"common_name":"Dog (Chum) Salmon","season_year":2016,"pacfin_code":"CHUM","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus keta"},{"common_name":"Silver (Coho) Salmon","season_year":2016,"pacfin_code":"COHO","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus kisutch"},{"common_name":"Pink (Humpback) Salmon","season_year":2016,"pacfin_code":"PINK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus gorbuscha"},{"common_name":"Red (Sockeye) Salmon","season_year":2016,"pacfin_code":"SOCK","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus nerka"},{"common_name":"Steelhead (Rainbow Trout)","season_year":2016,"pacfin_code":"STLH","report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"0","wcgop_discard_pounds_est":"0","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus mykiss"},{"common_name":"Salmon Unid","season_year":2016,"pacfin_code":null,"report_category":"IFQ Midwater whiting","wcgop_discard_count_est":"SA","wcgop_discard_pounds_est":"SA","wcgop_species_updated_date":"SA","scientific_name":"oncorhynchus"}]}};

    let topics = {"hits": {"hits":  
        [  
        {"_source": {id: 1, name: "Sustainable Fisheries" } },
        {"_source": {id: 2, name: "Protected Resources" } },
        {"_source": {id: 3, name: "Habitat Conservation"} },
        {"_source": {id: 4, name: "International Affairs"} },
        {"_source": {id: 5, name: "Science and Technology"} },
        {"_source": {id: 6, name: "Aquaculture"} },
        {"_source": {id: 7, name: "Seafood Inspection"} }
    ]
    } };

    let podcasts = {"hits": {"hits": [
        {"_source": {
                "title": "Putting the World in World Sea Turtle Day",
                "subtitle": "An interview with NOAA Fisheries biologist and sea turtle scientist Manjula Tiwari",
                "date": "June 10, 2016",
                "file": "putting_the_world_in_world_sea_turtle_day.mp3",
                "pic": "world_sea_turtle_day_banner.jpg",
                "caption": `NOAA Fisheries biologist and sea turtle expert Dr. Manjula Tiwari measuring a green turtle carapace in Namibia. Photo courtesy of Manjula Tiwari.`,
                "body": `June 16th is World Sea Turtle Day, and needless to say this is a very big day for us here at NOAA Fisheries. So for today’s podcast we’re going to hear from Manjula Tiwari, a sea turtle scientist with NOAA’s Southwest Fisheries Science Center. Dr. Tiwari works all over the world helping communities that live near sea turtle nesting beaches to protect their sea turtle populations.

Dr. Tiwari works with many
species of sea turtles, including one of the most endangered, the Pacific leatherback. Pacific leatherback populations have declined by more than 90 percent and the largest remaining population nests on beaches in Papua, Indonesia. Leatherbacks that hatch in Papua later show up off the U.S. West Coast, which is one reason that NOAA Fisheries is working to protect them and their nesting beaches on the other side of the world.

To save Pacific leatherbacks, people from many nations have to work together. Dr. Tiwari works with people in Papua, Indonesia. Other NOAA Fisheries scientists work with fishermen and research partners to protect the turtles along their international migration routes. As Dr. Tiwari says in this podcast, “leatherbacks make the world a very small place.”`
            }
        },
        {"_source": {
                "title": "Tracking El Nino and Its Effects on Life in the Ocean",
                "subtitle": "An interview with NOAA Fisheries’ two top scientists on the West Coast",
                "date": "March 30, 2016",
                "file": "tracking_el_nino.mp3",
                "pic": "el_nino_banner.jpg",
                "caption": `Satellite sea surface temperature during January, 2016. Colors show where average monthly sea surface temperature was above (red) or below (blue) its 1981-2010 average. Waters across the tropical Pacific Ocean were warmer than average during this month, suggesting that El Nino still had a grip on the basin. Photo: climate.gov/NNVL. Data: Geo-Polar SST.

`,
                "body": `We’ve had a very powerful El Niño this year. That, of course, is the phenomenon in the Pacific Ocean that causes rains and coastal flooding on parts of the West Coast, extreme weather on the East Coast, and crazy weather in many parts of the world.

But El Niño isn’t just about weather on land. It also has profound effects on life in the ocean, and that, of course, is where NOAA Fisheries comes in.

In this podcast, the agency’s two top scientists on the West Coast discuss those effects. Cisco Werner is the Director of NOAA’s Southwest Fisheries Science Center in La Jolla, California and John Stein is the Director of the Northwest Fisheries Science Center in Seattle. We’ve gotten very good at predicting when an El Niño will happen and what its effects will be, they say. But as the climate changes, cyclical events like El Niño are rising off a shifting baseline. That will keep our scientists on their toes.`
            }
        }
    ]}};

      return {slides, articles, salmon, topics, podcasts};
    }

    parseUrl(url: string): ParsedUrl {
        try {
            const loc = this.getLocation(url);
            let drop = 0;
            let urlRoot = '';
            if (loc.host !== undefined) {
                // url for a server on a different host!
                // assume its collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            const path = loc.pathname.substring(drop);

            let [base, collectionName, id] = path.split('/');
            
            // console.log('root', urlRoot, 'host', loc.host, 'path', path, 'base', base, 'collectionname', collectionName);

            switch(loc.host) {
                case "127.0.0.1:9200":
                    if ( path.indexOf("_search") > -1 ) {
                        base = "app";
                        collectionName = path.split("/")[0];
                    } else if (base == "articles" || base == "slides") {
                        collectionName = base;
                        base = 'app';
                        id = undefined;
                    // } else if ( path.indexOf("articles") > -1 ) {
                    //     base = "app";
                    //     collectionName = "articles";
                    //     id = path.split("/")[2] || '';
                    }
                break;
                case "fishwatch.noaa.mobomo.net":
                    // console.log('inside path');
                break;
            }

            const resourceUrl = urlRoot + base + '/' + collectionName + '/';
            [collectionName] = collectionName.split('.'); // ignore anything after the '.', e.g., '.json'
            const query = loc.search && new URLSearchParams(loc.search.substr(1));

            const result = { base, collectionName, id, query, resourceUrl };
            console.log('override parseUrl: ', result);
            return result;
        } catch (err) {
        const msg = `unable to parse url '${url}'; original error: ${err.message}`;
        throw new Error(msg);
        }
    };

private getLocation(href: string) {
    const l = document.createElement('a');
    l.href = href;
    return l;
  };

}