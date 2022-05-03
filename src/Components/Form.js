import React, { Component } from 'react'
import t11 from "./images/t11.jpeg"
import t12 from "./images/t12.jpeg"
import t21 from "./images/t21.jpeg"
import t22 from "./images/t22.jpeg"
import t23 from "./images/t23.jpeg"
import t31 from "./images/t31.jpeg"
import t32 from "./images/t32.jpeg"
import t33 from "./images/t33.jpeg"


export default class Form extends Component {
    render() {
        return (
            <div style={{ fontSize: "24px " }}>
                <br />
                <h2>  Formative Evaluation </h2>
                <br />
                <div></div>

                <br />

                <div style={{ textAlign: "center" }}>  <b> Formative Evaluation Steps </b> </div>

                <br />

                <ul style={{ textAlign: "left" }}>
                    <li>
                        Before the users were asked to perform the tasks, they were given a brief introduction of
                        the system setup and interactions supported by our systems by a facilitator.
                    </li>
                    <li>
                        Users were asked to perform 3 tasks
                    </li>
                    <li>
                        One member of the team observed the users while performing tasks for observations.
                    </li>

                </ul>

                <br />
                <div style={{ textAlign: "center" }}>  <b> Task Cards </b> </div>

                <br />
                <div style={{ textAlign: "left" }}>  <b> Task 1: Add a new listing for donation/food item </b> </div>
                <p>
                    You have a 20-pound unopened bag of Basmati rice that you won’t be able to finish
                    off. It expires in a month. Instead of throwing away the rice, you decide to put it up for
                    donation so that you can give away the food without wasting it. You want to create a
                    new listing for the rice and input the corresponding the details such as the quantity,
                    description of the item and how long till the rice expires amongst others. These details
                    should be visible so that anyone interested in receiving the item gets all the
                    information.
                </p>

                <br />

                <div style={{ textAlign: "left" }}>  <b> Task 2: Editing information for an added donation item </b> </div>
                <p>
                    You realize you’ve made a mistake when you were entering the details for the rice.
                    You’ve entered the wrong quantity for the amount of rice. Your task is to edit the
                    information in the newly added rice listing and rectify the error you’ve made. The listing
                    should then show the updated quantity of rice so that all users interested in receiving
                    the item get up-to-date information.
                </p>

                <br />

                <div style={{ textAlign: "left" }}>  <b> Task 3: Finding a specific food item </b> </div>
                <p>
                    You’ve added cereal to your bowl before realizing that you’re out of milk. Instead of
                    going out to buy milk, you want to check and see if anyone in your community
                    happens to be donating some milk. Your task is to search for milk in the application
                    and accept the donation of someone living nearby and notify them once you’ve
                    received the item.
                </p>

                <br />
                EVALUATION METHOD
                USERS
                The study was conducted using “Wizard of Oz”, “Think Aloud” methodologies, and paper
                prototypes on 3 users. All 3 users are from CS 522




                <div style={{ textAlign: "center" }}>  <b> INTERNAL WALKTHROUGH </b> </div>

                <br />
                <img src={t11} />
                <img src={t12} />
                <div style={{ textAlign: "left" }}>  <b> Task 1: Add a new listing for donation/food item </b> </div>
                <li>Inputs/Assumptions
                    <li>User is on the main screen</li>
                </li>

                <li style={{ textAlign: "left" }}>Steps
                    <li>Click on the green ‘plus’ icon in the bottom right
                        corner of the interface</li>
                    <li>On the new form screen, users can start adding
                        details in no particular order</li>
                    <li>On the new form screen, users can start adding
                        details in no particular order</li>
                    <li>Input rice in name of food item and provide a short
                        description of rice</li>
                    <li>Set quantity of rice to 20 and set unit to pounds</li>
                    <li>Set the expiry date of an item</li>
                    <li>Click ‘Submit’</li>
                </li>

                <li style={{ textAlign: "left" }}>Instructions for user Task Card 1
                    <li>Will the users know
                        what to do?
                        Yes. The user realized they need to click on the ‘plus’ sign to
                        add a new donation food item. The user understood that
                        clicking on ‘Submit’ in the donation form menu submits the
                        listing for rice.
                    </li>
                    <li>Will the users see how
                        to do it?

                        The user went through the first page easily. But got stuck on
                        the second page. The Expiry input(‘list for’) was not obvious
                        at first glance.
                    </li>
                    <li>Will the user see that
                        progress is being made
                        toward the solution of
                        the task?

                        Yes, the user accesses the donation form upon clicking the
                        ‘plus’ button. Data is being input in a form so users can see
                        text fields being filled.
                    </li>
                </li>

                <li style={{ textAlign: "left" }}>Walkthrough Comments
                    <li>The ‘List for days’ was unintuitive and
                        unrecognizable. Users were unable to understand
                        the meaning behind the term. Something along the
                        lines of ‘best before’ or ‘expiry’ would be more
                        consistent with the real world</li>
                    <li>The placement and size of ‘Pickup Location’ was not
                        noticeable. Also changing it to ‘Select pickup
                        location’ would allow users to get a better
                        understanding of the action needed to be done</li>
                </li>
                <br />

                <br />
                
                <div style={{ textAlign: "left" }} >  <b> Task 2: Editing information for an added donation item
                    Inputs/Assumptions ● User is on main screen </b> </div>
                <li>Inputs/Assumptions
                    <li>User is on the main screen</li>
                </li>

                <ul style={{ textAlign: "left" }}>Steps
                    <li>Click on the ‘timeline’ icon</li>
                    <li>Scroll through timeline till rice item is found</li>
                    <li>Click on the rice listing</li>
                    <li>Click on the ‘Edit’ button in the rice information
                        dialog box</li>
                    <li>Enter the correct information in the quantity of rice</li>
                    <li>Click on the ‘Submit’ button once done</li>

                    OR


                </ul>

                <li style={{ textAlign: "left" }}>Instructions for user Task Card 2
                    <li>Will the users know
                        what to do?
                        Yes. The user realized they need to click on the ‘plus’ sign to
                        add a new donation food item. The user understood that
                        clicking on ‘Submit’ in the donation form menu submits the
                        listing for rice.
                    </li>
                    <li>Will the users see how
                        to do it?

                        The user went through the first page easily. But got stuck on
                        the second page. The Expiry input(‘list for’) was not obvious
                        at first glance.
                    </li>
                    <li>Will the user see that
                        progress is being made
                        toward the solution of
                        the task?

                        Yes, the user accesses the donation form upon clicking the
                        ‘plus’ button. Data is being input in a form so users can see
                        text fields being filled.
                    </li>
                </li>

                <li>Walkthrough Comments
                    <li>The ‘List for days’ was unintuitive and
                        unrecognizable. Users were unable to understand
                        the meaning behind the term. Something along the
                        lines of ‘best before’ or ‘expiry’ would be more
                        consistent with the real world</li>
                    <li>The placement and size of ‘Pickup Location’ was not
                        noticeable. Also changing it to ‘Select pickup
                        location’ would allow users to get a better
                        understanding of the action needed to be done</li>
                </li>
                <br />


                <div style={{ textAlign: "left" }}>  <b> Task 3: Finding a specific food item </b> </div>
                <p>
                    You’ve added cereal to your bowl before realizing that you’re out of milk. Instead of
                    going out to buy milk, you want to check and see if anyone in your community
                    happens to be donating some milk. Your task is to search for milk in the application
                    and accept the donation of someone living nearby and notify them once you’ve
                    received the item.
                </p>

                <br />
                2.



                <ul style={{ textAlign: "left" }}>

                    <li><img src={t21} />
                        <img src={t22} />
                        Fig 1 and 2: Main screen interface and New Donation Form
                    </li>


                    <li>
                        <img src={t23} />
                        Fig 3: Accessing Rice item
                        from recent community
                        donations list

                    </li>


                    <li><img src={t31} />
                        Fig 4: Rice donation view Fig 5: Editing quantity of rice
                        in Donation form
                    </li>


                    <li>
                    <img src={t32} />
                        Fig 6: Accessing rice item
                        from timeline
                    </li>


                    <li>
                    <img src={t33} />
                        Fig 7: Rice donation view Fig 8: Editing quantity of rice
                        in Donation for
                    </li>

                </ul>

                <br />

                Instructions for user Task Card 2
                Will the users know
                what to do?
                The users easily figured out the second path to reach the
                status page but struggled to connect the dots between
                timeline & status.
                Will the users see how
                to do it?
                No, For the first path, the users were unable to figure out
                that clicking on the latest item(in green) would take them to
                the corresponding status page.
                Will the user see that
                progress is being made
                toward the solution of
                the task?
                For the overall task, there is no indicator of progress shown.
                But as screens are displayed to the user, they are able to
                recognize options and icons related to the task which allows
                them to proceed in the right direction.
                Walkthrough Comments ● Timeline icon is not intuitive. Users were unable to
                connect icons to the concept of a timeline. A change
                in a more recognizable icon would be better
                ● When editing the item information, the submit button
                should have been replaced with an update button
                ● All users opted to access rice items through the
                recent community donations list
                ● Misconception regarding community donations on
                the main screen as users were under the
                assumption that the main screen showed users' own
                donations. Placing text above listings to indicate
                community donations would be appropriate
                ● Listings in the timeline doesn’t give affordance of
                being clickable. Consider adding an arrow or button
                style layout to allow users to understand that listing
                is explorable
                Fig 9: Searching for milk in
                the search bar in the main
                interface
                Fig 10: Viewing milk item
                information
                Fig 11: Status page of milk
                item listing
                Task 3: Finding specific food item
                Inputs/Assumptions ● User is on main screen
                <ul style={{ textAlign: "left" }}> <h3>Steps </h3>


                    <li> Click on search bar </li>
                    <li> Enter ‘milk’ in search bar  </li>
                    <li> Scroll through milk listings to find appropriate item  </li>
                    <li> Click on milk listing   </li>
                    <li> Views item information   </li>
                    <li> Click ‘Accept’ button once done   </li>
                    <li> View real-time information from the status page and
                        can message donator   </li>
                    <li>  Click on ‘Received’ button once item successfully
                        received  </li>


                </ul>

                <br />
                <h2>Instructions for user Task Card 3 </h2>
                Will the users know what
                to do?
                Yes, The users easily found the search bar to filter food
                items.
                Will the users see how to
                do it?
                Yes, They were able to go through the first 2 screens but
                Struggled to make sense of the received button after
                accepting the food. (You click on the received button to
                notify the donor that you have picked up the food).
                Will the user see that
                progress is being made
                toward the solution of
                the task?
                Yes, the status of the donation item is displayed on the
                page (ongoing/received/canceled)

                <br />

                <h2>Walkthrough Comments  </h2>


                ● Lack of safety when accepting donations.
                Suggestion to add confirmation box before
                proceeding
                ● No cancel option in case user is unable to receive
                food item
                ● Location details can be added in pickup section
                ● Chat icon in the top right corner was not used by
                any users. All users opted to access the message
                icon in the bottom toolbar


                <h2>POTENTIAL CHANGES </h2>
                ● Task 1
                <br />
                ○ We plan on changing the wording of ‘Pickup Location’ to ‘Select pickup location’
                so users would have a better understanding of what is needed to be done.
                Increase the size of text and change placement to a better location
                ● Task 2
                <br />

                <ul style = {{textAlign : "left"}}>
                    
                    <li> Change the timeline icon to something more recognizable </li>
                    <li> Add arrows to timeline listings in the timeline screen to indicate that option is
                explorable </li>
                    <li> Add “Recent Community Donations” text above item listings on the main page to
                indicate community donations. </li>

                </ul>
              
                <br/>
                ● Task 3
                <br />

                <ul style = {{textAlign : "left"}}>

                    <li> Add location details to the acceptance screen </li>
                    <li> Add a cancel button to cancel requests </li>
                    <li> Add a confirmation dialog box to add safety </li>

                </ul>
                <br/>
                INDIVIDUAL CONTRIBUTIONS  <br/>
                <div style = {{textAlign : "left"}}>
           
                Karthik Singh: Screens, Task Cards, Changes  <br/>
                Aditya Ranganathan: Screens, Introduction, Internal Walkthrough
                </div>
               

            </div>
        )
    }
}

