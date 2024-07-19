const url = "https://v6.exchangerate-api.com/v6/8b71174ea9b8c3ce7954d401/latest/USD";

async function GetData(c){
    try{
    let response = await fetch(url)
    console.log(response.status)
    const data =  await response.json()
    console.log(data)
    const conRates = data.conversion_rates;
    const rate = conRates[c];
    console.log(rate)
    return rate;
}catch(err){
    console.log(err)
}

}

const currencies = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "FOK": "Faroese Króna",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Isle of Man Pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KID": "Kiribati Dollar",
    "KMF": "Comorian Franc",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLE": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound",
    "STN": "São Tomé and Príncipe Dobra",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TVD": "Tuvaluan Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VES": "Venezuelan Bolívar Soberano",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights",
    "XOF": "CFA Franc BCEAO",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};


const left_div = document.querySelector("#left-sidebar")
function creatingEl(curr,cl){
    let i = 1;
    if(cl => 1){
    for(let cc in currencies){
        let cur = `${currencies[cc]}`
        //  console.log(cur)
        // console.log(curr)
        if (cur === curr){
        const new_p = document.createElement("p")
        new_p.innerHTML = cur
        const p_span = document.createElement("span")
        p_span.innerHTML = `(${cc})`
        new_p.id = 'opt-p'
        new_p.setAttribute("data-option",i)
        left_div.appendChild(new_p)
        new_p.appendChild(p_span)
        p_span.id = "p_span"
        i++
    }}}
else{
    console.log("hello")
            for(let cc in currencies){
                let cur = `${currencies[cc]}`
                //  console.log(cur)
                // console.log(curr)
                const new_p = document.createElement("p")
                new_p.innerHTML = cur
                const p_span = document.createElement("span")
                p_span.innerHTML = `(${cc})`
                new_p.id = 'opt-p'
                new_p.setAttribute("data-option",i)
                left_div.appendChild(new_p)
                new_p.appendChild(p_span)
                p_span.id = "p_span"
                i++
            }
        }
    }

function creatingEl2(){
    let i = 1
    for(let cc in currencies){
        let cur = `${currencies[cc]}`
        //  console.log(cur)
        // console.log(curr)
        const new_p = document.createElement("p")
        new_p.innerHTML = cur
        const p_span = document.createElement("span")
        p_span.innerHTML = `(${cc})`
        new_p.id = 'opt-p'
        new_p.setAttribute("data-option",i)
        left_div.appendChild(new_p)
        new_p.appendChild(p_span)
        p_span.id = "p_span"
        i++
    }
}
creatingEl2()



document.addEventListener("DOMContentLoaded", function() {

    // Event delegation: Add a single event listener to the parent element
    left_div.addEventListener("click", function(event) {
        const target = event.target;
        
        // Check if the clicked element is a p within the options container
        if (target.tagName === "P") {
            const selectedOption = target.getAttribute("data-option");
            name_c(target.innerText)
            console.log(`You selected ${target.innerText}`)
        }
    });
});
function opt_rem(){
    let el_count = left_div.childElementCount
    // creatingEl2()
    for(let i = 1;i<=el_count-4;i++){
    left_div.removeChild(left_div.lastChild)
}

}

function show_inp(){
    opt_rem();
    let cur = "";
    const inp1 = document.querySelector("#input1").value;
    for(let i in currencies){
        let j = currencies[i]
        j = j.toLowerCase();
        j = j.slice(0,inp1.length)
        if(j === inp1){
            let cur = currencies[i];
            let cl = inp1.length
            creatingEl(cur,cl)

    }

}
}
document.querySelector("#input1").addEventListener('input',show_inp)
const rate_span = document.querySelector("#rate_span")
const h1_c = document.querySelector("#c_h1")
const h2_c = document.querySelector("#c_h2")
function h2(){
    h2_c.innerHTML = "USD"
}
h2()
function name_c(name){
    console.log(name)
    rate_rem();
    name = name.slice(-4,-1)
    console.log(name)
    h2()
    h1_c.innerHTML = name;
}
function isInteger(str) {
    const num = Number(str);
    console.log(Number.isInteger(num))
    return Number.isInteger(num) && num.toString() === str;
}
function rate_rem(){
    rate_span.innerHTML = 0;
    }rate_rem();


async function calc(){
    rate_rem();
    const inp2 = document.querySelector("#inp2").value
    if(isInteger(inp2)){
        c1 = h1_c.innerHTML
        c2 = h2_c.innerHTML
        console.log(c1,c2,inp2)
        GetData(c1)
            .then(rate => {
            console.log('Exchange rate for PKR:', rate);
            console.log(typeof(rate))
            
            let u_to_c = inp2*rate 
            let u_to_c2 = u_to_c.toFixed(5)
            rate_span.innerHTML = u_to_c2
          }).catch(error => {
            console.error('Error fetching exchange rate:', error);
          });
       
    }}
document.querySelector("#inp2").addEventListener('input',calc)

const replace = document.querySelector("#replace")
let r = 2;
function rep(){
    console.log("h")
    if(r % 2 === 0){
    h1_c.setAttribute('id','#c_h2')
    h2_c.setAttribute('id','#c_h1')
    h2()}
    if(r % 2 === 1){
        h1_c.setAttribute('id','#c_h1')
        h2_c.setAttribute('id','#c_h2')
        h2()
    }
    r++
    console.log(r)
}
replace.addEventListener("click",rep)
