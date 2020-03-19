
  today = new Date()
    document.write("Adesso sono le ",today.getHours(),":",today.getMinutes(),":",today.getSeconds());
    document.write(", mancano 0 ore",((59)-today.getMinutes())," minuti ",(60-today.getSeconds())," secondi alla fine dell'ora.");
