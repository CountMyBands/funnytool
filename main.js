var request = require('request');
request = request.defaults({jar: true});

const cheerio = require('cheerio');
const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
interface.question('Enter Name: ', name => {
    const data = {url: `https://cpcknights.com/email/${name.replace(/\s/g, '').toLowerCase()}/purlQuickApp.html`}
    request(data, function (error, response, body) {
        const $ = cheerio.load(body);
    
        let firstName = $("#firstname").attr("value")
        let lastName = $("#lastname").attr("value")
    
        let dateOfBirth = $("#dateOfBirth").attr("value")
    
        let email = $("#email").attr("value")
        let mobile = $("#Mobile").attr("value")
    
        let address = $("#address1").attr("value")
        let city = $("#city").attr("value")
        let zip = $("#zip").attr("value")
        let state = $("#state").attr("value")
    
        console.log(
            "First: " + (firstName || "N/A") + "\n" +
            "Last: " + (lastName || "N/A") + "\n" +
            "DOB: " + (dateOfBirth || "N/A") + "\n" +
            "\n" +
            "Email: " + (email || "N/A") + "\n" +
            "Mobile: " + (mobile || "N/A") + "\n" +
            "\n" +
            "Address: " + (address || "N/A") + "\n" +
            "City: " + (city || "N/A") + "\n" +
            "Zip: " + (zip || "N/A") + "\n" +
            "State: " + (state || "N/A")
        )
    })    
    interface.close();
});
