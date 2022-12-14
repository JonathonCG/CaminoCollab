import _24rightchevron from '../graphics/24rightchevron.png'
import _32rightchevron from '../graphics/32rightchevron.png'
import _logo from '../graphics/logo.svg'
import _rightchevron from '../graphics/rightchevron.png'

import _celltowernew from '../graphics/cell-tower-new.png'
import _celltowerupgrade from '../graphics/cell-tower-upgrade.png'
import _commercialbuilding from '../graphics/commercial-building.png'
import _company from '../graphics/company.png'
import _duct from '../graphics/duct.png'
import _factory from '../graphics/factory.png'
import _firesprinkler from '../graphics/fire-sprinkler.png'
import _garage from '../graphics/garage.png'
import _gas from '../graphics/gas.png'
import _house from '../graphics/house.png'
import _househouse from '../graphics/house-house.png'
import _jackhammer from '../graphics/jackhammer.png'
import _jackhammerhammer from '../graphics/jackhammer-hammer.png'
import _jackhammerinterior from '../graphics/jackhammer-interior.png'
import _jackhammershop from '../graphics/jackhammer-shop.png'
import _lightning from '../graphics/lightning.png'
import _lightningarrow from '../graphics/lightning-arrow.png'
import _mechanical from '../graphics/mechanical.png'
import _mobilehome from '../graphics/mobile-home.png'
import _office from '../graphics/office.png'
import _plugunplug from '../graphics/plug-unplug.png'
import _plumbing from '../graphics/plumbing.png'
import _plus from '../graphics/plus.png'
import _prefabhome from '../graphics/prefab-home.png'
import _religion from '../graphics/religion.png'
import _shop from '../graphics/shop.png'
import _signfix from '../graphics/sign-fix.png'
import _signnew from '../graphics/sign-new.png'
import _signresurface from '../graphics/sign-resurface.png'
import _signtemporary from '../graphics/sign-temporary.png'
import _sign from '../graphics/sign.png'
import _structural from '../graphics/structural.png'
import _timetablelightning from '../graphics/timetable-lightning.png'
import _timetablemechanical from '../graphics/timetable-mechanical.png'
import _timetableplumbing from '../graphics/timetable-plumbing.png'
import _tools from '../graphics/tools.png'
import _truckhouse from '../graphics/truck-house.png'

export const requirementGroups = [[1,8,14],[0,2,7,8,9,10,11,12,14,23],[0,7,9,10,11,12,14,23],[0,7,9,10,11,12,14,16,23],[0,7,9,10,11,12,14,23],[0,8,9,10,11,12,14,16],[0,9,10,11,12,14,23],[0,8,9,10,11,12,14,23],[7,10,11,12,14,23],[0,7,8,9,10,11,12,14,23],[0,3,4,5,7,8,9,10,11,12,14,23],[1,3,8,9,10,11,12,13,14],[0,1,3,4,8,9,10,11,12,13,14,22,26],[1,2,3,4,5,6,7,8,9,10,11,12,14,21,22,23,26],[10,11,14,19,21,23,26],[10,11,14,17,18,19],[10,11,14,17,18],[0,2,3,4,5,6,7,8,9,10,11,12,13,14,23],[6,10,11,12,13,14,23],[11,14,19,20,21],[11,14],[0,10,11,23],[0],[10,11,14],[10,11],[10,11,14],[14],[10,11,14],[10,11,14],[10,11,14],[10,11,14],[10,11,14],[10,11,14],[10,11,14],[],[10,11,14],[],[10,11,14],[10,11,14],[10,11,14],[4,10,11,14],[10,11,14],[],[],[],[],[],[],[3,22,24,25,26]]

export const prereqs = ['Site Plan','Survey (For Fence: Plat or Tax Map)','Flood Elevation Certificate (If Appliable)','*Environmental Health','Contractor Affidavits','Energy Code Compliance Certificate','Sewer Bond','Floor Plan','Variance (If Applicable)','Grading Permit (If applicable)','State License','Business License','Authorized Agent Form   (If Applicable)','Homeowner Affidavit (If Applicable','Identification','HVAC Letter','Engineering Letter  (If Applicable)','Mobile Home Registration','Mobile Home Tax Receipt','Property Tax Verification','Refund Request Letter','Cash Bond Required','Event Route','Elevations w/ Finish Materials','Police Approval','Fire Marshal Permit','GDOT / County T&D Permit'];

