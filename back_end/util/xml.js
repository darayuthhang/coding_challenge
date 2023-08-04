const xml2js = require('xml2js');
const { promisify } = require('util');
const parseStringAsync = promisify(xml2js.parseString);
const { XmlNotFoundError } = require("./app-error");
class Xml{
    async parseXmlData(xmlData){
        try {
            let data = await parseStringAsync(xmlData)
            return data;
        } catch (error) {
            throw new XmlNotFoundError(error);
        }
    }
}
module.exports = Xml;
