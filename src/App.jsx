import React, {useEffect, useState} from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const[bots, setBots] =useState([]);
  const [army, setArmy] =useState([]);

//fetch bots
  useEffect(() => {
    fetch ("http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => setBots(data));
  }, []);

//Add to armylist
  const handleEnlist = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy ([...army, bot]);
    }
  };

//release from army
  const handleRelease = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  //discharge bot
  const handleDischarge = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE", 
    }).then (() => {
      setArmy(army.filter(bot => bot.id !== id));
      setBots(bots.filter(bot => bot.id !== id));
    });
  };


  

  

  return (
    <div className="App">
      <h1>Bot battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      <BotCollection bots={bots} onEnlist={handleEnlist} onDischarge={handleDischarge} />

    </div>
  );
}

export default App;