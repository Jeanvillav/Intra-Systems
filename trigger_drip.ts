import fetch from "node-fetch";

async function run() {
  console.log("Triggering Cron Job locally...");
  
  try {
    const res = await fetch("http://localhost:3000/api/cron/reminders", {
      method: "POST",
    });
    
    if (res.ok) {
      const data = await res.json();
      console.log("Cron Success:", data);
    } else {
      console.error("Cron Failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Error connecting to server:", err);
  }
}

run();
