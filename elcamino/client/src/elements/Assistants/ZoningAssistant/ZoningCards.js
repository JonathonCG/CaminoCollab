// These are the 'cards' shown in the Assistant
import { Text } from "@nextui-org/react";

export const ZoningCards = [
    {questionText: 'Pre-Application Meeting Request',
    categoryText: 'Request',
    id: 0, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/56/0/0',
    addinfo: 'Most Zoning requests and processes require an initial meeting to state your intentions to be approved or denied in front either the Board of Commissioners or the Board of Zoning Appeals.',
    endpage: true,
    requirements: [0,1],
    },
    {questionText: 'BoC Hearing Required', 
    categoryText: 'Request Category',
    id: 1, 
    nextPage: 1,
    endpagelink: '',
    addinfo: 'Board of Commissioners hearing required for these requests: Conditional Use Permit, Future Land Use Map Amendment, Planned Unit Development, PUD Concept Plan, Rezoning, Zoning Modification of conditions.',
    endpage: false,
    requirements: [],
    },
    {questionText: 'Subdivision and Combination', 
    categoryText: 'Request Category',
    id: 2, 
    nextPage: 2,
    endpagelink: '',
    addinfo: 'Requests relevant to subdividing and combining parcels.',
    endpage: false,
    requirements: [],
    },
    {questionText: 'Site Development', 
    categoryText: 'Request',
    id: 3, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/37/0/0',
    addinfo: 'Request to develop land.',
    endpage: true,
    requirements: [29,30,6,11,31,32,33,34,35,36,37,38,39,40],
    },
    {questionText: 'Trees', 
    categoryText: 'Request Category',
    id: 4, 
    nextPage: 3,
    endpagelink: '',
    addinfo: 'Requests related to the harvesting or removal of trees.',
    endpage: false,
    requirements: [],
    },
    {questionText: 'Zoning Verification Letter', 
    categoryText: 'Request',
    id: 5, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/60/0/0',
    addinfo: "Request the official documentation of a property's current zoning classification.",
    endpage: true,
    requirements: [0,1],
    },
    {questionText: 'Board of Zoning Appeals', 
    categoryText: 'Request Category',
    id: 6, 
    nextPage: 4,
    endpagelink: '',
    addinfo: 'Requests for Variance and to appeal Zoning Decisions.',
    endpage: false,
    requirements: [],
    },
    {questionText: 'Conditional Use Permit', 
    categoryText: 'Request',
    id: 7, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/132/0/0',
    addinfo: 'Request use that is designated by the Zoning Ordinance as being permitted in the district concerned if it meets special conditions, if found to be appropriate and upon application, is specifically authorized by the Board of Commissioners.',
    endpage: true,
    requirements: [2,3,4,5,6,7,8,9,10,11],
    },
    {questionText: 'Future Land-Use Map Amendment', 
    categoryText: 'Request',
    id: 8, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/131/0/0',
    addinfo: "Request to change the Comprehensive Plan's Future Land-Use Category for a specific parcel.",
    endpage: true,
    requirements: [2,3,8,4,5,6],
    },
    {questionText: 'PUD Concept Plan', 
    categoryText: 'Request',
    id: 9, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/161/0/0',
    addinfo: 'Request to review a PUD concept plan, required before continuing with PUD.',
    endpage: true,
    requirements: [2,3,4,5,6,16,17,15,53,11],
    },
    {questionText: 'Planned Unit Development', 
    categoryText: 'Request',
    id: 10, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/126/0/0',
    addinfo: 'Request to develop a large-scale unified development meeting the requirements of the Zoning Ordinance.',
    endpage: true,
    requirements: [2,12,3,4,5,6,16,17,13,53,14,11],
    },
    {questionText: 'Rezoning', 
    categoryText: 'Request',
    id: 11, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/129/0/0',
    addinfo: 'Request to amend the Official Zoning Map for a specific parcel when the current zoning district does not permit a proposed use.',
    endpage: true,
    requirements: [2,3,4,5,6,7,8,9,10,11],
    },
    {questionText: 'Zoning Modifications', 
    categoryText: 'Request',
    id: 12, 
    nextPage: 0,
    endpagelink: 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/130/0/0',
    addinfo: 'Request to change the rules of a specific zoning classification.',
    endpage: true,
    requirements: [2,3,4,5,6,7,8,9,10,11],
    },
    {questionText: 'Lot Combination', 
    categoryText: 'Request',
    id: 13, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/136/0/0',
    addinfo: 'Request to combine 2 or more lots.',
    endpage: true,
    requirements: [2,25,6,18],
    },
    {questionText: 'Lot Line Adjustment', 
    categoryText: 'Request',
    id: 14, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/137/0/0',
    addinfo: 'Request to re-parcel the lot lines of 2 or more lots.',
    endpage: true,
    requirements: [3,25,6,19],
    },
    {questionText: 'Minor Subdivision', 
    categoryText: 'Request',
    id: 15, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/128/0/0',
    addinfo: 'Request a division of land into no more than four (4) lots, provided certain conditions are met.',
    endpage: true,
    requirements: [3,25,6,20],
    },
    {questionText: 'Preliminary Plat', 
    categoryText: 'Request',
    id: 16, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/135/0/0',
    addinfo: 'Request a division of land into five (5) or more lots, or less than five (5) if the subdivision requires new streets. Preliminary Plat is the first step in the process.',
    endpage: true,
    requirements: [3,25,6,23,21,22,24],
    },
    {questionText: 'Final Plat', 
    categoryText: 'Request',
    id: 17, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/134/0/0',
    addinfo: 'Request a division of land five (5) or more lots, or less than five (5) if the subdivision requires new streets. Final Plat is the final step in the process.',
    endpage: true,
    requirements: [3,25,26,27,28,24],
    },
    {questionText: 'Tree Removal', 
    categoryText: 'Request',
    id: 18, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/125/0/0',
    addinfo: 'Request removal of any tree with a diameter breast height of six inches or greater or the removal of three or more trees with individual diameter breast heights of less than six inches.',
    endpage: true,
    requirements: [3,30,6,23,41],
    },
    {questionText: 'Timber Harvesting', 
    categoryText: 'Request',
    id: 19, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/127/0/0',
    addinfo: 'Request removal of timber for purposes of sale or profit for wood product purposes, such as lumber, biomass or fire wood.',
    endpage: true,
    requirements: [3,42,43,44,45,46],
    },
    {questionText: 'Administrative Appeal', 
    categoryText: 'Request',
    id: 20, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/35/0/0',
    addinfo: 'Request the review of a decision made by an official or department of county government.',
    endpage: true,
    requirements: [2,47,48,49,4,6],
    },
    {questionText: 'Variance', 
    categoryText: 'Request',
    id: 21, 
    nextPage: 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/plan/apply/36/0/0',
    addinfo: 'Request a deviation from the Zoning Ordinance prescribed to a parcel',
    endpage: true,
    requirements: [2,50,4,6,7,51,52,53,11],
    },
    ];


