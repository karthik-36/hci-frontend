import React, { Component } from 'react'
import concept from "./images/concept.jpeg";


export default class About extends Component {
    render() {
        return (
            <div style={{ fontSize: "24px " }}>
                <br />
                <h2>  Conceptualization and Market Research </h2>
                <br />
                <div>



                    <img src={concept} />

                    <br />

                    <div style={{ textAlign: "center" }}> CONCEPTUAL DIAGRAM PHOTO </div>

                    <br />
                    <br />

                    <div style={{ textAlign: "center" }}>  <b> USER GOALS </b> </div>

                    <br />

                    <ul style={{ textAlign: "left" }}>
                        <li>To prevent wastage of food and keep track of savings</li>
                        <li>To know about local donors and shelters in the vicinity</li>
                        <li>To see the route from receiver to the donor</li>
                        <li>To see the route from receiver to the donor</li>
                        <li>To get information regarding food being donated</li>
                    </ul>

                    <br />

                    <div style={{ textAlign: "center", }}> <b> LITERATURE REVIEW AND MARKET ANALYSIS </b> </div>

                    <br />

                    <ul style={{ textAlign: "left" }}>
                        <li>16 apps helping companies and consumers prevent food waste - Katerina
                            Bozhinova - https://www.greenbiz.com/article/16-apps-helping-companies-and-consumers-prevent-food-waste</li>
                        <li> Food Rescue Hero - https://412foodrescue.org/programs/foodrescuehero/</li>
                        <li> Mobile Intraction Design Approaches For  Reducing Domestic Food Wastes - https://eprints.qut.edu.au/82295/8/Geremy_Farr-Wharton_Thesis.pdf</li>


                    </ul>

                    <br/>

                    <div style={{ textAlign: "center" }}> <b>USER SCENARIOS </b>   </div>

                    <ul style={{ textAlign: "left" }}>
                        <li>
                            Scenario 1: John Doe is a 32-year-old working male. John placed an order for delivery
                            of items before realizing he’s bought an extra pack of salt and a few vegetables that he
                            already has a stock of. Instead of throwing away food, John decides to donate the
                            excess food via the application. He shares information about the food such as the expiry
                            date, the date on which the product/item was bought, the quantity of the product, and the
                            location from which the item can be picked up. John then receives a notification stating
                            someone has chosen to pick up the item. John can then get in contact with the receiver
                            and exchange more information as needed. John can designate a spot from where the
                            receiver picks up the item or he can choose to personally give it to them</li>


                            <br/>

                        <li> 
                            
                            Scenario 2: Jane Doe is a 44-year-old woman struggling with homelessness. She
                            requires a quick meal when she gets a notification from the application stating that
                            there’s a food item currently being donated. She chooses to accept the donation and
                            receives details regarding the pickup location of the item and the time till it’s available.
                            She goes to the pickup location, picks up the food item, and updates the status of the
                            item on her phone</li>
                    </ul>

                </div>
            </div>
        )
    }
}
