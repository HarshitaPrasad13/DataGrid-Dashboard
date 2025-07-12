const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const filePath = path.join(__dirname, "/data.json");
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);
    return res.json(data);
  } catch (err) {
    console.error("Failed to read file:", err.message);
    res.status(500).send("Error reading data");
  }
});

app.post("/api/data", (req, res) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const newEntry = { ...req.body };
    data.push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json(newEntry);
  } catch (err) {
    console.error("Failed to save data:", err.message);
    res.status(500).send("Error saving data");
  }
});

app.put("/api/data/:orderNo", (req, res) => {
  try {
    const orderNo = req.params.orderNo;
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const index = data.findIndex((item) => item.ORDER_NO === orderNo);
    if (index === -1) {
      return res.status(404).send("Item not found.");
    }

    data[index] = { ...data[index], ...req.body };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch(err) {
    console.error("Failed to update data:", err.message);
    res.status(500).send("Error updating data");
  }
});

app.delete("/api/data/:orderNo",(req,res)=>{
  try {
    const orderNo = req.params.orderNo;
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const filteredData= data.filter((item) => item.ORDER_NO!=orderNo);
    if (filteredData.length === data.length){
      return res.status(404).send('item not found');
    }
    fs.writeFileSync(filePath, JSON.stringify(filteredData, null, 2));
    res.send("Item deleted successfully");
  } 
  catch (err) {
    console.error("Failed to delete data:", err.message);
    res.status(500).send("Error deleting data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
