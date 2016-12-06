
// Risk Management Education Calendar Filter
// to check errors: use http://www.jslint.com/ with comment below (ignore whitespace characters) included
/*jslint white: true */
var rmData = {
    program_year: 2015,
    title: "2015 Risk Management Programs",
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
        title: "Legal Issues: Standard of Care",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "RA",
        title: "Conducting a Security Risk Assessment",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "ICD",
        title: "ICD-10 Reprise (Yes, We Really Mean It This Time!)",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "PCAR",
        title: "Primary Care",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
	{
        program_code: "OPHTH",
        title: "Ophthalmology",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
	{
        program_code: "SURGE",
        title: "Surgery",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "OBGYN",
        title: "OB/GYN",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "PED",
        title: "Pediatrics",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "EMED",
        title: "Emergency Medicine",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    },
    {
        program_code: "SMEDIA",
        title: "Social Media and the Medical Practice",
        "program_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero dolor. Duis consequat eros diam, eu tempus felis malesuada non. In porta lorem nec interdum aliquet. Nunc lectus nibh, consectetur sed condimentum vel, condimentum facilisis justo. Proin augue ipsum, fermentum tristique gravida at, pretium ut elit. Sed rutrum vestibulum elit sed scelerisque. Praesent accumsan nisi sit amet nunc aliquam, non tincidunt magna vulputate.<br /><br />Duis tristique, ante non tincidunt eleifend, neque arcu adipiscing enim, et fringilla erat diam vel enim. Mauris mi leo, dapibus eu nulla ultricies, tempus ullamcorper massa. Aliquam suscipit quis nisi non faucibus. Vivamus venenatis orci dapibus purus dignissim laoreet. Quisque sed justo felis. Nulla vitae eleifend metus. Nunc luctus enim at erat suscipit eleifend. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc molestie, pulvinar ante ut, accumsan orci. Suspendisse lacinia nisi vehicula, sollicitudin eros nec, interdum nunc. Vestibulum tincidunt dui a risus luctus, sit amet auctor erat sodales. Quisque sit amet lobortis tellus. Nullam consequat sem quis aliquam sodales.',
        "register_url": "https://www.weinsuredocs.org/Prod/Risk",
        "program_image": "optional..."
    }
    
    /* repeated for each program */
    ],
    program_events: [ 
    
    /* Legal Issues: Standard of Care */
{date: "3/2/2015", program_code: "LI", location_code: "hunt_valley", code: 4956},
{date: "3/26/2015", program_code: "LI", location_code: "salisbury1", code: 4957},
{date: "4/21/2015", program_code: "LI", location_code: "silver_spring", code: 4858},
{date: "4/27/2015", program_code: "LI", location_code: "laurel", code: 4959},
{date: "5/6/2015", program_code: "LI", location_code: "annapolis", code: 4960},
{date: "5/20/2015", program_code: "LI", location_code: "bel_air", code: 4961},
{date: "6/10/2015", program_code: "LI", location_code: "clinton", code: 4962},
{date: "6/17/2015", program_code: "LI", location_code: "baltimore", code: 4963},
{date: "6/25/2015", program_code: "LI", location_code: "columbia", code: 4964},
{date: "7/14/2015", program_code: "LI", location_code: "easton", code: 4965},
{date: "8/5/2015", program_code: "LI", location_code: "silver_spring", code: 4966},
{date: "8/20/2015", program_code: "LI", location_code: "cumberland1", code: 4967},
{date: "9/10/2015", program_code: "LI", location_code: "hunt_valley", code: 4968},
{date: "9/21/2015", program_code: "LI", location_code: "leonardtown", code: 4969},

    /* Conducting a Security Risk Assessment */
{date: "3/23/2015", program_code: "RA", location_code: "columbia", code: 4970},
{date: "4/16/2015", program_code: "RA", location_code: "elkton", code: 4971},
{date: "5/26/2015", program_code: "RA", location_code: "hunt_valley", code: 4972},
{date: "6/11/2015", program_code: "RA", location_code: "rockville1", code: 4973},
{date: "8/4/2015", program_code: "RA", location_code: "laurel", code: 4974},

    /* ICD-10 Reprise */
{date: "3/9/2015", program_code: "ICD", location_code: "hunt_valley", code: 4975},
{date: "3/18/2015", program_code: "ICD", location_code: "silver_spring", code: 4976},
{date: "3/31/2015", program_code: "ICD", location_code: "easton", code: 4977},
{date: "4/9/2015", program_code: "ICD", location_code: "frederick", code: 4978},
{date: "4/29/2015", program_code: "ICD", location_code: "bel_air", code: 4979},
{date: "4/30/2015", program_code: "ICD", location_code: "cumberland1", code: 4980},
{date: "5/12/2015", program_code: "ICD", location_code: "hunt_valley", code: 4981},
{date: "5/18/2015", program_code: "ICD", location_code: "rockville2", code: 4982},
{date: "5/28/2015", program_code: "ICD", location_code: "salisbury", code: 4983},
{date: "6/22/2015", program_code: "ICD", location_code: "laurel", code: 4984},
{date: "6/30/2015", program_code: "ICD", location_code: "lanham", code: 4985},
{date: "7/16/2015", program_code: "ICD", location_code: "chestertown", code: 4986},
{date: "7/23/2015", program_code: "ICD", location_code: "hagerstown", code: 4987},
{date: "8/6/2015", program_code: "ICD", location_code: "waldorf", code: 4988},
{date: "8/17/2015", program_code: "ICD", location_code: "rockville2", code: 4989},
{date: "8/27/2015", program_code: "ICD", location_code: "columbia", code: 4990},
{date: "9/1/2015", program_code: "ICD", location_code: "hunt_valley", code: 4991},
{date: "9/8/2015", program_code: "ICD", location_code: "annapolis", code: 4992},

    /* Specialty Specifics */
    /* Primary Care */
{date: "3/5/2015", program_code: "PCAR", location_code: "frederick", code: 4993},
{date: "3/30/2015", program_code: "PCAR", location_code: "hunt_valley", code: 4994},
{date: "4/7/2015", program_code: "PCAR", location_code: "lanham", code: 4995},
{date: "5/21/2015", program_code: "PCAR", location_code: "leonardtown", code: 4996},
{date: "6/18/2015", program_code: "PCAR", location_code: "cumberland1", code: 4997},
{date: "7/20/2015", program_code: "PCAR", location_code: "silver_spring", code: 4998},
{date: "8/19/2015", program_code: "PCAR", location_code: "bel_air", code: 4999},
{date: "8/26/2015", program_code: "PCAR", location_code: "hunt_valley", code: 5000},
{date: "9/9/2015", program_code: "PCAR", location_code: "laurel", code: 5001},
{date: "10/1/2015", program_code: "PCAR", location_code: "salisbury", code: 5002},

    /* Ophthamology */
{date: "3/16/2015", program_code: "OPHTH", location_code: "hunt_valley", code: 5003},
{date: "5/27/2015", program_code: "OPHTH", location_code: "rockville1", code: 5004},
{date: "8/12/2015", program_code: "OPHTH", location_code: "hunt_valley", code: 5005},
{date: "9/16/2015", program_code: "OPHTH", location_code: "annapolis", code: 5006},

    /* Surgery */
{date: "3/16/2015", program_code: "SURGE", location_code: "columbia", code: 5007},
{date: "4/8/2015", program_code: "SURGE", location_code: "hunt_valley", code: 5008},
{date: "5/13/2015", program_code: "SURGE", location_code: "clinton", code: 5009},
{date: "6/3/2015", program_code: "SURGE", location_code: "annapolis", code: 5010},
{date: "8/4/2015", program_code: "SURGE", location_code: "hunt_valley", code: 5011},
{date: "8/10/2015", program_code: "SURGE", location_code: "bethesda", code: 5012},
	
	/* OBGYN */
{date: "3/24/2015", program_code: "OBGYN", location_code: "bethesda", code: 5013},    
{date: "4/13/2015", program_code: "OBGYN", location_code: "hunt_valley", code: 5014},
{date: "5/11/2015", program_code: "OBGYN", location_code: "rockville1", code: 5015},    
{date: "7/21/2015", program_code: "OBGYN", location_code: "columbia", code: 5016},
{date: "9/21/2015", program_code: "OBGYN", location_code: "hunt_valley", code: 5017},

    /* Pediatrics */
{date: "5/4/2015", program_code: "PED", location_code: "hunt_valley", code: 5018},
{date: "6/15/2015", program_code: "PED", location_code: "annapolis", code: 5019},
{date: "6/29/2015", program_code: "PED", location_code: "silver_spring", code: 5020},
{date: "8/18/2015", program_code: "PED", location_code: "frederick", code: 5021},
{date: "9/3/2015", program_code: "PED", location_code: "columbia", code: 5022},

    /* Emergency Medicine */
{date: "5/14/2015", program_code: "EMED", location_code: "bethesda", code: 5023},
{date: "6/2/2015", program_code: "EMED", location_code: "frederick", code: 5024},
{date: "7/1/2015", program_code: "EMED", location_code: "hunt_valley", code: 5025},
{date: "8/31/2015", program_code: "EMED", location_code: "lanham", code: 5026},
{date: "9/24/2015", program_code: "EMED", location_code: "salisbury", code: 5027},
{date: "9/30/2015", program_code: "EMED", location_code: "annapolis", code: 5028},
        
    /* Medical Office Staff */
    /* Social Media and the Medical Practice */
{date: "3/31/2015", program_code: "SMEDIA", location_code: "hunt_valley", code: 2927},
{date: "4/15/2015", program_code: "SMEDIA", location_code: "cumberland2", code: 2928},
{date: "5/27/2015", program_code: "SMEDIA", location_code: "rockville1", code: 2929},
{date: "6/16/2015", program_code: "SMEDIA", location_code: "columbia", code: 2930},
{date: "8/6/2015", program_code: "SMEDIA", location_code: "waldorf", code: 2931},
{date: "9/3/2015", program_code: "SMEDIA", location_code: "frederick", code: 2932},
{date: "10/1/2015", program_code: "SMEDIA", location_code: "salisbury", code: 2933},
{date: "10/6/2015", program_code: "SMEDIA", location_code: "hunt_valley", code: 2934}
        ]
    
};