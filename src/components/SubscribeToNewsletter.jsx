

import React from "react";

export default function SubscribeToNewsletter({}){

    return(
        <div className="SubscribeToNewsletter">
            <div className="SubscribeToNewsletter__background"></div>
            <div className="SubscribeToNewsletter__form">
                <h3>Subscribe To Newsletter!</h3>
                <input type="email"/>
                <button>Go ahead</button>
                <p> We won't share your email address, we won't spam you and you'll be able to unsubscribe anytime.</p>
            </div>
        </div>
    )
}