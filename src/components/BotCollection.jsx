import React from "react";
import BotCard from "./BotCard";

function BotCollection ({bots, onEnlist, onDischarge}) {
    return(
        <div>
            <h2>All Bots</h2>
            <div className="bot-collection">
                {bots.map(bot => (
                    <BotCard 
                    key={bot.id} 
                    bot={bot} 
                    onClick={onEnlist} 
                    onDischarge={onDischarge}
                    
                    />
                ))}
            </div>

        </div>
    );
}

export default BotCollection;