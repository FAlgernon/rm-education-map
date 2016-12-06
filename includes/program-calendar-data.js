
// Risk Management Education Calendar Filter
// to check errors: use http://www.jslint.com/ with comment below (ignore whitespace characters) included
/*jslint white: true */
var rmData = {
    program_year: 2016,
    title: "2016 Risk Management Programs",
    location_data: [ 
        {
        location_code: "annapolis",
        city: "Annapolis",
        location: "DoubleTree Hotel",
        address: "210 Holiday Court",
        phone: "410-224-3150"
        },
        {
        location_code: "baltimore",
        city: "Baltimore",
        location: "Mt. Washington Conference Center",
        address: "5801 Smith Avenue, Suite 1100",
        phone: "410-735-7964"
        },
		{
        location_code: "bel_air",
        city: "Bel Air",
        location: "Upper Chesapeake Medical Center",
        address: "500 Upper Chesapeake Drive",
        phone: "443-643-1000"
        },
        {
        location_code: "bethesda",
        city: "Bethesda",
        location: "Suburban Hospital",
        address: "8600 Old Georgetown Road",
        phone: "301-896-3100"
        },
        {
        location_code: "chestertown",
        city: "Chestertown",
        location: "The University of Maryland Shore Medical Center at Chestertown",
        address: "100 Brown Street",
        phone: "410-778-3300"
        },
        {
        location_code: "clinton",
        city: "Clinton",
        location: "Colony South Hotel",
        address: "7401 Surratts Road",
        phone: "301-856-4500"
        },
        {
        location_code: "columbia",
        city: "Columbia",
        location: "The Meeting House",
        address: "5885 Robert Oliver Place",
        phone: "410-730-4090"
        },
        {
        location_code: "cumberland1",
        city: "Cumberland",
        location: "Western Maryland Regional Medical Center",
        address: "12500 Willowbrook Road",
        phone: "301-723-4200"
        },
        {
        location_code: "cumberland2",
        city: "Cumberland",
        location: "Fairfield Inn & Suites",
        address: "21 North Wineow Street",
        phone: "301-722-0340"
        },
        {
        location_code: "easton",
        city: "Easton",
        location: "Comfort Inn",
        address: "8523 Ocean Gateway",
        phone: "410-820-8333"
        },
        {
        location_code: "elkton",
        city: "Elkton",
        location: "Union Hospital",
        address: "106 Bow Street",
        phone: "410-398-4000"
        },
        {
        location_code: "frederick",
        city: "Frederick",
        location: "Hilton Garden Inn",
        address: "7226 Corporate Court",
        phone: "240-566-1500"
        },
        {
        location_code: "hagerstown",
        city: "Hagerstown",
        location: "Hager Hall Conference & Event Center",
        address: "910 Dual Highway",
        phone: "301-797-9004"
        },
        {
        location_code: "hunt_valley",
        city: "Hunt Valley",
        location: "MEDICAL MUTUAL",
        address: "225 International Circle",
        phone: "410-785-0050"
        },
        {
        location_code: "lanham",
        city: "Lanham",
        location: "Best Western Hotel",
        address: "5910 Princess Garden Parkway",
        phone: "301-459-1000"
        },
        {
        location_code: "laurel",
        city: "Laurel",
        location: "Laurel Regional Hospital",
        address: "7300 Van Dusen Road",
        phone: "301-725-4300"
        },
        {
        location_code: "leonardtown",
        city: "Leonardtown",
        location: "St. Mary's Hospital",
        address: "25500 Point Lookout Road",
        phone: "301-475-8981"
        },
        {
        location_code: "rockville1",
        city: "Rockville",
        location: "Hilton Garden Inn",
        address: "14975 Shady Grove Road",
        phone: "240-507-1800"
        },
        {
        location_code: "rockville2",
        city: "Rockville",
        location: "The Universities at Shady Grove",
        address: "9630 Gudelsky Drive",
        phone: "301-738-6000"
        },
        {
        location_code: "salisbury1",
        city: "Salisbury",
        location: "Peninsula Regional Medical Center",
        address: "100 East Carroll Street",
        phone: "410-546-6400"
        },
        {
        location_code: "salisbury2",
        city: "Salisbury",
        location: "Wicomico Youth & Civic Center",
        address: "500 Glen Avenue",
        phone: "410-548-4900"
        },
        {
        location_code: "silver_spring",
        city: "Silver Spring",
        location: "Holy Cross Hospital",
        address: "1500 Forest Glen Road",
        phone: "301-754-3404"
        },
        {
        location_code: "waldorf",
        city: "Waldorf",
        location: "Hilton Garden Inn",
        address: "10385 O’Donnell Place",
        phone: "240-222-0000"
        }    
        
/* repeated for each location */
    ],
    program_data: [ {
        program_code: "LI",
        title: "Legal Issues: A Review of Legal Documents in the Practice Setting",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "PE",
        title: "Closed Claim Study: Physician Extenders",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "RI",
        title: "Risk Issues in Telemedicine",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "EC",
        title: "Electronic Communications in Health Care",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
	{
        program_code: "PC",
        title: "Primary Care",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
	{
        program_code: "OP",
        title: "Ophthalmology",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "SUR",
        title: "Surgery",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "PED",
        title: "Pediatrics",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "EM",
        title: "Emergency Medicine",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "OG",
        title: "OB/GYN",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
	{
        program_code: "PA",
        title: "Risk Issues in Pathology",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01",
        "program_image": "optional..."
    },
    {
        program_code: "PM",
        title: "Practice Matters: Medical Billing FAQs",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMOFF&AAbfgA=01",
        "program_image": "optional..."
    }
	
    /* repeated for each program */
    ],
    program_events: [ 
    
    /* Legal Issues: A Review of Legal Documents in the Practice Setting */
{date: "3/9/2016", program_code: "LI", location_code: "hunt_valley", code: 5041},
{date: "3/15/2016", program_code: "LI", location_code: "silver_spring", code: 5042},
{date: "3/31/2016", program_code: "LI", location_code: "easton", code: 5043},
{date: "4/5/2016", program_code: "LI", location_code: "frederick", code: 5044},
{date: "4/20/2016", program_code: "LI", location_code: "bel_air", code: 5045},
{date: "4/28/2016", program_code: "LI", location_code: "cumberland1", code: 5046},
{date: "5/19/2016", program_code: "LI", location_code: "salisbury1", code: 5047},
{date: "5/24/2016", program_code: "LI", location_code: "rockville2", code: 5048},
{date: "6/22/2016", program_code: "LI", location_code: "lanham", code: 5049},
{date: "6/30/2016", program_code: "LI", location_code: "laurel", code: 5050},
{date: "7/21/2016", program_code: "LI", location_code: "chestertown", code: 5051},
{date: "7/28/2016", program_code: "LI", location_code: "hagerstown", code: 5052},
{date: "8/9/2016", program_code: "LI", location_code: "waldorf", code: 5053},
{date: "8/18/2016", program_code: "LI", location_code: "columbia", code: 5054},
{date: "9/1/2016", program_code: "LI", location_code: "annapolis", code: 5055},
{date: "9/27/2016", program_code: "LI", location_code: "hunt_valley", code: 5056},

    /* Closed Claim Study: Physician Extenders */
{date: "3/21/2016", program_code: "PE", location_code: "lanham", code: 5057},
{date: "4/13/2016", program_code: "PE", location_code: "rockville1", code: 5058},
{date: "4/21/2016", program_code: "PE", location_code: "columbia", code: 5059},
{date: "5/25/2016", program_code: "PE", location_code: "elkton", code: 5060},
{date: "5/31/2016", program_code: "PE", location_code: "frederick", code: 5061},
{date: "6/13/2016", program_code: "PE", location_code: "baltimore", code: 5062},
{date: "7/18/2016", program_code: "PE", location_code: "annapolis", code: 5063},
{date: "9/7/2016", program_code: "PE", location_code: "hunt_valley", code: 5064},

    /* Risk Issues in Telemedicine */
{date: "3/17/2016", program_code: "RI", location_code: "salisbury1", code: 5065},
{date: "4/18/2016", program_code: "RI", location_code: "hunt_valley", code: 5066},
{date: "5/11/2016", program_code: "RI", location_code: "annapolis", code: 5067},
{date: "6/2/2016", program_code: "RI", location_code: "clinton", code: 5068},
{date: "6/28/2016", program_code: "RI", location_code: "frederick", code: 5069},
{date: "7/25/2016", program_code: "RI", location_code: "easton", code: 5070},
{date: "8/25/2016", program_code: "RI", location_code: "cumberland1", code: 5071},
{date: "8/30/2016", program_code: "RI", location_code: "silver_spring", code: 5120},
{date: "9/21/2016", program_code: "RI", location_code: "bel_air", code: 5121},

    /* Electronic Communications In Health Care */
{date: "3/1/2016", program_code: "EC", location_code: "hunt_valley", code: 5072},
{date: "3/23/2016", program_code: "EC", location_code: "bethesda", code: 5073},
{date: "4/27/2016", program_code: "EC", location_code: "clinton", code: 5074},
{date: "5/12/2016", program_code: "EC", location_code: "silver_spring", code: 5075},
{date: "5/26/2016", program_code: "EC", location_code: "leonardtown", code: 5076},
{date: "6/26/2016", program_code: "EC", location_code: "rockville1", code: 5077},
{date: "6/27/2016", program_code: "EC", location_code: "columbia", code: 5078},
{date: "8/4/2016", program_code: "EC", location_code: "salisbury1", code: 5079},
{date: "8/23/2016", program_code: "EC", location_code: "lanham", code: 5080},
{date: "9/1/2016", program_code: "EC", location_code: "hunt_valley", code: 5081},
{date: "9/8/2016", program_code: "EC", location_code: "laurel", code: 5082},

    /* Specialty Specifics */
    /* Primary Care */
{date: "3/22/2016", program_code: "PC", location_code: "hunt_valley", code: 4993},
{date: "3/29/2016", program_code: "PC", location_code: "frederick", code: 4994},
{date: "4/7/2016", program_code: "PC", location_code: "lanham", code: 4995},
{date: "4/25/2016", program_code: "PC", location_code: "laurel", code: 4996},
{date: "6/14/2016", program_code: "PC", location_code: "bel_air", code: 4997},
{date: "6/23/2016", program_code: "PC", location_code: "cumberland1", code: 4998},
{date: "7/26/2016", program_code: "PC", location_code: "silver_spring", code: 4999},
{date: "8/31/2016", program_code: "PC", location_code: "hunt_valley", code: 5000},
{date: "9/29/2016", program_code: "PC", location_code: "salisbury1", code: 5001},

    /* Ophthamology */
{date: "3/14/2016", program_code: "OP", location_code: "hunt_valley", code: 5092},
{date: "5/2/2016", program_code: "OP", location_code: "rockville1", code: 5093},
{date: "6/20/2016", program_code: "OP", location_code: "columbia", code: 5119},
{date: "8/11/2016", program_code: "OP", location_code: "hunt_valley", code: 5094},
{date: "9/28/2016", program_code: "OP", location_code: "annapolis", code: 5095},

    /* Surgery */
{date: "3/10/2016", program_code: "SUR", location_code: "columbia", code: 5096},
{date: "4/11/2016", program_code: "SUR", location_code: "hunt_valley", code: 5097},
{date: "5/4/2016", program_code: "SUR", location_code: "clinton", code: 5098},
{date: "6/8/2016", program_code: "SUR", location_code: "annapolis", code: 5099},
{date: "8/17/2016", program_code: "SUR", location_code: "bethesda", code: 5100},
{date: "9/13/2016", program_code: "SUR", location_code: "hunt_valley", code: 5101},

    /* Pediatrics */
{date: "4/26/2016", program_code: "PED", location_code: "hunt_valley", code: 5102},
{date: "5/13/2016", program_code: "PED", location_code: "annapolis", code: 5103},
{date: "6/16/2016", program_code: "PED", location_code: "silver_spring", code: 5104},
{date: "8/29/2016", program_code: "PED", location_code: "frederick", code: 5105},
{date: "9/6/2016", program_code: "PED", location_code: "columbia", code: 5106},
	
    /* Emergency Medicine */
{date: "5/9/2016", program_code: "EM", location_code: "bethesda", code: 5107},
{date: "6/7/2016", program_code: "EM", location_code: "lanham", code: 5108},
{date: "7/19/2016", program_code: "EM", location_code: "frederick", code: 5109},
{date: "8/22/2016", program_code: "EM", location_code: "hunt_valley", code: 5110},
{date: "9/22/2016", program_code: "EM", location_code: "annapolis", code: 5111},
{date: "10/6/2016", program_code: "EM", location_code: "salisbury1", code: 5112},
	
	/* OBGYN */
{date: "3/16/2016", program_code: "OG", location_code: "bethesda", code: 5113},    
{date: "4/25/2016", program_code: "OG", location_code: "hunt_valley", code: 5114},
{date: "5/23/2016", program_code: "OG", location_code: "clinton", code: 5115},    
{date: "6/21/2016", program_code: "OG", location_code: "annapolis", code: 5116},
{date: "8/3/2016", program_code: "OG", location_code: "columbia", code: 5117},
{date: "9/15/2016", program_code: "OG", location_code: "hunt_valley", code: 5118},

	/* Pathology */
{date: "10/17/2016", program_code: "PA", location_code: "columbia", code: 5137},
       
    /* Medical Office Staff */
    /* Practice Matters: Medical Billing FAQs */
{date: "3/29/2016", program_code: "PM", location_code: "hunt_valley", code: 2940},
{date: "4/12/2016", program_code: "PM", location_code: "rockville1", code: 2941},
{date: "5/17/2016", program_code: "PM", location_code: "columbia", code: 2942},
{date: "6/21/2016", program_code: "PM", location_code: "cumberland2", code: 2943},
{date: "8/9/2016", program_code: "PM", location_code: "waldorf", code: 2944},
{date: "9/13/2016", program_code: "PM", location_code: "frederick", code: 2945},
{date: "10/18/2016", program_code: "PM", location_code: "hunt_valley", code: 2946},
{date: "10/25/2016", program_code: "PM", location_code: "salisbury2", code: 2947}
        ]
    };