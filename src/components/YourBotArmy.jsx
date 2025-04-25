
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, onRelease, onDischarge}) {
    return (
        <div>
            <h2>Your Bot Army</h2>
            <div className="bot-collection">
                {army.map(bot => (
                    <BotCard 
                    key={bot.id}
                     bot={bot} 
                     onClick={onRelease} 
                     onDischarge={onDischarge}
                     inArmy={true} />
                     
                ))}
            </div>
        </div>
    );
}
export default YourBotArmy;
