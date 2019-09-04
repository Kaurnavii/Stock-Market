

export class IPO{
    public id:number;
    constructor(
            public companycode:String,
            public stockexchange:String,
            public pricepershare:String,
            public totalshares:String,
            public openingdate:String,
            public remarks:String
        ) {
    }  
}