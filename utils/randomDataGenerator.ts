import {faker} from '@faker-js/faker'

export class randomDataUtil{

static getFirstName()
{
    return faker.person.firstName();
}
static getlastName()
{
    return faker.person.lastName();
}
static getFullName()
{
    return faker.person.fullName();
}
static getEmail()
{
    return faker.internet.email();
}
static getPhone()
{
    return faker.phone.number();
}
static getUsername()
{
    return faker.internet.username();
}
static getPassword()
{
    return faker.internet.password();
}
static getRandomCountry()
{
    return faker.location.country
}
static getRandomCity()
{
    return faker.location.city();
}
static getRandomPin()
{
    return faker.location.zipCode();
}
static getRandomAddress()
{
    return faker.location.streetAddress();
}
static getRandomPassword(length:number=10)
{
    return faker.internet.password({length});
}
static getRandomAlphanumeric(length:number)
{
    return faker.string.alphanumeric(length);
}
static getRandomNumeric(length:number)
{
    return faker.string.numeric(length);
}
static getRandomUUID()
{
    return faker.string.uuid();
}
 
}