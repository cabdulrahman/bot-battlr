
import React from "react";


function BotCard({ bot, onClick, onDischarge, inArmy }) {
  return (
    <div className="bot-card" onClick={() => !inArmy && onClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>CatchPhrase:</strong><br />{bot.catchphrase}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>

      <div className="button-group">
        {inArmy ? (
          <>
            <button
              className="remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                onClick(bot);
              }}
            >
              REMOVE FROM ARMY
            </button>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDischarge(bot.id);
              }}
            >
              DELETE BOT
            </button>
          </>
        ) : (
          <button
            className="add-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClick(bot);
            }}
          >
            ADD TO ARMY
          </button>
        )}
      </div>
    </div>
  );
}

export default BotCard;
