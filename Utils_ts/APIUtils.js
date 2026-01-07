class APIUtils{

    constructor(apiContext,loginPayload){
        this.apicontext = apiContext;
        this.loginPayload = loginPayload;
    }

async getToken(){
    const loginresponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data : this.loginPayload})
        const response =await loginresponse.json();
         const token = response.token;
        return token;
}

async createOrder(orderPayload){
    let response ={};
    response.token = await this.getToken(); 
    const orderresponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data:orderPayload,
                headers:{
                    'Authorization': response.token,
                    'content-type':'application/json'
                }
            })
        const orderresponsejson = await orderresponse.json();
       const orderid = orderresponsejson.orders[0];
       response.orderid = orderid;
        return response;
}








}

module.exports = {APIUtils};