// These are the 'cards' shown in the Assistant

export const LicenseCards = [
    {questionText : 'Commercial Business',
    categoryText : 'License Category',
    id : 0, 
    nextPage : 1,
    endpagelink : '',
    addinfo : 'Licenses for businesses based at commercially zoned properties',
    endpage : false,
    requirements : [],
    },
    {questionText : 'Home Business', 
    categoryText : 'License Category',
    id : 1, 
    nextPage : 2,
    endpagelink : '',
    addinfo : 'Licenses for businesses based at residentially zoned properties',
    endpage : false,
    requirements : [],
    },
    {questionText : 'Alcohol License', 
    categoryText : 'License',
    id : 2, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/150',
    addinfo : 'License for existing businesses to solicit alcohol',
    endpage : true,
    requirements : [27,28,29,30,31,32,33,8,4,6],
    },
    {questionText : 'General Business', 
    categoryText : 'License',
    id : 3, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : "License for businesses that don't fall into one of the other categories",
    endpage : true,
    requirements : [0,1,2,3,4,5,6,7,8],
    },
    {questionText : 'Food Service', 
    categoryText : 'License',
    id : 4, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'Business license for restaurants or anywhere that serves prepared food',
    endpage : true,
    requirements : [0,1,2,3,4,6,9],
    },
    {questionText : 'Cosmetic', 
    categoryText : 'License',
    id : 5, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'License for businesses specializing in hair, nails, makeup, and any other barber/salon service',
    endpage : true,
    requirements : [0,1,2,3,4,6,10,11],
    },
    {questionText : 'Grocery', 
    categoryText : 'License',
    id : 6, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'Business license for grocery and convenience stores',
    endpage : true,
    requirements : [0,1,2,3,4,6,12,13],
    },
    {questionText : 'Certified Professional', 
    categoryText : 'License',
    id : 7, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'Business license for certified professionals such as doctors, lawyers, attorneys, therapists, architects, social workers, surveyors, dentists, and engineers.',
    endpage : true,
    requirements : [0,1,2,3,4,6,14,15],
    },
    {questionText : 'Trades Contractor', 
    categoryText : 'License',
    id : 8, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'License for businesses in the building, plumbing, electrical, and HVAC trades',
    endpage : true,
    requirements : [0,1,2,3,4,6,16],
    },
    {questionText : 'Lodging', 
    categoryText : 'License',
    id : 9, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    addinfo : 'Business license for hotels, motels, extended stays, etc.',
    endpage : true,
    requirements : [0,1,2,3,4,6,17],
    },
    {questionText : 'Short-Term Rental', 
    categoryText : 'License Category',
    id : 10, 
    nextPage : 3,
    endpagelink : '',
    addinfo : 'Licenses for short-term and vacation rentals, like Airbnb, for less than a month',
    endpage : false,
    requirements : [],
    },
    {questionText : 'Home Business Zoning Code', 
    categoryText : 'Information',
    id : 11, 
    nextPage : 0,
    endpagelink : 'https://library.municode.com/ga/clayton_county/codes/code_of_ordinances?nodeId=PTIICOCLCOGE_APXAZO_ART6DEST_S6.10HOOCSTHO',
    addinfo : 'Click this to open Clayton County Zoning Code Section 6.10. Subsection HO-02 defines the Type 1 License, while HO-03 defines the Type 2 License.',
    endpage : true,
    requirements : [],
    },
    {questionText : 'Type 1', 
    categoryText : 'License',
    id : 12, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/153',
    addinfo : 'License for home-based as defined forth in Section 6.10, HO-02 of Clayton County Zoning Code.',
    endpage : true,
    requirements : [18,2,3,4,5,21,7,8,22,23],
    },
    {questionText : 'Type 2', 
    categoryText : 'License',
    id : 13, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/153',
    addinfo : 'License for home-based as defined forth in Section 6.10, HO-03 of Clayton County Zoning Code. Needs Board Approval.',
    endpage : true,
    requirements : [20,3,4,5,21,7,8,22,23],
    },
    {questionText : 'Vacation Rental', 
    categoryText : 'License',
    id : 14, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/168',
    addinfo : 'License for renting properties short-term',
    endpage : true,
    requirements : [24,18,2,3,4,5,6,25,26],
    },
    {questionText : 'Short-Term Rental', 
    categoryText : 'License',
    id : 15, 
    nextPage : 0,
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/168',
    addinfo : 'License for renting rooms, or other spaces of an owner-occupied property short-term',
    endpage : true,
    requirements : [24,18,2,3,4,5,21,25,26],
    },
    ];
