// These are the 'cards' shown in the Assistant
export const AssistantCards = [
    {questionText : 'Non-Residential', 
    id : 0, 
    nextPage : 1,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for non-residential properties; places you shop, work, and practice religion',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Residential', 
    id : 1, 
    nextPage : 2,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for residential properties',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Demolition', 
    id : 2, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for destroying a building or any piece of it',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Electrical', 
    id : 3, 
    nextPage : 5,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for electrical projects',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Mechanical', 
    id : 4, 
    nextPage : 7,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for mechanical projects; includes HVAC, boilers, etc.',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Plumbing', 
    id : 5, 
    nextPage : 9,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for plumbing projects',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Signs', 
    id : 6, 
    nextPage : 11,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Accessory Structure', 
    id : 7, 
    nextPage : 0,
    endpagetext : 'An accessory structure is a structure which is on the same parcel of property as a principal structure and the use of which is incidental to the use of the principal structure. For example a residential structure may have a detached garage or storage shed for garden tools as accessory structures',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/66/0/0',
    price : '',
    addinfo : 'Required for building an accessory structure',
    endpage : true,
    requirements : [1,8,14,16,30,31],
    bgImg : ''},
    {questionText : 'Addition', 
    id : 8, 
    nextPage : 0,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/46/0/0',
    price : '',
    addinfo : 'Required when adding on to an existing commerical structure',
    endpage : true,
    requirements : [0,7,8,9,10,11,12,14,23,30],
    bgImg : ''},
    {questionText : 'Building Shell', 
    id : 9, 
    nextPage : 1,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/47/0/0',
    price : '',
    addinfo : 'Required when building only the outer shell of a building',
    endpage : true,
    requirements : [0,7,9,10,11,12,14,23],
    bgImg : ''},
    {questionText : 'Communication Tower Upgrade', 
    id : 10, 
    nextPage : 4,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/65/0/0',
    price : '',
    addinfo : 'Required when making changes or updates to existing communication tower',
    endpage : true,
    requirements : [0,10,11,12,14,16,23],
    bgImg : ''},
    {questionText : 'Industrial', 
    id : 11, 
    nextPage : 5,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/48/0/0',
    price : '',
    addinfo : 'Required when building an industrial building',
    endpage : true,
    requirements : [0,7,9,10,11,12,14,23,30,31],
    bgImg : ''},
    {questionText : 'New Communication Tower', 
    id : 12, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/64/0/0',
    price : '',
    addinfo : 'Required for erecting a new communication tower',
    endpage : true,
    requirements : [0,8,9,10,11,12,14,16,30],
    bgImg : ''},
    {questionText : 'Office/Institutional',
    id : 13, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/61/0/0',
    price : '',
    addinfo : 'Required for building an Office or Institutional space',
    endpage : true,
    requirements : [0,7,9,10,11,12,14,16,23,30,31],
    bgImg : ''},
    {questionText : 'Places of Worship',
    id : 14, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/62/0/0',
    price : '',
    addinfo : 'Required for building a Place of Worship',
    endpage : true,
    requirements : [0,8,9,10,11,12,14,16,23,30,31],
    bgImg : ''},
    {questionText : 'Renovation/Alteration',
    id : 15, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/63/0/0',
    price : '',
    addinfo : 'Any renovation or alteration to an existing commercial building.',
    endpage : true,
    requirements : [10,11,12,14,16,23,27,28,30,31],
    bgImg : ''},
    {questionText : 'Retail',
    id : 16, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/49/0/0',
    price : '',
    addinfo : 'Permit required for retail building establishment',
    endpage : true,
    requirements : [0,7,9,10,11,12,14,16,23,29,30,31],
    bgImg : ''},
    {questionText : 'Accessory Dwelling',
    id : 17, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/38/0/0',
    price : '',
    addinfo : 'Required for building another inhabitable building on a residential property that already has an existing main dwelling.',
    endpage : true,
    requirements : [0,3,4,5,7,8,9,10,11,12,14,23],
    bgImg : ''},
    {questionText : 'Accessory Structure',
    id : 18, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/33/0/0',
    price : '',
    addinfo : 'An accessory structure is a structure which is on the same parcel of property as a principal structure and the use of which is incidental to the use of the principal structure. For example a residential structure may have a detached garage or storage shed for garden tools as accessory structures',
    endpage : true,
    requirements : [1,3,8,9,10,11,12,13,14],
    bgImg : ''},
    {questionText : 'Addition',
    id : 19, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/34/0/0',
    price : '',
    addinfo : 'Required for building a structure connected to the main structure such as a deck or room.',
    endpage : true,
    requirements : [1,3,4,8,9,10,11,12,13,14,22],
    bgImg : ''},
    {questionText : 'House Moving, Into the County',
    id : 20, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/44/0/0',
    price : '',
    addinfo : 'Required when moving a Single Family House into of the County',
    endpage : true,
    requirements : [1,2,3,4,5,6,7,8,9,10,11,12,14,21,22,23,26],
    bgImg : ''},
    {questionText : 'House Moving, Out/Thru the County',
    id : 21, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/44/0/0',
    price : '',
    addinfo : 'Required when moving a Single Family House out or through the County',
    endpage : true,
    requirements : [10,11,14,19,21,23,26],
    bgImg : ''},
    {questionText : 'Mobile Home',
    id : 22, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/43/0/0',
    price : '',
    addinfo : 'Required when setting up a mobile home.',
    endpage : true,
    requirements : [10,11,14,17,18],
    bgImg : ''},
    {questionText : 'Model Home',
    id : 23, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Could not find on energov',
    endpage : true,
    requirements : [10,11,14,17,18],
    bgImg : ''},
    {questionText : 'New Home',
    id : 24, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/42/0/0',
    price : '',
    addinfo : 'Required for building a main residential dwelling on a property',
    endpage : true,
    requirements : [0,2,3,4,5,6,7,8,9,10,11,12,13,14,23],
    bgImg : ''},
    {questionText : 'Renovation/Alteration',
    id : 25, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/45/0/0',
    price : '',
    addinfo : 'Required when renovating an existing residential structure. Note: If existing damage of the structure is found to be greater than 49%, you must apply for a new building permit, not a renovation/alteration permit.',
    endpage : true,
    requirements : [10,11,12,13,14,23,27,28],
    bgImg : ''},
    {questionText : 'Demolition, Not to Rebuild',
    id : 26, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/95/0/0',
    price : '',
    addinfo : 'Demolition Not To Rebuild',
    endpage : true,
    requirements : [11,14,19,20,21],
    bgImg : ''},
    {questionText : 'Demolition, to Rebuild',
    id : 27, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/96/0/0',
    price : '',
    addinfo : 'Demolition To Rebuild',
    endpage : true,
    requirements : [11,14],
    bgImg : ''},
    {questionText : 'Facade Demolition',
    id : 28, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/97/0/0',
    price : '',
    addinfo : 'Facade Demolition',
    endpage : true,
    requirements : [0,10,11,23],
    bgImg : ''},
    {questionText : 'Interior Demolition',
    id : 29, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/98/0/0',
    price : '',
    addinfo : 'Interior Demolition',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Commercial, New',
    id : 30, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/39/0/0',
    price : '',
    addinfo : 'Electrical permit for new commercial buildings',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Commercial, Stand-Alone',
    id : 31, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/69/0/0',
    price : '',
    addinfo : 'Required for Commercial Electrical Standalone Permit',
    endpage : true,
    requirements : [10,11],
    bgImg : ''},
    {questionText : 'Low-Voltage',
    id : 32, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/71/0/0',
    price : '',
    addinfo : 'Required for Low Voltage Permit',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Reconnect/Disconnect Only',
    id : 33, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/70/0/0',
    price : '',
    addinfo : 'Required for Electrical Reconnect or Disconnect Only Permit',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Residential, New',
    id : 34, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'not visible',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Residential, Stand-Alone',
    id : 35, 
    nextPage : 3,
    endpagetext : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/68/0/0',
    endpagelink : '',
    price : '',
    addinfo : 'Required for Residential Electrical Standalone Permit',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Temporary Utility, Electrical',
    id : 36, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/32/0/0',
    price : '',
    addinfo : 'Electrical',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},    
    {questionText : 'Commercial, New',
    id : 37, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/99/0/0',
    price : '',
    addinfo : 'Mechanical - Commercial New',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Commercial, Stand-Alone',
    id : 38, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/100/0/0',
    price : '',
    addinfo : 'Mechanical - Commercial Stand Alone',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Duct Work Only',
    id : 39, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/79/0/0',
    price : '',
    addinfo : 'Required for Duct Work',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Gas Reconnect',
    id : 40, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/78/0/0',
    price : '',
    addinfo : 'Required for Gas Reconnect',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Residential, New',
    id : 41, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Residential, Stand-Alone',
    id : 42, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/104/0/0',
    price : '',
    addinfo : 'Residential Standalone',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Temporary Utility, Mechanicial',
    id : 43, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/102/0/0',
    price : '',
    addinfo : 'Mechanical - Temporary Utility',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Commercial, New',
    id : 44, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/73/0/0',
    price : '',
    addinfo : 'Required for New Commercial Plumbing Permit',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Commercial, Stand-Alone',
    id : 45, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/74/0/0',
    price : '',
    addinfo : 'Required for Commercial Plumbing Stand Alone Permit',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Gas Reconnect',
    id : 46, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/94/0/0',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Residential, New',
    id : 47, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Residential, Stand-Alone',
    id : 48, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/76/0/0',
    price : '',
    addinfo : 'Required for Residential Plumbing Stand Alone',
    endpage : true,
    requirements : [10,11,14],
    bgImg : ''},
    {questionText : 'Sprinkler',
    id : 49, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/77/0/0',
    price : '',
    addinfo : 'Required for Plumbing Sprinkler Permit',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Temporary Utility, Plumbing',
    id : 50, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'New Signage',
    id : 51, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/105/0/0',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Reface an Existing Sign',
    id : 52, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/106/0/0',
    price : '',
    addinfo : 'Repair an existing sign',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Repair an Existing Sign',
    id : 53, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/82/0/0',
    price : '',
    addinfo : 'Required for new signs',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Temporary Signage',
    id : 54, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/107/0/0',
    price : '',
    addinfo : 'Temporary sign permit',
    endpage : true,
    requirements : [],
    bgImg : ''},
    {questionText : 'Special Event',
    id : 55, 
    nextPage : 3,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/80/0/0',
    price : '',
    addinfo : 'Permits for things like concerts, 5Ks, 10Ks, etc.',
    endpage : true,
    requirements : [3,22,24,25,26],
    bgImg : ''},
    {questionText : 'Demolition',
    id : 56, 
    nextPage : 4,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for destroying a building or any piece of it',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Electrical',
    id : 57, 
    nextPage : 6,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for electrical projects',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Mechanical',
    id : 58, 
    nextPage : 8,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for mechanical projects; includes HVAC, boilers, etc.',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Plumbing',
    id : 59, 
    nextPage : 10,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for plumbing projects',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Moving a House',
    id : 60, 
    nextPage : 12,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for transporting homes in the county',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Construction',
    id : 61, 
    nextPage : 13,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for constructing/renovating buildings and places of worship',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Construction/Renovation',
    id : 62, 
    nextPage : 14,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Permits for constructing/renovating homes and other residential buildings',
    endpage : false,
    requirements : [],
    bgImg : ''},
    {questionText : 'Apartment Building',
    id : 63, 
    nextPage : 14,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/163/0/0',
    price : '',
    addinfo : 'Permit for constructing new apartment buildings',
    endpage : true,
    requirements : [0,7,9,10,11,12,14,23],
    bgImg : ''}
    ];


