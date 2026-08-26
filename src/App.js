import './App.css';
import {useState , useEffect, useMemo} from 'react'


const App = () => {
  // State to hold the currently selected state (region/domestic state)
  const [selectedState, setSelectedState] = useState('');
  // State to hold the information of the sales representative (Regional Head) for the selected state
  const [salesRep, setSalesRep] = useState(null);

  // States for customer contact information
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState(''); // This will now store the full number including code
  const [customerCompany, setCustomerCompany] = useState(''); // Mandatory
  const [customerCountry, setCustomerCountry] = useState(''); // State for customer's country (if not USA/Canada)
  const [customerProvinceState, setCustomerProvinceState] = useState(''); // New: State for customer's province/state

  // Define the mapping of states to regions and then to Regional Heads
  const regionalHeads = useMemo(() => ({
    'West': {
      fullName: 'MISS HEMAKSHI SHAH', // Full name in ALL CAPS
      title: '(Sales Head - West)',    // Title with specific casing
      email: 'h.shah@gauravengg.com',
      contactNumber: '+91 94997 94460',
      schedulingLink: 'https://calendly.com/h-shah-gauravengg/30min',
      description: 'Your consultation will be moved ahead with the West Regional Head.',
    },
    'South': {
      fullName: 'MR. BOOPATHI BADRAN',
      title: '(Sales Head - South)',
      email: 'b.boopathi@gauravengg.com',
      contactNumber: '+91 90818 18204',
      schedulingLink: 'https://calendly.com/b-boopathi-gauravengg/30min',
      description: 'Your consultation will be moved ahead with the South Regional Head.',
    },
    'East': {
      fullName: 'MR. VASU VAGHELA',
      title: '(Sales Head - East)',
      email: 'v.vaghela@gauravengg.com',
      contactNumber: '+91 78618 81346',
      schedulingLink: 'https://calendly.com/v-vaghela-gauravengg/30min',
      description: 'Your consultation will be moved ahead with the East Regional Head.',
    },
    'North': {
      fullName: 'MR. VIVEK PRAJAPATI',
      title: '(Sales Head - NORTH)', // NORTH remains in ALL CAPS as per previous request
      email: 'v.prajapati@gauravengg.com',
      contactNumber: '+91 98752 33458',
      schedulingLink: 'https://calendly.com/v-prajapati-gauravengg/30min',
      description: 'Your consultation will be moved ahead with the North Regional Head.',
    },
    'International-Americas': { // For North and South America
      fullName: 'MR. HARSH PATEL',
      title: '(Sales Lead - Americas)',
      email: 'sales.northamerica@gauravengg.com',
      contactNumber: '+1 437 985 0629',
      schedulingLink: 'https://calendly.com/sales-northamerica-gauravengg/30min',
      description: 'Your consultation will be moved ahead with the Sales Lead for Americas.',
    },
    'International-Other': { // For other international regions
      fullName: 'MR. ARPIT PATEL',
      title: '(Technical Sales Director)',
      email: 'sales@gauravengg.com',
      contactNumber: '+91-98256-15621',
      schedulingLink: 'https://calendly.com/gauravengg-sales/30min',
      description: 'Your consultation will be moved ahead with the Technical Sales Director.',
    },
  }),[]);

  // Define states and their regions, including new export options
  const stateRegions = useMemo(() => ({
    'Gujarat': 'West',
    'Maharashtra': 'West',
    'Goa': 'West',
    'Rajasthan': 'North',
    'Dadra and Nagar Haveli and Daman and Diu': 'West',

    'Andhra Pradesh': 'South',
    'Karnataka': 'South',
    'Kerala': 'South',
    'Tamil Nadu': 'South',
    'Telangana': 'South',
    'Lakshadweep': 'South',
    'Puducherry': 'South',
    'Andaman and Nicobar Islands': 'South',

    'Arunachal Pradesh': 'East',
    'Assam': 'East',
    'Bihar': 'East',
    'Chhattisgarh': 'East',
    'Jharkhand': 'East',
    'Manipur': 'East',
    'Meghalaya': 'East',
    'Mizoram': 'East',
    'Nagaland': 'East',
    'Odisha': 'East',
    'Sikkim': 'East',
    'Tripura': 'East',
    'West Bengal': 'East',

    'Haryana': 'North',
    'Himachal Pradesh': 'North',
    'Jammu and Kashmir': 'North',
    'Ladakh': 'North',
    'Punjab': 'North',
    'Uttar Pradesh': 'North',
    'Uttarakhand': 'North',
    'Delhi': 'North',
    'Chandigarh': 'North',
    'Madhya Pradesh': 'West',

    'Asia': 'International-Other',
    'Africa': 'International-Other',
    'Middle East': 'International-Other',
    'Europe': 'International-Other',
    'Australia': 'International-Other',
    'Other International': 'International-Other',
    'North America': 'International-Americas',
    'South America': 'International-Americas',
  }),[]);

  // Data for countries within each export region
  const countryData = useMemo(() => ({
    'Asia': ['China', 'Japan', 'South Korea', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Malaysia', 'Singapore', 'India'],
    'Africa': ['Nigeria', 'South Africa', 'Egypt', 'Kenya', 'Ghana', 'Morocco', 'Algeria', 'Ethiopia', 'South Sudan', 'Tunisia', 'Libya', 'Gambia', 'Senegal', 'Mauritania', 'Mali', 'Guinea', 'Ivory Coast', 'Burkina Faso', 'Niger', 'Togo', 'Benin', 'Mauritius', 'Liberia', 'Sierra Leone', 'Chad', 'Central African Republic', 'Cameroon', 'Cape Verde', 'São Tomé and Príncipe', 'Equatorial Guinea', 'Gabon', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Angola', 'Guinea-Bissau', 'Seychelles', 'Sudan', 'Rwanda', 'Djibouti', 'Tanzania', 'Uganda', 'Burundi', 'Mozambique', 'Zambia', 'Madagascar', 'Zimbabwe', 'Namibia', 'Malawi', 'Lesotho', 'Botswana', 'Eswatini', 'Comoros', 'Saint Helena', 'Eritrea'],
    'North America': ['United States', 'Canada', 'Mexico', 'United States Virgin Islands', 'Northern Mariana Islands', 'Guam', 'American Samoa', 'Puerto Rico', 'Bahamas', 'Barbados', 'Anguilla', 'Antigua and Barbuda', 'British Virgin Islands', 'Cayman Islands', 'Bermuda', 'Grenada', 'Turks and Caicos Islands', 'Jamaica', 'Montserrat', 'Sint Maarten', 'Saint Lucia', 'Dominica', 'Saint Vincent and the Grenadines', 'Dominican Republic', 'Trinidad and Tobago', 'Saint Kitts and Nevis'],
    'Middle East': ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Turkey', 'Israel', 'Lebanon', 'Jordan', 'Syria', 'Iraq', 'Yemen', 'Palestine', 'Iran'],
    'South America': ['Brazil', 'Argentina', 'Colombia', 'Chile', 'Peru', 'Bolivia', 'Guyana', 'Ecuador', 'French Guiana', 'Paraguay', 'Suriname', 'Uruguay'],
    'Europe': ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Sweden', 'Poland', 'Russia', 'Greece', 'Gibraltar', 'Portugal', 'Luxembourg', 'Ireland', 'Iceland', 'Albania', 'Malta', 'Cyprus', 'Finland', 'Bulgaria', 'Hungary', 'Lithuania', 'Latvia', 'Estonia', 'Moldova', 'Armenia', 'Belarus', 'Andorra', 'Monaco', 'San Marino', 'Vatican City', 'Ukraine', 'Serbia', 'Montenegro', 'Kosovo', 'Croatia', 'Slovenia', 'Bosnia and Herzegovina', 'North Macedonia', 'Romania', 'Switzerland', 'Czech Republic', 'Slovakia', 'Liechtenstein', 'Austria', 'Denmark', 'Norway'],
    'Australia': ['Australia', 'New Zealand'],
    'Other International': [], // No specific list, will use text input
  }),[]);

  // New: Data for provinces/states for specific "big countries"
  const provinceStateData = useMemo(() => ({
    'United States': [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
      'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
      'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
      'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
      'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ],
    'Canada': [
      'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia',
      'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'
    ],
    // Add more countries with their provinces/states as needed
  }),[]);

  // Countries that require a province/state selection
  const countriesWithProvinces = ['United States', 'Canada'];

  // Comprehensive mapping of countries to calling codes
  const countryCallingCodes = useMemo(() => ({
    'United States': '+1', 'Canada': '+1', 'Mexico': '+52', 'United States Virgin Islands': '+1340',
    'Northern Mariana Islands': '+1670', 'Guam': '+1671', 'American Samoa': '+1684', 'Puerto Rico': '+1787',
    'Bahamas': '+1242', 'Barbados': '+1246', 'Anguilla': '+1264', 'Antigua and Barbuda': '+1268',
    'British Virgin Islands': '+1284', 'Cayman Islands': '+1345', 'Bermuda': '+1441', 'Grenada': '+1473',
    'Turks and Caicos Islands': '+1649', 'Jamaica': '+1658', 'Montserrat': '+1664', 'Sint Maarten': '+1721',
    'Saint Lucia': '+1758', 'Dominica': '+1767', 'Saint Vincent and the Grenadines': '+1784',
    'Dominican Republic': '+1809', 'Trinidad and Tobago': '+1868', 'Saint Kitts and Nevis': '+1869',

    'Egypt': '+20', 'South Sudan': '+211', 'Morocco': '+212', 'Algeria': '+213', 'Tunisia': '+216',
    'Libya': '+218', 'Gambia': '+220', 'Senegal': '+221', 'Mauritania': '+222', 'Mali': '+223',
    'Guinea': '+224', 'Ivory Coast': '+225', 'Burkina Faso': '+226', 'Niger': '+227', 'Togo': '+228',
    'Benin': '+229', 'Mauritius': '+230', 'Liberia': '+231', 'Sierra Leone': '+232', 'Ghana': '+233',
    'Nigeria': '+234', 'Chad': '+235', 'Central African Republic': '+236', 'Cameroon': '+237',
    'Cape Verde': '+238', 'São Tomé and Príncipe': '+239', 'Equatorial Guinea': '+240', 'Gabon': '+241',
    'Republic of the Congo': '+242', 'Democratic Republic of the Congo': '+243', 'Angola': '+244',
    'Guinea-Bissau': '+245', 'British Indian Ocean Territory': '+246', 'Ascension Island': '+247',
    'Seychelles': '+248', 'Sudan': '+249', 'Rwanda': '+250', 'Ethiopia': '+251', 'Somalia': '+252',
    'Djibouti': '+253', 'Kenya': '+254', 'Tanzania': '+255', 'Uganda': '+256', 'Burundi': '+257',
    'Mozambique': '+258', 'Zambia': '+260', 'Madagascar': '+261', 'Réunion': '+262', 'Mayotte': '+262',
    'Zimbabwe': '+263', 'Namibia': '+264', 'Malawi': '+265', 'Lesotho': '+266', 'Botswana': '+267',
    'Eswatini': '+268', 'Comoros': '+269', 'South Africa': '+27', 'Saint Helena': '+290', 'Eritrea': '+291',
    'Aruba': '+297', 'Faroe Islands': '+298', 'Greenland': '+299',

    'Greece': '+30', 'Netherlands': '+31', 'Belgium': '+32', 'France': '+33', 'Spain': '+34',
    'Gibraltar': '+350', 'Portugal': '+351', 'Luxembourg': '+352', 'Ireland': '+353', 'Iceland': '+354',
    'Albania': '+355', 'Malta': '+356', 'Cyprus': '+357', 'Finland': '+358', 'Bulgaria': '+359',
    'Hungary': '+36', 'Lithuania': '+370', 'Latvia': '+371', 'Estonia': '+372', 'Moldova': '+373',
    'Armenia': '+374', 'Belarus': '+375', 'Andorra': '+376', 'Monaco': '+377', 'San Marino': '+378',
    'Vatican City': '+39', 'Ukraine': '+380', 'Serbia': '+381', 'Montenegro': '+382', 'Kosovo': '+383',
    'Croatia': '+385', 'Slovenia': '+386', 'Bosnia and Herzegovina': '+387', 'North Macedonia': '+389',
    'Italy': '+39', 'Romania': '+40', 'Switzerland': '+41', 'Czech Republic': '+420', 'Slovakia': '+421',
    'Liechtenstein': '+423', 'Austria': '+43', 'United Kingdom': '+44', 'Denmark': '+45', 'Sweden': '+46',
    'Norway': '+47', 'Poland': '+48', 'Germany': '+49',

    'Falkland Islands': '+500', 'Belize': '+501', 'Guatemala': '+502', 'El Salvador': '+503',
    'Honduras': '+504', 'Nicaragua': '+505', 'Costa Rica': '+506', 'Panama': '+507',
    'Saint-Pierre and Miquelon': '+508', 'Haiti': '+509', 'Peru': '+51', 'Cuba': '+53',
    'Argentina': '+54', 'Brazil': '+55', 'Chile': '+56', 'Colombia': '+57', 'Venezuela': '+58',
    'Guadeloupe': '+590', 'Bolivia': '+591', 'Guyana': '+592', 'Ecuador': '+593', 'French Guiana': '+594',
    'Paraguay': '+595', 'Martinique': '+596', 'Suriname': '+597', 'Uruguay': '+598',
    'Curaçao': '+5999', 'Sint Eustatius': '+5993', 'Saba': '+5994', 'Bonaire': '+5997',

    'Malaysia': '+60', 'Australia': '+61', 'Indonesia': '+62', 'Philippines': '+63',
    'New Zealand': '+64', 'Pitcairn Islands': '+64', 'Singapore': '+65', 'Thailand': '+66',
    'East Timor': '+670', 'Brunei': '+673', 'Nauru': '+674', 'Papua New Guinea': '+675',
    'Tonga': '+676', 'Solomon Islands': '+677', 'Vanuatu': '+678', 'Fiji': '+679', 'Palau': '+680',
    'Wallis and Futuna': '+681', 'Cook Islands': '+682', 'Niue': '+683', 'Samoa': '+685',
    'Kiribati': '+686', 'New Caledonia': '+687', 'Tuvalu': '+688', 'French Polynesia': '+689',
    'Tokelau': '+690', 'Federated States of Micronesia': '+691', 'Marshall Islands': '+692',

    'Russia': '+7', 'Kazakhstan': '+7', 'Abkhazia': '+7840', 'South Ossetia': '+7850',

    'Japan': '+81', 'South Korea': '+82', 'Vietnam': '+84', 'North Korea': '+850', 'Hong Kong': '+852',
    'Macau': '+853', 'Cambodia': '+855', 'Laos': '+856', 'China': '+86', 'Bangladesh': '+880', 'Taiwan': '+886',

    'Turkey': '+90', 'India': '+91', 'Pakistan': '+92', 'Afghanistan': '+93', 'Sri Lanka': '+94',
    'Myanmar': '+95', 'Maldives': '+960', 'Lebanon': '+961', 'Jordan': '+962', 'Syria': '+963',
    'Iraq': '+964', 'Kuwait': '+965', 'Saudi Arabia': '+966', 'Yemen': '+967', 'Oman': '+968',
    'Palestine': '+970', 'United Arab Emirates': '+971', 'Israel': '+972', 'Bahrain': '+973',
    'Qatar': '+974', 'Bhutan': '+975', 'Mongolia': '+976', 'Nepal': '+977', 'Iran': '+98',
    'Tajikistan': '+992', 'Turkmenistan': '+993', 'Azerbaijan': '+994', 'Georgia': '+995',
    'Kyrgyzstan': '+996', 'Uzbekistan': '+998',
  }),[]);

  // Separate states into domestic and export for optgroups
  const domesticStates = Object.keys(stateRegions).filter(state =>
    !['Asia', 'Africa', 'North America', 'Middle East', 'South America', 'Europe', 'Australia', 'Other International'].includes(state)
  ).sort();

  const exportStates = ['Asia', 'Africa', 'North America', 'Middle East', 'South America', 'Europe', 'Australia', 'Other International']; // Explicit order for exports

  // Determine if the selected state is an international one
  const isInternationalSelected = exportStates.includes(selectedState);
  // Determine if the selected location is a domestic Indian state
  const isDomesticIndianState = domesticStates.includes(selectedState);

  // Check if the selected country requires a province/state dropdown
  const requiresProvinceState = countriesWithProvinces.includes(customerCountry);

  // Effect to update salesRep and reset country/phone/province when location changes
  useEffect(() => {
    const region = stateRegions[selectedState];
    if (region) {
      setSalesRep(regionalHeads[region]);
    } else {
      setSalesRep(null);
    }
    setCustomerCountry(''); // Reset country when location changes
    setCustomerProvinceState(''); // Reset province/state when location changes
    setCustomerPhone('');   // Reset phone when location changes
  }, [stateRegions , regionalHeads , selectedState]);

  // Effect to update phone number prefix when country changes (for international)
  useEffect(() => {
    if (isInternationalSelected && customerCountry) {
      const code = countryCallingCodes[customerCountry];
      if (code) {
        // If a country with a known calling code is selected, set it as the phone prefix
        setCustomerPhone(code);
      } else {
        // If international but no specific country code found, clear phone
        setCustomerPhone('');
      }
    } else if (isDomesticIndianState) {
      // For domestic, ensure it starts with +91- (if not already there)
      if (!customerPhone.startsWith('+91-')) {
        setCustomerPhone('+91-');
      }
    } else {
      // Clear phone if neither international with country nor domestic Indian is selected
      setCustomerPhone('');
    }
  }, [customerCountry, customerPhone , isInternationalSelected, isDomesticIndianState , countryCallingCodes]);


  // Handle dropdown change for state selection
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Handle phone number input change
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    let processedValue = rawValue;

    if (isDomesticIndianState) {
      // For domestic, ensure +91- prefix and limit to 10 digits after prefix
      const digitsOnly = rawValue.replace(/\D/g, '');
      processedValue = '+91-' + digitsOnly.substring(0, 10);
    } else if (isInternationalSelected && customerCountry) {
      const code = countryCallingCodes[customerCountry];
      if (code) {
        // For international with a selected country, ensure the country code prefix is maintained
        if (!rawValue.startsWith(code)) {
          processedValue = code + rawValue; // Prepend code if missing
        } else {
          processedValue = rawValue; // User is typing after the code
        }
      } else {
        // For 'Other International' or international without a specific country code, allow any input
        processedValue = rawValue;
      }
    } else {
      // Fallback for cases where no specific handling is needed (e.g., initial state)
      processedValue = rawValue;
    }
    setCustomerPhone(processedValue);
  };

  // Function to construct the Calendly URL with pre-filled information
  const getSchedulingUrl = () => {
    if (salesRep && customerName && customerEmail && customerPhone && customerCompany) {
      const baseUrl = salesRep.schedulingLink;
      const params = new URLSearchParams();

      // Name parameter remains just the customer's name
      params.append('name', customerName);
      params.append('email', customerEmail);

      // Determine the location string for Calendly notes
      let locationString = customerCountry || selectedState;
      if (requiresProvinceState && customerProvinceState) {
        locationString = `${customerProvinceState}, ${customerCountry}`;
      }

      // a1 value: Updated to start with "Hi, I am from Country - " and remove redundancy
      let a1Value = `Hi, I am from ${locationString} and would like to schedule an EPR Cement bags consultation. I am attending on behalf of ${customerCompany} in ${selectedState}. In case video conferencing is not accessible, please contact us directly at ${customerPhone}.`;
      params.append('a1', a1Value);

      params.append('a2', customerCompany); // Keep a2 for company as it might be a separate field

      // a3 value: Updated to start with "Hi, I am from Country - " and remove redundancy
      let meetingPurpose = `Hi, I am from ${locationString} and would like to schedule an EPR Cement bags consultation. Being from ${selectedState}, your consultation will be moved ahead with ${salesRep.fullName} ${salesRep.title}. Cell No: ${customerPhone}.`;
      params.append('a3', meetingPurpose);

      return `${baseUrl}?${params.toString()}`;
    }
    return '#'; // Return a non-functional link if required info is missing
  };

  // Check if all required fields are filled to enable the button
  const isFormValid = selectedState && customerName && customerEmail && customerCompany &&
                      (!isInternationalSelected || (isInternationalSelected && customerCountry && (!requiresProvinceState || customerProvinceState))) &&
                      // Phone number validation:
                      (isDomesticIndianState
                        ? (customerPhone.length === 14 && customerPhone.startsWith('+91-')) // +91- and 10 digits
                        : (isInternationalSelected && customerCountry && countryCallingCodes[customerCountry]
                            ? customerPhone.length > countryCallingCodes[customerCountry].length // Has code and more digits
                            : customerPhone.length > 0)); // Not empty for other international
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-gray-900">
        {/* Removed the logo section */}

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Schedule Your Consultation
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Please provide your details to connect with the right sales representative.
        </p>

        {/* State Selection Dropdown */}
        <div className="mb-6">
          <label htmlFor="state-select" className="block text-lg font-medium mb-2 text-gray-900">
            Select Location <span className="text-red-500">*</span>
          </label>
          <select
            id="state-select"
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 bg-white"
            value={selectedState}
            onChange={handleStateChange}
            required
          >
            <option value="" disabled>-- Please choose a location --</option>
            <optgroup label="DOMESTIC">
              {domesticStates.map((stateName) => (
                <option
                  key={stateName}
                  value={stateName}
                >
                  {stateName}
                </option>
              ))}
            </optgroup>
            <optgroup label="EXPORTS">
              {exportStates.map((stateName) => (
                <option
                  key={stateName}
                  value={stateName}
                >
                  {stateName}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Customer Information Input Fields */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Conditional rendering for Country or Province/State */}
          {isInternationalSelected && (
            <>
              {/* Country dropdown/input */}
              <div>
                <label htmlFor="customer-country" className="block text-lg font-medium mb-2 text-gray-900">
                  Your Country <span className="text-red-500">*</span>
                </label>
                {selectedState === 'Other International' || requiresProvinceState ? (
                  <input
                    type="text"
                    id="customer-country"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 bg-white"
                    placeholder="Enter your country"
                    value={customerCountry}
                    onChange={(e) => {
                      setCustomerCountry(e.target.value);
                      setCustomerProvinceState(''); // Clear province/state if country changes
                    }}
                    required={isInternationalSelected && !requiresProvinceState} // Required unless province/state is needed
                    disabled={requiresProvinceState} // Disable if province/state is required (country is picked from list)
                  />
                ) : (
                  <select
                    id="customer-country"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-border-transparent text-gray-800 bg-white"
                    value={customerCountry}
                    onChange={(e) => {
                      setCustomerCountry(e.target.value);
                      setCustomerProvinceState(''); // Clear province/state if country changes
                    }}
                    required={isInternationalSelected}
                  >
                    <option value="" disabled>-- Select a country --</option>
                    {countryData[selectedState] && countryData[selectedState].map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Province/State dropdown, visible only for specific countries */}
              {requiresProvinceState && (
                <div>
                  <label htmlFor="customer-province-state" className="block text-lg font-medium mb-2 text-gray-900">
                    Your Province/State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="customer-province-state"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-border-transparent text-gray-800 bg-white"
                    value={customerProvinceState}
                    onChange={(e) => setCustomerProvinceState(e.target.value)}
                    required={requiresProvinceState}
                  >
                    <option value="" disabled>-- Select a province/state --</option>
                    {provinceStateData[customerCountry] && provinceStateData[customerCountry].map((ps) => (
                      <option key={ps} value={ps}>
                        {ps}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}

          <div>
            <label htmlFor="customer-name" className="block text-lg font-medium mb-2 text-gray-900">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customer-name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 bg-white"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="customer-email" className="block text-lg font-medium mb-2 text-gray-900">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="customer-email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 bg-white"
              placeholder="Enter your email address"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="customer-phone" className="block text-lg font-medium mb-2 text-gray-900">
              Your Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:border-transparent bg-white">
              <input
                type="tel"
                id="customer-phone"
                className="block w-full px-4 py-3 bg-transparent focus:outline-none text-gray-800 text-base"
                placeholder={isDomesticIndianState ? "Enter 10 digits" : "Enter phone number"}
                value={customerPhone}
                onChange={handlePhoneChange} // Use the new handler
                required
                // MaxLength is now dynamic based on logic in handlePhoneChange, not fixed here
              />
            </div>
          </div>
          <div>
            <label htmlFor="customer-company" className="block text-lg font-medium mb-2 text-gray-900">
              Your Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customer-company"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 bg-white"
              placeholder="Enter your company name"
              value={customerCompany}
              onChange={(e) => setCustomerCompany(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Sales Representative Information and Scheduling Button */}
        {selectedState && salesRep ? (
          <div className="bg-lime-50 border-l-4 border-lime-500 text-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-3 text-gray-900">
              Your consultation will be moved ahead with
            </p>
            <h2 className="text-2xl font-semibold mb-0">
              <span className="text-lime-700 text-3xl font-bold">{salesRep.fullName}</span>
            </h2>
            <p className="text-xl font-medium text-gray-800 mb-1">
              {salesRep.title}
            </p>
            {/* Combined Phone and Email on one line without labels */}
            <p className="text-lg mb-4 text-gray-700">
              {salesRep.contactNumber || 'N/A'}
              <span className="mx-2 text-gray-500">|</span>
              <a href={`mailto:${salesRep.email}`} className="text-lime-600 hover:underline">
                {salesRep.email}
              </a>
            </p>
            {/* Updated instruction text for the button */}
            <p className="text-gray-700 mb-2">
              Click the button below to schedule your meeting.
            </p>
            <a
              href={getSchedulingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform ${
                isFormValid
                  ? 'bg-lime-600 hover:bg-lime-700 text-white hover:scale-105'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
              onClick={(e) => {
                if (!isFormValid) {
                  e.preventDefault();
                  console.log("Please fill in all required fields (Location, Name, Email, Phone, Company, and Country/Province/State for Exports).");
                }
              }}
            >
              Book your time Now
            </a>
            {!isFormValid && (
              <p className="text-red-500 text-sm mt-2">
                Please fill in all required fields (Location, Name, Email, Phone, Company, and Country/Province/State for Exports) to enable scheduling.
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 border-l-4 border-gray-300 text-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-lg text-center">
              Please select your location and fill in your details to view your sales representative's information and scheduling link.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