export const Questions = [
    {questionText : 'Commercial Building', 
    id : 0, 
    nextPage : 1,
    icon : _company,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 0},
    {questionText : 'Residential Building', 
    id : 1, 
    nextPage : 2,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Demolition', 
    id : 2, 
    nextPage : 3,
    icon : _jackhammer,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Electrical', 
    id : 3, 
    nextPage : 4,
    icon : _lightning,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Mechanical', 
    id : 4, 
    nextPage : 5,
    icon : _mechanical,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Plumbing', 
    id : 5, 
    nextPage : 6,
    icon : _plumbing,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Sign', 
    id : 6, 
    nextPage : 7,
    icon : _sign,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : false,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Accessory Structure', 
    id : 7, 
    nextPage : 0,
    icon : _garage,
    endpagetext : 'An accessory structure is a structure which is on the same parcel of property as a principal structure and the use of which is incidental to the use of the principal structure. For example a residential structure may have a detached garage or storage shed for garden tools as accessory structures',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Addition', 
    id : 8, 
    nextPage : 0,
    icon : _plus,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Building Shell', 
    id : 9, 
    nextPage : 1,
    icon : _structural,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Communication Tower Upgrade', 
    id : 10, 
    nextPage : 4,
    icon : _celltowerupgrade,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Industrial', 
    id : 11, 
    nextPage : 5,
    icon : _factory,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'New Communication Tower', 
    id : 12, 
    nextPage : 3,
    icon : _celltowernew,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Office/Institutional',
    id : 13, 
    nextPage : 3,
    icon : _office,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Places of Worship',
    id : 14, 
    nextPage : 3,
    icon : _religion,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Renovation/Alteration',
    id : 15, 
    nextPage : 3,
    icon : _tools,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Retail',
    id : 16, 
    nextPage : 3,
    icon : _shop,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Accessory Dwelling',
    id : 17, 
    nextPage : 3,
    icon : _househouse,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Accessory Structure',
    id : 18, 
    nextPage : 3,
    icon : _garage,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Addition',
    id : 19, 
    nextPage : 3,
    icon : _plus,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'House Moving, Into the County',
    id : 20, 
    nextPage : 3,
    icon : _truckhouse,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'House Moving, Out/Thru the County',
    id : 21, 
    nextPage : 3,
    icon : _truckhouse,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Mobile Home',
    id : 22, 
    nextPage : 3,
    icon : _mobilehome,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Model Home',
    id : 23, 
    nextPage : 3,
    icon : _prefabhome,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'New Home',
    id : 24, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Renovation/Alteration',
    id : 25, 
    nextPage : 3,
    icon : _tools,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Demolition, Not to Rebuild',
    id : 26, 
    nextPage : 3,
    icon : _jackhammer,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Demolition, to Rebuild',
    id : 27, 
    nextPage : 3,
    icon : _jackhammerhammer,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Facade Demolition',
    id : 28, 
    nextPage : 3,
    icon : _jackhammershop,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/businessLicense/apply/business/149',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Interior Demolition',
    id : 29, 
    nextPage : 3,
    icon : _jackhammerinterior,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Commercial, New',
    id : 30, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Commercial, Stand-Alone',
    id : 31, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Low-Voltage',
    id : 32, 
    nextPage : 3,
    icon : _lightningarrow,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Reconnect/Disconnect Only',
    id : 33, 
    nextPage : 3,
    icon : _plugunplug,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, New',
    id : 34, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, Stand-Alone',
    id : 35, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Temporary Utility, Electrical',
    id : 36, 
    nextPage : 3,
    icon : _timetablelightning,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},    
    {questionText : 'Commercial, New',
    id : 37, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/99/0/0',
    price : '',
    addinfo : 'Mechanical - Commercial New',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Commercial, Stand-Alone',
    id : 38, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/100/0/0',
    price : '',
    addinfo : 'Mechanical - Commercial Stand Alone',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Duct Work Only',
    id : 39, 
    nextPage : 3,
    icon : _duct,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/79/0/0',
    price : '',
    addinfo : 'Required for Duct Work',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Gas Reconnect',
    id : 40, 
    nextPage : 3,
    icon : _gas,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/78/0/0',
    price : '',
    addinfo : 'Required for Gas Reconnect',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, New',
    id : 41, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, Stand-Alone',
    id : 42, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/104/0/0',
    price : '',
    addinfo : 'Residential Standalone',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Temporary Utility, Mechanicial',
    id : 43, 
    nextPage : 3,
    icon : _timetablemechanical,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/102/0/0',
    price : '',
    addinfo : 'Mechanical - Temporary Utility',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Commercial, New',
    id : 44, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/73/0/0',
    price : '',
    addinfo : 'Required for New Commercial Plumbing Permit',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Commercial, Stand-Alone',
    id : 45, 
    nextPage : 3,
    icon : _company,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/74/0/0',
    price : '',
    addinfo : 'Required for Commercial Plumbing Stand Alone Permit',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Gas Reconnect',
    id : 46, 
    nextPage : 3,
    icon : _gas,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/94/0/0',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, New',
    id : 47, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Residential, Stand-Alone',
    id : 48, 
    nextPage : 3,
    icon : _house,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/76/0/0',
    price : '',
    addinfo : 'Required for Residential Plumbing Stand Alone',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Sprinkler',
    id : 49, 
    nextPage : 3,
    icon : _firesprinkler,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/77/0/0',
    price : '',
    addinfo : 'Required for Plumbing Sprinkler Permit',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Temporary Utility, Plumbing',
    id : 50, 
    nextPage : 3,
    icon : _timetableplumbing,
    endpagetext : '',
    endpagelink : '',
    price : '',
    addinfo : 'Not visible in EnerGov',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'New Signage',
    id : 51, 
    nextPage : 3,
    icon : _signnew,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/105/0/0',
    price : '',
    addinfo : '',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Reface an Existing Sign',
    id : 52, 
    nextPage : 3,
    icon : _signresurface,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/106/0/0',
    price : '',
    addinfo : 'Repair an existing sign',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Repair an Existing Sign',
    id : 53, 
    nextPage : 3,
    icon : _signfix,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/82/0/0',
    price : '',
    addinfo : 'Required for new signs',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'},
    {questionText : 'Temporary Signage',
    id : 54, 
    nextPage : 3,
    icon : _signtemporary,
    endpagetext : '',
    endpagelink : 'https://selfservice.claytoncountyga.gov/EnerGovProd/SelfService#/permit/apply/107/0/0',
    price : '',
    addinfo : 'Temporary sign permit',
    endpage : true,
    requirements : 'Survey (For Fence: Plat or Tax Map)'}
    ];

    //each array is a 'group' of cards displayed on screen at one time, values are the index of the 'Questions' array above.
export const QuestionGroups = [
    [0,1,2,3,4,5,6],
    [7,8,9,10,11,12,13,14,15,16],
    [17,18,19,20,21,22,23,24,25],
    [26,27,28,29],
    [30,31,32,33,34,35,36],
    [37,38,39,40,41,42,43],
    [44,45,46,47,48,49,50],
    [51,52,53,54]
];

