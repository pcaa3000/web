/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl="https://platzi-avo.vercel.app"
const API= `${baseUrl}/api/avo`;
const appnode=document.querySelector("#app");

const FormatPrice=(price)=>{
    return new window.Intl.NumberFormat(
        "en-EN",{ style: "currency", currency: "USD" }
    ).format(price);
    
}

const ws1_async = async (url_api)=>{
    try {
        //connect server
        const response = await window.fetch(url_api);
        //process and convert JSON
        const data=await response.json();
        //JSON -> Data show information in brower
        //console.log(data);
        const allItems=[];
        data.data.forEach((item)=>{
            //console.log(item.name);            
            // create image
            const image = document.createElement("img");
            image.className ="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            image.src= `${baseUrl}${item.image}`;
            // create title
            const title=document.createElement("h2");
            title.className="text-lg";
            title.textContent=item.name;
            // create price
            const price=document.createElement("div");
            price.className="text-gray-600";
            price.textContent=FormatPrice(item.price);
            // price and title
            const priceAndTitle = document.createElement("div");
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.append(title,price);
            // card image and priceandtitle
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(image,priceAndTitle);
            //const container=document.createElement("div");
            //container.append(image,title,price);            
            allItems.push(card);
        });
        appnode.append(...allItems);
    } catch (error) {
        console.error(error);
    }
}

ws1_async(API);